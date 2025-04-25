
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlusIcon, SearchIcon, MoreVerticalIcon, PencilIcon, TrashIcon, EyeIcon, UsersIcon } from "lucide-react";

// Mock data for jobs
const mockJobs = [
  {
    id: "job1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "full-time",
    postedAt: "2025-04-10T14:30:00Z",
    applications: 12,
    status: "active"
  },
  {
    id: "job2",
    title: "React Developer",
    company: "WebSolutions Inc.",
    location: "Remote",
    type: "contract",
    postedAt: "2025-04-08T10:15:00Z",
    applications: 8,
    status: "active"
  },
  {
    id: "job3",
    title: "UI/UX Designer",
    company: "Creative Labs",
    location: "New York, NY",
    type: "full-time",
    postedAt: "2025-04-01T09:45:00Z",
    applications: 21,
    status: "active"
  },
  {
    id: "job4",
    title: "Full Stack Developer",
    company: "Innovate Tech",
    location: "Austin, TX",
    type: "part-time",
    postedAt: "2025-03-25T16:20:00Z",
    applications: 5,
    status: "closed"
  }
];

const ManageJobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredJobs = searchQuery 
    ? mockJobs.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockJobs;
    
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Manage Jobs</h1>
            <p className="text-muted-foreground">
              Post and manage your job listings
            </p>
          </div>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Post New Job
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Jobs</DropdownMenuItem>
              <DropdownMenuItem>Active Jobs</DropdownMenuItem>
              <DropdownMenuItem>Closed Jobs</DropdownMenuItem>
              <DropdownMenuItem>Draft Jobs</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Posted</TableHead>
                  <TableHead>Applications</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div>{job.title}</div>
                        <div className="text-xs text-muted-foreground">{job.company}</div>
                      </div>
                    </TableCell>
                    <TableCell>{job.location}</TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {job.type.charAt(0).toUpperCase() + job.type.slice(1).replace('-', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(job.postedAt)}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <UsersIcon className="mr-1 h-4 w-4 text-muted-foreground" />
                        {job.applications}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={job.status === "active" ? "default" : "secondary"}>
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <EyeIcon className="mr-2 h-4 w-4" />
                            <span>View</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <PencilIcon className="mr-2 h-4 w-4" />
                            <span>Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UsersIcon className="mr-2 h-4 w-4" />
                            <span>View Applications</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <TrashIcon className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ManageJobs;
