
import React from "react";
import { Camera, Mic, MessageCircle } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Camera className="w-10 h-10 text-signspeak-blue" />,
      title: "Sign Language Recognition",
      description:
        "Advanced computer vision technology recognizes sign language gestures and hand movements with remarkable accuracy.",
      delay: "0"
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-signspeak-blue" />,
      title: "Real-time Translation",
      description:
        "Instant translation of sign language to text allows for seamless communication without delays.",
      delay: "150"
    },
    {
      icon: <Mic className="w-10 h-10 text-signspeak-blue" />,
      title: "Speech Synthesis",
      description:
        "Natural-sounding voice output converts translated text to speech, enabling verbal communication.",
      delay: "300"
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute -z-10 top-0 left-0 w-full h-96 bg-gradient-to-b from-signspeak-blue/5 to-transparent"></div>
      
      <div className="section-container">
        <div className="section-title">
          <h2>How SignSpeak Works</h2>
          <p>Our AI-powered technology makes communication effortless</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card" 
              style={{ animationDelay: `${feature.delay}ms` }}
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <div className="mb-6 p-3 bg-signspeak-blue/10 w-fit rounded-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-signspeak-gray-dark">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 glass-card border-signspeak-blue/20 bg-gradient-to-r from-signspeak-blue/5 to-transparent">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3">Seamless Integration</h3>
              <p className="text-signspeak-gray-dark mb-4">
                SignSpeak works across multiple platforms and devices, making it accessible wherever you need it.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-signspeak-blue"></span>
                  Works on smartphones, tablets, and computers
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-signspeak-blue"></span>
                  No internet connection required for basic functionality
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-signspeak-blue"></span>
                  Supports multiple sign language dialects
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-signspeak-blue/10 rounded-full animate-pulse-soft"></div>
                <img src="https://placehold.co/300x200/4AA7FF/FFFFFF/?text=SignSpeak+Demo&font=playfair" alt="SignSpeak Integration" className="rounded-lg shadow-lg relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
