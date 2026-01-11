export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
            Intelligence built into every step.
          </h2>
          <p className="text-slate-400 text-lg">
            Stop managing tools and start managing work. Prezso Labs&apos;s AI handles the busy work so you can focus on shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden reveal delay-100">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" className="text-indigo-500">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            </div>
            <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-indigo-400">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M13 5h8m-8 7h8m-8 7h8M3 17l2 2l4-4"></path>
                  <rect width="6" height="6" x="3" y="4" rx="1"></rect>
                </g>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">AI Task Prioritization</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Automatically sorts your daily tasks based on deadlines, complexity, and team availability.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 md:col-span-2 relative overflow-hidden reveal delay-200">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center h-full">
              <div className="flex-1 z-10">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 border border-purple-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-purple-400">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Smart Workflow Suggestions</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                  The AI analyzes bottlenecks in real-time and suggests instant optimizations to clear blockers before they become problems.
                </p>
              </div>
              <div className="flex-1 w-full bg-[#0A0A0C] border border-white/5 rounded-lg p-4 shadow-lg transform group-hover:translate-y-[-4px] transition-transform duration-500">
                <div className="flex gap-2 items-center mb-3 border-b border-white/5 pb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-[10px] text-purple-300">Suggestion Found</span>
                </div>
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded bg-white/5"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                    <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 reveal delay-100">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 border border-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-blue-400">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Data-Driven Insights</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Visual analytics that show you exactly where your team excels and where time is being wasted.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 reveal delay-200">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 border border-emerald-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-emerald-400">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zm4-1a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Integrated Chat</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Context-aware chat that links discussions directly to tasks, so no context is ever lost.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 reveal delay-300">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 border border-orange-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-orange-400">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.39 4.39a1 1 0 0 0 1.68-.474a2.5 2.5 0 1 1 3.014 3.015a1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474a2.5 2.5 0 1 0-3.014 3.015a1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474a2.5 2.5 0 1 1-3.014-3.015a1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474a2.5 2.5 0 1 0 3.014-3.015a1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Seamless Integrations</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Works with GitHub, Slack, Figma, and Notion out of the box. Connect in seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
