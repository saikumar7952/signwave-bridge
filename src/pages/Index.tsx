
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  Check,
  Handshake, 
  Ear, 
  Volume2, 
  Book, 
  Users, 
  Calendar,
  X,
  Info
} from "lucide-react";
import WaveLines from "@/assets/WaveLines";
import HandWave from "@/assets/HandWave";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      // Check if the anchor has a hash and is an internal link
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for navbar
          behavior: 'smooth'
        });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Add animate-on-scroll behavior
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          entry.target.classList.remove('opacity-0');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // Check if the user has seen the onboarding before
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeenOnboarding) {
      // Wait a second before showing the onboarding
      const timer = setTimeout(() => {
        setShowOnboarding(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem('hasSeenOnboarding', 'true');
  };

  const featureCards = [
    {
      title: "Visualization Tools",
      description: "Symbol-based communication for mute users",
      icon: Handshake,
      path: "/visualization"
    },
    {
      title: "Deaf Accessibility",
      description: "AI sign language-to-text & live subtitles",
      icon: Ear,
      path: "/deaf-accessibility"
    },
    {
      title: "Speech Output",
      description: "Convert sign language to speech in real-time",
      icon: Volume2,
      path: "/speech-output"
    },
    {
      title: "Learning Hub",
      description: "Interactive sign language learning resources",
      icon: Book,
      path: "/learning"
    },
    {
      title: "Community",
      description: "Connect with others and share experiences",
      icon: Users,
      path: "/community"
    },
    {
      title: "Resources & Events",
      description: "Discover articles, events, and support",
      icon: Calendar,
      path: "/resources"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Mobile toggle for sidebar */}
      <div className="flex justify-between items-center md:hidden p-4">
        <SidebarTrigger className="inline-flex" />
        <h1 className="text-xl font-bold">Sign2Speak</h1>
        <div className="w-10"></div> {/* Spacer for balance */}
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 md:pt-20 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 z-0"></div>
        <WaveLines className="absolute right-0 top-1/4 opacity-20 z-0 hidden lg:block" />
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl" data-aos="true">
              <div className="flex items-center mb-4">
                <HandWave className="w-12 h-12 text-signspeak-blue mr-4 animate-wave" />
                <h1 className="text-4xl md:text-5xl font-bold">Sign2Speak</h1>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-signspeak-blue-dark">
                Breaking barriers through AI
              </h2>
              <p className="text-lg mb-8 text-gray-700">
                A revolutionary platform empowering Deaf and Mute individuals through 
                AI-driven sign language translation and speech synthesis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate("/visualization")}>
                  Get Started
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/learning")}>
                  Learn Sign Language
                </Button>
              </div>
            </div>
            
            <div className="relative w-full max-w-md" data-aos="true">
              <div className="glass-card p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="mb-4">
                  At Sign2Speak, we're committed to creating a more inclusive world by breaking 
                  down communication barriers for Deaf and Mute individuals.
                </p>
                <p>
                  Through cutting-edge AI technology, we transform sign language into text and speech, 
                  enabling seamless communication for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-12 px-4 md:px-8 bg-gradient-to-b from-white to-signspeak-gray-light">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" data-aos="true">
            How Sign2Speak Helps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <Card 
                key={index} 
                className="feature-card cursor-pointer hover:border-signspeak-blue" 
                data-aos="true"
                onClick={() => navigate(card.path)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <div className="p-2 rounded-full bg-signspeak-blue/10 mr-4">
                      <card.icon className="h-6 w-6 text-signspeak-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                      <p className="text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-signspeak-blue text-white text-center" data-aos="true">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to break communication barriers?</h2>
          <p className="text-xl mb-8">
            Join thousands of users who are already experiencing seamless communication with Sign2Speak.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-signspeak-blue hover:bg-white/90"
            onClick={() => navigate("/visualization")}
          >
            Start Communicating Now
          </Button>
        </div>
      </section>

      {/* Onboarding Guide Modal */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold flex items-center">
                  <Info className="w-6 h-6 mr-2 text-signspeak-blue" />
                  Welcome to Sign2Speak!
                </h2>
                <Button variant="ghost" size="icon" onClick={closeOnboarding}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg">
                  Let us show you how to get the most out of our platform:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="p-1 rounded-full bg-green-100 mr-3 mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p><strong>Sidebar Navigation</strong>: Use the sidebar on the left to navigate between different sections.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-1 rounded-full bg-green-100 mr-3 mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p><strong>Visualization Tools</strong>: For mute users, our symbol-based communication tools help express thoughts easily.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-1 rounded-full bg-green-100 mr-3 mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p><strong>Deaf Accessibility</strong>: Convert sign language to text and access live subtitles.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-1 rounded-full bg-green-100 mr-3 mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p><strong>Speech Output</strong>: Our AI can convert your gestures into spoken words.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-1 rounded-full bg-green-100 mr-3 mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p><strong>Learning Hub</strong>: Improve your sign language skills with interactive tutorials.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button onClick={closeOnboarding}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Help Button */}
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            className="fixed bottom-8 right-8 rounded-full shadow-lg bg-signspeak-blue hover:bg-signspeak-blue-dark"
            size="icon"
          >
            <Info className="h-5 w-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-2">
            <h3 className="font-medium text-lg">Need Help?</h3>
            <p className="text-muted-foreground text-sm">
              Click on the sidebar navigation to explore different features or use the quick access cards above.
            </p>
            <Button 
              className="w-full mt-2" 
              variant="outline"
              onClick={() => setShowOnboarding(true)}
            >
              Show Onboarding Guide
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Index;
