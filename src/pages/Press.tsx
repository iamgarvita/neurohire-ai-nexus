
import React from 'react';
import { Card } from "@/components/ui/card";

const Press = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neurohire-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Press Room</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              date: "March 15, 2025",
              title: "NeuroHire Raises $50M Series B",
              source: "TechCrunch",
              image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
            },
            {
              date: "February 28, 2025",
              title: "AI Recruitment Platform Shows Promise",
              source: "Forbes",
              image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
            },
            {
              date: "January 10, 2025",
              title: "The Future of Hiring is Here",
              source: "Business Insider",
              image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            }
          ].map((article) => (
            <Card key={article.title} className="overflow-hidden hover:shadow-lg transition-all">
              <img 
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-neurohire-600 mb-2">{article.date}</p>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600">Source: {article.source}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Press;
