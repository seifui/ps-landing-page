'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function AboutUs() {
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

  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-indigo-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </g>
        </svg>
      ),
      title: 'Speed with Purpose',
      description: 'We move fast, but never at the expense of quality. Every decision is intentional, every feature is crafted with care.',
      color: 'indigo',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-purple-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zm4-1a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path>
          </g>
        </svg>
      ),
      title: 'User-First Thinking',
      description: 'Great products solve real problems. We obsess over user experience, from the first interaction to the last pixel.',
      color: 'purple',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-blue-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
            <circle cx="4" cy="20" r="2"></circle>
          </g>
        </svg>
      ),
      title: 'AI as a Tool, Not a Crutch',
      description: 'We leverage AI to enhance our capabilities, not replace human creativity and judgment. Technology amplifies craft.',
      color: 'blue',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-emerald-400">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.39 4.39a1 1 0 0 0 1.68-.474a2.5 2.5 0 1 1 3.014 3.015a1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474a2.5 2.5 0 1 0-3.014 3.015a1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474a2.5 2.5 0 1 1-3.014-3.015a1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474a2.5 2.5 0 1 0 3.014-3.015a1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
        </svg>
      ),
      title: 'Build in Public',
      description: 'Transparency builds trust. We share our process, learnings, and even our mistakes to help others grow.',
      color: 'emerald',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-orange-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3"></path>
          </g>
        </svg>
      ),
      title: 'Continuous Improvement',
      description: 'Good is never good enough. We iterate, refine, and push boundaries to deliver exceptional results.',
      color: 'orange',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-pink-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </g>
        </svg>
      ),
      title: 'Collaboration Over Ego',
      description: 'The best ideas win, regardless of who they come from. We value diverse perspectives and open dialogue.',
      color: 'pink',
    },
  ];

  return (
    <main>
      <BackgroundAnimation />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-48 pb-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-3xl md:mx-auto reveal">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight title-gradient">
              Building the Future, One Product at a Time
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              We're a product studio that believes in the power of design, engineering, and AI working together. 
              Our mission is to transform ambitious ideas into digital products that people love to use.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Our Values
            </h2>
            <p className="text-slate-400 text-lg">
              These principles guide everything we do, from how we work to what we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden reveal delay-${(index % 3 + 1) * 100}`}
              >
                <div className={`w-12 h-12 bg-${value.color}-500/10 rounded-lg flex items-center justify-center mb-6 border border-${value.color}-500/20 group-hover:border-${value.color}-500/40 transition-colors`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel rounded-2xl p-12 md:p-16 relative overflow-hidden reveal">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                How We Work
              </h2>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  We're a remote-first team that values flexibility, autonomy, and deep work. 
                  Our culture is built on trust, transparency, and a shared passion for creating 
                  exceptional digital products.
                </p>
                <p>
                  Every project starts with understanding the problem deeply. We don't just build 
                  features—we craft solutions that solve real user needs. Our process combines 
                  design thinking, agile development, and AI-assisted workflows to deliver faster 
                  without compromising quality.
                </p>
                <p>
                  We believe in shipping early and often, gathering feedback, and iterating based 
                  on real-world usage. This approach helps us build products that truly resonate 
                  with users and adapt to changing needs.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a 
                  href="/careers" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-full transition-all duration-300"
                >
                  Join Our Team
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="ml-2">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                  </svg>
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300"
                >
                  Get in Touch
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
