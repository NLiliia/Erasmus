import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Tips = () => {
  const applicationSteps = [
    {
      step: "1",
      title: "Research Programs",
      description: "Find programs that match your academic interests and career goals",
      tips: [
        "Use the Erasmus+ Programme Guide",
        "Check university websites for specific requirements",
        "Consider the language of instruction",
        "Look at course compatibility with your current studies"
      ]
    },
    {
      step: "2", 
      title: "Prepare Documents",
      description: "Gather all required documents well in advance",
      tips: [
        "Academic transcripts (translated if needed)",
        "Language proficiency certificates",
        "Motivation letter",
        "Letters of recommendation",
        "CV/Resume in European format"
      ]
    },
    {
      step: "3",
      title: "Submit Application",
      description: "Apply through your home institution's international office",
      tips: [
        "Meet all deadlines (usually November-February)",
        "Double-check all document requirements",
        "Submit online applications early",
        "Keep copies of all submitted documents"
      ]
    },
    {
      step: "4",
      title: "Prepare for Departure",
      description: "Get ready for your international experience",
      tips: [
        "Apply for student visa if required",
        "Arrange accommodation",
        "Get travel and health insurance",
        "Attend pre-departure orientations"
      ]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Late Application",
      solution: "Apply as early as possible, ideally 6-8 months before departure",
      icon: "⏰"
    },
    {
      mistake: "Incomplete Documentation",
      solution: "Create a checklist and verify all requirements with host university",
      icon: "📋"
    },
    {
      mistake: "Poor Motivation Letter",
      solution: "Write a compelling, personalized letter explaining your goals and motivation",
      icon: "✍️"
    },
    {
      mistake: "Language Barriers",
      solution: "Start language preparation early, consider online courses",
      icon: "🗣️"
    },
    {
      mistake: "Unrealistic Expectations",
      solution: "Research the host country's culture, climate, and living costs",
      icon: "🌍"
    }
  ];

  const essentialDocuments = [
    "Valid passport",
    "Academic transcripts",
    "Language certificates (IELTS, TOEFL, etc.)",
    "Motivation letter",
    "CV in European format",
    "Letters of recommendation",
    "Learning Agreement",
    "Financial statements",
    "Health insurance",
    "Accommodation proof"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-r from-light-blue-50 to-mint-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Tips: How to Apply
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your step-by-step guide to successfully applying for the Erasmus+ program. 
              Follow these tips to maximize your chances of acceptance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Application Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationSteps.map((step, index) => (
                <Card key={index} className="border-l-4 border-l-light-blue-500 bg-gradient-to-r from-light-blue-50 to-white">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-light-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-800">{step.title}</CardTitle>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2">
                          <span className="text-light-blue-500 font-bold">•</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-mint-50 to-light-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Essential Documents Checklist</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white border-mint-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 text-center">Document Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {essentialDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Common Mistakes to Avoid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonMistakes.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-gray-200">
                <CardHeader className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <CardTitle className="text-lg text-red-600">{item.mistake}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-light-blue-50 to-mint-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Final Success Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Start Early</h3>
                <p className="text-gray-600">Begin your application process at least 8-10 months before departure</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Seek Help</h3>
                <p className="text-gray-600">Contact your international office for guidance and support</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">💪</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Stay Motivated</h3>
                <p className="text-gray-600">Keep your goals in mind and don't give up if faced with challenges</p>
              </div>
            </div>
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-light-blue-500 to-mint-500 hover:from-light-blue-600 hover:to-mint-600 text-white px-8 py-3">
                Contact Us for Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tips;
