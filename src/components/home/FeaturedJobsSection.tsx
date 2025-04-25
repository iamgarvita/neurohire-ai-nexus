
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { mockJobs } from "@/data/mockData";

const FeaturedJobsSection = () => {
  const { user } = useAuth();
  const featuredJobs = mockJobs.slice(0, 3);

  return (
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
  );
};

export default FeaturedJobsSection;
