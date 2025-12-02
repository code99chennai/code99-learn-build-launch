import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface GenerateRequest {
  type: "generate" | "seo" | "improve";
  topic?: string;
  content?: string;
  contextFile?: string;
  keywords?: string[];
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const { type, topic, content, contextFile, keywords }: GenerateRequest = await req.json();
    console.log("Generate request:", { type, topic, hasContent: !!content, hasContext: !!contextFile });

    let systemPrompt = "";
    let userPrompt = "";

    if (type === "generate") {
      systemPrompt = `You are an expert blog content writer and SEO specialist. Create engaging, well-structured blog posts that are optimized for search engines and provide real value to readers.

Your content should:
- Be comprehensive and informative (1500-2500 words)
- Use proper HTML formatting with h2, h3 headings, paragraphs, lists
- Include relevant examples and practical tips
- Be written in a professional yet conversational tone
- Naturally incorporate SEO keywords without keyword stuffing

Return the content as valid HTML that can be directly used in a blog post.`;

      userPrompt = `Write a comprehensive blog post about: ${topic}

${contextFile ? `Use this context/reference material to inform your writing:\n${contextFile}\n` : ""}
${keywords?.length ? `Target keywords to naturally include: ${keywords.join(", ")}` : ""}

Structure the post with:
1. An engaging introduction
2. Clear sections with H2 and H3 headings
3. Practical tips or actionable insights
4. A compelling conclusion

Return only the HTML content for the blog post body.`;

    } else if (type === "seo") {
      systemPrompt = `You are an SEO expert. Analyze content and generate optimized meta tags, descriptions, and schema markup for maximum search engine visibility.

Always return a JSON object with these exact fields:
- meta_title: SEO title under 60 characters, include main keyword
- meta_description: Description under 160 characters with target keyword
- meta_keywords: Array of 5-8 relevant keywords
- og_title: Open Graph title for social sharing
- og_description: Open Graph description for social sharing
- schema_markup: JSON-LD Article schema object`;

      userPrompt = `Analyze this blog post content and generate complete SEO metadata:

Title: ${topic}

Content:
${content?.substring(0, 3000)}

Return a JSON object with: meta_title, meta_description, meta_keywords (array), og_title, og_description, and schema_markup (as JSON-LD Article object).`;

    } else if (type === "improve") {
      systemPrompt = `You are an expert content editor. Improve the given content for better readability, engagement, and SEO without changing the core message.`;

      userPrompt = `Improve this blog content for better engagement and SEO:

${content}

Return the improved HTML content.`;
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Usage limit reached. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    let result = data.choices?.[0]?.message?.content || "";

    // Parse JSON for SEO type
    if (type === "seo") {
      try {
        // Extract JSON from markdown code blocks if present
        const jsonMatch = result.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (jsonMatch) {
          result = JSON.parse(jsonMatch[1].trim());
        } else {
          result = JSON.parse(result);
        }
      } catch (e) {
        console.error("Failed to parse SEO JSON:", e);
        throw new Error("Failed to generate SEO metadata");
      }
    }

    console.log("Generated content successfully");
    return new Response(
      JSON.stringify({ result }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in generate-blog-content:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
