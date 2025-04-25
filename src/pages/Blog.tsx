
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Recruitment",
      excerpt: "How artificial intelligence is transforming the hiring landscape in 2025 and beyond.",
      date: "April 15, 2025",
      author: "Priya Sharma",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 2,
      title: "5 Ways to Improve Your Resume with AI",
      excerpt: "Leverage artificial intelligence to craft a resume that stands out to both human and AI reviewers.",
      date: "April 2, 2025",
      author: "Rahul Mehta",
      category: "Career Advice",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    {
      id: 3,
      title: "Navigating Remote Work Interviews",
      excerpt: "Expert tips for acing virtual interviews and assessments in today's digital-first job market.",
      date: "March 28, 2025",
      author: "Ananya Patel",
      category: "Interviews",
      image: "https://images.unsplash.com/photo-1543269664-7eef42226a21"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neurohire-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">NeuroHire Blog</h1>
            <p className="text-xl text-gray-600">Insights and advice for navigating the modern job market</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-neurohire-100 text-neurohire-600 text-xs font-semibold px-2 py-1 rounded-full">{post.category}</span>
                    <span className="text-gray-500 text-sm ml-auto">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 hover:text-neurohire-600 transition-colors cursor-pointer">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Button variant="ghost" size="sm" className="text-neurohire-600 hover:text-neurohire-700">
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-neurohire-600 hover:bg-neurohire-700">Load More Articles</Button>
          </div>

          <div className="mt-16 bg-neurohire-50 p-8 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">Get the latest recruitment insights and career advice delivered to your inbox.</p>
              <div className="flex max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded-l-md border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-neurohire-300"
                />
                <Button className="rounded-l-none bg-neurohire-600 hover:bg-neurohire-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
