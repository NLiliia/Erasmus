import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Tips from "./pages/Tips";
import Videos from "./pages/Videos";
import Gallery from "./pages/Gallery";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Accommodation from "./pages/Accommodation";
import NotFound from "./pages/NotFound";
import {AuthProvider, useAuth} from "@/contexts/AuthContext.tsx";
import { DataProvider } from "@/contexts/DataContext.tsx";
import Login from "@/pages/Login.tsx";
import ScrollToTop from "@/hooks/ScrollToTop.tsx";
import ArticlesPanel from "@/pages/Panels/ArticlesPanel.tsx";
import CategoriesPanel from "@/pages/Panels/CategoriesPanel.tsx";
import VideosPanel from "@/pages/Panels/VideosPanel.tsx";
import ImagesPanel from "@/pages/Panels/ImagesPanel.tsx";
import AdminPanel from "@/pages/AdminPanel.tsx";
import React from "react";
import ContactsPanel from "@/pages/Panels/ContactsPanel.tsx";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { loading, user } = useAuth();

  if (loading) return null;

  return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accommodation" element={<Accommodation />} />

          {user?.role === 'admin' && (
              <Route path="/admin" element={<AdminPanel />}>
                  <Route index element={<ArticlesPanel />} />
                  <Route path="/admin/articles" element={<ArticlesPanel />} />
                  <Route path="/admin/categories" element={<CategoriesPanel />} />
                  <Route path="/admin/videos" element={<VideosPanel />} />
                  <Route path="/admin/images" element={<ImagesPanel />} />
                  <Route path="/admin/contacts" element={<ContactsPanel />} />
              </Route>
          )}
          
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <BrowserRouter>
          <DataProvider>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            <div className="flex-1">
              <AppRoutes />
            </div>
          </DataProvider>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
