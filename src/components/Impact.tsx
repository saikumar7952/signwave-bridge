
import React from "react";
import { Users } from "lucide-react";

const Impact: React.FC = () => {
  const stats = [
    {
      value: "70M+",
      label: "Deaf people worldwide",
      description: "who use sign language as their primary means of communication"
    },
    {
      value: "95%",
      label: "of deaf children",
      description: "are born to hearing parents who don't know sign language"
    },
    {
      value: "80%",
      label: "of deaf individuals",
      description: "face significant communication barriers in daily life"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-signspeak-blue-dark text-white relative overflow-hidden">
      <div className="absolute -z-10 inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <div className="section-container">
        <div className="section-title">
          <h2 className="text-white">Creating Meaningful Impact</h2>
          <p className="text-white/80">SignSpeak is more than technology—it's about changing lives</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card bg-white/10 p-8 border-white/10">
              <div className="text-4xl font-bold mb-2 text-signspeak-blue-light">{stat.value}</div>
              <div className="text-xl font-medium mb-2">{stat.label}</div>
              <p className="text-white/70">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Bridging Communication Gaps</h3>
            <p className="mb-6 text-white/80">
              SignSpeak addresses a fundamental challenge faced by deaf and hard-of-hearing individuals: 
              the ability to communicate easily with the hearing world without specialized interpreters or services.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-signspeak-blue flex items-center justify-center mt-1">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Independence</h4>
                  <p className="text-white/70">
                    Empowers deaf individuals to communicate independently in various settings
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-signspeak-blue flex items-center justify-center mt-1">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Equal Access</h4>
                  <p className="text-white/70">
                    Provides equal access to services, education, and employment opportunities
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-signspeak-blue flex items-center justify-center mt-1">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Social Inclusion</h4>
                  <p className="text-white/70">
                    Facilitates stronger social connections between deaf and hearing communities
                  </p>
                </div>
              </div>
            </div>
            
            <a href="#" className="inline-block px-8 py-3 rounded-full bg-white text-signspeak-blue-dark font-medium
              transition-all duration-300 hover:bg-white/90 hover:shadow-lg active:scale-95">
              Join Our Mission
            </a>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-signspeak-blue/30 rounded-xl animate-pulse-soft"></div>
            <div className="glass-card border-white/10 p-8 relative z-10">
              <Users className="h-12 w-12 text-signspeak-blue-light mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Real Stories</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-white/10 rounded-lg">
                  <p className="italic text-white/90 mb-3">
                    "SignSpeak has transformed how I communicate at work. My colleagues now understand me directly, without needing an interpreter."
                  </p>
                  <div className="text-sm text-white/70">- Sarah, Teacher</div>
                </div>
                
                <div className="p-4 bg-white/10 rounded-lg">
                  <p className="italic text-white/90 mb-3">
                    "As a doctor, I can now communicate better with my deaf patients. It's made a significant difference in providing care."
                  </p>
                  <div className="text-sm text-white/70">- Dr. James, Physician</div>
                </div>
                
                <div className="p-4 bg-white/10 rounded-lg">
                  <p className="italic text-white/90 mb-3">
                    "For the first time, I can have spontaneous conversations with hearing people who don't know sign language."
                  </p>
                  <div className="text-sm text-white/70">- Miguel, Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
