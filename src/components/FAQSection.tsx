import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {Link} from "react-router-dom";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the Erasmus+ program?",
      answer: "Erasmus+ is a European Union initiative that offers opportunities for people of all ages to study, work, volunteer, and collaborate internationally, focusing on education, training, youth, and sports."
    },
    {
      question: "Who can apply for Erasmus+?",
      answer: "Students, young people, volunteers, teachers, and professionals can apply, depending on the program. There are specific programs for higher education, youth exchanges, vocational training, and more."
    },
    {
      question: "What support will I get during the program?",
      answer: "Participants receive support such as orientation, mentoring, and sometimes financial assistance for daily expenses."
    },
    {
      question: "What are the requirements for short-term exchanges?",
      answer: "Requirements vary but generally include being a young person, having a basic level of language proficiency, and being willing to engage in cultural exchange."
    },
    {
      question: "What about language requirements?",
      answer: "While specific language requirements vary by program, most Erasmus+ exchanges require a basic understanding of the host country’s language or English."
    },
    {
      question: "What opportunities for travel and cultural exchange does the program offer?",
      answer: "Erasmus+ allows you to explore new cultures, meet international peers, and gain experiences through local community projects and activities."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-light-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the Erasmus+ program
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white border-light-blue-200 hover:shadow-md transition-all duration-300">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full p-6 text-left justify-between hover:bg-light-blue-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</span>
                  <span className={`text-light-blue-600 text-xl transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </Button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-4">
                    <div className="bg-light-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-light-blue-500 to-mint-500 hover:from-light-blue-600 hover:to-mint-600 text-white px-8 py-3">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
