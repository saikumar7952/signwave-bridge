
import React, { useState, useRef, useEffect } from "react";
import { Camera, Mic, Volume, Video } from "lucide-react";

const Demo: React.FC = () => {
  const [activeTab, setActiveTab] = useState("visualization");
  const videoRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (videoRef.current && dotsRef.current) {
      // Simulate hand tracking dots
      const createDot = () => {
        if (!dotsRef.current) return;
        
        const dot = document.createElement("div");
        dot.className = "absolute h-2 w-2 rounded-full bg-signspeak-blue/70";
        
        // Random position within the video container
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;
        
        dotsRef.current.appendChild(dot);
        
        // Animate and remove dot
        setTimeout(() => {
          dot.classList.add("opacity-0");
          setTimeout(() => {
            if (dotsRef.current && dotsRef.current.contains(dot)) {
              dotsRef.current.removeChild(dot);
            }
          }, 500);
        }, 2000);
      };
      
      // Create dots periodically
      const interval = setInterval(() => {
        for (let i = 0; i < 3; i++) {
          createDot();
        }
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, []);
  
  return (
    <section id="demo" className="py-20 relative overflow-hidden">
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-signspeak-blue/5 to-transparent"></div>
      
      <div className="section-container">
        <div className="section-title">
          <h2>Experience SignSpeak</h2>
          <p>See how our technology recognizes and translates sign language in real-time</p>
        </div>
        
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "visualization"
                  ? "bg-signspeak-blue text-white"
                  : "bg-white border border-signspeak-blue/20 text-signspeak-blue-dark hover:bg-signspeak-blue/5"
              }`}
              onClick={() => setActiveTab("visualization")}
            >
              <Camera className="inline-block mr-2 h-4 w-4" />
              Visualization
            </button>
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "realtime"
                  ? "bg-signspeak-blue text-white"
                  : "bg-white border border-signspeak-blue/20 text-signspeak-blue-dark hover:bg-signspeak-blue/5"
              }`}
              onClick={() => setActiveTab("realtime")}
            >
              <Video className="inline-block mr-2 h-4 w-4" />
              Real-time Demo
            </button>
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "speech"
                  ? "bg-signspeak-blue text-white"
                  : "bg-white border border-signspeak-blue/20 text-signspeak-blue-dark hover:bg-signspeak-blue/5"
              }`}
              onClick={() => setActiveTab("speech")}
            >
              <Mic className="inline-block mr-2 h-4 w-4" />
              Speech Output
            </button>
          </div>
          
          <div className="glass-card p-8 bg-white/90">
            {activeTab === "visualization" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative" ref={videoRef}>
                  <div className="aspect-video bg-signspeak-gray rounded-lg flex items-center justify-center overflow-hidden">
                    <img src="https://placehold.co/600x400/4AA7FF/FFFFFF/?text=Hand+Tracking&font=playfair" alt="Hand tracking visualization" className="w-full h-full object-cover" />
                    <div ref={dotsRef} className="absolute inset-0 pointer-events-none">
                      {/* Dots will be added here dynamically */}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">Hand Tracking Technology</h3>
                  <p className="text-signspeak-gray-dark mb-6">
                    Our advanced computer vision algorithm identifies and tracks hand movements
                    with precision, detecting subtle gestures that make up sign language.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-signspeak-blue"></div>
                      <div className="text-sm">Real-time joint tracking</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-signspeak-blue"></div>
                      <div className="text-sm">Advanced gesture recognition</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-signspeak-blue"></div>
                      <div className="text-sm">Works in various lighting conditions</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "realtime" && (
              <div className="flex flex-col items-center">
                <div className="aspect-video w-full max-w-2xl bg-signspeak-gray rounded-lg flex items-center justify-center mb-8">
                  <div className="text-center">
                    <Camera className="mx-auto mb-4 h-12 w-12 text-signspeak-blue animate-pulse" />
                    <p className="text-signspeak-gray-dark">
                      Camera access required to demonstrate real-time translation
                    </p>
                    <button className="mt-4 btn-primary">
                      Enable Camera
                    </button>
                  </div>
                </div>
                <div className="glass-card p-4 w-full max-w-2xl bg-white border border-signspeak-blue/10">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-signspeak-blue/10 rounded-full">
                      <Volume className="h-5 w-5 text-signspeak-blue" />
                    </div>
                    <div className="text-xl">
                      Translation will appear here...
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "speech" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">Natural Speech Output</h3>
                  <p className="text-signspeak-gray-dark mb-6">
                    SignSpeak converts recognized sign language into natural-sounding speech,
                    enabling seamless verbal communication.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-signspeak-gray rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-3 w-3 rounded-full bg-signspeak-blue animate-pulse"></div>
                        <div className="font-medium">Example Translation</div>
                      </div>
                      <p className="italic">"Hello, my name is Sarah. Nice to meet you."</p>
                      <button className="mt-3 flex items-center gap-2 text-signspeak-blue">
                        <Volume className="h-4 w-4" />
                        Play audio
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-signspeak-gray rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative h-32 w-32">
                        <div className="absolute inset-0 bg-signspeak-blue/20 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Mic className="h-16 w-16 text-signspeak-blue" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-signspeak-blue/30 to-transparent">
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                            <div 
                              key={i}
                              className="w-1 bg-white rounded-full" 
                              style={{ 
                                height: `${Math.sin(i * 0.9) * 10 + 15}px`,
                                animationDelay: `${i * 0.1}s`,
                                animation: "float 1s infinite ease-in-out"
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-signspeak-gray-dark mb-6 max-w-2xl mx-auto">
              This is a demonstration of our technology. The full version of SignSpeak
              offers even more features and improved accuracy.
            </p>
            <a href="#" className="btn-primary">
              Try Full Version
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
