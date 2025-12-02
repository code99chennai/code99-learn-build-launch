import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  Save,
  Sparkles,
  FileText,
  Search,
  Settings,
  Loader2,
  Upload,
  Send,
  Eye,
  Code,
} from "lucide-react";

interface PostData {
  id?: string;
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
  status: "draft" | "published" | "scheduled";
  published_at: string | null;
  scheduled_at: string | null;
}

const defaultPost: PostData = {
  title: "",
  slug: "",
  content: "",
  excerpt: "",
  featured_image: "",
  meta_title: "",
  meta_description: "",
  meta_keywords: [],
  canonical_url: "",
  og_title: "",
  og_description: "",
  og_image: "",
  schema_markup: null,
  status: "draft",
  published_at: null,
  scheduled_at: null,
};

export default function AdminPostEditor() {
  const { id } = useParams();
  const isNew = id === "new";
  const navigate = useNavigate();
  const { user, loading, isEditor } = useAuth();
  const { toast } = useToast();

  const [post, setPost] = useState<PostData>(defaultPost);
  const [loadingPost, setLoadingPost] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [generatingSeo, setGeneratingSeo] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [contextFile, setContextFile] = useState("");
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!isNew && id) {
      fetchPost(id);
    }
  }, [id, isNew]);

  const fetchPost = async (postId: string) => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("id", postId)
      .single();

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load post",
      });
      navigate("/admin");
    } else {
      setPost({
        ...data,
        meta_keywords: data.meta_keywords || [],
      });
    }
    setLoadingPost(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setPost((prev) => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  };

  const handleGenerateContent = async () => {
    if (!aiPrompt.trim()) {
      toast({
        variant: "destructive",
        title: "Enter a topic",
        description: "Please provide a topic or prompt for AI generation",
      });
      return;
    }

    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-blog-content", {
        body: {
          type: "generate",
          topic: aiPrompt,
          contextFile: contextFile || undefined,
          keywords: keywords ? keywords.split(",").map((k) => k.trim()) : undefined,
        },
      });

      if (error) throw error;

      if (data.error) {
        throw new Error(data.error);
      }

      setPost((prev) => ({
        ...prev,
        content: data.result,
        title: prev.title || aiPrompt,
        slug: prev.slug || generateSlug(aiPrompt),
      }));

      toast({
        title: "Content Generated!",
        description: "AI has created your blog post. Review and edit as needed.",
      });
    } catch (err) {
      console.error("Generation error:", err);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: err instanceof Error ? err.message : "Failed to generate content",
      });
    } finally {
      setGenerating(false);
    }
  };

  const handleGenerateSeo = async () => {
    if (!post.content || !post.title) {
      toast({
        variant: "destructive",
        title: "Content Required",
        description: "Please add content and title before generating SEO",
      });
      return;
    }

    setGeneratingSeo(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-blog-content", {
        body: {
          type: "seo",
          topic: post.title,
          content: post.content,
        },
      });

      if (error) throw error;

      if (data.error) {
        throw new Error(data.error);
      }

      const seoData = data.result;
      setPost((prev) => ({
        ...prev,
        meta_title: seoData.meta_title || prev.meta_title,
        meta_description: seoData.meta_description || prev.meta_description,
        meta_keywords: seoData.meta_keywords || prev.meta_keywords,
        og_title: seoData.og_title || prev.og_title,
        og_description: seoData.og_description || prev.og_description,
        schema_markup: seoData.schema_markup || prev.schema_markup,
      }));

      toast({
        title: "SEO Generated!",
        description: "Meta tags and schema markup have been optimized.",
      });
    } catch (err) {
      console.error("SEO generation error:", err);
      toast({
        variant: "destructive",
        title: "SEO Generation Failed",
        description: err instanceof Error ? err.message : "Failed to generate SEO",
      });
    } finally {
      setGeneratingSeo(false);
    }
  };

  const handleSave = async (publish = false) => {
    if (!post.title || !post.slug) {
      toast({
        variant: "destructive",
        title: "Required Fields",
        description: "Please fill in title and slug",
      });
      return;
    }

    setSaving(true);
    try {
      const postData = {
        ...post,
        author_id: user?.id,
        status: publish ? "published" : post.status,
        published_at: publish ? new Date().toISOString() : post.published_at,
      };

      let result;
      if (isNew) {
        result = await supabase.from("blog_posts").insert(postData).select().single();
      } else {
        result = await supabase
          .from("blog_posts")
          .update(postData)
          .eq("id", id)
          .select()
          .single();
      }

      if (result.error) throw result.error;

      toast({
        title: publish ? "Published!" : "Saved!",
        description: publish
          ? "Your post is now live"
          : "Changes saved successfully",
      });

      if (isNew) {
        navigate(`/admin/posts/${result.data.id}`);
      } else {
        setPost(result.data);
      }
    } catch (err) {
      console.error("Save error:", err);
      toast({
        variant: "destructive",
        title: "Save Failed",
        description: err instanceof Error ? err.message : "Failed to save post",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleRequestIndexing = async () => {
    if (post.status !== "published") {
      toast({
        variant: "destructive",
        title: "Publish First",
        description: "Please publish the post before requesting indexing",
      });
      return;
    }

    try {
      const siteUrl = window.location.origin;
      const postUrl = `${siteUrl}/blog/${post.slug}`;

      const { data, error } = await supabase.functions.invoke("search-console-index", {
        body: {
          action: "submit",
          url: postUrl,
          postId: post.id,
        },
      });

      if (error) throw error;

      if (data.needsSetup) {
        toast({
          title: "Setup Required",
          description: "Please configure Search Console in settings first.",
        });
        navigate("/admin/settings");
      } else if (data.success) {
        toast({
          title: "Index Request Sent",
          description: "Google has been notified about your content.",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      console.error("Indexing error:", err);
      toast({
        variant: "destructive",
        title: "Indexing Failed",
        description: err instanceof Error ? err.message : "Failed to request indexing",
      });
    }
  };

  if (loading || loadingPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isEditor) {
    navigate("/admin");
    return null;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/admin">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="font-semibold">{isNew ? "New Post" : "Edit Post"}</h1>
              <Badge variant={post.status === "published" ? "default" : "outline"}>
                {post.status}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {post.status === "published" && !isNew && (
              <Button variant="outline" size="sm" onClick={handleRequestIndexing}>
                <Search className="h-4 w-4 mr-2" />
                Request Indexing
              </Button>
            )}
            {!isNew && post.slug && (
              <Button variant="outline" size="sm" asChild>
                <Link to={`/blog/${post.slug}`} target="_blank">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Link>
              </Button>
            )}
            <Button variant="outline" onClick={() => handleSave(false)} disabled={saving}>
              {saving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
              Save Draft
            </Button>
            <Button onClick={() => handleSave(true)} disabled={saving}>
              {saving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Send className="h-4 w-4 mr-2" />}
              Publish
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList>
            <TabsTrigger value="content">
              <FileText className="h-4 w-4 mr-2" />
              Content
            </TabsTrigger>
            <TabsTrigger value="ai">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Generate
            </TabsTrigger>
            <TabsTrigger value="seo">
              <Search className="h-4 w-4 mr-2" />
              SEO
            </TabsTrigger>
            <TabsTrigger value="schema">
              <Code className="h-4 w-4 mr-2" />
              Schema
            </TabsTrigger>
          </TabsList>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Post Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={post.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Enter post title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug *</Label>
                    <Input
                      id="slug"
                      value={post.slug}
                      onChange={(e) => setPost((prev) => ({ ...prev, slug: e.target.value }))}
                      placeholder="post-url-slug"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={post.excerpt}
                    onChange={(e) => setPost((prev) => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Brief description of the post"
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="featured_image">Featured Image URL</Label>
                  <Input
                    id="featured_image"
                    value={post.featured_image}
                    onChange={(e) => setPost((prev) => ({ ...prev, featured_image: e.target.value }))}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content (HTML)</Label>
                  <Textarea
                    id="content"
                    value={post.content}
                    onChange={(e) => setPost((prev) => ({ ...prev, content: e.target.value }))}
                    placeholder="<h2>Introduction</h2><p>Your content here...</p>"
                    rows={20}
                    className="font-mono text-sm"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Generate Tab */}
          <TabsContent value="ai" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  AI Content Generation
                </CardTitle>
                <CardDescription>
                  Generate blog content using AI. Provide a topic and optional context.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ai-prompt">Topic / Prompt *</Label>
                  <Textarea
                    id="ai-prompt"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="e.g., Complete guide to Java programming for beginners with practical examples"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="context-file">
                    Context / Reference Material (Optional)
                  </Label>
                  <Textarea
                    id="context-file"
                    value={contextFile}
                    onChange={(e) => setContextFile(e.target.value)}
                    placeholder="Paste any reference content, notes, or context that should inform the article..."
                    rows={6}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keywords">Target Keywords (comma-separated)</Label>
                  <Input
                    id="keywords"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="java training chennai, learn java, programming course"
                  />
                </div>
                <Button
                  onClick={handleGenerateContent}
                  disabled={generating || !aiPrompt.trim()}
                  className="w-full"
                >
                  {generating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating Content...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Content with AI
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Tab */}
          <TabsContent value="seo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    SEO Settings
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleGenerateSeo}
                    disabled={generatingSeo || !post.content}
                  >
                    {generatingSeo ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Sparkles className="h-4 w-4 mr-2" />
                    )}
                    Auto-Generate SEO
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="meta_title">
                      Meta Title{" "}
                      <span className="text-muted-foreground text-xs">
                        ({post.meta_title?.length || 0}/60)
                      </span>
                    </Label>
                    <Input
                      id="meta_title"
                      value={post.meta_title}
                      onChange={(e) =>
                        setPost((prev) => ({ ...prev, meta_title: e.target.value }))
                      }
                      placeholder="SEO optimized title"
                      maxLength={60}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="canonical_url">Canonical URL</Label>
                    <Input
                      id="canonical_url"
                      value={post.canonical_url}
                      onChange={(e) =>
                        setPost((prev) => ({ ...prev, canonical_url: e.target.value }))
                      }
                      placeholder="https://example.com/blog/post-slug"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta_description">
                    Meta Description{" "}
                    <span className="text-muted-foreground text-xs">
                      ({post.meta_description?.length || 0}/160)
                    </span>
                  </Label>
                  <Textarea
                    id="meta_description"
                    value={post.meta_description}
                    onChange={(e) =>
                      setPost((prev) => ({ ...prev, meta_description: e.target.value }))
                    }
                    placeholder="Brief description for search results"
                    maxLength={160}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta_keywords">Keywords (comma-separated)</Label>
                  <Input
                    id="meta_keywords"
                    value={post.meta_keywords?.join(", ") || ""}
                    onChange={(e) =>
                      setPost((prev) => ({
                        ...prev,
                        meta_keywords: e.target.value.split(",").map((k) => k.trim()),
                      }))
                    }
                    placeholder="keyword1, keyword2, keyword3"
                  />
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="font-medium mb-4">Open Graph (Social Sharing)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="og_title">OG Title</Label>
                      <Input
                        id="og_title"
                        value={post.og_title}
                        onChange={(e) =>
                          setPost((prev) => ({ ...prev, og_title: e.target.value }))
                        }
                        placeholder="Title for social sharing"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="og_image">OG Image URL</Label>
                      <Input
                        id="og_image"
                        value={post.og_image}
                        onChange={(e) =>
                          setPost((prev) => ({ ...prev, og_image: e.target.value }))
                        }
                        placeholder="https://example.com/og-image.jpg"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="og_description">OG Description</Label>
                    <Textarea
                      id="og_description"
                      value={post.og_description}
                      onChange={(e) =>
                        setPost((prev) => ({ ...prev, og_description: e.target.value }))
                      }
                      placeholder="Description for social sharing"
                      rows={2}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schema Tab */}
          <TabsContent value="schema" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Schema Markup (JSON-LD)
                </CardTitle>
                <CardDescription>
                  Structured data for rich search results. Auto-generated when you use "Auto-Generate SEO".
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={
                    post.schema_markup
                      ? JSON.stringify(post.schema_markup, null, 2)
                      : ""
                  }
                  onChange={(e) => {
                    try {
                      const parsed = e.target.value ? JSON.parse(e.target.value) : null;
                      setPost((prev) => ({ ...prev, schema_markup: parsed }));
                    } catch {
                      // Invalid JSON, keep current value
                    }
                  }}
                  placeholder='{"@context": "https://schema.org", "@type": "Article", ...}'
                  rows={15}
                  className="font-mono text-sm"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
