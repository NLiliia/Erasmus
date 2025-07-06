import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useData } from "@/contexts/DataContext.tsx";
import {Link} from "react-router-dom";

const ArticlesSection = () => {
  const { articles } = useData();
  // const articles = [
  //   {
  //     id: 1,
  //     title: "How to Prepare for Studying Abroad",
  //     excerpt: "A detailed guide on preparing documents, choosing a university and adapting to a new environment",
  //     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
  //     author: "Maria Petrenko",
  //     date: "December 15, 2024",
  //     readTime: "8 min",
  //     category: "Tips",
  //     featured: true
  //   },
  //   {
  //     id: 2,
  //     title: "Top 10 Universities for Erasmus+ Students",
  //     excerpt: "Review of the best European universities with exchange programs",
  //     image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
  //     author: "Alex Kovalenko",
  //     date: "December 12, 2024",
  //     readTime: "6 min",
  //     category: "Education"
  //   },
  //   {
  //     id: 3,
  //     title: "Funding Your Studies: Grants and Scholarships",
  //     excerpt: "Everything about the financial opportunities of the Erasmus+ program and additional sources of support",
  //     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
  //     author: "Anna Sidorenko",
  //     date: "December 10, 2024",
  //     readTime: "12 min",
  //     category: "Finance"
  //   },
  //   {
  //     id: 4,
  //     title: "Language Barrier: How to Overcome It",
  //     excerpt: "Practical tips for language learning and communication in an international environment",
  //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  //     author: "Igor Melnyk",
  //     date: "December 8, 2024",
  //     readTime: "7 min",
  //     category: "Languages"
  //   },
  //   {
  //     id: 5,
  //     title: "Cultural Features of European Countries",
  //     excerpt: "What you should know about the traditions and customs of countries you plan to visit",
  //     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
  //     author: "Sofia Ivanenko",
  //     date: "December 5, 2024",
  //     readTime: "10 min",
  //     category: "Culture"
  //   },
  //   {
  //     id: 6,
  //     title: "Student Accommodation: Options and Tips",
  //     excerpt: "Overview of types of student housing in Europe and recommendations for searching",
  //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  //     author: "Maxim Bondarenko",
  //     date: "December 3, 2024",
  //     readTime: "9 min",
  //     category: "Housing"
  //   }
  // ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles
      .filter(article => !article.featured)
      .slice(0, 6);
  
  console.log(regularArticles);

  return (
    <section className="py-16 bg-gradient-to-b from-light-blue-50 to-mint-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Articles & Tips</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Useful materials, experiences and advice from students and experts of the Erasmus+ program
          </p>
        </div>
        
        {featuredArticle && (
          <Card className="mb-12 overflow-hidden bg-white border-light-blue-200 shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-gradient-to-r from-light-blue-500 to-mint-500 text-white">
                    Featured
                  </Badge>
                  <Badge variant="outline" className="border-light-blue-300 text-light-blue-600">
                    {featuredArticle.category.title}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-500">
                    <span>Author: {featuredArticle.author}</span>
                    <span className="mx-2">•</span>
                    {/*<span>{featuredArticle.createdAt.toLocaleDateString('en-US', {*/}
                    {/*  year: 'numeric',*/}
                    {/*  month: 'long',*/}
                    {/*  day: 'numeric'*/}
                    {/*})}</span>*/}
                    <span className="mx-2">•</span>
                    <span>{featuredArticle.readTimeInMin} min read</span>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-light-blue-500 to-mint-500 hover:from-light-blue-600 hover:to-mint-600 text-white px-4 py-3">
                  Read Full Article
                </Button>
              </div>
            </div>
          </Card>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
              <Card
                  key={article.id}
                  className="group hover:shadow-xl transition-all duration-300 bg-white border-mint-100 hover:border-mint-300
               flex flex-col min-h-[420px]"
              >
                <CardContent className="p-0 flex flex-col flex-grow">
                  <div className="relative overflow-hidden">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white bg-opacity-90 text-gray-700">
                        {article.category.title}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-light-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{article.author}</span>
                      <span>{article.readTimeInMin} min</span>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      {/*<span className="text-xs text-gray-400">{featuredArticle.createdAt.toLocaleDateString('en-US', {*/}
                      {/*  year: 'numeric',*/}
                      {/*  month: 'long',*/}
                      {/*  day: 'numeric'*/}
                      {/*})}</span>*/}
                      <Button variant="ghost" size="sm" className="text-light-blue-600 hover:text-light-blue-700 hover:bg-light-blue-50 hover:p-2">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/articles">
            <Button className="bg-gradient-to-r from-light-blue-500 to-mint-500 hover:from-light-blue-600 hover:to-mint-600 text-white px-8 py-3">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
