
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      description: "For individuals exploring job opportunities",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "5 job applications per month",
        "Basic resume builder",
        "Job alerts",
        "Limited candidate profile"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Professional",
      description: "For active job seekers",
      monthlyPrice: 19.99,
      annualPrice: 14.99,
      features: [
        "Unlimited job applications",
        "Advanced resume builder",
        "Priority job alerts",
        "Enhanced profile visibility",
        "AI interview preparation",
        "Personalized job matches"
      ],
      buttonText: "Start 14-Day Trial",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For recruiters and companies",
      monthlyPrice: 99.99,
      annualPrice: 79.99,
      features: [
        "All Professional features",
        "AI-powered candidate matching",
        "Unlimited job postings",
        "Team collaboration tools",
        "Advanced analytics dashboard",
        "Dedicated account manager",
        "API access"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neurohire-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 mb-8">Find the perfect plan for your recruitment needs</p>
            
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className={`text-sm ${isAnnual ? 'text-gray-500' : 'text-gray-900 font-semibold'}`}>Monthly</span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <span className={`text-sm ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Annual <span className="text-neurohire-600 ml-1">Save 25%</span>
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`p-6 ${plan.popular ? 'border-neurohire-400 shadow-lg ring-2 ring-neurohire-200' : 'border-gray-200'} relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-neurohire-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4 h-12">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                  {isAnnual && <p className="text-xs text-neurohire-600 mt-1">Billed annually</p>}
                </div>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-neurohire-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant as "default" | "outline"} 
                  className={`w-full ${plan.buttonVariant === "default" ? "bg-neurohire-600 hover:bg-neurohire-700" : ""}`}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "Can I switch plans anytime?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle."
                },
                {
                  q: "Do you offer refunds?",
                  a: "We offer a 30-day money-back guarantee if you're not satisfied with our services."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, UPI, NetBanking, and PayPal."
                },
                {
                  q: "Is there a contract or commitment?",
                  a: "No, all our plans are subscription-based and can be cancelled at any time without penalty."
                }
              ].map((faq, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Need a custom solution for your enterprise?</p>
            <Button className="bg-neurohire-600 hover:bg-neurohire-700">Contact Our Sales Team</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
