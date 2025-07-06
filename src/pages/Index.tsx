import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import PhotoGallery from '@/components/PhotoGallery';
import ArticlesSection from '@/components/ArticlesSection';
import FAQSection from '@/components/FAQSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import Footer from '@/components/Footer';
import PartnersSection from "@/components/PartnersGallery.tsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <PhotoGallery />
      <ArticlesSection />
      <FAQSection />
      <PartnersSection />
      <SocialMediaSection />
      <Footer />
    </div>
  );
};

export default Index;
