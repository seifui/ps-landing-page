'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false); // Reset services menu when toggling main menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-[9999] border-b border-white/5 bg-[#030304]/95 backdrop-blur-md transition-all duration-300 reveal active">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <Image 
              src="/logo.svg" 
              alt="Prezso Labs" 
              width={156} 
              height={28}
              className="group-hover:opacity-80 transition-opacity"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="/about" className="hover:text-white transition-colors">About Us</a>
            <div className="relative group">
              <button className="hover:text-white transition-colors flex items-center gap-1">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="transition-transform group-hover:rotate-180">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9l6 6l6-6"></path>
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-[#030304]/95 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-xl">
                  <a href="/product-design" className="block px-4 py-2 hover:bg-white/5 rounded-lg transition-colors">Product Design</a>
                  <a href="/engineering" className="block px-4 py-2 hover:bg-white/5 rounded-lg transition-colors">Engineering</a>
                  <a href="/ai-delivery" className="block px-4 py-2 hover:bg-white/5 rounded-lg transition-colors">AI Delivery</a>
                </div>
              </div>
            </div>
            <a href="/work" className="hover:text-white transition-colors">Our Work</a>
            <a href="/process" className="hover:text-white transition-colors">Process</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="/careers" className="hidden sm:block text-xs font-medium hover:text-white transition-colors">
              Careers
            </a>
            <a href="#join" className="hidden sm:block px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-full border border-white/10 transition-all duration-300 backdrop-blur-sm">
              Talk to Us
            </a>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative w-10 h-10 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></span>
              <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside nav for proper z-index stacking */}
      <div 
        className={`md:hidden fixed inset-0 z-[9998] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        style={{ top: '64px' }}
      >
        {/* Solid background to cover all page content */}
        <div className="absolute inset-0 bg-[#030304]" />
        
        <div className={`relative z-10 flex flex-col h-full transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="flex flex-col gap-1">
              {/* About Us */}
              <a 
                href="/about" 
                onClick={closeMobileMenu}
                className="px-5 py-4 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all border border-transparent hover:border-white/10"
              >
                About Us
              </a>

              {/* Services Accordion */}
              <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                <button
                  onClick={toggleServices}
                  className="w-full px-5 py-4 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all flex items-center justify-between"
                >
                  Services
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  >
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9l6 6l6-6"></path>
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-60' : 'max-h-0'}`}>
                  <div className="bg-white/5 border-t border-white/10">
                    <a 
                      href="/product-design" 
                      onClick={closeMobileMenu}
                      className="block px-8 py-3.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all"
                    >
                      Product Design
                    </a>
                    <a 
                      href="/engineering" 
                      onClick={closeMobileMenu}
                      className="block px-8 py-3.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all"
                    >
                      Engineering
                    </a>
                    <a 
                      href="/ai-delivery" 
                      onClick={closeMobileMenu}
                      className="block px-8 py-3.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all"
                    >
                      AI Delivery
                    </a>
                  </div>
                </div>
              </div>

              {/* Our Work */}
              <a 
                href="/work" 
                onClick={closeMobileMenu}
                className="px-5 py-4 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all border border-transparent hover:border-white/10"
              >
                Our Work
              </a>

              {/* Process */}
              <a 
                href="/process" 
                onClick={closeMobileMenu}
                className="px-5 py-4 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all border border-transparent hover:border-white/10"
              >
                Process
              </a>

              {/* Careers */}
              <a 
                href="/careers" 
                onClick={closeMobileMenu}
                className="px-5 py-4 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all border border-transparent hover:border-white/10"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Talk to Us Button - Fixed at bottom */}
          <div className="border-t border-white/10 p-6 bg-[#030304]">
            <a 
              href="#join" 
              onClick={closeMobileMenu}
              className="block w-full text-center px-6 py-4 bg-white/10 hover:bg-white/20 text-white text-base font-semibold rounded-2xl border border-white/20 transition-all duration-300 shadow-lg"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
