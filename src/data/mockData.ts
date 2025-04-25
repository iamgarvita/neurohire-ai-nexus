
import { User, Job, Resume, JobApplication } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'jobseeker',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'jobseeker',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@neurohire.com',
    role: 'admin',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: '4',
    name: 'Tech Recruiter',
    email: 'recruiter@neurohire.com',
    role: 'recruiter',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
];

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA (Remote)',
    type: 'full-time',
    description: 'We are looking for an experienced Frontend Developer to join our team.',
    requirements: [
      'At least 5 years experience with React',
      'Strong understanding of HTML, CSS, and JavaScript',
      'Experience with responsive design',
      'Experience with modern frontend frameworks',
    ],
    skills: ['React', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
    salary: {
      min: 100000,
      max: 140000,
      currency: 'USD',
    },
    postedAt: '2023-04-15T10:30:00Z',
    deadline: '2023-05-15T23:59:59Z',
    postedBy: '4',
  },
  {
    id: '2',
    title: 'Machine Learning Engineer',
    company: 'AI Innovations',
    location: 'Remote',
    type: 'full-time',
    description: 'Join our AI team to build cutting-edge machine learning models.',
    requirements: [
      'Masters or PhD in Computer Science, Machine Learning or related field',
      'Experience with TensorFlow, PyTorch, or similar',
      'Strong understanding of machine learning algorithms',
      'Excellent communication skills',
    ],
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning'],
    salary: {
      min: 120000,
      max: 160000,
      currency: 'USD',
    },
    postedAt: '2023-04-10T14:20:00Z',
    deadline: '2023-05-20T23:59:59Z',
    postedBy: '3',
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'DesignHub',
    location: 'New York, NY',
    type: 'full-time',
    description: 'Create beautiful, intuitive designs for our products.',
    requirements: [
      'Portfolio demonstrating UX/UI design skills',
      'Experience with Figma, Sketch, or Adobe XD',
      'Understanding of user-centered design principles',
      'Ability to work in a fast-paced environment',
    ],
    skills: ['UX Design', 'UI Design', 'Figma', 'Sketch', 'Adobe XD'],
    salary: {
      min: 90000,
      max: 120000,
      currency: 'USD',
    },
    postedAt: '2023-04-12T09:15:00Z',
    deadline: '2023-05-12T23:59:59Z',
    postedBy: '4',
  },
  {
    id: '4',
    title: 'Backend Developer',
    company: 'ServerSide Inc',
    location: 'Austin, TX (Hybrid)',
    type: 'full-time',
    description: 'Develop robust backend systems for our growing platform.',
    requirements: [
      'Experience with Node.js, Python, or Java',
      'Familiarity with SQL and NoSQL databases',
      'Understanding of RESTful APIs and microservices',
      'Experience with cloud platforms (AWS, GCP, or Azure)',
    ],
    skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS'],
    salary: {
      min: 95000,
      max: 130000,
      currency: 'USD',
    },
    postedAt: '2023-04-08T11:45:00Z',
    deadline: '2023-05-08T23:59:59Z',
    postedBy: '3',
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudNative',
    location: 'Remote',
    type: 'full-time',
    description: 'Build and maintain our cloud infrastructure and CI/CD pipelines.',
    requirements: [
      'Experience with Docker and Kubernetes',
      'Familiarity with CI/CD pipelines',
      'Understanding of cloud platforms',
      'Knowledge of infrastructure as code',
    ],
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS'],
    salary: {
      min: 110000,
      max: 150000,
      currency: 'USD',
    },
    postedAt: '2023-04-05T13:30:00Z',
    deadline: '2023-05-05T23:59:59Z',
    postedBy: '4',
  },
];

