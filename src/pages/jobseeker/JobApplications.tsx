
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { EyeIcon, FileTextIcon, ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

// This would normally come from an API
const mockApplications = [
  {
    id: "app1",
    jobId: "job1",
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp",
    appliedAt: "2025-04-10T14:30:00Z",
    status: "applied",
    aiScore: 85
  },
  {
    id: "app2",
    jobId: "job2",
    jobTitle: "React Developer",
    company: "WebSolutions Inc.",
    appliedAt: "2025-04-08T10:15:00Z",
    status: "screening",
    aiScore: 78
  },
  {
    id: "app3",
    jobId: "job3",
    jobTitle: "UI/UX Designer",
    company: "Creative Labs",
    appliedAt: "2025-04-01T09:45:00Z",
    status: "shortlisted",
    aiScore: 92
  },
  {
    id: "app4",
    jobId: "job4",
    jobTitle: "Full Stack Developer",
    company: "Innovate Tech",
    appliedAt: "2025-03-25T16:20:00Z",
    status: "rejected",
    aiScore: 65
  }
];

const statusColors = {
  applied: "bg-blue-100 text-blue-800",
  screening: "bg-purple-100 text-purple-800",
  shortlisted: "bg-green-100 text-green-800",
  interviewed: "bg-amber-100 text-amber-800",
  offered: "bg-emerald-100 text-emerald-800",
  rejected: "bg-red-100 text-red-800"
};

const JobApplications = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("all");
  
  // Filter applications based on tab
  const filteredApplications = activeTab === "all" 
    ? mockApplications 
    : mockApplications.filter(app => app.status === activeTab);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Applications</h1>
          <p className="text-muted-foreground">
            Track and manage your job applications
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Applications</TabsTrigger>
            <TabsTrigger value="applied">Applied</TabsTrigger>
            <TabsTrigger value="screening">Screening</TabsTrigger>
            <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
            <TabsTrigger value="interviewed">Interviewed</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="space-y-4">
            {filteredApplications.length > 0 ? (
              filteredApplications.map(application => (
                <Card key={application.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{application.jobTitle}</h3>
                          <Badge 
                            className={statusColors[application.status as keyof typeof statusColors]}
                            variant="outline"
                          >
                            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{application.company}</p>
                        <p className="text-sm text-muted-foreground">Applied on {formatDate(application.appliedAt)}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 self-start md:self-center">
                        <div className="bg-muted p-2 rounded-full">
                          <div className="text-center">
                            <span className="text-sm font-semibold block leading-none">
                              {application.aiScore}%
                            </span>
                            <span className="text-xs text-muted-foreground">AI Score</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <FileTextIcon className="h-4 w-4 mr-1" />
                            Resume
                          </Button>
                          
                          <Link to={`/jobseeker/jobs/${application.jobId}`}>
                            <Button size="sm" variant="outline">
                              <EyeIcon className="h-4 w-4 mr-1" />
                              View Job
                            </Button>
                          </Link>
                          
                          <Link to={`/jobseeker/applications/${application.id}`}>
                            <Button size="sm">
                              <span>Details</span>
                              <ChevronRightIcon className="h-4 w-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-6 flex items-center justify-center">
                  <div className="text-center py-10">
                    <p className="text-muted-foreground mb-4">No applications found</p>
                    <Link to="/">
                      <Button>
                        Browse Jobs
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default JobApplications;
