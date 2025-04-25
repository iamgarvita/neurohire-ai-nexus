import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BriefcaseIcon, 
  SearchIcon, 
  BrainIcon, 
  ChartBarIcon, 
  FileTextIcon, 
  MicIcon, 
  RocketIcon,
  StarIcon
} from "lucide-react";
import { mockJobs } from "@/data/mockData";

const Index = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const featuredJobs = mockJobs.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <section className="neurohire-gradient-bg py-20 lg:py-32">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              AI-Powered <br />
              <span className="text-neurohire-100">Hiring Revolution</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Connecting top talent with innovative companies through the power of artificial intelligence and machine learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={user ? (user.role === "jobseeker" ? "/jobseeker/dashboard" : "/admin/dashboard") : "/register"}>
                <Button size="lg" className="bg-white text-neurohire-700 hover:bg-neurohire-50 w-full sm:w-auto">
                  {user ? "Go to Dashboard" : "Get Started"}
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-10">
            <div className="relative bg-white p-6 rounded-lg shadow-xl">
              <div className="absolute -top-3 -right-3 bg-neurohire-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
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
                <Button>
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <BrainIcon className="h-4 w-4 text-neurohire-500" />
                  <span>ML Job Matching</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FileTextIcon className="h-4 w-4 text-neurohire-500" />
                  <span>Resume Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <MicIcon className="h-4 w-4 text-neurohire-500" />
                  <span>Voice Interviews</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <ChartBarIcon className="h-4 w-4 text-neurohire-500" />
                  <span>Skills Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section id="jobs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Featured Jobs</h2>
            <Link to={user?.role === "jobseeker" ? "/jobseeker/dashboard" : "/"}>
              <Button variant="outline">View All Jobs</Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <div key={job.id} className="neurohire-card p-6 flex flex-col">
                <div className="flex justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-neurohire-600">
                    <BriefcaseIcon className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-neurohire-100 px-2.5 py-0.5 text-xs font-medium text-neurohire-800">
                    {job.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{job.company} • {job.location}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.slice(0, 3).map((skill) => (
                    <span 
                      key={skill} 
                      className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 3 && (
                    <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      +{job.skills.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <p className="text-neurohire-600 font-semibold">
                    {job.salary ? `$${job.salary.min.toLocaleString()}-${job.salary.max.toLocaleString()}` : "Competitive"}
                  </p>
                  <Link to={`/jobseeker/jobs/${job.id}`}>
                    <Button variant="outline" size="sm">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionizing Recruiting</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              NeuroHire combines cutting-edge AI and machine learning to create a smarter, more efficient hiring process for both job seekers and employers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-neurohire-100 rounded-full flex items-center justify-center text-neurohire-600 mb-4">
                <BrainIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Resume Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI scans resumes to extract skills, experiences, and qualifications, matching candidates with perfect job opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-neurohire-100 rounded-full flex items-center justify-center text-neurohire-600 mb-4">
                <ChartBarIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Gap Analysis</h3>
              <p className="text-gray-600">
                Identify missing skills for your dream job and get recommendations for targeted skill development opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-neurohire-100 rounded-full flex items-center justify-center text-neurohire-600 mb-4">
                <MicIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Voice Interviews</h3>
              <p className="text-gray-600">
                Complete preliminary interviews with our AI assistant at your convenience, available 24/7 to accommodate your schedule.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-neurohire-100 rounded-full flex items-center justify-center text-neurohire-600 mb-4">
                <FileTextIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Resume Builder</h3>
              <p className="text-gray-600">
                Create professional, ATS-optimized resumes with our intelligent resume builder that highlights your most relevant skills.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-neurohire-100 rounded-full flex items-center justify-center text-neurohire-600 mb-4">
                <RocketIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Job Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized job recommendations based on your skills, experience, and career goals through our ML algorithms.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-neurohire-100 rounded-full flex items-center justify-center text-neurohire-600 mb-4">
                <StarIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Job Descriptions</h3>
              <p className="text-gray-600">
                Recruiters can generate comprehensive, bias-free job descriptions with our AI tool to attract diverse talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-neurohire-600 rounded-2xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
            
            <div className="relative z-10 md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Hiring Process?
              </h2>
              <p className="text-white/90 mb-8">
                Join thousands of companies and job seekers who are already using NeuroHire to streamline their recruitment and job search.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-neurohire-700 hover:bg-neurohire-50 w-full sm:w-auto font-semibold">
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-white text-neurohire-50 hover:bg-white/10 w-full sm:w-auto font-semibold">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-neurohire-600 p-1.5 rounded-md mr-2">
                  <BriefcaseIcon className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold">NeuroHire</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered hiring platform revolutionizing the recruitment process.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.504.344-1.857.182-.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="contact-info">
                <p className="text-gray-400">
                  NeuroHire Technologies Pvt. Ltd.<br />
                  Level 8, Prestige Trade Tower<br />
                  Palace Road, Bangalore - 560001<br />
                  Karnataka, India
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 NeuroHire. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
