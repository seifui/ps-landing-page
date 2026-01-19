'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function Process() {
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

  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your vision, goals, and users. Through research and strategic planning, we define the product roadmap and success metrics.',
      deliverables: [
        'Product strategy document',
        'User research insights',
        'Competitive analysis',
        'Technical feasibility assessment',
        'Project timeline and milestones',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21l-4.35-4.35M11 8a3 3 0 0 0-3 3"></path>
          </g>
        </svg>
      ),
      color: 'indigo',
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'We craft intuitive user experiences and beautiful interfaces. Every interaction is designed with purpose, tested with real users, and refined based on feedback.',
      deliverables: [
        'Wireframes and user flows',
        'High-fidelity UI designs',
        'Interactive prototypes',
        'Design system components',
        'Usability testing reports',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M15.39 4.39a1 1 0 0 0 1.68-.474a2.5 2.5 0 1 1 3.014 3.015a1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474a2.5 2.5 0 1 0-3.014 3.015a1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474a2.5 2.5 0 1 1-3.014-3.015a1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474a2.5 2.5 0 1 0 3.014-3.015a1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
          </g>
        </svg>
      ),
      color: 'purple',
    },
    {
      number: '03',
      title: 'Development & Integration',
      description: 'Our engineers build scalable, secure, and performant applications using modern frameworks. We follow best practices and write clean, maintainable code.',
      deliverables: [
        'Frontend and backend development',
        'API design and integration',
        'Database architecture',
        'Third-party service integration',
        'Code reviews and testing',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="m16 18l6-6l-6-6M8 6l-6 6l6 6"></path>
          </g>
        </svg>
      ),
      color: 'blue',
    },
    {
      number: '04',
      title: 'Testing & Refinement',
      description: 'Quality assurance is critical. We rigorously test across devices, browsers, and scenarios to ensure everything works flawlessly before launch.',
      deliverables: [
        'Automated test suites',
        'Cross-browser testing',
        'Performance optimization',
        'Security audits',
        'Bug fixes and refinements',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
            <path d="m9 11l3 3L22 4"></path>
          </g>
        </svg>
      ),
      color: 'emerald',
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'We handle deployment, monitoring, and post-launch support. Your success is our success, and we\'re here to help your product grow.',
      deliverables: [
        'Production deployment',
        'Performance monitoring',
        'User analytics setup',
        'Documentation and training',
        'Ongoing maintenance and support',
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </g>
        </svg>
      ),
      color: 'orange',
    },
  ];

  return (
    <main>
      <BackgroundAnimation />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-3xl md:mx-auto reveal">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight title-gradient">
              Our Process
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              A proven methodology that combines design thinking, agile development, and AI-assisted workflows 
              to deliver exceptional digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="reveal delay-100">
                <div className="group glass-panel rounded-2xl p-8 md:p-10 hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-${step.color}-500/10 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Step Header */}
                    <div className="flex items-start gap-6 mb-6">
                      {/* Step Number */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-${step.color}-500/10 border border-${step.color}-500/20 flex items-center justify-center`}>
                        <span className={`text-2xl font-semibold text-${step.color}-400`}>
                          {step.number}
                        </span>
                      </div>

                      {/* Step Title and Description */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`text-${step.color}-400`}>
                            {step.icon}
                          </div>
                          <h3 className="text-2xl font-medium text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="ml-[88px] mt-6 pt-6 border-t border-white/5">
                      <h4 className="text-sm font-medium text-white mb-3">Key Deliverables:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, delIndex) => (
                          <div key={delIndex} className="flex items-start gap-2">
                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${step.color}-400 flex-shrink-0`}></div>
                            <span className="text-sm text-slate-300">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connector Line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="absolute bottom-0 left-[47px] w-0.5 h-8 bg-gradient-to-b from-white/10 to-transparent translate-y-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:text-center max-w-2xl md:mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Why Our Process Works
            </h2>
            <p className="text-slate-400 text-lg">
              Built on years of experience and refined through hundreds of successful projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300 reveal delay-100">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 border border-indigo-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-indigo-400">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </g>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Faster Time to Market</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                AI-assisted workflows and agile methodology help us ship quality products 40% faster than traditional approaches.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300 reveal delay-200">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 border border-purple-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-purple-400">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zm4-1a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path>
                  </g>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">User-Centered Approach</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every decision is validated with real users, ensuring we build products people actually want to use.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300 reveal delay-300">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 border border-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-blue-400">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20m0 5v5l3 3"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Transparent Communication</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Regular updates, clear milestones, and open collaboration keep everyone aligned throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel rounded-2xl p-12 md:p-16 relative overflow-hidden reveal">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 md:text-center max-w-3xl md:mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                Let's Build Something Great
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Ready to turn your idea into reality? Let's discuss your project and see how our process 
                can help you achieve your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                >
                  Start a Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="ml-2">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                  </svg>
                </a>
                <a 
                  href="/work" 
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300"
                >
                  View Our Work
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
