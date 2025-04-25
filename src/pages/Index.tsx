
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/home/HeroSection";
import FeaturedJobsSection from "@/components/home/FeaturedJobsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-white">
      <NavBar />
      <HeroSection />
      <FeaturedJobsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
