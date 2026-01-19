'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function OurWork() {
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

  const caseStudies = [
    {
      client: 'TechFlow Analytics',
      industry: 'Financial Technology',
      projectName: 'Real-Time Trading Dashboard',
      overview: 'TechFlow Analytics needed a sophisticated platform to help institutional traders make split-second decisions with real-time market data and AI-powered insights.',
      challenge: 'Legacy systems couldn\'t handle the volume of real-time data from multiple exchanges, resulting in delays that cost traders millions. The platform needed to process 100,000+ data points per second while maintaining sub-100ms latency.',
      solution: 'We built a high-performance web application using Next.js and WebSocket connections, implementing advanced data visualization with D3.js and real-time anomaly detection using machine learning models. The system aggregates data from 15+ exchanges and provides predictive analytics.',
      results: [
        { metric: '99.9%', label: 'System Uptime' },
        { metric: '47ms', label: 'Avg. Latency' },
        { metric: '300%', label: 'ROI Increase' },
        { metric: '85%', label: 'Faster Decisions' },
      ],
      technologies: ['Next.js', 'TypeScript', 'Python', 'TensorFlow', 'WebSockets', 'PostgreSQL', 'Redis'],
      gradient: 'from-indigo-500/20 to-purple-500/20',
      accentColor: 'indigo',
    },
    {
      client: 'HealthBridge Medical',
      industry: 'Healthcare',
      projectName: 'Telemedicine Platform',
      overview: 'HealthBridge Medical sought to revolutionize patient care by connecting rural patients with specialists through a secure, HIPAA-compliant telemedicine platform.',
      challenge: 'Rural communities faced a critical shortage of medical specialists, with patients traveling 200+ miles for consultations. The platform needed to handle sensitive medical data, integrate with existing EHR systems, and provide high-quality video consultations even on limited bandwidth.',
      solution: 'We developed a comprehensive telemedicine ecosystem featuring encrypted video consultations, AI-powered symptom assessment, e-prescriptions, and seamless EHR integration. The platform includes mobile apps for patients and a web portal for healthcare providers, optimized for low-bandwidth connections.',
      results: [
        { metric: '50,000+', label: 'Patients Served' },
        { metric: '92%', label: 'Satisfaction Rate' },
        { metric: '70%', label: 'Cost Reduction' },
        { metric: '24/7', label: 'Availability' },
      ],
      technologies: ['React Native', 'Node.js', 'WebRTC', 'AWS', 'HL7 FHIR', 'MongoDB', 'Kubernetes'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      accentColor: 'blue',
    },
    {
      client: 'EcoMart Global',
      industry: 'E-Commerce',
      projectName: 'Sustainable Shopping Platform',
      overview: 'EcoMart Global wanted to create an e-commerce platform that not only sells sustainable products but educates consumers about their environmental impact with every purchase.',
      challenge: 'Existing e-commerce solutions couldn\'t provide real-time carbon footprint calculations or transparent supply chain tracking. The company needed a platform that could handle 50,000+ SKUs, integrate with multiple sustainable suppliers, and provide personalized recommendations based on user values.',
      solution: 'We built a custom e-commerce platform with Next.js featuring real-time carbon impact tracking, blockchain-based supply chain transparency, AI-powered sustainable product recommendations, and a unique "carbon offset" checkout option. The platform includes a mobile app and integrates with major payment providers.',
      results: [
        { metric: '2.5M', label: 'Avg. Monthly Users' },
        { metric: '180%', label: 'YoY Growth' },
        { metric: '4.2/5', label: 'Customer Rating' },
        { metric: '10 tons', label: 'CO₂ Offset/Month' },
      ],
      technologies: ['Next.js', 'React', 'Stripe', 'Blockchain', 'GraphQL', 'Prisma', 'Vercel'],
      gradient: 'from-emerald-500/20 to-teal-500/20',
      accentColor: 'emerald',
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
              Our Work
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              From startups to enterprises, we've partnered with visionary companies to solve complex challenges. 
              Explore detailed case studies showcasing our approach, solutions, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="glass-panel rounded-2xl overflow-hidden reveal"
              >
                {/* Header with gradient */}
                <div className={`relative h-48 md:h-64 bg-gradient-to-br ${study.gradient} flex items-center justify-center border-b border-white/5 overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                  <div className="relative z-10 text-center px-6">
                    <div className={`inline-block px-4 py-1.5 rounded-full bg-${study.accentColor}-500/20 border border-${study.accentColor}-500/30 text-${study.accentColor}-300 text-xs font-medium mb-4`}>
                      {study.industry}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-2">
                      {study.client}
                    </h2>
                    <p className="text-lg text-slate-300">
                      {study.projectName}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Overview */}
                  <div className="mb-10">
                    <h3 className="text-xl font-medium text-white mb-4">Project Overview</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {study.overview}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="text-red-400">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v4m0 4h.01M5 19h14a2 2 0 0 0 1.84-2.75L13.74 4a2 2 0 0 0-3.5 0l-7.1 12.25A2 2 0 0 0 4.89 19"></path>
                          </svg>
                        </div>
                        <h4 className="text-lg font-medium text-white">The Challenge</h4>
                      </div>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-8 h-8 rounded-lg bg-${study.accentColor}-500/10 border border-${study.accentColor}-500/20 flex items-center justify-center`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className={`text-${study.accentColor}-400`}>
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3a9 9 0 0 1 9 9a9 9 0 0 1-9 9a9 9 0 0 1-9-9a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7a7 7 0 0 0 7 7a7 7 0 0 0 7-7a7 7 0 0 0-7-7m3 5l-4 4l-2-2"></path>
                          </svg>
                        </div>
                        <h4 className="text-lg font-medium text-white">Our Solution</h4>
                      </div>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-10">
                    <h3 className="text-xl font-medium text-white mb-6">Results & Impact</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="glass-panel rounded-xl p-6 text-center hover:bg-white/[0.05] transition-all duration-300"
                        >
                          <div className={`text-3xl md:text-4xl font-bold text-${study.accentColor}-400 mb-2`}>
                            {result.metric}
                          </div>
                          <div className="text-xs text-slate-400">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-medium text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                Ready to Start Your Project?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Let's build something amazing together. Whether you have a clear vision or just an idea, 
                we're here to help bring it to life.
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
                  href="/process" 
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300"
                >
                  See Our Process
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
