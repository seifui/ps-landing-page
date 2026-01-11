export default function PricingSection() {
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
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400">Start for free, scale when you need to.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <div className="p-8 rounded-2xl border border-white/5 bg-[#0A0A0C] reveal delay-100">
            <h3 className="text-lg font-medium text-white">Starter</h3>
            <p className="text-sm text-slate-500 mb-6">For individuals</p>
            <div className="text-3xl font-medium text-white mb-6">$0</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-slate-600"><CheckIcon /></span> 3 Projects
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-slate-600"><CheckIcon /></span> Basic AI suggestions
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-slate-600"><CheckIcon /></span> Community Support
              </li>
            </ul>
            <button className="w-full py-2 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">
              Current Plan
            </button>
          </div>

          {/* Pro */}
          <div className="p-8 rounded-2xl border border-indigo-500/30 bg-[#0E0E12] relative reveal delay-200">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-500 text-[10px] text-white font-medium">
              Most Popular
            </div>
            <h3 className="text-lg font-medium text-white">Pro</h3>
            <p className="text-sm text-slate-500 mb-6">For small teams</p>
            <div className="text-3xl font-medium text-white mb-6">
              $12<span className="text-sm text-slate-500 font-normal">/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-indigo-400"><CheckIcon /></span> Unlimited Projects
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-indigo-400"><CheckIcon /></span> Advanced AI Insights
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-indigo-400"><CheckIcon /></span> Integrations
              </li>
            </ul>
            <button className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm transition-colors shadow-lg shadow-indigo-500/20">
              Join Beta
            </button>
          </div>

          {/* Business */}
          <div className="p-8 rounded-2xl border border-white/5 bg-[#0A0A0C] reveal delay-300">
            <h3 className="text-lg font-medium text-white">Business</h3>
            <p className="text-sm text-slate-500 mb-6">For organizations</p>
            <div className="text-3xl font-medium text-white mb-6">
              $29<span className="text-sm text-slate-500 font-normal">/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-slate-600"><CheckIcon /></span> SSO &amp; Security
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-slate-600"><CheckIcon /></span> Dedicated Success Manager
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-slate-600"><CheckIcon /></span> Custom AI Models
              </li>
            </ul>
            <button className="w-full py-2 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
