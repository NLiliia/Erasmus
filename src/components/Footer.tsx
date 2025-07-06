import React from 'react';
import { Button } from '@/components/ui/button';
import {FaInstagram} from "react-icons/fa6";
import {FaTiktok} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.webp" alt="Logo" className="w-12 h-12 object-contain bg-transparent"/>
              <div>
                <h3 className="text-2xl font-bold">Erasmus+</h3>
                <p className="text-gray-300">European Project</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Erasmus+ is a European Union program in the field of education, training,
              youth and sport. Discover new opportunities together with us!
            </p>
            <div className="flex flex-col space-y-4 mt-6">
              <div className="flex space-x-4">
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-300 p-2 hover:bg-gradient-to-r hover:from-light-blue-100 hover:to-mint-600 transition-colors duration-300"
                    asChild
                >
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram className="w-5 h-5 text-gray-300 hover:text-white transition-colors duration-300"/>
                  </a>
                </Button>

                <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-300 p-2 hover:bg-gradient-to-r hover:from-mint-500 hover:to-light-blue-500 transition-colors duration-300"
                    asChild
                >
                  <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <FaTiktok className="w-5 h-5 text-gray-300 hover:text-white transition-colors duration-300"/>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About the Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Tips How to Apply
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Partner Universities
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-light-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  Markovci, Salovci
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Erasmus+ Ukraine. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
