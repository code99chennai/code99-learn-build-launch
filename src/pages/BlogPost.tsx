import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, Calendar, Eye, ArrowLeft, User } from "lucide-react";

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string[];
  canonical_url: string;
  og_title: string;
  og_description: string;
  og_image: string;
  schema_markup: any;
  status: string;
  published_at: string;
  views_count: number;
  author_id: string;
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  const fetchPost = async (postSlug: string) => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", postSlug)
      .eq("status", "published")
      .maybeSingle();

    if (error || !data) {
      setNotFound(true);
    } else {
      setPost(data);
      // Increment view count
      await supabase
        .from("blog_posts")
        .update({ views_count: (data.views_count || 0) + 1 })
        .eq("id", data.id);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-muted/30">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Post Not Found</h1>
            <p className="text-muted-foreground">
              The blog post you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const siteUrl = window.location.origin;
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.meta_title || post.title}</title>
        <meta name="description" content={post.meta_description || post.excerpt} />
        {post.meta_keywords?.length > 0 && (
          <meta name="keywords" content={post.meta_keywords.join(", ")} />
        )}
        <link rel="canonical" href={post.canonical_url || postUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={post.og_title || post.title} />
        <meta property="og:description" content={post.og_description || post.excerpt} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="article" />
        {post.og_image && <meta property="og:image" content={post.og_image} />}
        {post.featured_image && !post.og_image && (
          <meta property="og:image" content={post.featured_image} />
        )}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.og_title || post.title} />
        <meta name="twitter:description" content={post.og_description || post.excerpt} />

        {/* Schema Markup */}
        {post.schema_markup && (
          <script type="application/ld+json">
            {JSON.stringify(post.schema_markup)}
          </script>
        )}
      </Helmet>

      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        {post.featured_image && (
          <div className="relative h-64 md:h-96 bg-muted">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        )}

        {/* Content */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              {post.published_at && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{post.views_count || 0} views</span>
              </div>
            </div>

            {post.excerpt && (
              <p className="text-lg text-muted-foreground mt-4 italic">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none dark:prose-invert
              prose-headings:text-foreground
              prose-p:text-foreground/90
              prose-a:text-primary hover:prose-a:text-primary/80
              prose-strong:text-foreground
              prose-ul:text-foreground/90
              prose-ol:text-foreground/90
              prose-li:text-foreground/90
              prose-blockquote:text-muted-foreground
              prose-code:text-primary
              prose-pre:bg-muted
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.meta_keywords?.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="font-semibold mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {post.meta_keywords.map((keyword) => (
                  <Badge key={keyword} variant="secondary">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
