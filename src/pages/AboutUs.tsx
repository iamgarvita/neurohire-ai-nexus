
import React from 'react';
import { Card } from "@/components/ui/card";
import { UserIcon, StarIcon, RocketIcon } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neurohire-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About NeuroHire</h1>
          
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Technology Background"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
            />
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2023, NeuroHire has revolutionized the recruitment industry by leveraging cutting-edge AI technology to connect talented professionals with leading organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <UserIcon className="w-12 h-12 text-neurohire-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">To transform the hiring landscape through AI innovation.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <StarIcon className="w-12 h-12 text-neurohire-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">Innovation, integrity, and excellence in everything we do.</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <RocketIcon className="w-12 h-12 text-neurohire-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">To be the global leader in AI-powered recruitment solutions.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
