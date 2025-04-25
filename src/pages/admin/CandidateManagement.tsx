
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  SearchIcon, 
  DownloadIcon, 
  ClipboardCheckIcon,
  StarIcon,
  MailIcon, 
  PhoneIcon,
  CalendarIcon,
  BriefcaseIcon
} from "lucide-react";

// This would normally come from an API
const mockCandidates = [
  {
    id: "cand1",
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "555-123-4567",
    lastActivity: "2025-04-18T10:30:00Z",
    status: "shortlisted",
    jobApplied: "Senior Frontend Developer",
    aiScore: 92,
    skills: ["React", "TypeScript", "Node.js", "UI/UX"],
    avatar: ""
  },
  {
    id: "cand2",
    name: "Sam Taylor",
    email: "sam@example.com",
    phone: "555-987-6543",
    lastActivity: "2025-04-15T14:20:00Z",
    status: "screening",
    jobApplied: "Full Stack Engineer",
    aiScore: 78,
    skills: ["Angular", "JavaScript", "MongoDB", "Express"],
    avatar: ""
  },
  {
    id: "cand3",
    name: "Jordan Lee",
    email: "jordan@example.com",
    phone: "555-456-7890",
    lastActivity: "2025-04-12T11:45:00Z",
    status: "interviewed",
    jobApplied: "UX Designer",
    aiScore: 85,
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    avatar: ""
  },
  {
    id: "cand4",
    name: "Casey Morgan",
    email: "casey@example.com",
    phone: "555-789-1234",
    lastActivity: "2025-04-10T09:15:00Z",
    status: "applied",
    jobApplied: "Product Manager",
    aiScore: 67,
    skills: ["Agile", "JIRA", "Market Research", "Roadmapping"],
    avatar: ""
  },
  {
    id: "cand5",
    name: "Riley Smith",
    email: "riley@example.com",
    phone: "555-321-9876",
    lastActivity: "2025-04-05T16:40:00Z",
    status: "rejected",
    jobApplied: "DevOps Engineer",
    aiScore: 56,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    avatar: ""
  }
];

const statusColors = {
  applied: "bg-blue-100 text-blue-800",
  screening: "bg-purple-100 text-purple-800",
  shortlisted: "bg-green-100 text-green-800",
  interviewed: "bg-amber-100 text-amber-800",
  hired: "bg-emerald-100 text-emerald-800",
  rejected: "bg-red-100 text-red-800"
};

const CandidateManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  
  // Filter candidates based on tab and search query
  const filteredCandidates = mockCandidates
    .filter(candidate => activeTab === "all" || candidate.status === activeTab)
    .filter(candidate => 
      searchQuery === "" || 
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.jobApplied.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Candidates</h1>
            <p className="text-muted-foreground">
              Manage and review job applicants
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button>
              <ClipboardCheckIcon className="mr-2 h-4 w-4" />
              Bulk Actions
            </Button>
          </div>
        </div>

        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search candidates by name, email or job position..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Candidates</TabsTrigger>
            <TabsTrigger value="applied">Applied</TabsTrigger>
            <TabsTrigger value="screening">Screening</TabsTrigger>
            <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
            <TabsTrigger value="interviewed">Interviewed</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="space-y-4">
            {filteredCandidates.length > 0 ? (
              filteredCandidates.map(candidate => (
                <Card key={candidate.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={candidate.avatar} alt={candidate.name} />
                          <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{candidate.name}</h3>
                            <Badge 
                              className={statusColors[candidate.status as keyof typeof statusColors]}
                              variant="outline"
                            >
                              {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground text-sm gap-6 mt-1">
                            <div className="flex items-center gap-1">
                              <MailIcon className="h-3.5 w-3.5" />
                              <span>{candidate.email}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <PhoneIcon className="h-3.5 w-3.5" />
                              <span>{candidate.phone}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-6 mt-2 text-sm">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <BriefcaseIcon className="h-3.5 w-3.5" />
                              <span>{candidate.jobApplied}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <CalendarIcon className="h-3.5 w-3.5" />
                              <span>Applied: {formatDate(candidate.lastActivity)}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mt-3">
                            {candidate.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 ml-auto mt-4 md:mt-0">
                        <div className="flex items-center gap-1">
                          <div className="bg-muted rounded-full p-2">
                            <div className="flex flex-col items-center">
                              <span className="text-sm font-semibold">{candidate.aiScore}%</span>
                              <div className="flex items-center">
                                <StarIcon className="h-3 w-3 fill-current text-amber-500" />
                                <span className="text-xs ml-0.5">AI Score</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View Profile</Button>
                          <Button size="sm">Review</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="p-6">
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No candidates found</p>
                </div>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default CandidateManagement;
