import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  Save,
  Search,
  Shield,
  Users,
  Globe,
  Loader2,
  CheckCircle,
  AlertCircle,
  Plus,
  Trash2,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchConsoleSettings {
  id?: string;
  site_url: string;
  verification_code: string;
  is_verified: boolean;
  auto_index_enabled: boolean;
  service_account_key: any;
}

interface UserWithRole {
  user_id: string;
  email: string;
  role: "admin" | "editor" | "user";
}

export default function AdminSettings() {
  const { user, loading, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [settings, setSettings] = useState<SearchConsoleSettings>({
    site_url: "",
    verification_code: "",
    is_verified: false,
    auto_index_enabled: true,
    service_account_key: null,
  });
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [savingSettings, setSavingSettings] = useState(false);
  const [serviceAccountJson, setServiceAccountJson] = useState("");

  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState<"admin" | "editor" | "user">("editor");
  const [addingUser, setAddingUser] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchSettings();
      fetchUsers();
    }
  }, [user, isAdmin]);

  const fetchSettings = async () => {
    const { data, error } = await supabase
      .from("search_console_settings")
      .select("*")
      .maybeSingle();

    if (data) {
      setSettings(data);
      if (data.service_account_key) {
        setServiceAccountJson(JSON.stringify(data.service_account_key, null, 2));
      }
    }
    setLoadingSettings(false);
  };

  const fetchUsers = async () => {
    const { data: roles, error } = await supabase
      .from("user_roles")
      .select("user_id, role");

    if (error) {
      console.error("Error fetching roles:", error);
      setLoadingUsers(false);
      return;
    }

    const { data: profiles } = await supabase
      .from("profiles")
      .select("user_id, email");

    const usersWithRoles: UserWithRole[] = (roles || []).map((role) => {
      const profile = profiles?.find((p) => p.user_id === role.user_id);
      return {
        user_id: role.user_id,
        email: profile?.email || "Unknown",
        role: role.role as "admin" | "editor" | "user",
      };
    });

    setUsers(usersWithRoles);
    setLoadingUsers(false);
  };

  const handleSaveSettings = async () => {
    setSavingSettings(true);

    try {
      let serviceAccountKey = null;
      if (serviceAccountJson.trim()) {
        try {
          serviceAccountKey = JSON.parse(serviceAccountJson);
        } catch {
          toast({
            variant: "destructive",
            title: "Invalid JSON",
            description: "Service account key must be valid JSON",
          });
          setSavingSettings(false);
          return;
        }
      }

      const settingsData = {
        site_url: settings.site_url,
        verification_code: settings.verification_code,
        is_verified: settings.is_verified,
        auto_index_enabled: settings.auto_index_enabled,
        service_account_key: serviceAccountKey,
      };

      let result;
      if (settings.id) {
        result = await supabase
          .from("search_console_settings")
          .update(settingsData)
          .eq("id", settings.id)
          .select()
          .single();
      } else {
        result = await supabase
          .from("search_console_settings")
          .insert(settingsData)
          .select()
          .single();
      }

      if (result.error) throw result.error;

      setSettings(result.data);
      toast({
        title: "Settings Saved",
        description: "Search Console settings have been updated.",
      });
    } catch (err) {
      console.error("Save settings error:", err);
      toast({
        variant: "destructive",
        title: "Save Failed",
        description: err instanceof Error ? err.message : "Failed to save settings",
      });
    } finally {
      setSavingSettings(false);
    }
  };

  const handleAddUser = async () => {
    if (!newUserEmail.trim()) {
      toast({
        variant: "destructive",
        title: "Email Required",
        description: "Please enter a user email",
      });
      return;
    }

    setAddingUser(true);

    try {
      // Find user by email in profiles
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("user_id")
        .eq("email", newUserEmail)
        .maybeSingle();

      if (profileError || !profile) {
        toast({
          variant: "destructive",
          title: "User Not Found",
          description: "No user found with that email. They must sign up first.",
        });
        setAddingUser(false);
        return;
      }

      // Check if role already exists
      const { data: existingRole } = await supabase
        .from("user_roles")
        .select("id")
        .eq("user_id", profile.user_id)
        .maybeSingle();

      if (existingRole) {
        // Update existing role
        await supabase
          .from("user_roles")
          .update({ role: newUserRole })
          .eq("user_id", profile.user_id);
      } else {
        // Insert new role
        await supabase.from("user_roles").insert({
          user_id: profile.user_id,
          role: newUserRole,
        });
      }

      toast({
        title: "Role Updated",
        description: `User has been assigned the ${newUserRole} role.`,
      });

      setNewUserEmail("");
      fetchUsers();
    } catch (err) {
      console.error("Add user error:", err);
      toast({
        variant: "destructive",
        title: "Failed",
        description: err instanceof Error ? err.message : "Failed to update user role",
      });
    } finally {
      setAddingUser(false);
    }
  };

  const handleRemoveRole = async (userId: string) => {
    if (!confirm("Remove this user's role?")) return;

    const { error } = await supabase.from("user_roles").delete().eq("user_id", userId);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to remove role",
      });
    } else {
      toast({
        title: "Role Removed",
        description: "User role has been removed.",
      });
      fetchUsers();
    }
  };

  if (loading || loadingSettings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Admin Only</CardTitle>
            <CardDescription>
              Only administrators can access settings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/admin")} variant="outline" className="w-full">
              Go to Dashboard
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
            <Button variant="ghost" size="icon" asChild>
              <Link to="/admin">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="font-semibold">Admin Settings</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="search-console" className="space-y-6">
          <TabsList>
            <TabsTrigger value="search-console">
              <Search className="h-4 w-4 mr-2" />
              Search Console
            </TabsTrigger>
            <TabsTrigger value="users">
              <Users className="h-4 w-4 mr-2" />
              User Roles
            </TabsTrigger>
          </TabsList>

          {/* Search Console Settings */}
          <TabsContent value="search-console" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Google Search Console Integration
                </CardTitle>
                <CardDescription>
                  Configure automatic indexing for your blog posts. When enabled,
                  new posts will be submitted to Google for indexing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="site_url">Site URL</Label>
                  <Input
                    id="site_url"
                    value={settings.site_url}
                    onChange={(e) =>
                      setSettings((prev) => ({ ...prev, site_url: e.target.value }))
                    }
                    placeholder="https://yoursite.com"
                  />
                  <p className="text-xs text-muted-foreground">
                    The URL of your site as registered in Search Console
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="verification_code">
                    Verification Meta Tag (Optional)
                  </Label>
                  <Input
                    id="verification_code"
                    value={settings.verification_code}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        verification_code: e.target.value,
                      }))
                    }
                    placeholder="google-site-verification=xxxxx"
                  />
                  <p className="text-xs text-muted-foreground">
                    For manual verification. Add this to your site's head tag.
                  </p>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label>Auto-Index on Publish</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically request indexing when posts are published
                    </p>
                  </div>
                  <Switch
                    checked={settings.auto_index_enabled}
                    onCheckedChange={(checked) =>
                      setSettings((prev) => ({ ...prev, auto_index_enabled: checked }))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service_account">
                    Google Service Account Key (JSON)
                  </Label>
                  <Textarea
                    id="service_account"
                    value={serviceAccountJson}
                    onChange={(e) => setServiceAccountJson(e.target.value)}
                    placeholder='{"type": "service_account", "project_id": "...", ...}'
                    rows={10}
                    className="font-mono text-sm"
                  />
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>To set up the Google Indexing API:</p>
                    <ol className="list-decimal ml-4 space-y-1">
                      <li>Go to Google Cloud Console</li>
                      <li>Create a service account with Indexing API access</li>
                      <li>Download the JSON key file</li>
                      <li>Add the service account email as an owner in Search Console</li>
                      <li>Paste the JSON key contents above</li>
                    </ol>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button onClick={handleSaveSettings} disabled={savingSettings}>
                    {savingSettings ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="h-4 w-4 mr-2" />
                    )}
                    Save Settings
                  </Button>
                  {settings.service_account_key && (
                    <Badge variant="outline" className="text-primary">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      API Configured
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Roles */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  User Role Management
                </CardTitle>
                <CardDescription>
                  Manage admin and editor access to the blog management system.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add User Form */}
                <div className="flex gap-4 items-end">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="new-user-email">User Email</Label>
                    <Input
                      id="new-user-email"
                      value={newUserEmail}
                      onChange={(e) => setNewUserEmail(e.target.value)}
                      placeholder="user@example.com"
                    />
                  </div>
                  <div className="w-32 space-y-2">
                    <Label>Role</Label>
                    <Select
                      value={newUserRole}
                      onValueChange={(v) => setNewUserRole(v as any)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={handleAddUser} disabled={addingUser}>
                    {addingUser ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* Users Table */}
                {loadingUsers ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                  </div>
                ) : users.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No users with special roles yet.</p>
                    <p className="text-sm">Add your first admin or editor above.</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((u) => (
                        <TableRow key={u.user_id}>
                          <TableCell>{u.email}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                u.role === "admin"
                                  ? "default"
                                  : u.role === "editor"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {u.role}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveRole(u.user_id)}
                              disabled={u.user_id === user?.id}
                            >
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
