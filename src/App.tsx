import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import PlacementPage from "./pages/PlacementPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import JavaTrainingChennai from "./pages/JavaTrainingChennai";
import FullStackWebDevelopmentChennai from "./pages/FullStackWebDevelopmentChennai";
import DigitalMarketingChennai from "./pages/DigitalMarketingChennai";
import PythonTrainingChennai from "./pages/PythonTrainingChennai";
import UiUxTrainingChennai from "./pages/UiUxTrainingChennai";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import AdminPostEditor from "./pages/AdminPostEditor";
import AdminSettings from "./pages/AdminSettings";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/placement" element={<PlacementPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/java-training-chennai" element={<JavaTrainingChennai />} />
            <Route path="/full-stack-web-development-chennai" element={<FullStackWebDevelopmentChennai />} />
            <Route path="/digital-marketing-chennai" element={<DigitalMarketingChennai />} />
            <Route path="/python-training-chennai" element={<PythonTrainingChennai />} />
            <Route path="/ui-ux-training-chennai" element={<UiUxTrainingChennai />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/posts/:id" element={<AdminPostEditor />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
