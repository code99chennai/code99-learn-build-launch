import { useEffect, useState, useRef, useMemo } from "react";
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
  Loader2, Calendar, Eye, ArrowLeft, Clock, Share2, BookOpen, 
  CheckCircle2, Award, Building2, Link2, Facebook, Twitter, 
  Linkedin, MessageCircle, ChevronRight, List, Star, Users,
  GraduationCap, Briefcase, ThumbsUp, Copy, Check, ArrowUp
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

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

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
  meta_keywords: string[];
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

// Calculate reading time (avg 200 words per minute)
const calculateReadingTime = (content: string): number => {
  const text = content.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

// Extract headings for Table of Contents
const extractHeadings = (content: string): TOCItem[] => {
  const headingRegex = /<h([2-3])[^>]*(?:id="([^"]*)")?[^>]*>(.*?)<\/h\1>/gi;
  const headings: TOCItem[] = [];
  let match;
  let index = 0;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1]);
    const existingId = match[2];
    const text = match[3].replace(/<[^>]*>/g, '').trim();
    const id = existingId || `heading-${index}`;
    headings.push({ id, text, level });
    index++;
  }
  
  return headings;
};

// Add IDs to headings in content
const addHeadingIds = (content: string): string => {
  let index = 0;
  return content.replace(/<h([2-3])([^>]*)>(.*?)<\/h\1>/gi, (match, level, attrs, text) => {
    if (attrs.includes('id="')) return match;
    const id = `heading-${index++}`;
    return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
  });
};

