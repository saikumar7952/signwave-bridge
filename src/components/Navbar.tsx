
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 backdrop-blur-lg bg-white/80 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-signspeak-blue-dark flex items-center gap-1"
        >
          <span className="text-signspeak-blue animate-hand-sign">Sign2</span>Speak
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-medium hover:text-signspeak-blue">
            Features
          </a>
          <a href="#use-cases" className="font-medium hover:text-signspeak-blue">
            Use Cases
          </a>
          <a href="#demo" className="font-medium hover:text-signspeak-blue">
            Demo
          </a>
          <a href="#impact" className="font-medium hover:text-signspeak-blue">
            Impact
          </a>
          <a href="#" className="btn-primary">
            Try Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-signspeak-blue"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <a
            href="#features"
            className="py-3 px-4 hover:bg-signspeak-gray rounded-lg"
            onClick={toggleMobileMenu}
          >
            Features
          </a>
          <a
            href="#use-cases"
            className="py-3 px-4 hover:bg-signspeak-gray rounded-lg"
            onClick={toggleMobileMenu}
          >
            Use Cases
          </a>
          <a
            href="#demo"
            className="py-3 px-4 hover:bg-signspeak-gray rounded-lg"
            onClick={toggleMobileMenu}
          >
            Demo
          </a>
          <a
            href="#impact"
            className="py-3 px-4 hover:bg-signspeak-gray rounded-lg"
            onClick={toggleMobileMenu}
          >
            Impact
          </a>
          <a
            href="#"
            className="btn-primary text-center"
            onClick={toggleMobileMenu}
          >
            Try Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
