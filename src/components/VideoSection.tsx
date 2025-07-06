import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {FaPlay} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useData} from "@/contexts/DataContext.tsx";

const VideoSection = () => {
  const { videos } = useData();

  return (
      <section className="py-16 bg-gradient-to-b from-white to-light-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Video Content</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our videos about the Erasmus+ experience and learn more about study opportunities in Europe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
                <Card
                    key={video.id}
                    className="group hover:shadow-xl transition-all duration-300 bg-white border-light-blue-100 hover:border-light-blue-300 flex flex-col"
                >
                  <CardContent className="p-0 flex flex-col flex-grow">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <a href={video.link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center cursor-pointer rounded-t-lg">
                          <div
                              className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <FaPlay className="text-light-blue-600 w-5 h-5"/>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-light-blue-600 transition-colors">
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                          {video.title}
                        </a>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        {video.description}
                      </p>
                      <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-light-blue-300 text-light-blue-600 hover:bg-light-blue-50 mt-auto"
                      >
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                          Watch
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/videos">
              <Button className="bg-gradient-to-r from-light-blue-500 to-mint-500 hover:from-light-blue-600 hover:to-mint-600 text-white px-8 py-3">
                View All Videos
              </Button>
            </Link>
          </div>
        </div>
      </section>
  );
};

export default VideoSection;
