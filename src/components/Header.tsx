import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {useAuth} from "@/contexts/AuthContext.tsx";

const Header = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [isStudyDropdownOpen, setIsStudyDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
      <header className="bg-gradient-to-r from-light-blue-50 to-mint-50 shadow-sm border-b border-light-blue-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo.webp" alt="Logo" className="w-12 h-12 object-contain bg-transparent"/>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Erasmus+</h1>
                <p className="text-xs text-gray-600">European Project</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              <Link to="/">
                <Button
                    variant="ghost"
                    size="sm"
                    className={`text-gray-700 hover:text-light-blue-600 hover:bg-light-blue-50 ${
                        isActive('/') ? 'bg-light-blue-100 text-light-blue-700' : ''
                    }`}
                >
                  Home
                </Button>
              </Link>
              
              <div
                  className="relative"
                  onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                  onMouseLeave={() => setIsResourcesDropdownOpen(false)}
              >
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-700 hover:text-light-blue-600 hover:bg-light-blue-50 flex items-center gap-1"
                >
                  Resources
                  <ChevronDown className="w-3 h-3"/>
                </Button>

                {isResourcesDropdownOpen && (
                    <div
                        className="absolute top-full left-0 w-40 bg-white border border-light-blue-200 rounded-lg shadow-lg z-50"
                        style={{marginTop: 0}}
                    >
                      <div className="py-2">
                        <Link to="/videos" className="block">
                          <div
                              className={`w-full text-left px-4 py-2 text-sm hover:bg-light-blue-50 ${
                                  isActive('/videos') ? 'bg-light-blue-100 text-light-blue-700' : 'text-gray-700'
                              }`}
                          >
                            Videos
                          </div>
                        </Link>
                        <Link to="/gallery" className="block">
                          <div
                              className={`w-full text-left px-4 py-2 text-sm hover:bg-light-blue-50 ${
                                  isActive('/gallery') ? 'bg-light-blue-100 text-light-blue-700' : 'text-gray-700'
                              }`}
                          >
                            Gallery
                          </div>
                        </Link>
                        <Link to="/articles" className="block">
                          <div
                              className={`w-full text-left px-4 py-2 text-sm hover:bg-light-blue-50 ${
                                  isActive('/articles') ? 'bg-light-blue-100 text-light-blue-700' : 'text-gray-700'
                              }`}
                          >
                            Articles
                          </div>
                        </Link>
                      </div>
                    </div>
                )}
              </div>

              <Link to="/contact">
                <Button
                    variant="ghost"
                    size="sm"
                    className={`text-gray-700 hover:text-light-blue-600 hover:bg-light-blue-50 ${
                        isActive('/contact') ? 'bg-light-blue-100 text-light-blue-700' : ''
                    }`}
                >
                  Contact
                </Button>
              </Link>

              {user ? (
                  <Link to="/admin">
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-light-blue-700 border-light-blue-300 hover:bg-light-blue-50 pl-2"
                    >
                      Admin Panel
                    </Button>
                  </Link>
              ) : (
                  <Link to="/login">
                    <Button
                        variant="default"
                        size="sm"
                        className="bg-light-blue-600 text-white hover:bg-light-blue-700 pl-2"
                    >
                      Sign in
                    </Button>
                  </Link>
              )}
            </nav>

            <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
            <>
              <div
                  className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{opacity: isMobileMenuOpen ? 1 : 0}}
              />
              
              <aside
                  className={`
        fixed top-0 right-0 h-full w-72
        bg-white/95 backdrop-blur-md
        shadow-2xl rounded-l-3xl
        z-50
        transform transition-transform duration-300 ease-in-out
        overflow-y-auto
      `}
                  style={{
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                  }}
              >
                <div className="flex justify-end p-5">
                  <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-label="Close menu"
                      className="text-gray-700 hover:text-light-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-light-blue-400 rounded-full"
                  >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
                
                <nav className="flex flex-col px-6 space-y-6 pb-10 text-lg">
                  <Link
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block rounded-md px-4 py-3 transition-colors duration-200 ${
                          isActive('/') ? 'bg-light-blue-100 text-light-blue-700 font-semibold' : 'text-gray-700 hover:bg-light-blue-50'
                      }`}
                  >
                    Home
                  </Link>

                  <div>
                    <p className="font-semibold text-gray-800 mb-3 tracking-wide text-sm uppercase">Resources</p>
                    <Link
                        to="/videos"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block rounded-md px-4 py-2 transition-colors duration-200 ${
                            isActive('/videos') ? 'bg-light-blue-100 text-light-blue-700 font-semibold' : 'text-gray-600 hover:bg-light-blue-50'
                        }`}
                    >
                      Videos
                    </Link>
                    <Link
                        to="/gallery"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block rounded-md px-4 py-2 transition-colors duration-200 ${
                            isActive('/gallery') ? 'bg-light-blue-100 text-light-blue-700 font-semibold' : 'text-gray-600 hover:bg-light-blue-50'
                        }`}
                    >
                      Gallery
                    </Link>
                    <Link
                        to="/articles"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block rounded-md px-4 py-2 transition-colors duration-200 ${
                            isActive('/articles') ? 'bg-light-blue-100 text-light-blue-700 font-semibold' : 'text-gray-600 hover:bg-light-blue-50'
                        }`}
                    >
                      Articles
                    </Link>
                  </div>

                  <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block rounded-md px-4 py-3 transition-colors duration-200 ${
                          isActive('/contact') ? 'bg-light-blue-100 text-light-blue-700 font-semibold' : 'text-gray-700 hover:bg-light-blue-50'
                      }`}
                  >
                    Contact
                  </Link>
                  
                  {user ? (
                      <Link
                          to="/admin"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block rounded-md px-4 py-3 bg-light-blue-100 text-light-blue-700 font-semibold"
                      >
                        Admin Panel
                      </Link>
                  ) : (
                      <Link
                          to="/login"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-3 bg-light-blue-600 text-white text-center rounded-lg hover:bg-light-blue-700 transition-colors duration-200"
                      >
                        Sign in
                      </Link>
                  )}
                </nav>
              </aside>
            </>
        )}
      </header>
  );
};

export default Header;

