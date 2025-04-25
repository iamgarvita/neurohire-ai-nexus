
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, HelpCircle, MessageSquare, FileText, BookOpen, ArrowRight } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "You can create an account by clicking on the 'Register' button in the top right corner of the homepage. Fill in your details, verify your email, and you're all set!"
    },
    {
      question: "How does AI job matching work?",
      answer: "Our AI analyzes your skills, experience, and preferences to match you with suitable job opportunities. It considers factors like your resume, job history, and the requirements specified by employers."
    },
    {
      question: "Can I apply for multiple jobs at once?",
      answer: "Yes! With our Professional plan, you can use the 'Quick Apply' feature to send applications to multiple compatible positions with just a few clicks."
    },
    {
      question: "How do I update my resume?",
      answer: "Navigate to the 'Profile' section in your dashboard, then select 'Resume Management'. You can either upload a new file or use our AI-powered resume builder to edit your existing one."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), UPI, NetBanking, and PayPal for our premium subscriptions."
    }
  ];

  const commonIssues = [
    {
      title: "Reset Password",
      description: "Learn how to reset your password if you've forgotten it",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Update Profile",
      description: "Instructions for updating your profile information",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Job Application Status",
      description: "How to check the status of your job applications",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Subscription Management",
      description: "Change or cancel your subscription plan",
      icon: <FileText className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neurohire-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-xl text-gray-600 mb-8">Find answers to your questions about NeuroHire</p>
            
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-neurohire-300"
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Tabs defaultValue="faq" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="faq">
                <HelpCircle className="w-4 h-4 mr-2" />
                FAQs
              </TabsTrigger>
              <TabsTrigger value="guides">
                <BookOpen className="w-4 h-4 mr-2" />
                Guides
              </TabsTrigger>
              <TabsTrigger value="contact">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact
              </TabsTrigger>
            </TabsList>
            <TabsContent value="faq">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="guides">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Common Help Topics</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {commonIssues.map((issue, index) => (
                    <Card 
                      key={index}
                      className="p-4 hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="flex">
                        <div className="mr-4 p-2 bg-neurohire-100 rounded-full text-neurohire-600">
                          {issue.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium group-hover:text-neurohire-600 transition-colors">{issue.title}</h3>
                          <p className="text-sm text-gray-600">{issue.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-neurohire-600 transform group-hover:translate-x-1 transition-all" />
                      </div>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="mt-4">
                    View All Guides
                  </Button>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="contact">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Contact Support</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neurohire-300"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neurohire-300"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neurohire-300"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neurohire-300"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-neurohire-600 hover:bg-neurohire-700">
                      Submit Request
                    </Button>
                  </div>
                </div>
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="font-medium mb-2">Other ways to reach us</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <MessageSquare className="w-5 h-5 text-neurohire-600 mr-3" />
                      <div>
                        <p className="font-medium">Live Chat</p>
                        <p className="text-sm text-gray-600">Available 9 AM to 6 PM IST</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-5 h-5 text-neurohire-600 mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-600">support@neurohire.ai</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Didn't find what you're looking for?</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">Our comprehensive documentation covers all aspects of using the NeuroHire platform.</p>
            <Button className="bg-neurohire-600 hover:bg-neurohire-700">Visit Documentation</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
