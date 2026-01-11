export default function CTASection() {
  return (
    <section id="join" className="py-24 relative overflow-hidden">
      <div className="z-10 reveal text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
          Ready to work smarter?
        </h2>
        <p className="text-slate-400 text-lg mb-10">
          Join the waiting list today and get our free guide on &quot;AI-First Productivity&quot;.
        </p>
        
        <form className="max-w-md mx-auto relative flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="absolute left-4 text-slate-500">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            </g>
          </svg>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-11 pr-32 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          <button 
            type="button" 
            className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-white text-black text-xs font-semibold rounded-full hover:bg-slate-200 transition-colors"
          >
            Claim Your Spot
          </button>
        </form>
        <p className="text-[10px] text-slate-600 mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
      
      {/* Background Accents */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] pointer-events-none"></div>
    </section>
  );
}
