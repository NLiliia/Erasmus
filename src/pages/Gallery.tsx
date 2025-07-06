import React from 'react';
import Header from '@/components/Header';
import PhotoGallery from '@/components/PhotoGallery';
import Footer from '@/components/Footer';

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PhotoGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
