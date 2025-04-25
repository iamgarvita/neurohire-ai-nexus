
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeIcon, Key, Server, Zap } from 'lucide-react';

const API = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neurohire-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">NeuroHire API</h1>
            <p className="text-xl text-gray-600 mb-6">Integrate our powerful AI recruitment tools into your applications</p>
            <div className="flex justify-center gap-4">
              <Button className="bg-neurohire-600 hover:bg-neurohire-700">Get API Keys</Button>
              <Button variant="outline">View Documentation</Button>
            </div>
          </div>
          
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">What can you build?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Zap className="w-10 h-10 text-neurohire-600" />,
                  title: "Resume Parsing",
                  description: "Extract structured data from resumes and CVs with our ML-powered parser."
                },
                {
                  icon: <Server className="w-10 h-10 text-neurohire-600" />,
                  title: "Job Matching",
                  description: "Match candidates to jobs using our advanced AI scoring algorithm."
                },
                {
                  icon: <CodeIcon className="w-10 h-10 text-neurohire-600" />,
                  title: "Skills Assessment",
                  description: "Integrate technical and soft skills assessment tools into your platform."
                }
              ].map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-all border-l-4 border-neurohire-400">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">API Examples</h2>
            
            <Tabs defaultValue="rest" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="rest">REST API</TabsTrigger>
                <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
              </TabsList>
              <TabsContent value="rest" className="p-4 bg-gray-800 rounded-md text-white overflow-x-auto">
                <pre>{`
curl -X POST https://api.neurohire.ai/v1/parse-resume \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "document_url": "https://example.com/resume.pdf"
  }'
                `}</pre>
              </TabsContent>
              <TabsContent value="nodejs" className="p-4 bg-gray-800 rounded-md text-white overflow-x-auto">
                <pre>{`
const { NeuroHireClient } = require('neurohire-node');

const client = new NeuroHireClient('YOUR_API_KEY');

async function parseResume() {
  const result = await client.parseResume({
    documentUrl: 'https://example.com/resume.pdf'
  });
  
  console.log(result.data);
}

parseResume();
                `}</pre>
              </TabsContent>
              <TabsContent value="python" className="p-4 bg-gray-800 rounded-md text-white overflow-x-auto">
                <pre>{`
import neurohire

# Initialize client
client = neurohire.Client(api_key='YOUR_API_KEY')

# Parse a resume
result = client.parse_resume(
    document_url='https://example.com/resume.pdf'
)

print(result.data)
                `}</pre>
              </TabsContent>
            </Tabs>
          </div>

          <div className="bg-neurohire-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
                <p className="text-gray-600 mb-4 md:mb-0">Sign up for a developer account and get 100 free API calls per month.</p>
              </div>
              <div className="flex gap-4">
                <Button className="bg-neurohire-600 hover:bg-neurohire-700">
                  <Key className="w-4 h-4 mr-2" />
                  Get API Keys
                </Button>
                <Button variant="outline">View Documentation</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default API;
