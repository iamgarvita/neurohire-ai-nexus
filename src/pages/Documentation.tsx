
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, FileText, Book, Code, MessageSquare, BookOpen, Coffee } from 'lucide-react';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Getting Started",
      description: "Begin your journey with NeuroHire's platform"
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "User Guides",
      description: "Step-by-step guides for job seekers"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "API Reference",
      description: "Integrate with our powerful APIs"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Tutorials",
      description: "In-depth walkthroughs of key features"
    }
  ];

  const recentArticles = [
    {
      id: 1,
      title: "Creating an Effective Job Seeker Profile",
      category: "User Guides",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How to Use AI Resume Builder",
      category: "Tutorials",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "API Authentication Guide",
      category: "API Reference",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Setting Up Job Alerts",
      category: "Getting Started",
      readTime: "3 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neurohire-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
            <p className="text-xl text-gray-600 mb-8">Everything you need to make the most of NeuroHire</p>
            
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-neurohire-300"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-md transition-all cursor-pointer hover:-translate-y-1 transform group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-neurohire-100 rounded-full text-neurohire-600 group-hover:bg-neurohire-600 group-hover:text-white transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Recent Articles</h2>
              <Button variant="ghost" className="text-neurohire-600">View All</Button>
            </div>
            
            <div className="space-y-4">
              {recentArticles.map((article) => (
                <Card key={article.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center">
                    <BookOpen className="h-6 w-6 text-neurohire-500 mr-4" />
                    <div className="flex-1">
                      <h3 className="font-medium hover:text-neurohire-600 transition-colors">{article.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span className="bg-gray-100 rounded-full px-2 py-0.5">{article.category}</span>
                        <span className="flex items-center ml-3">
                          <Coffee className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-neurohire-50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 md:w-2/3">
                <h2 className="text-2xl font-semibold mb-2">Can't find what you need?</h2>
                <p className="text-gray-600 mb-4">Our support team is here to help you with any questions you might have.</p>
                <Button className="bg-neurohire-600 hover:bg-neurohire-700">Contact Support</Button>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e" 
                  alt="Support Team" 
                  className="rounded-lg w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
