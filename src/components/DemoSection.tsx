export default function DemoSection() {
  return (
    <section id="demo" className="py-24 bg-[#050507] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050507] to-[#050507]"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 space-y-6 reveal">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
            How We Work
          </h2>
          <p className="text-slate-400 text-lg">
            A clear, collaborative approach that combines design thinking, engineering excellence, and AI-powered execution.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="text-emerald-400">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12l2 2l4-4"></path>
                </g>
              </svg>
              Design First: Start with users and business goals
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="text-emerald-400">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12l2 2l4-4"></path>
                </g>
              </svg>
              Build Smart: Clean, scalable technology choices
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="text-emerald-400">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12l2 2l4-4"></path>
                </g>
              </svg>
              Iterate Fast: Rapid feedback and continuous improvement
            </li>
          </ul>
        </div>

        {/* Interactive Component */}
        <div className="flex-1 w-full reveal delay-200">
          <div className="bg-[#0e0e11] rounded-xl border border-white/10 p-6 shadow-2xl relative">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <span className="text-sm font-medium text-white">Current Projects</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
            </div>

            <div className="space-y-3">
              {/* Task Item (Interactive) */}
              <div className="group relative bg-[#18181b] rounded border border-white/5 p-4 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-4 h-4 rounded border border-slate-600 flex items-center justify-center group-hover:border-indigo-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" className="opacity-0 group-hover:opacity-100 text-indigo-400">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-200 font-medium">Design System Components</p>
                      <p className="text-xs text-slate-500 mt-1">Design • In Progress</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    High Priority
                  </span>
                </div>
                
                {/* Hover Reveal Content */}
                <div className="h-0 group-hover:h-auto group-hover:mt-3 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="pt-3 border-t border-white/10 flex items-center gap-3 text-xs">
                    <span className="text-indigo-300 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M12 8V4H8"></path>
                          <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                          <path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path>
                        </g>
                      </svg>
                      AI Insight:
                    </span>
                    <span className="text-slate-400">Component library patterns from previous project can accelerate this by 40%.</span>
                  </div>
                </div>
              </div>

              {/* Static Task */}
              <div className="bg-[#18181b] rounded border border-white/5 p-4 opacity-60">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-4 h-4 rounded border border-slate-600"></div>
                    <div>
                      <p className="text-sm text-slate-300">Mobile App Architecture</p>
                      <p className="text-xs text-slate-500 mt-1">Engineering • Upcoming</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
