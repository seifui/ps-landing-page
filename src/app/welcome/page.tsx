'use client';

import { useEffect } from 'react';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function Welcome() {
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

  const companyValues = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-indigo-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </g>
        </svg>
      ),
      title: 'Speed with Purpose',
      description: 'We move fast, but never at the expense of quality.',
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
      description: 'Great products solve real problems. We obsess over user experience.',
      color: 'purple',
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
      description: 'The best ideas win, regardless of who they come from.',
      color: 'pink',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-emerald-400">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.39 4.39a1 1 0 0 0 1.68-.474a2.5 2.5 0 1 1 3.014 3.015a1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474a2.5 2.5 0 1 0-3.014 3.015a1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474a2.5 2.5 0 1 1-3.014-3.015a1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474a2.5 2.5 0 1 0 3.014-3.015a1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
        </svg>
      ),
      title: 'Build in Public',
      description: 'Transparency builds trust. We share our journey openly.',
      color: 'emerald',
    },
  ];

  return (
    <main className="min-h-screen">
      <BackgroundAnimation />
      
      {/* Hero Section - Team Member Introduction */}
      <section className="pt-32 pb-12 relative">
        <div className="max-w-4xl mx-auto px-6">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/icon.svg" 
              alt="Prezso Labs" 
              className="h-12 md:h-16"
            />
          </div>

          <div className="text-center mb-12 reveal">
            <h1 className="text-5xl md:text-6xl font-medium text-white mb-4 tracking-tight title-gradient">
              Welcome to the Team!
            </h1>
            <p className="text-slate-400 text-lg">
              We're excited to have you join us on this journey
            </p>
          </div>

          {/* Team Member Card */}
          <div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden reveal delay-100">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Image Placeholder */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 mb-6 overflow-hidden">
                <img 
                  src="/sammani-profile.png" 
                  alt="Sammani - Senior Design Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-2 tracking-tight">
                Sammani
              </h2>

              {/* Designation */}
              <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
                <span className="text-indigo-300 text-sm font-medium">Senior Design Engineer</span>
              </div>

              {/* Welcome Message */}
              <div className="max-w-2xl text-slate-300 leading-relaxed">
                <p className="text-lg">
                  We're thrilled to welcome you as our first design engineer at <span className="text-white font-medium">Prezso Labs</span>. 
                  You're not just joining a company—you're becoming a foundational part of something special.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values & Culture */}
      <section className="py-12 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center max-w-2xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Our Values & Culture
            </h2>
            <p className="text-slate-400 text-lg">
              These principles guide everything we do and how we work together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className={`group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden reveal delay-${(index % 2 + 1) * 100}`}
              >
                <div className={`w-12 h-12 bg-${value.color}-500/10 rounded-lg flex items-center justify-center mb-6 border border-${value.color}-500/20 group-hover:border-${value.color}-500/40 transition-colors`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Culture Overview */}
          <div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden reveal">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">
                What to Expect
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  We're a <span className="text-white">coffee-first team</span> that believes the best ideas come over great coffee. 
                  Our culture is built on trust, transparency, and a passion for creating exceptional products.
                </p>
                <p>
                  You'll work with talented people who care deeply about their craft. We celebrate wins, learn from setbacks, 
                  and push each other to grow. Most importantly, we're here to support you every step of the way.
                </p>
              </div>

              {/* Onboarding Timeline */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-xl font-medium text-white mb-6">Your First Days</h4>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-500/20 border border-indigo-500/30 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-indigo-400">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                          <path d="M16 2v4M8 2v4m-5 4h18"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-white font-medium mb-1">Welcome Call with Our CEO</h5>
                      <p className="text-slate-400 text-sm">
                        You'll have a welcome call with our CEO, <span className="text-white">Jester</span>, on{' '}
                        <span className="text-white">Monday, 3rd February</span>. We'll buzz you the time soon.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-purple-400">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-white font-medium mb-1">First Work-Call with the Team</h5>
                      <p className="text-slate-400 text-sm">
                        After the first call, we'll have the next meeting with you—your first work-call with our team to discuss the first month's work.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-blue-400">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <path d="M14 2v6h6m-4 5H8m8 4H8m2-8H8"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-white font-medium mb-1">Official Documents</h5>
                      <p className="text-slate-400 text-sm">
                        We'll send you all the official documents, offer letters, and other paperwork to get everything formalized.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-pink-500/20 border border-pink-500/30 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-pink-400">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                          <circle cx="4" cy="20" r="2"></circle>
                        </g>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-white font-medium mb-1">More Cool Things on the Way</h5>
                      <p className="text-slate-400 text-sm">
                        We have some exciting surprises and resources lined up to make your onboarding smooth and enjoyable!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-12 pb-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-panel rounded-2xl p-12 md:p-16 text-center relative overflow-hidden reveal">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-white">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78"></path>
                </svg>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight title-gradient">
                Let's Build Something Amazing
              </h2>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                We would love to work with you and create amazing things for the world!
              </p>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-slate-400 text-sm">
                  Questions? Need help getting started? Reach out anytime—we're here for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
