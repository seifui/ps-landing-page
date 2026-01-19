'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function Engineering() {
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

  const expertise = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-blue-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M9 3v18"></path>
          </g>
        </svg>
      ),
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with React, Next.js, and TypeScript. We create fast, accessible interfaces that work seamlessly across all devices.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'blue',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-emerald-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          </g>
        </svg>
      ),
      title: 'Backend Development',
      description: 'Scalable server-side applications and APIs. From Node.js to Python, we build robust backends that handle millions of requests with ease.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
      color: 'emerald',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-purple-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M9 8h7M9 12h6M9 16h3"></path>
          </g>
        </svg>
      ),
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android. Beautiful experiences that feel right at home on any device.',
      technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
      color: 'purple',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-orange-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </g>
        </svg>
      ),
      title: 'Cloud & DevOps',
      description: 'Automated CI/CD pipelines, containerization, and cloud infrastructure. We ensure your applications are always available and performant.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
      color: 'orange',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-indigo-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20m5 10a5 5 0 1 0-10 0a5 5 0 0 0 10 0"></path>
          </g>
        </svg>
      ),
      title: 'API Development',
      description: 'RESTful and GraphQL APIs designed for performance and developer experience. Clean documentation and versioning built in.',
      technologies: ['REST', 'GraphQL', 'OpenAPI', 'Webhooks'],
      color: 'indigo',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-pink-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20"></path>
            <path d="m9 12l2 2l4-4"></path>
          </g>
        </svg>
      ),
      title: 'Testing & QA',
      description: 'Comprehensive testing strategies including unit, integration, and end-to-end tests. We catch bugs before your users do.',
      technologies: ['Jest', 'Cypress', 'Playwright', 'Testing Library'],
      color: 'pink',
    },
  ];

  const principles = [
    {
      title: 'Clean Code',
      description: 'We write code that\'s easy to read, maintain, and scale. Every line is intentional.',
    },
    {
      title: 'Performance First',
      description: 'Speed matters. We optimize for fast load times and smooth interactions.',
    },
    {
      title: 'Security by Design',
      description: 'Security isn\'t an afterthought. We follow best practices from day one.',
    },
    {
      title: 'Automated Everything',
      description: 'From testing to deployment, automation ensures consistency and reliability.',
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-blue-400">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="m16 18l6-6l-6-6M8 6l-6 6l6 6"></path>
                </g>
              </svg>
              <span className="text-sm text-blue-300 font-medium">Engineering</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight title-gradient">
              Engineering Excellence at Scale
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We build robust, scalable applications that grow with your business. From elegant frontend 
              experiences to powerful backend systems, our engineers craft solutions that are fast, 
              secure, and built to last.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal delay-100">
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2">100+</div>
              <div className="text-sm text-slate-400">Applications Built</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2">99.9%</div>
              <div className="text-sm text-slate-400">Uptime SLA</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2">&lt;100ms</div>
              <div className="text-sm text-slate-400">Avg Response Time</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2">500K+</div>
              <div className="text-sm text-slate-400">Lines of Code</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Our Technical Expertise
            </h2>
            <p className="text-slate-400 text-lg">
              Full-stack development capabilities across modern technologies and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className={`group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden reveal delay-${(index % 3 + 1) * 100}`}
              >
                <div className={`w-12 h-12 bg-${item.color}-500/10 rounded-lg flex items-center justify-center mb-6 border border-${item.color}-500/20 group-hover:border-${item.color}-500/40 transition-colors`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Engineering Principles
            </h2>
            <p className="text-slate-400 text-lg">
              The values that guide how we build software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className={`glass-panel rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300 reveal delay-${(index + 1) * 100}`}>
                <div className="text-4xl font-bold text-blue-500/30 mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{principle.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel rounded-2xl p-12 md:p-16 relative overflow-hidden reveal">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                  Built With Modern Technologies
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  We stay current with the latest tools and frameworks, but we don't chase hype. 
                  Every technology choice is made with your project's long-term success in mind.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div>
                  <h3 className="text-sm font-medium text-white mb-4">Frontend</h3>
                  <div className="space-y-2">
                    {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        <span className="text-sm text-slate-400">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white mb-4">Backend</h3>
                  <div className="space-y-2">
                    {['Node.js / Express', 'Python / FastAPI', 'PostgreSQL', 'Redis / MongoDB'].map((tech, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                        <span className="text-sm text-slate-400">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white mb-4">Infrastructure</h3>
                  <div className="space-y-2">
                    {['AWS / Vercel', 'Docker / K8s', 'GitHub Actions', 'Terraform'].map((tech, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                        <span className="text-sm text-slate-400">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/work" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                >
                  View Projects
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="ml-2">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                  </svg>
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300"
                >
                  Discuss Your Project
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
