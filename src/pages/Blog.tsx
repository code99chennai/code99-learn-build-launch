import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Calendar, Eye, ArrowRight } from "lucide-react";

interface BlogPostPreview {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
  views_count: number;
  meta_keywords: string[];
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPostPreview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, excerpt, featured_image, published_at, views_count, meta_keywords")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (!error) {
      setPosts(data || []);
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Blog - Code99 | Tech Articles & Training Insights</title>
        <meta
          name="description"
          content="Read the latest articles on web development, programming, digital marketing, and career tips from Code99 - Chennai's premier IT training institute."
        />
        <meta
          name="keywords"
          content="tech blog, programming tutorials, web development articles, IT training Chennai, coding tips"
        />
        <link rel="canonical" href={`${window.location.origin}/blog`} />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-muted/30">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore articles on programming, web development, digital marketing,
              and career guidance from our expert trainers.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="container mx-auto px-4 py-12">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold mb-2">No Posts Yet</h2>
              <p className="text-muted-foreground">
                Check back soon for new articles!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                    {post.featured_image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        {post.published_at && (
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.published_at).toLocaleDateString()}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.views_count || 0}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {post.meta_keywords?.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.meta_keywords.slice(0, 3).map((keyword) => (
                            <Badge key={keyword} variant="secondary" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
