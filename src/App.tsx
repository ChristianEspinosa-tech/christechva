import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import DevAnalyticsDebugger from "@/components/DevAnalyticsDebugger";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// This tiny component looks at the URL, finds the section ID, and scrolls to it!
const ScrollToHash = () => {
  const { hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        {/* This makes the scroll happen */}
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* This catches all section links (About, Services, etc.) and shows the Homepage */}
          <Route path="/:section" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <CookieConsent />
      {import.meta.env.DEV && <DevAnalyticsDebugger />}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