export const mockResumes: Resume[] = [
  {
    id: '1',
    userId: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Technology',
        year: '2019',
      },
    ],
    experience: [
      {
        title: 'Frontend Developer',
        company: 'WebSolutions Inc',
        duration: 'Jan 2020 - Present',
        description: 'Developed responsive web applications using React and TypeScript.',
      },
      {
        title: 'Junior Web Developer',
        company: 'StartupX',
        duration: 'May 2019 - Dec 2019',
        description: 'Built and maintained websites using HTML, CSS, and JavaScript.',
      },
    ],
    skills: [
      { id: '1', name: 'React', level: 'advanced' },
      { id: '2', name: 'TypeScript', level: 'intermediate' },
      { id: '3', name: 'HTML', level: 'expert' },
      { id: '4', name: 'CSS', level: 'expert' },
      { id: '5', name: 'JavaScript', level: 'advanced' },
    ],
    certifications: ['React Developer Certification', 'Web Accessibility'],
    languages: ['English', 'Spanish'],
  },
  {
    id: '2',
    userId: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '987-654-3210',
    education: [
      {
        degree: 'Master of Science in Machine Learning',
        institution: 'Tech University',
        year: '2021',
      },
      {
        degree: 'Bachelor of Science in Computer Engineering',
        institution: 'State University',
        year: '2019',
      },
    ],
    experience: [
      {
        title: 'Data Scientist',
        company: 'DataTech',
        duration: 'June 2021 - Present',
        description: 'Developing machine learning models for predictive analytics.',
      },
      {
        title: 'Machine Learning Intern',
        company: 'AI Solutions',
        duration: 'Jan 2021 - May 2021',
        description: 'Assisted in the development and testing of AI algorithms.',
      },
    ],
    skills: [
      { id: '6', name: 'Python', level: 'expert' },
      { id: '7', name: 'TensorFlow', level: 'advanced' },
      { id: '8', name: 'PyTorch', level: 'intermediate' },
      { id: '9', name: 'Machine Learning', level: 'advanced' },
      { id: '10', name: 'SQL', level: 'intermediate' },
    ],
    certifications: ['TensorFlow Developer Certificate', 'AWS Machine Learning Specialty'],
    languages: ['English', 'Mandarin'],
  },
];

export const mockApplications: JobApplication[] = [
  {
    id: '1',
    jobId: '1',
    userId: '1',
    status: 'shortlisted',
    appliedAt: '2023-04-16T14:30:00Z',
    resumeUrl: '/resumes/john-doe-resume.pdf',
    aiScore: 85,
    skillsMatched: 4,
    interviewCompleted: false,
  },
  {
    id: '2',
    jobId: '2',
    userId: '2',
    status: 'interviewed',
    appliedAt: '2023-04-11T10:15:00Z',
    resumeUrl: '/resumes/jane-smith-resume.pdf',
    aiScore: 92,
    skillsMatched: 5,
    interviewCompleted: true,
  },
  {
    id: '3',
    jobId: '3',
    userId: '1',
    status: 'applied',
    appliedAt: '2023-04-13T16:45:00Z',
    resumeUrl: '/resumes/john-doe-resume.pdf',
    aiScore: 70,
    skillsMatched: 2,
    interviewCompleted: false,
  },
  {
    id: '4',
    jobId: '5',
    userId: '2',
    status: 'screening',
    appliedAt: '2023-04-06T09:30:00Z',
    resumeUrl: '/resumes/jane-smith-resume.pdf',
    aiScore: 78,
    skillsMatched: 3,
    interviewCompleted: false,
  },
];

// Helper function to get applications for a job
export const getJobApplications = (jobId: string): JobApplication[] => {
  return mockApplications.filter(app => app.jobId === jobId);
};

// Helper function to get applications for a user
export const getUserApplications = (userId: string): JobApplication[] => {
  return mockApplications.filter(app => app.userId === userId);
};

// Helper function to get job details
export const getJob = (jobId: string): Job | undefined => {
  return mockJobs.find(job => job.id === jobId);
};

// Helper function to get user details
export const getUser = (userId: string): User | undefined => {
  return mockUsers.find(user => user.id === userId);
};

// Helper function to get resume details
export const getResume = (userId: string): Resume | undefined => {
  return mockResumes.find(resume => resume.userId === userId);
};
