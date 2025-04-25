
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, BrainIcon, FileTextIcon, MicIcon, ChartBarIcon } from "lucide-react";

const HeroSection = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <section className="bg-gradient-to-br from-purple-100 via-purple-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            AI-Powered <br />
            <span className="text-purple-700">Hiring Revolution</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            Connecting top talent with innovative companies through the power of artificial intelligence and machine learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={user ? (user.role === "jobseeker" ? "/jobseeker/dashboard" : "/admin/dashboard") : "/register"}>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                {user ? "Go to Dashboard" : "Get Started"}
              </Button>
            </Link>
            <Link to="/jobs">
              <Button variant="outline" size="lg" className="border-purple-300 text-purple-700 hover:bg-purple-50 w-full sm:w-auto">
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="lg:w-1/2 lg:pl-10">
          <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-xl">
            <div className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              AI Powered
            </div>
            <h3 className="font-semibold text-lg mb-4">Find your dream job</h3>
            
            <div className="flex gap-2 mb-4">
              <Input 
                placeholder="Job title, keywords, or company" 
                className="flex-1" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="bg-purple-600 hover:bg-purple-700">
                <SearchIcon className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <BrainIcon className="h-4 w-4 text-purple-500" />
                <span>ML Job Matching</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FileTextIcon className="h-4 w-4 text-purple-500" />
                <span>Resume Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MicIcon className="h-4 w-4 text-purple-500" />
                <span>Voice Interviews</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <ChartBarIcon className="h-4 w-4 text-purple-500" />
                <span>Skills Analytics</span>
              </div>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Person using laptop"
              className="absolute -bottom-4 -right-4 w-24 h-24 object-cover rounded-lg shadow-lg transform rotate-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
