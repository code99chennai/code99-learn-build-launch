import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import {
  Plus,
  FileText,
  Settings,
  LogOut,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Send,
  Loader2,
  Search,
  LayoutDashboard,
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published" | "scheduled";
  views_count: number;
  created_at: string;
  published_at: string | null;
}

export default function Admin() {
  const { user, loading, signOut, isAdmin, isEditor } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [indexingPost, setIndexingPost] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user && isEditor) {
      fetchPosts();
    }
  }, [user, isEditor]);

  const fetchPosts = async () => {
    setLoadingPosts(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, status, views_count, created_at, published_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load posts",
      });
    } else {
      setPosts(data || []);
    }
    setLoadingPosts(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    const { error } = await supabase.from("blog_posts").delete().eq("id", id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete post",
      });
    } else {
      toast({
        title: "Deleted",
        description: "Post deleted successfully",
      });
      fetchPosts();
    }
  };

  const handlePublish = async (id: string) => {
    const { error } = await supabase
      .from("blog_posts")
      .update({
        status: "published",
        published_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to publish post",
      });
    } else {
      toast({
        title: "Published!",
        description: "Post is now live",
      });
      fetchPosts();
    }
  };

  const handleRequestIndexing = async (post: BlogPost) => {
    setIndexingPost(post.id);

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
          description: "Google has been notified about your new content.",
        });
      } else {
        throw new Error(data.error || "Indexing request failed");
      }
    } catch (err) {
      console.error("Indexing error:", err);
      toast({
        variant: "destructive",
        title: "Indexing Failed",
        description: err instanceof Error ? err.message : "Failed to request indexing",
      });
    } finally {
      setIndexingPost(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isEditor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You don't have permission to access the admin panel. Please contact an administrator.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/")} variant="outline" className="w-full">
              Go to Homepage
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-bold text-xl text-primary">
              Code99
            </Link>
            <Badge variant="secondary" className="text-xs">
              Admin
            </Badge>
          </div>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Blog Posts</h1>
            <p className="text-muted-foreground mt-1">
              Manage your blog content with AI-powered creation
            </p>
          </div>
          <Button asChild>
            <Link to="/admin/posts/new">
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Posts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{posts.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Published</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">
                {posts.filter((p) => p.status === "published").length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Drafts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-muted-foreground">
                {posts.filter((p) => p.status === "draft").length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Views</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {posts.reduce((acc, p) => acc + (p.views_count || 0), 0)}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Posts Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              All Posts
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loadingPosts ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
                <p className="text-muted-foreground mb-4">
                  Create your first blog post with AI assistance
                </p>
                <Button asChild>
                  <Link to="/admin/posts/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Post
                  </Link>
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium max-w-xs truncate">
                        {post.title}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            post.status === "published"
                              ? "default"
                              : post.status === "scheduled"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {post.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{post.views_count || 0}</TableCell>
                      <TableCell>
                        {new Date(post.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link to={`/admin/posts/${post.id}`}>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to={`/blog/${post.slug}`} target="_blank">
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </Link>
                            </DropdownMenuItem>
                            {post.status === "draft" && (
                              <DropdownMenuItem onClick={() => handlePublish(post.id)}>
                                <Send className="h-4 w-4 mr-2" />
                                Publish
                              </DropdownMenuItem>
                            )}
                            {post.status === "published" && (
                              <DropdownMenuItem
                                onClick={() => handleRequestIndexing(post)}
                                disabled={indexingPost === post.id}
                              >
                                {indexingPost === post.id ? (
                                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                ) : (
                                  <Search className="h-4 w-4 mr-2" />
                                )}
                                Request Indexing
                              </DropdownMenuItem>
                            )}
                            {isAdmin && (
                              <DropdownMenuItem
                                className="text-destructive"
                                onClick={() => handleDelete(post.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
