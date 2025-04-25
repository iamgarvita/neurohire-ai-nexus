
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SearchIcon, BriefcaseIcon, FilterIcon } from 'lucide-react';
import { mockJobs } from "@/data/mockData";

const JobListings = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Browse All Jobs</h1>
          
          <div className="flex w-full md:w-auto gap-4">
            <div className="relative flex-1 md:w-96">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neurohire-500"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <FilterIcon className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockJobs.map((job) => (
            <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between mb-4">
                <div className="w-12 h-12 bg-neurohire-100/50 rounded-lg flex items-center justify-center text-neurohire-600">
                  <BriefcaseIcon className="h-6 w-6" />
                </div>
                <span className="inline-flex items-center rounded-full bg-neurohire-100 px-2.5 py-0.5 text-xs font-medium text-neurohire-800">
                  {job.type}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{job.company} • {job.location}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <p className="text-neurohire-600 font-semibold">
                  {job.salary ? `$${job.salary.min.toLocaleString()}-${job.salary.max.toLocaleString()}` : "Competitive"}
                </p>
                <Button variant="default" size="sm">View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListings;
