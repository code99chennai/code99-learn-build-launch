import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const now = new Date().toISOString();
    console.log(`[${now}] Running scheduled post publisher...`);

    // Find all scheduled posts where scheduled_at has passed
    const { data: scheduledPosts, error: fetchError } = await supabase
      .from("blog_posts")
      .select("id, title, slug, scheduled_at")
      .eq("status", "scheduled")
      .lte("scheduled_at", now);

    if (fetchError) {
      console.error("Error fetching scheduled posts:", fetchError);
      throw fetchError;
    }

    if (!scheduledPosts || scheduledPosts.length === 0) {
      console.log("No scheduled posts to publish");
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "No scheduled posts to publish",
          published_count: 0 
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Found ${scheduledPosts.length} posts to publish:`, scheduledPosts.map(p => p.title));

    // Update each post to published status
    const publishResults = [];
    for (const post of scheduledPosts) {
      const { error: updateError } = await supabase
        .from("blog_posts")
        .update({
          status: "published",
          published_at: now,
          scheduled_at: null,
        })
        .eq("id", post.id);

      if (updateError) {
        console.error(`Failed to publish post "${post.title}":`, updateError);
        publishResults.push({ id: post.id, title: post.title, success: false, error: updateError.message });
      } else {
        console.log(`Successfully published: "${post.title}" (${post.slug})`);
        publishResults.push({ id: post.id, title: post.title, slug: post.slug, success: true });
      }
    }

    const successCount = publishResults.filter(r => r.success).length;
    const failCount = publishResults.filter(r => !r.success).length;

    console.log(`Publishing complete: ${successCount} succeeded, ${failCount} failed`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Published ${successCount} posts`,
        published_count: successCount,
        failed_count: failCount,
        results: publishResults,
        executed_at: now,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in publish-scheduled-posts:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
