import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface IndexRequest {
  action: "submit" | "check_status" | "batch_submit";
  url?: string;
  urls?: string[];
  postId?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { action, url, urls, postId }: IndexRequest = await req.json();
    console.log("Search Console action:", action, { url, urls, postId });

    // Get Search Console settings
    const { data: settings, error: settingsError } = await supabase
      .from("search_console_settings")
      .select("*")
      .single();

    if (settingsError || !settings) {
      return new Response(
        JSON.stringify({ 
          error: "Search Console not configured. Please add your service account credentials.",
          needsSetup: true 
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!settings.service_account_key) {
      return new Response(
        JSON.stringify({ 
          error: "Service account key not configured",
          needsSetup: true 
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate JWT for Google API authentication
    const serviceAccount = settings.service_account_key;
    const accessToken = await getGoogleAccessToken(serviceAccount);

    if (action === "submit" && url) {
      const result = await submitUrlForIndexing(accessToken, settings.site_url, url);
      
      // Log the request
      if (postId) {
        await supabase.from("search_console_requests").insert({
          post_id: postId,
          url: url,
          status: result.success ? "submitted" : "failed",
          submitted_at: new Date().toISOString(),
          response_data: result,
          error_message: result.error || null,
        });
      }

      return new Response(
        JSON.stringify(result),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );

    } else if (action === "batch_submit" && urls?.length) {
      const results = [];
      for (const u of urls) {
        const result = await submitUrlForIndexing(accessToken, settings.site_url, u);
        results.push({ url: u, ...result });
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      return new Response(
        JSON.stringify({ results }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );

    } else if (action === "check_status" && url) {
      const status = await checkIndexingStatus(accessToken, settings.site_url, url);
      return new Response(
        JSON.stringify(status),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Invalid action" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Search Console error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

async function getGoogleAccessToken(serviceAccount: any): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  // Create JWT
  const encoder = new TextEncoder();
  const headerB64 = btoa(JSON.stringify(header)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  const payloadB64 = btoa(JSON.stringify(payload)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  const unsignedToken = `${headerB64}.${payloadB64}`;

  // Sign with RSA
  const privateKey = serviceAccount.private_key;
  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToBuffer(privateKey),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    encoder.encode(unsignedToken)
  );

  const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

  const jwt = `${unsignedToken}.${signatureB64}`;

  // Exchange JWT for access token
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenResponse.json();
  if (!tokenData.access_token) {
    throw new Error("Failed to get access token: " + JSON.stringify(tokenData));
  }

  return tokenData.access_token;
}

function pemToBuffer(pem: string): ArrayBuffer {
  const b64 = pem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");
  const binary = atob(b64);
  const buffer = new ArrayBuffer(binary.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < binary.length; i++) {
    view[i] = binary.charCodeAt(i);
  }
  return buffer;
}

async function submitUrlForIndexing(accessToken: string, siteUrl: string, url: string) {
  try {
    const response = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        type: "URL_UPDATED",
      }),
    });

    const data = await response.json();
    console.log("Index submission response:", data);

    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, error: data.error?.message || "Indexing request failed" };
    }
  } catch (error) {
    console.error("Submit URL error:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

async function checkIndexingStatus(accessToken: string, siteUrl: string, url: string) {
  try {
    const response = await fetch(
      `https://indexing.googleapis.com/v3/urlNotifications/metadata?url=${encodeURIComponent(url)}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();
    return { success: response.ok, data };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
