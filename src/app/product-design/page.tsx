'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function ProductDesign() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const capabilities = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-indigo-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <path d="M7 15h.01M11 15h4"></path>
          </g>
        </svg>
      ),
      title: 'User Research & Strategy',
      description: 'Deep user insights through interviews, surveys, and analytics. We understand your users\' needs, pain points, and behaviors to inform every design decision.',
      color: 'indigo',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-purple-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M9 7h6m-6 10h6m-9-4h3m9 0h3M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </g>
        </svg>
      ),
      title: 'UX/UI Design',
      description: 'Beautiful, intuitive interfaces that delight users. From wireframes to high-fidelity mockups, we craft experiences that are both functional and memorable.',
      color: 'purple',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-blue-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M15.39 4.39a1 1 0 0 0 1.68-.474a2.5 2.5 0 1 1 3.014 3.015a1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474a2.5 2.5 0 1 0-3.014 3.015a1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474a2.5 2.5 0 1 1-3.014-3.015a1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474a2.5 2.5 0 1 0 3.014-3.015a1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
          </g>
        </svg>
      ),
      title: 'Design Systems',
      description: 'Scalable component libraries and design guidelines that ensure consistency across your product. Speed up development while maintaining quality.',
      color: 'blue',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-emerald-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8a8.5 8.5 0 0 1-7.6 4.7a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8a8.5 8.5 0 0 1 4.7-7.6a8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"></path>
          </g>
        </svg>
      ),
      title: 'Prototyping & Testing',
      description: 'Interactive prototypes that validate ideas before development. User testing sessions provide real feedback to iterate and improve.',
      color: 'emerald',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-orange-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <path d="M7 7h10M7 12h10M7 17h10"></path>
          </g>
        </svg>
      ),
      title: 'Information Architecture',
      description: 'Logical content structures and navigation flows that make complex systems simple. Users find what they need, when they need it.',
      color: 'orange',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-pink-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20"></path>
            <path d="M12 8v4m0 4h.01"></path>
          </g>
        </svg>
      ),
      title: 'Accessibility & Inclusion',
      description: 'Designs that work for everyone. We follow WCAG guidelines to ensure your product is usable by people of all abilities.',
      color: 'pink',
    },
  ];

  const process = [
    {
      title: 'Discovery',
      description: 'Understanding your users, business goals, and technical constraints.',
      deliverables: ['User personas', 'Journey maps', 'Competitive analysis'],
    },
    {
      title: 'Ideation',
      description: 'Exploring solutions through sketching, wireframing, and collaborative workshops.',
      deliverables: ['Wireframes', 'User flows', 'Information architecture'],
    },
    {
      title: 'Design',
      description: 'Creating high-fidelity designs that bring your product to life.',
      deliverables: ['UI mockups', 'Interactive prototypes', 'Design system'],
    },
    {
      title: 'Validation',
      description: 'Testing with real users to validate and refine the design.',
      deliverables: ['Usability tests', 'Feedback reports', 'Design iterations'],
    },
  ];

  return (
    <main>
      <BackgroundAnimation />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-4xl md:mx-auto reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-indigo-400">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M15.39 4.39a1 1 0 0 0 1.68-.474a2.5 2.5 0 1 1 3.014 3.015a1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474a2.5 2.5 0 1 0-3.014 3.015a1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474a2.5 2.5 0 1 1-3.014-3.015a1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474a2.5 2.5 0 1 0 3.014-3.015a1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                </g>
              </svg>
              <span className="text-sm text-indigo-300 font-medium">Product Design</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight title-gradient">
              Design That Solves Real Problems
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We craft intuitive, beautiful experiences that users love. Every pixel has purpose. 
              Every interaction is designed with care. From research to final mockups, we turn complex 
              problems into simple, elegant solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal delay-100">
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2">50+</div>
              <div className="text-sm text-slate-400">Products Designed</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2">98%</div>
              <div className="text-sm text-slate-400">User Satisfaction</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2">200+</div>
              <div className="text-sm text-slate-400">Usability Tests</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2">15+</div>
              <div className="text-sm text-slate-400">Design Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Our Design Capabilities
            </h2>
            <p className="text-slate-400 text-lg">
              End-to-end design services that cover every aspect of product development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden reveal delay-${(index % 3 + 1) * 100}`}
              >
                <div className={`w-12 h-12 bg-${capability.color}-500/10 rounded-lg flex items-center justify-center mb-6 border border-${capability.color}-500/20 group-hover:border-${capability.color}-500/40 transition-colors`}>
                  {capability.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{capability.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Our Design Process
            </h2>
            <p className="text-slate-400 text-lg">
              A proven approach that combines research, creativity, and validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className={`glass-panel rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300 reveal delay-${(index + 1) * 100}`}>
                <div className="text-4xl font-bold text-indigo-500/30 mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 mb-4">
                  {step.description}
                </p>
                <div className="space-y-2">
                  {step.deliverables.map((deliverable, delIndex) => (
                    <div key={delIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                      <span className="text-xs text-slate-500">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel rounded-2xl p-12 md:p-16 relative overflow-hidden reveal">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                  Design That Drives Results
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Our designs don't just look good—they drive business outcomes. From increased conversion 
                  rates to improved user engagement, we focus on metrics that matter.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-semibold text-indigo-400 mb-2">3.5x</div>
                  <div className="text-sm text-slate-400">Average increase in user engagement</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-purple-400 mb-2">45%</div>
                  <div className="text-sm text-slate-400">Reduction in support tickets</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-blue-400 mb-2">92%</div>
                  <div className="text-sm text-slate-400">Positive user feedback</div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a 
                  href="/work" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                >
                  View Case Studies
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="ml-2">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                  </svg>
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
