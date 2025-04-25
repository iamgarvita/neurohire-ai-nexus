import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobListings from "./pages/JobListings";
import Contact from "./pages/Contact";
import JobSeekerDashboard from "./pages/jobseeker/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import JobDetails from "./pages/jobseeker/JobDetails";
import JobApplications from "./pages/jobseeker/JobApplications";
import ResumeBuilder from "./pages/jobseeker/ResumeBuilder";
import ManageJobs from "./pages/admin/ManageJobs";
import CandidateManagement from "./pages/admin/CandidateManagement";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/contact" element={<Contact />} />

            {/* Job Seeker routes */}
            <Route 
              path="/jobseeker/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['jobseeker']}>
                  <JobSeekerDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/jobseeker/jobs/:jobId" 
              element={
                <ProtectedRoute allowedRoles={['jobseeker']}>
                  <JobDetails />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/jobseeker/applications" 
              element={
                <ProtectedRoute allowedRoles={['jobseeker']}>
                  <JobApplications />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/jobseeker/resume-builder" 
              element={
                <ProtectedRoute allowedRoles={['jobseeker']}>
                  <ResumeBuilder />
                </ProtectedRoute>
              } 
            />
            
            {/* Admin/Recruiter routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['admin', 'recruiter']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/jobs" 
              element={
                <ProtectedRoute allowedRoles={['admin', 'recruiter']}>
                  <ManageJobs />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/candidates" 
              element={
                <ProtectedRoute allowedRoles={['admin', 'recruiter']}>
                  <CandidateManagement />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
