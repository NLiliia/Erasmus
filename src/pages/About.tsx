import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const programBenefits = [
    {
      title: "Quality Education",
      description: "Access to world-class universities and educational institutions across Europe",
      icon: "🎓"
    },
    {
      title: "Cultural Exchange",
      description: "Immerse yourself in different cultures and broaden your global perspective",
      icon: "🌍"
    },
    {
      title: "Language Skills",
      description: "Improve your language abilities through daily practice and academic study",
      icon: "💬"
    },
    {
      title: "Professional Network",
      description: "Build valuable connections with students and professionals from around the world",
      icon: "🤝"
    },
    {
      title: "Personal Growth",
      description: "Develop independence, adaptability, and intercultural competence",
      icon: "🌱"
    },
    {
      title: "Career Opportunities",
      description: "Enhance your CV and open doors to international career prospects",
      icon: "🚀"
    }
  ];

  const statistics = [
    { number: "10,000+", label: "Ukrainian Students", period: "Since 2014" },
    { number: "27", label: "EU Countries", period: "Available" },
    { number: "4,000+", label: "Higher Education Institutions", period: "Partner Universities" },
    { number: "95%", label: "Student Satisfaction", period: "Rate" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-r from-light-blue-50 to-mint-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About Erasmus+ Program
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Erasmus+ is the EU's programme to support education, training, youth and sport in Europe. 
              It provides opportunities for over 4 million Europeans to study, train, and gain experience abroad.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Program Overview</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 leading-relaxed mb-6">
                The Erasmus+ programme, launched in 2014, builds on the success of previous EU programmes 
                like Erasmus, Leonardo da Vinci, Comenius, and others. With a budget of €26.2 billion for 
                2021-2027, it's one of the EU's most successful programmes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                For Ukrainian students, Erasmus+ offers unique opportunities to study at European universities, 
                participate in joint master's degree programmes, and gain valuable international experience 
                that enhances both personal and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-light-blue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Program Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-white border-light-blue-200">
                <h3 className="text-3xl font-bold text-light-blue-600 mb-2">{stat.number}</h3>
                <p className="text-gray-800 font-semibold mb-1">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.period}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Erasmus+?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl text-gray-800">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-mint-50 to-light-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Program Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-mint-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  Student Mobility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Study abroad for 3-12 months at a partner university, earning credits 
                  that count towards your degree.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Bachelor's Level</Badge>
                  <Badge variant="outline">Master's Level</Badge>
                  <Badge variant="outline">PhD Level</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-mint-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Erasmus Mundus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Joint Master's and PhD programmes offered by consortiums of European universities 
                  with full scholarships.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Full Scholarship</Badge>
                  <Badge variant="outline">Joint Degree</Badge>
                  <Badge variant="outline">Multiple Countries</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
