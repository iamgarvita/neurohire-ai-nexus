
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/DashboardLayout";
import { mockJobs, mockApplications, mockUsers } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BriefcaseIcon, 
  UserIcon, 
  UsersIcon, 
  CheckIcon,
  ClockIcon,
  LineChartIcon,
  BarChartIcon,
  CalendarIcon
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [timeFrame, setTimeFrame] = useState<"week" | "month" | "year">("week");
  
  const filteredJobs = mockJobs.filter(job => job.postedBy === user?.id);
  const jobIds = filteredJobs.map(job => job.id);
  const applications = mockApplications.filter(app => jobIds.includes(app.jobId));
  
  // Status distribution data
  const statusCounts = {
    applied: applications.filter(app => app.status === "applied").length,
    screening: applications.filter(app => app.status === "screening").length,
    shortlisted: applications.filter(app => app.status === "shortlisted").length,
    interviewed: applications.filter(app => app.status === "interviewed").length,
    offered: applications.filter(app => app.status === "offered").length,
    rejected: applications.filter(app => app.status === "rejected").length,
  };
  
  const statusData = [
    { name: "Applied", value: statusCounts.applied, color: "#93c5fd" },
    { name: "Screening", value: statusCounts.screening, color: "#fcd34d" },
    { name: "Shortlisted", value: statusCounts.shortlisted, color: "#86efac" },
    { name: "Interviewed", value: statusCounts.interviewed, color: "#c4b5fd" },
    { name: "Offered", value: statusCounts.offered, color: "#6ee7b7" },
    { name: "Rejected", value: statusCounts.rejected, color: "#fca5a5" },
  ];
  
  // Weekly application data (mock data for chart)
  const weeklyData = [
    { day: "Mon", applications: 4 },
    { day: "Tue", applications: 7 },
    { day: "Wed", applications: 5 },
    { day: "Thu", applications: 8 },
    { day: "Fri", applications: 12 },
    { day: "Sat", applications: 3 },
    { day: "Sun", applications: 2 },
  ];
  
  // Monthly application data (mock data for chart)
  const monthlyData = [
    { day: "Week 1", applications: 22 },
    { day: "Week 2", applications: 37 },
    { day: "Week 3", applications: 30 },
    { day: "Week 4", applications: 35 },
  ];
  
  // Yearly application data (mock data for chart)
  const yearlyData = [
    { day: "Jan", applications: 65 },
    { day: "Feb", applications: 59 },
    { day: "Mar", applications: 80 },
    { day: "Apr", applications: 81 },
    { day: "May", applications: 56 },
    { day: "Jun", applications: 55 },
    { day: "Jul", applications: 40 },
    { day: "Aug", applications: 45 },
    { day: "Sep", applications: 67 },
    { day: "Oct", applications: 72 },
    { day: "Nov", applications: 89 },
    { day: "Dec", applications: 90 },
  ];
  
  const chartData = {
    week: weeklyData,
    month: monthlyData,
    year: yearlyData,
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Recruiter Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back, {user?.name}. Here's an overview of your hiring activities.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Jobs</p>
                <p className="text-3xl font-bold">{filteredJobs.length}</p>
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
                <p className="text-sm font-medium text-muted-foreground">Total Applicants</p>
                <p className="text-3xl font-bold">{applications.length}</p>
              </div>
              <div className="p-2 bg-green-100 rounded-full text-green-600">
                <UsersIcon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Shortlisted</p>
                <p className="text-3xl font-bold">{statusCounts.shortlisted}</p>
              </div>
              <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                <CheckIcon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Interview Scheduled</p>
                <p className="text-3xl font-bold">{statusCounts.interviewed}</p>
              </div>
              <div className="p-2 bg-amber-100 rounded-full text-amber-600">
                <CalendarIcon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
        {/* Application Timeline Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Application Trends</CardTitle>
                <CardDescription>Overview of application submissions</CardDescription>
              </div>
              <Tabs defaultValue="week" value={timeFrame} onValueChange={(v) => setTimeFrame(v as "week" | "month" | "year")}>
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData[timeFrame]}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "0.375rem",
                    }}
                  />
                  <Bar dataKey="applications" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Application Status</CardTitle>
            <CardDescription>Distribution of candidate statuses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value} Applicants`, 'Count']}
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "0.375rem",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Section */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates on your jobs and candidates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Recent Jobs</h3>
                  <div className="space-y-4">
                    {filteredJobs.slice(0, 3).map((job) => (
                      <div key={job.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 bg-neurohire-100 rounded-md flex items-center justify-center text-neurohire-600 flex-shrink-0">
                          <BriefcaseIcon className="h-5 w-5" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{job.title}</h4>
                          <p className="text-sm text-gray-500">{job.company} • {applications.filter(a => a.jobId === job.id).length} Applicants</p>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <Link to={`/admin/jobs`}>View</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="ghost" size="sm" asChild className="w-full">
                      <Link to="/admin/jobs">View All Jobs</Link>
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>
                  <div className="space-y-4">
                    {applications.slice(0, 3).map((application) => {
                      const job = mockJobs.find(j => j.id === application.jobId);
                      const applicant = mockUsers.find(u => u.id === application.userId);
                      if (!job || !applicant) return null;
                      
                      return (
                        <div key={application.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0 overflow-hidden">
                            {applicant.avatar ? (
                              <img src={applicant.avatar} alt={applicant.name} className="w-full h-full object-cover" />
                            ) : (
                              <UserIcon className="h-5 w-5" />
                            )}
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="font-medium text-gray-900 truncate">{applicant.name}</h4>
                            <p className="text-sm text-gray-500 truncate">Applied for {job.title}</p>
                          </div>
                          <Button size="sm" variant="outline" asChild>
                            <Link to={`/admin/candidates`}>View</Link>
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4">
                    <Button variant="ghost" size="sm" asChild className="w-full">
                      <Link to="/admin/candidates">View All Candidates</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center">
                <BriefcaseIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No jobs posted yet</h3>
                <p className="text-gray-500 mb-4">Start by posting your first job opening</p>
                <Button asChild>
                  <Link to="/admin/jobs">Post a Job</Link>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default AdminDashboard;
