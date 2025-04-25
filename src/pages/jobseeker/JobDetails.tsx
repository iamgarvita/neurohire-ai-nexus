
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/DashboardLayout";
import { mockJobs, mockApplications, getResume } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { 
  BriefcaseIcon, 
  BuildingIcon, 
  MapPinIcon, 
  CalendarIcon, 
  DollarSignIcon, 
  Clock9Icon,
  CheckIcon,
  XIcon,
  Loader2Icon,
  BrainIcon
} from "lucide-react";

const JobDetails = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isApplying, setIsApplying] = useState(false);
  
  // Find job details
  const job = mockJobs.find(job => job.id === jobId);
  
  // Check if the user has already applied
  const existingApplication = mockApplications.find(
    app => app.jobId === jobId && app.userId === user?.id
  );
  
  // Get user resume
  const userResume = user ? getResume(user.id) : null;
  
  // Skills matching
  const userSkills = userResume?.skills.map(skill => skill.name.toLowerCase()) || [];
  const matchedSkills = job?.skills.filter(skill => 
    userSkills.includes(skill.toLowerCase())
  ) || [];
  const missingSkills = job?.skills.filter(skill => 
    !userSkills.includes(skill.toLowerCase())
  ) || [];
  
  // Calculate match percentage
  const matchPercentage = job?.skills.length 
    ? Math.round((matchedSkills.length / job.skills.length) * 100) 
    : 0;

  const handleApply = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    if (!userResume) {
      toast({
        title: "Resume Required",
        description: "You need to create a resume before applying.",
        variant: "destructive",
      });
      navigate('/jobseeker/resume-builder');
      return;
    }
    
    setIsApplying(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: "Your application has been submitted successfully!",
      });
      setIsApplying(false);
      navigate('/jobseeker/applications');
    }, 1500);
  };

  if (!job) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-2xl font-bold mb-2">Job Not Found</h2>
          <p className="text-gray-500 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/jobseeker/dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Job Content */}
        <div className="md:w-2/3">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="mb-4" 
              onClick={() => navigate(-1)}
            >
              ← Back
            </Button>
            
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                <div className="flex flex-wrap items-center gap-3 text-gray-600">
                  <div className="flex items-center gap-1">
                    <BuildingIcon className="h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <Badge variant="outline" className="ml-1">{job.type}</Badge>
                </div>
              </div>
              
              {!existingApplication ? (
                <Button onClick={handleApply} disabled={isApplying}>
                  {isApplying ? (
                    <>
                      <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                      Applying...
                    </>
                  ) : (
                    "Apply Now"
                  )}
                </Button>
              ) : (
                <Badge className={
                  existingApplication.status === "applied" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : 
                  existingApplication.status === "screening" ? "bg-amber-100 text-amber-800 hover:bg-amber-100" :
                  existingApplication.status === "shortlisted" ? "bg-green-100 text-green-800 hover:bg-green-100" :
                  existingApplication.status === "interviewed" ? "bg-purple-100 text-purple-800 hover:bg-purple-100" :
                  existingApplication.status === "offered" ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100" :
                  "bg-red-100 text-red-800 hover:bg-red-100"
                }>
                  {existingApplication.status.charAt(0).toUpperCase() + existingApplication.status.slice(1)}
                </Badge>
              )}
            </div>
          </div>
          
          <Card className="p-6 mb-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-700 border border-gray-200 rounded-full px-4 py-1.5">
                <CalendarIcon className="h-4 w-4 mr-2 text-neurohire-600" />
                <span>Posted: {new Date(job.postedAt).toLocaleDateString()}</span>
              </div>
              
              {job.deadline && (
                <div className="flex items-center text-gray-700 border border-gray-200 rounded-full px-4 py-1.5">
                  <Clock9Icon className="h-4 w-4 mr-2 text-neurohire-600" />
                  <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                </div>
              )}
              
              {job.salary && (
                <div className="flex items-center text-gray-700 border border-gray-200 rounded-full px-4 py-1.5">
                  <DollarSignIcon className="h-4 w-4 mr-2 text-neurohire-600" />
                  <span>{job.salary.currency} {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()}</span>
                </div>
              )}
            </div>
            
            <Tabs defaultValue="description" className="mt-2">
              <TabsList className="mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="text-gray-700 space-y-4">
                <p>{job.description}</p>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Skills Required:</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map(skill => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="requirements">
                <h3 className="text-lg font-semibold mb-3">Job Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="analysis">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-3">
                    <BrainIcon className="h-5 w-5 text-neurohire-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">AI Job Match Analysis</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    Our AI has analyzed your resume against the job requirements:
                  </p>
                  
                  {userResume ? (
                    <>
                      <div className="bg-white p-4 rounded-md mb-4">
                        <div className="flex justify-between mb-2">
                          <span>Match Score:</span>
                          <span className="font-semibold">{matchPercentage}%</span>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-neurohire-600 h-2.5 rounded-full" 
                            style={{ width: `${matchPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-sm text-gray-700 mb-2 flex items-center">
                            <CheckIcon className="h-4 w-4 text-green-600 mr-1" />
                            Matched Skills ({matchedSkills.length})
                          </h4>
                          <div className="bg-white p-3 rounded-md min-h-[100px]">
                            {matchedSkills.length > 0 ? (
                              <div className="flex flex-wrap gap-2">
                                {matchedSkills.map(skill => (
                                  <Badge key={skill} className="bg-green-100 text-green-800 hover:bg-green-100">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            ) : (
                              <p className="text-sm text-gray-500">No skills matched</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm text-gray-700 mb-2 flex items-center">
                            <XIcon className="h-4 w-4 text-red-500 mr-1" />
                            Missing Skills ({missingSkills.length})
                          </h4>
                          <div className="bg-white p-3 rounded-md min-h-[100px]">
                            {missingSkills.length > 0 ? (
                              <div className="flex flex-wrap gap-2">
                                {missingSkills.map(skill => (
                                  <Badge key={skill} variant="outline" className="border-red-200 text-red-700">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            ) : (
                              <p className="text-sm text-gray-500">You have all the required skills!</p>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-white p-3 rounded-md">
                        <h4 className="font-medium text-sm text-gray-700 mb-2">AI Recommendation:</h4>
                        <p className="text-sm text-gray-700">
                          {matchPercentage >= 70 
                            ? "You're a strong match for this position! Consider highlighting your relevant skills in your application."
                            : matchPercentage >= 40
                            ? "You meet some of the requirements but may want to develop additional skills to increase your chances."
                            : "This job may be a stretch for your current skills. Consider roles that better match your experience or develop the missing skills."
                          }
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="p-4 text-center">
                      <p className="mb-4 text-gray-600">
                        Create your resume to get personalized match analysis.
                      </p>
                      <Button onClick={() => navigate('/jobseeker/resume-builder')}>
                        Create Resume
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </Card>
          
          {!existingApplication && (
            <div className="flex justify-center">
              <Button onClick={handleApply} disabled={isApplying} className="px-10">
                {isApplying ? (
                  <>
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                    Applying...
                  </>
                ) : (
                  "Apply Now"
                )}
              </Button>
            </div>
          )}
        </div>
        
        {/* Sidebar Content */}
        <div className="md:w-1/3">
          <Card className="p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">Job Overview</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <BriefcaseIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="text-sm text-gray-500">Job Type</h4>
                  <p className="font-medium">{job.type}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="text-sm text-gray-500">Location</h4>
                  <p className="font-medium">{job.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CalendarIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="text-sm text-gray-500">Posted Date</h4>
                  <p className="font-medium">{new Date(job.postedAt).toLocaleDateString()}</p>
                </div>
              </div>
              
              {job.deadline && (
                <div className="flex items-start">
                  <Clock9Icon className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-sm text-gray-500">Application Deadline</h4>
                    <p className="font-medium">{new Date(job.deadline).toLocaleDateString()}</p>
                  </div>
                </div>
              )}
              
              {job.salary && (
                <div className="flex items-start">
                  <DollarSignIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-sm text-gray-500">Salary Range</h4>
                    <p className="font-medium">
                      {job.salary.currency} {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()}
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <Separator className="my-4" />
            
            <div>
              <h4 className="text-sm text-gray-500 mb-2">Required Skills</h4>
              <div className="flex flex-wrap gap-2">
                {job.skills.map(skill => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">About the Company</h3>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-neurohire-600">
                <BuildingIcon className="h-6 w-6" />
              </div>
              <div className="ml-3">
                <h4 className="font-medium">{job.company}</h4>
                <p className="text-sm text-gray-500">Technology</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">
              {job.company} is a leading technology company providing innovative solutions to businesses worldwide.
            </p>
            
            <Button variant="outline" size="sm" className="w-full">
              View Company Profile
            </Button>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobDetails;
