
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ArrowRight, Download } from 'lucide-react';

const Press = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  
  const pressReleases = {
    "2025": [
      {
        date: "April 10, 2025",
        title: "NeuroHire Partners with Top 500 Companies for Global Talent Initiative",
        source: "Business Standard",
        excerpt: "NeuroHire announced a strategic partnership with 500 leading global companies to revolutionize talent acquisition through its AI-powered platform.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
      },
      {
        date: "March 15, 2025",
        title: "NeuroHire Raises $50M Series B to Expand AI Recruitment Platform",
        source: "TechCrunch",
        excerpt: "The funding will be used to enhance the company's machine learning algorithms and expand into new markets across Asia and Europe.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      },
      {
        date: "February 28, 2025",
        title: "AI Recruitment Platform Shows Promise in Reducing Hiring Bias",
        source: "Forbes",
        excerpt: "New study shows NeuroHire's platform reduces unconscious bias in hiring processes by 78% compared to traditional recruitment methods.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
      }
    ],
    "2024": [
      {
        date: "December 12, 2024",
        title: "NeuroHire Opens New Headquarters in Bangalore",
        source: "Economic Times",
        excerpt: "The 50,000 sq ft facility will house over 200 employees and serve as the company's innovation hub for AI development.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
      },
      {
        date: "September 5, 2024",
        title: "NeuroHire Launches Revolutionary Resume Builder",
        source: "YourStory",
        excerpt: "The AI-powered tool helps job seekers create optimized resumes that increase interview callbacks by up to 60%.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      }
    ],
    "2023": [
      {
        date: "June 21, 2023",
        title: "Tech Startup NeuroHire Secures $8M Seed Funding",
        source: "VCCircle",
        excerpt: "The funding round was led by Sequoia Capital and will help the company build its core AI recruitment technology.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984"
      }
    ]
  };

  const newsAndAwards = [
    {
      type: "award",
      date: "March 2025",
      title: "Best AI Innovation in HR Tech",
      organization: "Tech Innovation Awards",
      logo: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE1fHxhd2FyZHxlbnwwfHx8fDE2MTYxMjQwMjA&ixlib=rb-4.0.3&q=80&w=100"
    },
    {
      type: "news",
      date: "February 2025",
      title: "How NeuroHire is Transforming the Job Market",
      publication: "Harvard Business Review",
      link: "#"
    },
    {
      type: "award",
      date: "January 2025",
      title: "Top 10 AI Startups to Watch",
      organization: "Fortune India",
      logo: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE3fHx0cm9waHl8ZW58MHx8fHwxNjE2MTI0MDg5&ixlib=rb-4.0.3&q=80&w=100"
    }
  ];

  const mediaKit = {
    brandAssets: [
      { name: "NeuroHire Logo (PNG)", size: "3.2 MB" },
      { name: "NeuroHire Logo (SVG)", size: "156 KB" },
      { name: "Brand Guidelines", size: "5.7 MB" },
      { name: "Product Screenshots", size: "12.8 MB" }
    ],
    executivePhotos: [
      { name: "CEO - Anjali Sharma", size: "4.3 MB" },
      { name: "CTO - Vikram Mehta", size: "3.8 MB" },
      { name: "COO - Sanjay Patel", size: "4.1 MB" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neurohire-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Press Room</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Stay updated with the latest news, press releases, and media resources from NeuroHire</p>
          </div>

          <div className="mb-16">
            <div className="bg-neurohire-600 text-white rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="p-8 md:w-1/2">
                  <span className="inline-block bg-white text-neurohire-600 px-3 py-1 rounded-full text-sm font-medium mb-4">Latest Announcement</span>
                  <h2 className="text-3xl font-bold mb-4">NeuroHire Partners with Top 500 Companies</h2>
                  <p className="mb-6 text-neurohire-100">NeuroHire today announced a groundbreaking partnership with 500 leading global companies to transform talent acquisition through AI technology.</p>
                  <div className="flex items-center text-sm mb-6">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>April 10, 2025</span>
                  </div>
                  <Button variant="secondary" className="group">
                    Read Full Story
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="md:w-1/2 h-80 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                    alt="Press Announcement"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="pressReleases" className="mb-16">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="pressReleases">Press Releases</TabsTrigger>
              <TabsTrigger value="newsAndAwards">News & Awards</TabsTrigger>
              <TabsTrigger value="mediaKit">Media Kit</TabsTrigger>
            </TabsList>

            <TabsContent value="pressReleases">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Press Releases</h2>
                <div className="flex items-center space-x-2">
                  {Object.keys(pressReleases).map((year) => (
                    <Button 
                      key={year}
                      variant={selectedYear === year ? "default" : "outline"}
                      size="sm"
                      className={selectedYear === year ? "bg-neurohire-600" : ""}
                      onClick={() => setSelectedYear(year)}
                    >
                      {year}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pressReleases[selectedYear as keyof typeof pressReleases].map((article, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
                    <div className="relative">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-neurohire-600 text-white text-xs font-semibold px-3 py-1 m-2 rounded-full">
                        {article.source}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-neurohire-600 mb-2 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {article.date}
                      </p>
                      <h3 className="text-xl font-semibold mb-2 hover:text-neurohire-600 transition-colors cursor-pointer">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                      <Button variant="ghost" className="text-neurohire-600 p-0 hover:text-neurohire-700 hover:bg-transparent">
                        Read More <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="newsAndAwards">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6">In the News & Awards</h2>
                <div className="space-y-4">
                  {newsAndAwards.map((item, index) => (
                    <Card key={index} className="p-4 flex items-center hover:shadow-md transition-all">
                      {item.type === 'award' && (
                        <img 
                          src={item.logo} 
                          alt={item.organization} 
                          className="w-16 h-16 object-cover rounded-md mr-6"
                        />
                      )}
                      {item.type === 'news' && (
                        <div className="w-16 h-16 bg-neurohire-100 rounded-md flex items-center justify-center mr-6">
                          <span className="text-neurohire-600 font-semibold">NEWS</span>
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.type === 'award' && (
                          <p className="text-sm text-gray-600">Awarded by {item.organization}</p>
                        )}
                        {item.type === 'news' && (
                          <p className="text-sm text-gray-600">Published in {item.publication}</p>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" className="text-neurohire-600">
                        {item.type === 'award' ? 'View Award' : 'Read Article'}
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mediaKit">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6">Media Kit</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Brand Assets</h3>
                    <div className="space-y-3">
                      {mediaKit.brandAssets.map((asset, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-neurohire-100 rounded flex items-center justify-center mr-3">
                              <span className="text-neurohire-600 text-xs font-semibold">ZIP</span>
                            </div>
                            <span className="font-medium">{asset.name}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-xs text-gray-500 mr-3">{asset.size}</span>
                            <Button variant="ghost" size="sm" className="p-0 h-auto">
                              <Download className="w-4 h-4 text-neurohire-600" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Executive Photos</h3>
                    <div className="space-y-3">
                      {mediaKit.executivePhotos.map((photo, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-neurohire-100 rounded flex items-center justify-center mr-3">
                              <span className="text-neurohire-600 text-xs font-semibold">JPG</span>
                            </div>
                            <span className="font-medium">{photo.name}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-xs text-gray-500 mr-3">{photo.size}</span>
                            <Button variant="ghost" size="sm" className="p-0 h-auto">
                              <Download className="w-4 h-4 text-neurohire-600" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>

              <div className="bg-neurohire-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Media Contact</h3>
                <p className="mb-4">For press inquiries, please contact our media relations team:</p>
                <div className="space-y-2">
                  <p className="font-medium">Priya Desai, Media Relations Manager</p>
                  <p>Email: press@neurohire.ai</p>
                  <p>Phone: +91 98765 43210</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Press;
