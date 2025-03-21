
import React, { useEffect, useRef } from "react";
import HandWave from "../assets/HandWave";
import WaveLines from "../assets/WaveLines";

const Hero: React.FC = () => {
  const handContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveHand = (e: MouseEvent) => {
      if (!handContainerRef.current) return;
      
      const bounds = handContainerRef.current.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      
      // Only apply the effect if mouse is over the container
      if (x > 0 && x < bounds.width && y > 0 && y < bounds.height) {
        const translateX = (x / bounds.width - 0.5) * 20;
        const translateY = (y / bounds.height - 0.5) * 20;
        
        handContainerRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    };

    window.addEventListener("mousemove", moveHand);
    
    return () => {
      window.removeEventListener("mousemove", moveHand);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <WaveLines className="absolute -z-10 top-0 left-0 right-0 w-full opacity-50" />
      
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
        <div className="flex flex-col justify-center lg:pr-8 animate-fade-up">
          <h1 className="mb-6 font-bold text-center lg:text-left">
            Bridge the <span className="text-signspeak-blue">Communication Gap</span>
          </h1>
          
          <p className="text-lg mb-8 text-signspeak-gray-dark max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            SignSpeak uses AI to translate sign language to text and speech in real-time, 
            making communication accessible for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#demo" className="btn-primary">
              Try the Demo
            </a>
            <a href="#features" className="btn-secondary">
              Learn More
            </a>
          </div>
          
          <div className="mt-12 text-sm text-signspeak-gray-dark flex items-center justify-center lg:justify-start gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            Powered by advanced AI & computer vision technology
          </div>
        </div>
        
        <div 
          ref={handContainerRef}
          className="relative flex items-center justify-center transition-transform duration-200 ease-out"
        >
          <div className="absolute w-80 h-80 bg-signspeak-blue/5 rounded-full"></div>
          <div className="absolute w-64 h-64 bg-signspeak-blue/10 rounded-full animate-pulse-soft"></div>
          
          <div className="glass-card p-8 relative z-10 animate-float">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex h-20 w-20">
                  <span className="animate-ripple absolute inline-flex h-full w-full rounded-full bg-signspeak-blue/10"></span>
                </span>
              </div>
              
              <HandWave className="absolute w-full h-full animate-wave" />
              
              <div className="glass-card bg-white p-3 absolute -bottom-4 left-1/2 transform -translate-x-1/2 shadow-lg rounded-full">
                <div className="text-sm font-medium px-3">Hello!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
