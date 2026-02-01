'use client';

import Link from 'next/link';

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('join');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 6L9 17l-5-5"></path>
    </svg>
  );

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-medium text-white mb-4 tracking-tight">
            Why Prezso Labs
          </h2>
          <p className="text-slate-400">What sets us apart in building digital products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* AI-Powered */}
          <div className="p-8 rounded-2xl border border-white/5 bg-[#0A0A0C] reveal delay-100">
            <h3 className="text-lg font-medium text-white">AI-Powered</h3>
            <p className="text-sm text-slate-500 mb-6">Smart workflows</p>
            <div className="text-3xl font-medium text-white mb-6">⚡</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-indigo-400"><CheckIcon /></span> Faster execution
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-indigo-400"><CheckIcon /></span> Smart automation
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-indigo-400"><CheckIcon /></span> Without losing craft
              </li>
            </ul>
            <Link href="/ai-delivery" className="block w-full py-2 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors text-center">
              Learn More
            </Link>
          </div>

          {/* Design + Engineering */}
          <div className="p-8 rounded-2xl border border-indigo-500/30 bg-[#0E0E12] relative reveal delay-200">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-500 text-[10px] text-white font-medium">
              Our Core
            </div>
            <h3 className="text-lg font-medium text-white">UX + Engineering</h3>
            <p className="text-sm text-slate-500 mb-6">Full-stack excellence</p>
            <div className="text-3xl font-medium text-white mb-6">
              ✦
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-indigo-400"><CheckIcon /></span> Strong UX foundation
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-indigo-400"><CheckIcon /></span> Scalable engineering
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-indigo-400"><CheckIcon /></span> Modern tech stack
              </li>
            </ul>
            <button 
              onClick={scrollToContact}
              className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm transition-colors shadow-lg shadow-indigo-500/20"
            >
              Start a Project
            </button>
          </div>

          {/* Communication */}
          <div className="p-8 rounded-2xl border border-white/5 bg-[#0A0A0C] reveal delay-300">
            <h3 className="text-lg font-medium text-white">Clear Process</h3>
            <p className="text-sm text-slate-500 mb-6">Transparent delivery</p>
            <div className="text-3xl font-medium text-white mb-6">
              ◆
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-indigo-400"><CheckIcon /></span> Clear communication
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-indigo-400"><CheckIcon /></span> Rapid iteration
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-indigo-400"><CheckIcon /></span> On-time delivery
              </li>
            </ul>
            <Link href="/process" className="block w-full py-2 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors text-center">
              Our Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
