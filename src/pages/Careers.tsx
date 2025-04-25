
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neurohire-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Join Our Team</h1>
          
          <div className="relative mb-12">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Office Culture"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neurohire-600/50 to-transparent rounded-lg flex items-center p-8">
              <div className="text-white max-w-md">
                <h2 className="text-3xl font-bold mb-4">Shape the Future of Hiring</h2>
                <p className="mb-6">Join us in revolutionizing the recruitment industry with AI technology.</p>
                <Button variant="secondary" size="lg">View Open Positions</Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Engineering",
                positions: ["Senior Full Stack Developer", "ML Engineer", "DevOps Engineer"]
              },
              {
                title: "Product",
                positions: ["Product Manager", "UX Designer", "Product Analyst"]
              }
            ].map((department) => (
              <Card key={department.title} className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4">{department.title}</h3>
                <ul className="space-y-3">
                  {department.positions.map((position) => (
                    <li key={position} className="flex items-center justify-between">
                      <span>{position}</span>
                      <Button variant="outline" size="sm">Apply</Button>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
