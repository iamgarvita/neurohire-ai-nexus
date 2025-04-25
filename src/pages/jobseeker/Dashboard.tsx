
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/DashboardLayout";
import { mockJobs, mockApplications, getResume } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  BriefcaseIcon, 
  CheckIcon, 
  StarIcon, 
  SearchIcon, 
  CalendarIcon, 
  TrendingUpIcon, 
  BookIcon
} from "lucide-react";

const JobSeekerDashboard = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get job applications for the current user
  const userApplications = mockApplications.filter(app => app.userId === user?.id);
  
  // Get resume data for the current user
  const userResume = getResume(user?.id || "");
  
  // Filter jobs based on search query
  const filteredJobs = mockJobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Helper function to get application status for a job
  const getApplicationStatus = (jobId: string) => {
    const application = userApplications.find(app => app.jobId === jobId);
    return application ? application.status : null;
  };
  
  // Get AI recommended jobs (in a real app, this would use ML to match jobs)
  const recommendedJobs = mockJobs
    .filter(job => !userApplications.find(app => app.jobId === job.id))
    .filter(job => {
      if (!userResume) return false;
      // Simple recommendation: match if job requires at least 1 skill the user has
      const userSkills = userResume.skills.map(skill => skill.name.toLowerCase());
      return job.skills.some(skill => 
        userSkills.includes(skill.toLowerCase())
      );
    })
    .slice(0, 3);

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}</h1>
        <p className="text-gray-600 mt-1">Here's your job search overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Applications</p>
                <p className="text-3xl font-bold">{userApplications.length}</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                <BriefcaseIcon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Interviews</p>
                <p className="text-3xl font-bold">
                  {userApplications.filter(app => app.status === "interviewed").length}
                </p>
              </div>
              <div className="p-2 bg-green-100 rounded-full text-green-600">
                <CalendarIcon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Resume Strength</p>
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-bold">
                    {userResume ? "72%" : "N/A"}
                  </p>
                  {userResume && <TrendingUpIcon className="h-4 w-4 text-green-500" />}
                </div>
              </div>
              <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                <BookIcon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Profile Views</p>
                <p className="text-3xl font-bold">18</p>
              </div>
              <div className="p-2 bg-amber-100 rounded-full text-amber-600">
                <StarIcon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resume Completion */}
      {userResume ? (
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Resume Completion</CardTitle>
            <CardDescription>Complete your resume to increase your chances of getting hired</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <span className="font-medium">Resume Strength</span>
                  <Badge variant="outline">Good</Badge>
                </div>
                <span className="text-sm">72%</span>
              </div>
              <Progress value={72} className="h-2" />
              
              <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Basic Information</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Education History</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Work Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Skills</span>
                </div>
                <div className="flex items-center opacity-60">
                  <div className="h-4 w-4 border border-gray-300 rounded-full mr-2" />
                  <span className="text-sm">Projects Portfolio</span>
                </div>
                <div className="flex items-center opacity-60">
                  <div className="h-4 w-4 border border-gray-300 rounded-full mr-2" />
                  <span className="text-sm">Recommendations</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" size="sm">
              <Link to="/jobseeker/resume-builder">
                Update Resume
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Resume Missing</CardTitle>
            <CardDescription>Create your resume to apply for jobs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground pb-4">
              Your resume is essential for job applications. Create one now to start applying for jobs.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link to="/jobseeker/resume-builder">
                Create Resume
              </Link>
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Tabs for Jobs and Recommendations */}
      <Tabs defaultValue="recommended" className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="recommended">Recommended Jobs</TabsTrigger>
            <TabsTrigger value="all">Browse All Jobs</TabsTrigger>
            <TabsTrigger value="applied">Applied Jobs</TabsTrigger>
          </TabsList>
          
          <div className="relative w-64">
            <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <TabsContent value="recommended">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recommendedJobs.length > 0 ? recommendedJobs.map((job) => (
              <Card key={job.id} className="overflow-hidden h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-1">
                    <Badge className="bg-neurohire-100 text-neurohire-800 hover:bg-neurohire-200">
                      {job.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(job.postedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    {job.company} • {job.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {job.skills.slice(0, 3).map(skill => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                    {job.skills.length > 3 && (
                      <Badge variant="outline">+{job.skills.length - 3}</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {job.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between">
                  <p className="text-sm font-semibold text-neurohire-600">
                    {job.salary ? `$${job.salary.min.toLocaleString()} - $${job.salary.max.toLocaleString()}` : "Competitive"}
                  </p>
                  <Button size="sm" asChild>
                    <Link to={`/jobseeker/jobs/${job.id}`}>View Job</Link>
                  </Button>
                </CardFooter>
              </Card>
            )) : (
              <div className="col-span-3 py-10 text-center">
                <p className="text-muted-foreground">No recommended jobs found. Update your resume to get personalized recommendations.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="all">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredJobs.length > 0 ? filteredJobs.map((job) => {
              const applicationStatus = getApplicationStatus(job.id);
              
              return (
                <Card key={job.id} className="overflow-hidden h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-1">
                      <Badge className="bg-neurohire-100 text-neurohire-800 hover:bg-neurohire-200">
                        {job.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(job.postedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      {job.company} • {job.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2 flex-grow">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {job.skills.slice(0, 3).map(skill => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                      {job.skills.length > 3 && (
                        <Badge variant="outline">+{job.skills.length - 3}</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {job.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between">
                    <p className="text-sm font-semibold text-neurohire-600">
                      {job.salary ? `$${job.salary.min.toLocaleString()} - $${job.salary.max.toLocaleString()}` : "Competitive"}
                    </p>
                    {applicationStatus ? (
                      <Badge className={
                        applicationStatus === "applied" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : 
                        applicationStatus === "screening" ? "bg-amber-100 text-amber-800 hover:bg-amber-100" :
                        applicationStatus === "shortlisted" ? "bg-green-100 text-green-800 hover:bg-green-100" :
                        applicationStatus === "interviewed" ? "bg-purple-100 text-purple-800 hover:bg-purple-100" :
                        applicationStatus === "offered" ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100" :
                        "bg-red-100 text-red-800 hover:bg-red-100"
                      }>
                        {applicationStatus.charAt(0).toUpperCase() + applicationStatus.slice(1)}
                      </Badge>
                    ) : (
                      <Button size="sm" asChild>
                        <Link to={`/jobseeker/jobs/${job.id}`}>View Job</Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            }) : (
              <div className="col-span-3 py-10 text-center">
                <p className="text-muted-foreground">No jobs found matching your search criteria.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="applied">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {userApplications.length > 0 ? userApplications.map((application) => {
              const job = mockJobs.find(j => j.id === application.jobId);
              if (!job) return null;
              
              return (
                <Card key={job.id} className="overflow-hidden h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-1">
                      <Badge className={
                        application.status === "applied" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : 
                        application.status === "screening" ? "bg-amber-100 text-amber-800 hover:bg-amber-100" :
                        application.status === "shortlisted" ? "bg-green-100 text-green-800 hover:bg-green-100" :
                        application.status === "interviewed" ? "bg-purple-100 text-purple-800 hover:bg-purple-100" :
                        application.status === "offered" ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100" :
                        "bg-red-100 text-red-800 hover:bg-red-100"
                      }>
                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        Applied: {new Date(application.appliedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      {job.company} • {job.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2 flex-grow">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {job.skills.slice(0, 3).map(skill => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                      {job.skills.length > 3 && (
                        <Badge variant="outline">+{job.skills.length - 3}</Badge>
                      )}
                    </div>
                    
                    {application.aiScore && (
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium">AI Match Score</span>
                          <span className="text-xs font-semibold">{application.aiScore}%</span>
                        </div>
                        <Progress value={application.aiScore} className="h-1.5" />
                      </div>
                    )}
                    
                    {application.skillsMatched && job.skills.length > 0 && (
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium text-gray-700">{application.skillsMatched}</span> of <span className="font-medium text-gray-700">{job.skills.length}</span> required skills matched
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button size="sm" variant="outline" className="w-full" asChild>
                      <Link to={`/jobseeker/jobs/${job.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            }) : (
              <div className="col-span-3 py-10 text-center">
                <p className="text-muted-foreground">You haven't applied to any jobs yet.</p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link to="/">Browse Jobs</Link>
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default JobSeekerDashboard;
