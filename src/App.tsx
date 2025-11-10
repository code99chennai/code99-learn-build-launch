import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import JavaTrainingChennai from "./pages/JavaTrainingChennai";
import FullStackWebDevelopmentChennai from "./pages/FullStackWebDevelopmentChennai";
import DigitalMarketingChennai from "./pages/DigitalMarketingChennai";
import PythonTrainingChennai from "./pages/PythonTrainingChennai";
import UiUxTrainingChennai from "./pages/UiUxTrainingChennai";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/java-training-chennai" element={<JavaTrainingChennai />} />
          <Route path="/full-stack-web-development-chennai" element={<FullStackWebDevelopmentChennai />} />
          <Route path="/digital-marketing-chennai" element={<DigitalMarketingChennai />} />
          <Route path="/python-training-chennai" element={<PythonTrainingChennai />} />
          <Route path="/ui-ux-training-chennai" element={<UiUxTrainingChennai />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
