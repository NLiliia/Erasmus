import React from 'react';
import Header from '@/components/Header';
import ArticlesSection from '@/components/ArticlesSection';
import Footer from '@/components/Footer';

const Articles = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ArticlesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
