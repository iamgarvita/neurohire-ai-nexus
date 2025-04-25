
export type UserRole = 'jobseeker' | 'admin' | 'recruiter';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Skill {
  id: string;
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface JobApplication {
  id: string;
  jobId: string;
  userId: string;
  status: 'applied' | 'screening' | 'shortlisted' | 'interviewed' | 'offered' | 'rejected';
  appliedAt: string;
  resumeUrl?: string;
  aiScore?: number;
  skillsMatched?: number;
  interviewCompleted?: boolean;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
  description: string;
  requirements: string[];
  skills: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  postedAt: string;
  deadline?: string;
  postedBy: string;
  applications?: JobApplication[];
}

export interface Resume {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone?: string;
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string;
  }[];
  skills: Skill[];
  certifications?: string[];
  languages?: string[];
}

export interface AIAnalysis {
  resumeId: string;
  jobId: string;
  skillsMatched: Skill[];
  skillsGap: Skill[];
  overallScore: number;
  feedback: string;
  recommendedJobs?: Job[];
}
