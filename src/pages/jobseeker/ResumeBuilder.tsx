
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DashboardLayout from '@/components/DashboardLayout';
import { getResume } from '@/data/mockData';
import { Skill } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';
import { Loader2Icon, PlusIcon, XIcon, BrainIcon } from 'lucide-react';

const ResumeBuilder = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Get existing resume or create a default one
  const existingResume = user ? getResume(user.id) : null;
  
  const [resumeData, setResumeData] = useState({
    name: existingResume?.name || user?.name || '',
    email: existingResume?.email || user?.email || '',
    phone: existingResume?.phone || '',
    education: existingResume?.education || [{ degree: '', institution: '', year: '' }],
    experience: existingResume?.experience || [{ title: '', company: '', duration: '', description: '' }],
    skills: existingResume?.skills || [] as Skill[],
    certifications: existingResume?.certifications || [] as string[],
    languages: existingResume?.languages || [] as string[],
  });
  
  const [newSkill, setNewSkill] = useState('');
  const [skillLevel, setSkillLevel] = useState<'beginner' | 'intermediate' | 'advanced' | 'expert'>('intermediate');
  const [newCertification, setNewCertification] = useState('');
  const [newLanguage, setNewLanguage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Add a new education field
  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { degree: '', institution: '', year: '' }]
    });
  };
  
  // Remove an education field
  const removeEducation = (index: number) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation.splice(index, 1);
    setResumeData({ ...resumeData, education: updatedEducation });
  };
  
  // Update an education field
  const updateEducation = (index: number, field: string, value: string) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setResumeData({ ...resumeData, education: updatedEducation });
  };
  
  // Add a new experience field
  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { title: '', company: '', duration: '', description: '' }]
    });
  };
  
  // Remove an experience field
  const removeExperience = (index: number) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience.splice(index, 1);
    setResumeData({ ...resumeData, experience: updatedExperience });
  };
  
  // Update an experience field
  const updateExperience = (index: number, field: string, value: string) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index] = { ...updatedExperience[index], [field]: value };
    setResumeData({ ...resumeData, experience: updatedExperience });
  };
  
  // Add a skill
  const addSkill = () => {
    if (!newSkill.trim()) return;
    
    const skill: Skill = {
      id: Date.now().toString(),
      name: newSkill.trim(),
      level: skillLevel
    };
    
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skill]
    });
    
    setNewSkill('');
  };
  
  // Remove a skill
  const removeSkill = (id: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter(skill => skill.id !== id)
    });
  };
  
  // Add a certification
  const addCertification = () => {
    if (!newCertification.trim()) return;
    
    setResumeData({
      ...resumeData,
      certifications: [...resumeData.certifications, newCertification.trim()]
    });
    
    setNewCertification('');
  };
  
  // Remove a certification
  const removeCertification = (index: number) => {
    const updatedCertifications = [...resumeData.certifications];
    updatedCertifications.splice(index, 1);
    setResumeData({ ...resumeData, certifications: updatedCertifications });
  };
  
  // Add a language
  const addLanguage = () => {
    if (!newLanguage.trim()) return;
    
    setResumeData({
      ...resumeData,
      languages: [...resumeData.languages, newLanguage.trim()]
    });
    
    setNewLanguage('');
  };
  
  // Remove a language
  const removeLanguage = (index: number) => {
    const updatedLanguages = [...resumeData.languages];
    updatedLanguages.splice(index, 1);
    setResumeData({ ...resumeData, languages: updatedLanguages });
  };
  
  // Save resume
  const saveResume = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Resume Saved",
        description: "Your resume has been saved successfully!",
      });
      setIsSaving(false);
      navigate('/jobseeker/dashboard');
    }, 1500);
  };
  
  // Generate AI suggestions
  const generateAiSuggestions = () => {
    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // In a real implementation, this would call an AI service
      // For now, just add some sample suggestions
      const suggestedSkills: Skill[] = [
        { id: 'ai-1', name: 'Problem Solving', level: 'advanced' },
        { id: 'ai-2', name: 'Teamwork', level: 'expert' },
        { id: 'ai-3', name: 'Communication', level: 'advanced' },
      ];
      
      // Filter out skills that are already added
      const newSuggestedSkills = suggestedSkills.filter(
        suggested => !resumeData.skills.some(existing => existing.name.toLowerCase() === suggested.name.toLowerCase())
      );
      
      if (newSuggestedSkills.length > 0) {
        setResumeData({
          ...resumeData,
          skills: [...resumeData.skills, ...newSuggestedSkills]
        });
        
        toast({
          title: "AI Suggestions Added",
          description: `Added ${newSuggestedSkills.length} suggested skills to your resume.`,
        });
      } else {
        toast({
          title: "No New Suggestions",
          description: "All suggested skills are already in your resume.",
        });
      }
      
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
        <p className="text-gray-600 mt-1">Create and update your professional resume</p>
      </div>
      
      <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <BrainIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h2 className="text-lg font-semibold text-blue-900">AI-Powered Resume Builder</h2>
        </div>
        <p className="text-blue-700 mb-3">
          Our AI can analyze your resume and suggest improvements to help you stand out to recruiters.
        </p>
        <Button 
          onClick={generateAiSuggestions} 
          variant="outline" 
          className="bg-white border-blue-300 text-blue-700 hover:bg-blue-50"
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              Generating Suggestions...
            </>
          ) : (
            <>Generate AI Suggestions</>
          )}
        </Button>
      </div>
      
      <Tabs defaultValue="personal" className="mb-6">
        <TabsList className="w-full md:w-auto mb-6">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills & Qualifications</TabsTrigger>
        </TabsList>
        
        {/* Personal Information */}
        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Enter your basic contact information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={resumeData.name} 
                    onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={resumeData.email} 
                    onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    value={resumeData.phone} 
                    onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Education */}
        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>
                Add your educational background
              </CardDescription>
            </CardHeader>
            <CardContent>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-6 border border-gray-200 rounded-md p-4 relative">
                  <button 
                    onClick={() => removeEducation(index)} 
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                    type="button"
                  >
                    <XIcon className="h-4 w-4" />
                  </button>
                  
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor={`degree-${index}`}>Degree / Certificate</Label>
                      <Input 
                        id={`degree-${index}`} 
                        value={edu.degree} 
                        onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor={`institution-${index}`}>Institution</Label>
                      <Input 
                        id={`institution-${index}`} 
                        value={edu.institution} 
                        onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor={`year-${index}`}>Year</Label>
                      <Input 
                        id={`year-${index}`} 
                        value={edu.year} 
                        onChange={(e) => updateEducation(index, 'year', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <Button onClick={addEducation} variant="outline" className="w-full">
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Education
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Experience */}
        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>
                Add your professional experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-6 border border-gray-200 rounded-md p-4 relative">
                  <button 
                    onClick={() => removeExperience(index)} 
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                    type="button"
                  >
                    <XIcon className="h-4 w-4" />
                  </button>
                  
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor={`title-${index}`}>Job Title</Label>
                      <Input 
                        id={`title-${index}`} 
                        value={exp.title} 
                        onChange={(e) => updateExperience(index, 'title', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor={`company-${index}`}>Company</Label>
                      <Input 
                        id={`company-${index}`} 
                        value={exp.company} 
                        onChange={(e) => updateExperience(index, 'company', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor={`duration-${index}`}>Duration</Label>
                      <Input 
                        id={`duration-${index}`} 
                        placeholder="e.g. Jan 2020 - Present" 
                        value={exp.duration} 
                        onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor={`description-${index}`}>Description</Label>
                      <Textarea 
                        id={`description-${index}`} 
                        value={exp.description} 
                        onChange={(e) => updateExperience(index, 'description', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <Button onClick={addExperience} variant="outline" className="w-full">
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Experience
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Skills */}
        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Qualifications</CardTitle>
              <CardDescription>
                Add your skills, certifications, and languages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {/* Skills Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Skills</h3>
                  
                  <div className="grid gap-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {resumeData.skills.map((skill) => (
                        <div 
                          key={skill.id}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center gap-1 text-sm"
                        >
                          <span>{skill.name}</span>
                          <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded-full">
                            {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                          </span>
                          <button 
                            onClick={() => removeSkill(skill.id)} 
                            className="ml-1 text-gray-500 hover:text-red-500"
                            type="button"
                          >
                            <XIcon className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Input 
                          placeholder="Add a skill..." 
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                        />
                      </div>
                      <div>
                        <RadioGroup 
                          value={skillLevel}
                          onValueChange={(value) => setSkillLevel(value as any)}
                          className="flex space-x-2"
                        >
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem value="beginner" id="beginner" />
                            <Label htmlFor="beginner" className="text-sm">Beginner</Label>
                          </div>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem value="intermediate" id="intermediate" />
                            <Label htmlFor="intermediate" className="text-sm">Intermediate</Label>
                          </div>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem value="advanced" id="advanced" />
                            <Label htmlFor="advanced" className="text-sm">Advanced</Label>
                          </div>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem value="expert" id="expert" />
                            <Label htmlFor="expert" className="text-sm">Expert</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <Button onClick={addSkill} type="button" variant="outline">Add</Button>
                    </div>
                  </div>
                </div>
                
                {/* Certifications Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Certifications</h3>
                  
                  <div className="grid gap-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {resumeData.certifications.map((cert, index) => (
                        <div 
                          key={index}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center gap-1 text-sm"
                        >
                          <span>{cert}</span>
                          <button 
                            onClick={() => removeCertification(index)} 
                            className="ml-1 text-gray-500 hover:text-red-500"
                            type="button"
                          >
                            <XIcon className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Input 
                          placeholder="Add a certification..." 
                          value={newCertification}
                          onChange={(e) => setNewCertification(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addCertification()}
                        />
                      </div>
                      <Button onClick={addCertification} type="button" variant="outline">Add</Button>
                    </div>
                  </div>
                </div>
                
                {/* Languages Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Languages</h3>
                  
                  <div className="grid gap-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {resumeData.languages.map((lang, index) => (
                        <div 
                          key={index}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center gap-1 text-sm"
                        >
                          <span>{lang}</span>
                          <button 
                            onClick={() => removeLanguage(index)} 
                            className="ml-1 text-gray-500 hover:text-red-500"
                            type="button"
                          >
                            <XIcon className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Input 
                          placeholder="Add a language..." 
                          value={newLanguage}
                          onChange={(e) => setNewLanguage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addLanguage()}
                        />
                      </div>
                      <Button onClick={addLanguage} type="button" variant="outline">Add</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={() => navigate('/jobseeker/dashboard')}>
          Cancel
        </Button>
        <Button onClick={saveResume} disabled={isSaving}>
          {isSaving ? (
            <>
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Save Resume"
          )}
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default ResumeBuilder;
