
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import Demo from "../components/Demo";
import Impact from "../components/Impact";
import Footer from "../components/Footer";

const Index: React.FC = () => {
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
  
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Demo />
      <Impact />
      <Footer />
    </main>
  );
};

export default Index;
