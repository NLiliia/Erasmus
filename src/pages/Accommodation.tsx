import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Accommodation = () => {
  const accommodationOptions = [
    {
      id: 1,
      title: "Student Dormitories",
      description: "Budget-friendly shared accommodation in university dormitories with basic amenities.",
      price: "€200-400/month",
      features: ["Shared kitchen", "Wi-Fi included", "Study rooms", "Laundry facilities"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
      type: "Budget"
    },
    {
      id: 2,
      title: "Shared Apartments",
      description: "Private room in shared apartment with other international students.",
      price: "€300-600/month",
      features: ["Private room", "Shared living areas", "Kitchen access", "Central location"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      type: "Popular"
    },
    {
      id: 3,
      title: "Studio Apartments",
      description: "Private studio apartment with kitchenette and private bathroom.",
      price: "€500-800/month",
      features: ["Private bathroom", "Kitchenette", "Modern furnishing", "24/7 security"],
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      type: "Premium"
    },
    {
      id: 4,
      title: "Host Families",
      description: "Live with a local family to experience authentic culture and language immersion.",
      price: "€400-700/month",
      features: ["Meals included", "Cultural immersion", "Language practice", "Local insights"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      type: "Cultural"
    },
    {
      id: 5,
      title: "Purpose-Built Student Housing",
      description: "Modern student housing with all amenities and social spaces.",
      price: "€600-1000/month",
      features: ["Gym access", "Common areas", "Study spaces", "Events & activities"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      type: "Luxury"
    },
    {
      id: 6,
      title: "Temporary Housing",
      description: "Short-term accommodation for the first weeks while you search for permanent housing.",
      price: "€30-80/night",
      features: ["Flexible booking", "Central location", "Furnished", "Short-term stays"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      type: "Temporary"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Budget': return 'bg-green-100 text-green-800';
      case 'Popular': return 'bg-blue-100 text-blue-800';
      case 'Premium': return 'bg-purple-100 text-purple-800';
      case 'Cultural': return 'bg-orange-100 text-orange-800';
      case 'Luxury': return 'bg-pink-100 text-pink-800';
      case 'Temporary': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-b from-light-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Accommodation</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find the perfect place to stay during your Erasmus+ experience. From budget-friendly dormitories to luxury apartments.
              </p>
            </div>

            {/* Tips Section */}
            <div className="mb-12">
              <Card className="bg-gradient-to-r from-light-blue-50 to-mint-50 border-light-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">💡 Housing Tips</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-700">
                    <div>• Book accommodation early, especially for popular destinations</div>
                    <div>• Consider location and transportation to your university</div>
                    <div>• Check what's included in the rent (utilities, internet, etc.)</div>
                    <div>• Read reviews and contact previous tenants if possible</div>
                    <div>• Understand the lease terms and cancellation policies</div>
                    <div>• Keep important documents and receipts organized</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accommodationOptions.map((option) => (
                <Card key={option.id} className="group hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className={`absolute top-4 right-4 ${getTypeColor(option.type)}`}>
                        {option.type}
                      </Badge>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{option.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{option.description}</p>
                      
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-light-blue-600 mb-2">{option.price}</div>
                        <div className="flex flex-wrap gap-2">
                          {option.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-light-blue-500 to-light-blue-600 hover:from-light-blue-600 hover:to-light-blue-700 text-white">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Need Help Finding Accommodation?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-light-blue-500 to-light-blue-600 hover:from-light-blue-600 hover:to-light-blue-700 text-white">
                  Contact Housing Office
                </Button>
                <Button size="lg" variant="outline" className="border-light-blue-300 text-light-blue-600 hover:bg-light-blue-50">
                  Download Housing Guide
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Accommodation;
