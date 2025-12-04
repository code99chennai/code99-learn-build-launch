import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Loader2, Calendar, Eye, ArrowLeft, User, Clock, 
  Share2, BookOpen, CheckCircle2, Award, Building2 
} from "lucide-react";
import { format } from "date-fns";

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

// Calculate reading time (avg 200 words per minute)
const calculateReadingTime = (content: string): number => {
  const text = content.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
  meta_keywords: string[];
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (post?.meta_keywords && post.meta_keywords.length > 0) {
      fetchRelatedPosts(post.id, post.meta_keywords);
    }
  }, [post]);

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

  const fetchRelatedPosts = async (currentPostId: string, keywords: string[]) => {
    // Fetch all published posts except current one
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, excerpt, featured_image, published_at, meta_keywords")
      .eq("status", "published")
      .neq("id", currentPostId)
      .order("published_at", { ascending: false })
      .limit(20);

    if (error || !data) return;

    // Score posts by keyword overlap
    const scoredPosts = data.map((relatedPost) => {
      const postKeywords = relatedPost.meta_keywords || [];
      const matchCount = postKeywords.filter((kw: string) => 
        keywords.some((k) => 
          kw.toLowerCase().includes(k.toLowerCase()) || 
          k.toLowerCase().includes(kw.toLowerCase())
        )
      ).length;
      return { ...relatedPost, score: matchCount };
    });

    // Sort by score and take top 3
    const topRelated = scoredPosts
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .filter((p) => p.score > 0 || scoredPosts.length <= 3);

    // If not enough keyword matches, fill with recent posts
    if (topRelated.length < 3) {
      const remainingPosts = scoredPosts
        .filter((p) => !topRelated.find((tp) => tp.id === p.id))
        .slice(0, 3 - topRelated.length);
      topRelated.push(...remainingPosts);
    }

    setRelatedPosts(topRelated.slice(0, 3));
  };

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-muted/20">
          <div className="text-center space-y-6 px-4">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
              <BookOpen className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Article Not Found</h1>
            <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
              The blog post you're looking for doesn't exist or may have been removed.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Browse All Articles
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
  const readingTime = calculateReadingTime(post.content || '');
  const publishedDate = post.published_at ? new Date(post.published_at) : new Date();

  // Enhanced Article Schema with E-E-A-T signals
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.meta_description || post.excerpt,
    "image": post.featured_image || post.og_image,
    "datePublished": post.published_at,
    "dateModified": post.published_at,
    "author": {
      "@type": "Organization",
      "name": "Code99 IT Academy",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Code99 IT Academy",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "wordCount": post.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0,
    "articleSection": "IT Training & Career Development",
    "keywords": post.meta_keywords?.join(", ") || ""
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${siteUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": postUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{post.meta_title || post.title} | Code99 IT Academy Blog</title>
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
        <meta property="og:site_name" content="Code99 IT Academy" />
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:author" content="Code99 IT Academy" />
        {post.og_image && <meta property="og:image" content={post.og_image} />}
        {post.featured_image && !post.og_image && (
          <meta property="og:image" content={post.featured_image} />
        )}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.og_title || post.title} />
        <meta name="twitter:description" content={post.og_description || post.excerpt} />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        {post.schema_markup && (
          <script type="application/ld+json">
            {JSON.stringify(post.schema_markup)}
          </script>
        )}
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <nav className="bg-muted/30 border-b border-border/50" aria-label="Breadcrumb">
          <div className="container mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
                {post.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section with Featured Image */}
        <header className="relative">
          {post.featured_image && (
            <div className="relative h-72 md:h-[400px] lg:h-[450px] overflow-hidden">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>
          )}
          
          {/* Article Header - Overlapping featured image on larger screens */}
          <div className={`container mx-auto px-4 ${post.featured_image ? '-mt-32 md:-mt-48 relative z-10' : 'pt-12'}`}>
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl bg-card/95 backdrop-blur-sm">
                <CardContent className="p-6 md:p-10 lg:p-12">
                  {/* Back Button */}
                  <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2 text-muted-foreground hover:text-foreground">
                    <Link to="/blog">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Blog
                    </Link>
                  </Button>

                  {/* Article Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight tracking-tight mb-6">
                    {post.title}
                  </h1>

                  {/* Article Meta Information */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-6">
                    {/* Author/Publisher */}
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                        <Building2 className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground block leading-tight">Code99 IT Academy</span>
                        <span className="text-xs">Expert Training Institute</span>
                      </div>
                    </div>

                    <Separator orientation="vertical" className="h-8 hidden sm:block" />

                    {/* Date */}
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.published_at}>
                        {format(publishedDate, "MMMM d, yyyy")}
                      </time>
                    </div>

                    {/* Reading Time */}
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{readingTime} min read</span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-1.5">
                      <Eye className="h-4 w-4" />
                      <span>{post.views_count || 0} views</span>
                    </div>
                  </div>

                  {/* Excerpt/Lead */}
                  {post.excerpt && (
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-serif italic border-l-4 border-primary/30 pl-4">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Share Button */}
                  <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Expert-reviewed content</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleShare}
                      className="rounded-full"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-3xl mx-auto">
            {/* Main Content - Optimized Typography */}
            <div
              className="prose prose-lg md:prose-xl max-w-none
                font-serif
                prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-foreground
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-foreground
                prose-h4:text-lg prose-h4:md:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-foreground
                prose-p:text-foreground/85 prose-p:leading-[1.8] prose-p:mb-6
                prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:my-6 prose-ul:space-y-2
                prose-ol:my-6 prose-ol:space-y-2
                prose-li:text-foreground/85 prose-li:leading-relaxed prose-li:marker:text-primary
                prose-blockquote:border-l-4 prose-blockquote:border-primary/40 prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-foreground/80
                prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
                prose-pre:bg-muted prose-pre:rounded-lg prose-pre:shadow-inner
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                prose-figure:my-10
                prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-muted-foreground prose-figcaption:mt-3
                prose-hr:border-border prose-hr:my-12
                prose-table:border prose-table:border-border prose-table:rounded-lg prose-table:overflow-hidden
                prose-th:bg-muted prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold
                prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-border
                dark:prose-invert
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* E-E-A-T Trust Signals */}
            <aside className="mt-14 p-6 md:p-8 bg-muted/40 rounded-2xl border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">About Code99 IT Academy</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Code99 IT Academy is Chennai's trusted IT training institute with experienced industry professionals. 
                    We provide practical, job-oriented training in Java, Python, Full Stack Development, Digital Marketing, 
                    and UI/UX Design with 100% placement assistance.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="rounded-full">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Industry Experts
                    </Badge>
                    <Badge variant="secondary" className="rounded-full">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Placement Support
                    </Badge>
                    <Badge variant="secondary" className="rounded-full">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Chennai Based
                    </Badge>
                  </div>
                </div>
              </div>
            </aside>

            {/* Related Topics / Tags */}
            {post.meta_keywords?.length > 0 && (
              <section className="mt-12 pt-8 border-t border-border/50">
                <h2 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Related Topics
                </h2>
                <div className="flex flex-wrap gap-2">
                  {post.meta_keywords.map((keyword) => (
                    <Badge 
                      key={keyword} 
                      variant="outline"
                      className="rounded-full px-4 py-1.5 text-sm hover:bg-muted transition-colors cursor-default"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </section>
            )}

            {/* CTA Section */}
            <section className="mt-12 p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Ready to Start Your IT Career?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Join Code99 IT Academy and get industry-ready skills with our practical training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/#courses">Explore Courses</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/#contact">Contact Us</Link>
                </Button>
              </div>
            </section>

            {/* Related Posts Section */}
            {relatedPosts.length > 0 && (
              <section className="mt-14 pt-10 border-t border-border/50">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Related Articles
                </h2>
                <p className="text-muted-foreground mb-8">
                  Continue exploring similar topics that might interest you
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden bg-card">
                        {relatedPost.featured_image && (
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={relatedPost.featured_image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <CardContent className="p-5">
                          <p className="text-xs text-muted-foreground mb-2">
                            {relatedPost.published_at && format(new Date(relatedPost.published_at), "MMM d, yyyy")}
                          </p>
                          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h3>
                          {relatedPost.excerpt && (
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