// Extract key points from content
const extractKeyPoints = (content: string): string[] => {
  const points: string[] = [];
  const listItemRegex = /<li[^>]*>(.*?)<\/li>/gi;
  let match;
  let count = 0;
  
  while ((match = listItemRegex.exec(content)) !== null && count < 5) {
    const text = match[1].replace(/<[^>]*>/g, '').trim();
    if (text.length > 20 && text.length < 150) {
      points.push(text);
      count++;
    }
  }
  
  return points;
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [showTOC, setShowTOC] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  // Extract TOC and key points
  const tableOfContents = useMemo(() => 
    post?.content ? extractHeadings(post.content) : [], [post?.content]
  );
  
  const keyPoints = useMemo(() => 
    post?.content ? extractKeyPoints(post.content) : [], [post?.content]
  );

  const processedContent = useMemo(() => 
    post?.content ? addHeadingIds(post.content) : '', [post?.content]
  );

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return;
      
      const element = articleRef.current;
      const totalHeight = element.scrollHeight - element.offsetHeight;
      const windowScrollTop = window.scrollY - element.offsetTop + window.innerHeight / 2;
      const progress = Math.min(100, Math.max(0, (windowScrollTop / totalHeight) * 100));
      setReadingProgress(progress);

      // Track active heading
      const headings = element.querySelectorAll('h2, h3');
      let currentHeading = '';
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top < 150) {
          currentHeading = heading.id;
        }
      });
      setActiveHeading(currentHeading);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

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
      await supabase
        .from("blog_posts")
        .update({ views_count: (data.views_count || 0) + 1 })
        .eq("id", data.id);
    }
    setLoading(false);
  };

  const fetchRelatedPosts = async (currentPostId: string, keywords: string[]) => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, excerpt, featured_image, published_at, meta_keywords")
      .eq("status", "published")
      .neq("id", currentPostId)
      .order("published_at", { ascending: false })
      .limit(20);

    if (error || !data) return;

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

    const topRelated = scoredPosts
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .filter((p) => p.score > 0 || scoredPosts.length <= 3);

    if (topRelated.length < 3) {
      const remainingPosts = scoredPosts
        .filter((p) => !topRelated.find((tp) => tp.id === p.id))
        .slice(0, 3 - topRelated.length);
      topRelated.push(...remainingPosts);
    }

    setRelatedPosts(topRelated.slice(0, 3));
  };

  const handleShare = async (platform?: string) => {
    const url = window.location.href;
    const title = post?.title || '';
    
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    };

    if (platform && shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    } else if (navigator.share && post) {
      try {
        await navigator.share({ title, text: post.excerpt, url });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setShowTOC(false);
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

  const siteUrl = "https://code99-it-academy.42web.io";
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const readingTime = calculateReadingTime(post.content || '');
  const publishedDate = post.published_at ? new Date(post.published_at) : new Date();
  const wordCount = post.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0;

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
      "logo": `${siteUrl}/logo.png`,
      "sameAs": [
        "https://www.facebook.com/code99academy",
        "https://www.linkedin.com/company/code99-it-academy",
        "https://twitter.com/code99academy"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Code99 IT Academy",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`,
        "width": 200,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "wordCount": wordCount,
    "articleSection": "IT Training & Career Development",
    "keywords": post.meta_keywords?.join(", ") || "",
    "inLanguage": "en-IN",
    "isAccessibleForFree": true,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["article h1", "article h2", ".article-excerpt"]
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteUrl}/blog` },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": postUrl }
    ]
  };

  // Organization Schema for E-E-A-T
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Code99 IT Academy",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Premier IT training institute in Chennai offering Java, Python, Full Stack, Digital Marketing, and UI/UX courses with 100% placement assistance.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "areaServed": "Chennai",
    "sameAs": [
      "https://www.facebook.com/code99academy",
      "https://www.linkedin.com/company/code99-it-academy"
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
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Code99 IT Academy" />
        <meta name="publisher" content="Code99 IT Academy" />

        {/* Open Graph */}
        <meta property="og:title" content={post.og_title || post.title} />
        <meta property="og:description" content={post.og_description || post.excerpt} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Code99 IT Academy" />
        <meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:modified_time" content={post.published_at} />
        <meta property="article:author" content="Code99 IT Academy" />
        <meta property="article:section" content="IT Training" />
        {post.meta_keywords?.slice(0, 5).map((tag, i) => (
          <meta key={i} property="article:tag" content={tag} />
        ))}
        {(post.og_image || post.featured_image) && (
          <meta property="og:image" content={post.og_image || post.featured_image} />
        )}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@code99academy" />
        <meta name="twitter:creator" content="@code99academy" />
        <meta name="twitter:title" content={post.og_title || post.title} />
        <meta name="twitter:description" content={post.og_description || post.excerpt} />
        {(post.og_image || post.featured_image) && (
          <meta name="twitter:image" content={post.og_image || post.featured_image} />
        )}

        {/* Schema Markup */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        {post.schema_markup && (
          <script type="application/ld+json">{JSON.stringify(post.schema_markup)}</script>
        )}
      </Helmet>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <nav className="bg-muted/30 border-b border-border/50" aria-label="Breadcrumb">
          <div className="container mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item" className="hover:text-primary transition-colors">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <ChevronRight className="h-4 w-4" />
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/blog" itemProp="item" className="hover:text-primary transition-colors">
                  <span itemProp="name">Blog</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <ChevronRight className="h-4 w-4" />
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
                <span itemProp="name">{post.title}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2 text-muted-foreground hover:text-foreground">
                <Link to="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>

              {/* Article Title - H1 for SEO */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                {post.title}
              </h1>

              {/* Article Meta - E-E-A-T Signals */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block leading-tight">Code99 IT Academy</span>
                    <span className="text-xs flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      Verified Expert
                    </span>
                  </div>
                </div>

                <Separator orientation="vertical" className="h-8 hidden sm:block" />

                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.published_at}>{format(publishedDate, "MMMM d, yyyy")}</time>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{readingTime} min read</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  <span>{(post.views_count || 0).toLocaleString()} views</span>
                </div>
              </div>

              {/* Excerpt - Lead paragraph */}
              {post.excerpt && (
                <p className="article-excerpt text-lg md:text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-4 bg-muted/30 py-3 pr-4 rounded-r-lg">
                  {post.excerpt}
                </p>
              )}

              {/* Featured Image */}
              {post.featured_image && (
                <figure className="mt-8 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-auto object-cover aspect-video"
                    loading="eager"
                  />
                </figure>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Area with Sidebar */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 xl:gap-12">
            
            {/* Article Content */}
            <article ref={articleRef} className="min-w-0">
              {/* Key Takeaways - LLMO Optimization */}
              {keyPoints.length > 0 && (
                <div className="mb-10 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                  <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Key Takeaways
                  </h2>
                  <ul className="space-y-3">
                    {keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/90">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Mobile TOC Toggle */}
              <div className="lg:hidden mb-6">
                <Button 
                  variant="outline" 
                  className="w-full justify-between"
                  onClick={() => setShowTOC(!showTOC)}
                >
                  <span className="flex items-center gap-2">
                    <List className="h-4 w-4" />
                    Table of Contents
                  </span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${showTOC ? 'rotate-90' : ''}`} />
                </Button>
                
                {showTOC && tableOfContents.length > 0 && (
                  <nav className="mt-4 p-4 bg-muted/50 rounded-xl border border-border/50">
                    <ul className="space-y-2">
                      {tableOfContents.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollToHeading(item.id)}
                            className={`text-left w-full px-3 py-2 rounded-lg transition-colors text-sm ${
                              item.level === 3 ? 'ml-4' : ''
                            } ${
                              activeHeading === item.id 
                                ? 'bg-primary/10 text-primary font-medium' 
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                          >
                            {item.text}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>

              {/* Main Content */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-24
                  prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-foreground prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-3
                  prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-foreground
                  prose-h4:text-lg prose-h4:md:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-foreground
                  prose-p:text-foreground/85 prose-p:leading-[1.85] prose-p:mb-6
                  prose-a:text-primary prose-a:font-medium prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary/80
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ul:my-6 prose-ul:space-y-2
                  prose-ol:my-6 prose-ol:space-y-2
                  prose-li:text-foreground/85 prose-li:leading-relaxed prose-li:marker:text-primary
                  prose-blockquote:border-l-4 prose-blockquote:border-primary/40 prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-foreground/80 prose-blockquote:my-8
                  prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-muted prose-pre:rounded-xl prose-pre:shadow-inner prose-pre:border prose-pre:border-border/50
                  prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                  prose-figure:my-10
                  prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-muted-foreground prose-figcaption:mt-3
                  prose-hr:border-border prose-hr:my-12
                  prose-table:border prose-table:border-border prose-table:rounded-lg prose-table:overflow-hidden
                  prose-th:bg-muted prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold
                  prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-border
                  dark:prose-invert
                "
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* Share Section */}
              <div className="mt-12 p-6 bg-muted/40 rounded-2xl border border-border/50">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-primary" />
                  Share this article
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" onClick={() => handleShare('facebook')} className="rounded-full">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare('twitter')} className="rounded-full">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')} className="rounded-full">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleShare('whatsapp')} className="rounded-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="sm" onClick={copyLink} className="rounded-full">
                    {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                    {copied ? 'Copied!' : 'Copy Link'}
                  </Button>
                </div>
              </div>

              {/* E-E-A-T Author/Organization Box */}
              <aside className="mt-10 p-6 md:p-8 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl border border-border/50">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-foreground text-xl">Code99 IT Academy</h3>
                      <Badge variant="default" className="rounded-full text-xs">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Chennai's premier IT training institute with 5+ years of experience. Our industry expert trainers 
                      have trained 10,000+ students with 95% placement success rate in top companies like TCS, Infosys, 
                      Wipro, Zoho, and more.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-background/50 rounded-xl">
                        <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                        <div className="font-bold text-foreground">10,000+</div>
                        <div className="text-xs text-muted-foreground">Students Trained</div>
                      </div>
                      <div className="text-center p-3 bg-background/50 rounded-xl">
                        <GraduationCap className="h-5 w-5 text-primary mx-auto mb-1" />
                        <div className="font-bold text-foreground">95%</div>
                        <div className="text-xs text-muted-foreground">Placement Rate</div>
                      </div>
                      <div className="text-center p-3 bg-background/50 rounded-xl">
                        <Briefcase className="h-5 w-5 text-primary mx-auto mb-1" />
                        <div className="font-bold text-foreground">500+</div>
                        <div className="text-xs text-muted-foreground">Hiring Partners</div>
                      </div>
                      <div className="text-center p-3 bg-background/50 rounded-xl">
                        <Star className="h-5 w-5 text-primary mx-auto mb-1" />
                        <div className="font-bold text-foreground">4.9/5</div>
                        <div className="text-xs text-muted-foreground">Student Rating</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="rounded-full">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Industry Experts
                      </Badge>
                      <Badge variant="secondary" className="rounded-full">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        100% Placement Support
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
                <section className="mt-10 pt-8 border-t border-border/50">
                  <h2 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Related Topics
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {post.meta_keywords.map((keyword) => (
                      <Link 
                        key={keyword} 
                        to={`/blog?search=${encodeURIComponent(keyword)}`}
                        className="inline-block"
                      >
                        <Badge 
                          variant="outline"
                          className="rounded-full px-4 py-1.5 text-sm hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-pointer"
                        >
                          {keyword}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA Section */}
              <section className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    Ready to Start Your IT Career in Chennai?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    Join 10,000+ successful students. Get industry-ready skills with practical training and 100% placement assistance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild size="lg" className="rounded-full">
                      <Link to="/courses">Explore Courses</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
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
                      <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                        <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden bg-card">
                          {relatedPost.featured_image && (
                            <div className="aspect-video overflow-hidden">
                              <img
                                src={relatedPost.featured_image}
                                alt={relatedPost.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <CardContent className="p-5">
                            <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
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
            </article>

            {/* Sidebar - Desktop Only */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                {tableOfContents.length > 0 && (
                  <Card className="border-border/50">
                    <CardContent className="p-5">
                      <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <List className="h-4 w-4 text-primary" />
                        Table of Contents
                      </h3>
                      <nav>
                        <ul className="space-y-1">
                          {tableOfContents.map((item) => (
                            <li key={item.id}>
                              <button
                                onClick={() => scrollToHeading(item.id)}
                                className={`text-left w-full px-3 py-2 rounded-lg transition-colors text-sm leading-snug ${
                                  item.level === 3 ? 'ml-3 text-xs' : ''
                                } ${
                                  activeHeading === item.id 
                                    ? 'bg-primary/10 text-primary font-medium' 
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                }`}
                              >
                                {item.text}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </CardContent>
                  </Card>
                )}

                {/* Quick Share */}
                <Card className="border-border/50">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Share2 className="h-4 w-4 text-primary" />
                      Share Article
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleShare('facebook')} className="rounded-lg">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleShare('twitter')} className="rounded-lg">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')} className="rounded-lg">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={copyLink} className="rounded-lg">
                        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Article Stats */}
                <Card className="border-border/50 bg-muted/30">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-foreground mb-4">Article Info</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Reading time</span>
                        <span className="text-foreground font-medium">{readingTime} min</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Word count</span>
                        <span className="text-foreground font-medium">{wordCount.toLocaleString()}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Views</span>
                        <span className="text-foreground font-medium">{(post.views_count || 0).toLocaleString()}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Published</span>
                        <span className="text-foreground font-medium">{format(publishedDate, "MMM d, yyyy")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick CTA */}
                <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-5 text-center">
                    <GraduationCap className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-foreground mb-2">Start Learning Today</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Join our expert-led courses
                    </p>
                    <Button asChild className="w-full rounded-full" size="sm">
                      <Link to="/courses">View Courses</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Scroll to Top */}
                <Button 
                  variant="outline" 
                  className="w-full rounded-full"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <ArrowUp className="h-4 w-4 mr-2" />
                  Back to Top
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
