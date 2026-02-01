'use client';

import Link from 'next/link';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('join');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none opacity-60"></div>

      <div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[11px] font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            AI-Powered Product Studio
          </div>

          <h1 className="reveal delay-100 text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] title-gradient">
            Where AI Meets Design to <br className="hidden md:block" /> Build Digital Products
          </h1>

          <p className="reveal delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            Prezso Labs is an AI-powered product studio crafting web apps, mobile apps, and digital platforms with speed, clarity, and precision.
          </p>

          <div className="reveal delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto group relative px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
            >
              Start a Project
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="inline ml-1 group-hover:translate-x-0.5 transition-transform">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
              </svg>
            </button>
            <Link 
              href="/work"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </g>
              </svg>
              See Our Work
            </Link>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-20 relative perspective-[2000px] group reveal delay-300">
          <div className="relative w-full max-w-5xl mx-auto glass-panel rounded-xl p-1 shadow-2xl transition-transform duration-700 ease-out transform rotate-x-12 group-hover:rotate-x-0 overflow-hidden border-t border-white/10">
            <div className="bg-[#0A0A0C] rounded-lg overflow-hidden border border-white/5 h-[400px] md:h-[600px] flex">
              {/* Sidebar */}
              <div className="w-16 md:w-64 border-r border-white/5 flex flex-col p-4 bg-[#050507]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-4 h-4 rounded bg-indigo-500/20 border border-indigo-500/50"></div>
                  <div className="hidden md:block h-2 w-20 bg-white/10 rounded"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-8 w-full bg-white/5 rounded flex items-center px-3 border border-white/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-indigo-400">
                      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                      </g>
                    </svg>
                    <span className="hidden md:block ml-3 text-xs text-white">Overview</span>
                  </div>
                  <div className="h-8 w-full rounded flex items-center px-3 hover:bg-white/5 transition-colors cursor-pointer opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
                        <path d="m9 11l3 3L22 4"></path>
                      </g>
                    </svg>
                    <span className="hidden md:block ml-3 text-xs">Tasks</span>
                  </div>
                  <div className="h-8 w-full rounded flex items-center px-3 hover:bg-white/5 transition-colors cursor-pointer opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </g>
                    </svg>
                    <span className="hidden md:block ml-3 text-xs">Team</span>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
                    <div className="hidden md:block text-xs text-slate-400">AI Assistant</div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 md:p-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="h-4 w-32 bg-white/10 rounded mb-2"></div>
                    <div className="h-8 w-64 bg-white/5 rounded border border-white/5 flex items-center px-3">
                      <span className="text-xs text-slate-500">Design thinking meets AI delivery...</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="text-slate-400">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                      </svg>
                    </div>
                    <div className="h-8 w-24 bg-indigo-600/20 border border-indigo-500/30 rounded-full flex items-center justify-center text-[10px] text-indigo-300">
                      + New Design
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2 glass-panel rounded-lg p-5 relative overflow-hidden group/card">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none"></div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="text-indigo-400">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                            <circle cx="4" cy="20" r="2"></circle>
                          </g>
                        </svg>
                        <span className="text-xs font-medium text-white">AI Suggestion</span>
                      </div>
                      <span className="text-[10px] text-slate-500">Just now</span>
                    </div>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      Based on project scope, adding
                      <span className="text-white border-b border-indigo-500/50"> user research sprint</span> will improve
                      feature clarity by 32% before development.
                    </p>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-[10px] rounded transition-colors">Apply Change</button>
                      <button className="px-3 py-1.5 border border-white/10 hover:bg-white/5 text-slate-400 text-[10px] rounded transition-colors">Dismiss</button>
                    </div>
                  </div>

                  <div className="glass-panel rounded-lg p-5 flex flex-col justify-between">
                    <span className="text-xs text-slate-500">Project Velocity</span>
                    <div className="text-3xl font-medium text-white tracking-tight mt-2">92.8</div>
                    <div className="flex items-center gap-1 mt-2 text-[10px] text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M16 7h6v6"></path>
                          <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                        </g>
                      </svg>
                      <span>+18% this sprint</span>
                    </div>
                    <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[93%] bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                    </div>
                  </div>

                  <div className="col-span-3 glass-panel rounded-lg p-5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-medium text-white">Active Deliverables</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="text-slate-500 cursor-pointer hover:text-white">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </g>
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors group/task cursor-pointer">
                        <div className="w-4 h-4 rounded border border-indigo-500/50 flex items-center justify-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-[1px] opacity-0 group-hover/task:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-xs text-slate-300 flex-1">Finalize Design System</span>
                        <div className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px] border border-red-500/20">High</div>
                      </div>
                      <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors group/task cursor-pointer">
                        <div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center"></div>
                        <span className="text-xs text-slate-400 flex-1">Ship MVP features</span>
                        <div className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-[10px] border border-yellow-500/20">Medium</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-t from-[#030304] to-transparent z-20"></div>
        </div>
      </div>
    </section>
  );
}
