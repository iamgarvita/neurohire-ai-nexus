import { BrainIcon, ChartBarIcon, MicIcon, FileTextIcon, RocketIcon, StarIcon } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionizing Recruiting</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            NeuroHire combines cutting-edge AI and machine learning to create a smarter, more efficient hiring process for both job seekers and employers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
              <BrainIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Resume Analysis</h3>
            <p className="text-gray-600 mb-4">
              Our advanced AI scans resumes to extract skills, experiences, and qualifications, matching candidates with perfect job opportunities.
            </p>
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="AI Resume Analysis"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-neurohire-100 rounded-full flex items-center justify-center text-neurohire-600 mb-4">
              <ChartBarIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Skill Gap Analysis</h3>
            <p className="text-gray-600">
              Identify missing skills for your dream job and get recommendations for targeted skill development opportunities.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-neurohire-100 rounded-full flex items-center justify-center text-neurohire-600 mb-4">
              <MicIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Voice Interviews</h3>
            <p className="text-gray-600">
              Complete preliminary interviews with our AI assistant at your convenience, available 24/7 to accommodate your schedule.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-neurohire-100 rounded-full flex items-center justify-center text-neurohire-600 mb-4">
              <FileTextIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Resume Builder</h3>
            <p className="text-gray-600">
              Create professional, ATS-optimized resumes with our intelligent resume builder that highlights your most relevant skills.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-neurohire-100 rounded-full flex items-center justify-center text-neurohire-600 mb-4">
              <RocketIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Job Recommendations</h3>
            <p className="text-gray-600">
              Receive personalized job recommendations based on your skills, experience, and career goals through our ML algorithms.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-12 h-12 bg-neurohire-100 rounded-full flex items-center justify-center text-neurohire-600 mb-4">
              <StarIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Job Descriptions</h3>
            <p className="text-gray-600">
              Recruiters can generate comprehensive, bias-free job descriptions with our AI tool to attract diverse talent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
