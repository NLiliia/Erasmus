import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {FaInstagram} from "react-icons/fa6";
import {FaTiktok} from "react-icons/fa";

const SocialMediaSection = () => {
  const socialPosts = [
    {
      id: 1,
      platform: "Instagram",
      username: "@erasmusslovenia2025",
      content: "Some canded pictures🙈#erasmus #youthexchange #europe #slovenia #georgia #sakartvelo #romania #latvia #spain #ukraine",
      image: "https://i.postimg.cc/rpbmcPDW/516194974-3786524721646163-6399543210083514933-n.jpg",
      likes: 19,
      comments: 0,
      time: "2 hours ago",
      color: "from-pink-500 to-purple-500",
      link: "https://www.instagram.com/p/DLu5s1qqBut/?img_index=1"
    },
    {
      id: 2,
      platform: "Instagram",
      username: "@erasmusslovenia2025",
      content: "How do animals speak in different languages🧐#youthexchange #erasmus #tiktok #slovenie #eu #europe",
      image: "https://i.postimg.cc/vTyGZFb1/Screenshot-2025-07-06-at-00-29-57.png",
      likes: 26,
      comments: 0,
      time: "5 hours ago",
      color: "from-pink-500 to-purple-500",
      link: "https://www.instagram.com/p/DLp3rdLKfi_/"
    },
    {
      id: 3,
      platform: "Instagram",
      username: "@erasmusslovenia2025",
      content: "Serving up good times and aces all day long 🏐🤾‍♂️",
      image: "https://i.postimg.cc/mDN0VcWD/514308706-17848424229508615-6109718714130439020-n.jpg",
      likes: 20,
      comments: 1,
      time: "1 day ago",
      color: "from-pink-500 to-purple-500",
      link: "https://www.instagram.com/p/DLnIKpnKoTP/?img_index=4"
    },
    {
      id: 4,
      platform: "Instagram",
      username: "@erasmusslovenia2025",
      content: "#tiktok #erasmus #slovenia 🇸🇮❤️ 2025",
      image: "https://i.postimg.cc/W3TJxyCn/Screenshot-2025-07-06-at-00-41-05.png",
      likes: 53,
      comments: 6,
      time: "1 day ago",
      color: "from-pink-500 to-purple-500",
      link: "https://www.instagram.com/p/DLknMOxqJkb/",
    },
    {
      id: 5,
      platform: "Instagram",
      username: "@erasmusslovenia2025",
      content: "🌅🧡",
      image: "https://i.postimg.cc/y8pQ1msc/509738380-17848232067508615-3464091578555731852-n.jpg",
      likes: 23,
      comments: 5,
      time: "2 days ago",
      color: "from-pink-500 to-purple-500",
      link: "https://www.instagram.com/p/DLjyQAfqXeA/?img_index=1",
    },
    {
      id: 6,
      platform: "Instagram",
      username: "@erasmusslovenia2025",
      content: "💥📣Meet the participating groups in youth exchange “the Express & Impress: Mastering Communication and\n" +
          "Self-Presentation Skill” Young People from:\n" +
          "🇱🇻Latvia 🇺🇦Ukraine 🇪🇸Spain 🇷🇴Romania 🇸🇮Slovenia and 🇬🇪Georgia are ready to make unforgettable memories!",
      image: "https://i.postimg.cc/rpvfWqdp/509797838-17848002297508615-8570261367314694529-n.jpg",
      likes: 32,
      comments: 0,
      time: "3 days ago",
      color: "from-pink-500 to-purple-500",
      link: "https://www.instagram.com/p/DLfht8Zq8A0/?img_index=1",
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case 'TikTok':
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
      <section className="py-16 bg-gradient-to-b from-white to-light-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Social Media</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow our updates on social media and join the Erasmus+ community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="text-center p-6 bg-gradient-to-br from-light-blue-50 to-mint-50 border-light-blue-200">
              <div
                  className="w-12 h-12 bg-gradient-to-r from-light-blue-500 to-mint-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaInstagram className="w-6 h-6 text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">40</h3>
              <p className="text-gray-600">Instagram Followers</p>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-mint-50 to-light-blue-50 border-mint-200">
              <div
                  className="w-12 h-12 bg-gradient-to-r from-mint-500 to-light-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTiktok className="w-6 h-6 text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">52</h3>
              <p className="text-gray-600">TikTok Followers</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialPosts.map((post) => (
                <Card
                    key={post.id}
                    className="group hover:shadow-xl transition-all duration-300 bg-white border-gray-200 hover:border-gray-300
               flex flex-col min-h-[420px]"
                >
                  <CardContent className="p-0 flex flex-col flex-grow">
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                            className={`w-10 h-10 bg-gradient-to-r ${post.color} rounded-full flex items-center justify-center`}
                        >
                          {getPlatformIcon(post.platform)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {post.username}
                          </h4>
                          <p className="text-sm text-gray-500">{post.time}</p>
                        </div>
                        <Badge variant="outline" className="ml-auto text-xs">
                          {post.platform}
                        </Badge>
                      </div>

                      {post.image && (
                          <div className="mb-4 rounded-lg overflow-hidden">
                            <img
                                src={post.image}
                                alt="Social media post"
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                      )}

                      <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                        {post.content}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100 mt-auto">
                        <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <svg
                            className="w-4 h-4 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                          <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                          />
                        </svg>
                        {post.likes}
                      </span>
                          <span className="flex items-center gap-1">
                        <svg
                            className="w-4 h-4 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                            {post.comments}
                      </span>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs text-gray-500 hover:text-gray-700"
                        >
                          <a
                              href={post.link}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            View
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Join Us</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button className="bg-gradient-to-r from-light-blue-500 to-mint-500 hover:from-light-blue-600 hover:to-mint-600 text-white px-6 py-3">
                <a
                    href="https://www.instagram.com/erasmusslovenia2025?igsh=MWp4cWh2c3l0Z3UzZA%3D%3D"
                    className="flex flex-row items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </Button>

              <Button className="bg-gradient-to-r from-mint-500 to-light-blue-500 hover:from-mint-600 hover:to-light-blue-600 text-white px-6 py-3">
                <a
                    href="https://www.tiktok.com/@erasmusslovenia20?_t=ZN-8xdis9fvAiU&_r=1"
                    className="flex flex-row items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <FaTiktok className="w-5 h-5 mr-2" />
                  TikTok
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default SocialMediaSection;
