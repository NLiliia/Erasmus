import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {Link} from "react-router-dom";
import {useData} from "@/contexts/DataContext.tsx";

const PhotoGallery = () => {
  const { images } = useData();
  // const photos = [
  //   {
  //     id: 1,
  //     src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
  //     title: "Student Life in Barcelona",
  //     location: "Spain"
  //   },
  //   {
  //     id: 2,
  //     src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
  //     title: "Alpine Landscapes",
  //     location: "Austria"
  //   },
  //   {
  //     id: 3,
  //     src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
  //     title: "Prague Architecture",
  //     location: "Czech Republic"
  //   },
  //   {
  //     id: 4,
  //     src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
  //     title: "International Festival",
  //     location: "Germany"
  //   },
  //   {
  //     id: 5,
  //     src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
  //     title: "University Campus",
  //     location: "France"
  //   },
  //   {
  //     id: 6,
  //     src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
  //     title: "Cultural Exchange",
  //     location: "Italy"
  //   },
  //   {
  //     id: 7,
  //     src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
  //     title: "Research Project",
  //     location: "Netherlands"
  //   },
  //   {
  //     id: 8,
  //     src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
  //     title: "Graduation Ceremony",
  //     location: "Belgium"
  //   },
  //   {
  //     id: 9,
  //     src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
  //     title: "Traveling Europe",
  //     location: "Portugal"
  //   }
  // ];

  return (
    <section className="py-16 bg-gradient-to-b from-mint-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at unforgettable moments from our students' lives in various corners of Europe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((photo, index) => (
              <Card
                  key={photo.id}
                  className={`
        overflow-hidden rounded-xl group shadow-sm hover:shadow-md transition-all duration-300
        ${index === 1 ? 'sm:col-span-2 sm:row-span-2' : ''}
      `}
              >
                <div className="relative w-full h-full">
                  <img
                      src={photo.link}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-end p-4">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">{photo.title}</h3>
                      <p className="text-sm text-mint-200">{photo.location}</p>
                    </div>
                  </div>
                </div>
              </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/gallery">
            <Button
                className="bg-gradient-to-r from-mint-500 to-light-blue-500 hover:from-mint-600 hover:to-light-blue-600 text-white px-8 py-3">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
