
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>
          
          <div className="relative z-10 md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-white/90 mb-8">
              Join thousands of companies and job seekers who are already using NeuroHire to streamline their recruitment and job search.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/register">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 w-full sm:w-auto font-semibold">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto font-semibold">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Person working"
            className="absolute right-0 bottom-0 w-64 h-64 object-cover rounded-lg opacity-20 md:opacity-40 transform translate-x-1/4 translate-y-1/4"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
