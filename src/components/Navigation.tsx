export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md transition-all duration-300 reveal active">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex text-[10px] font-semibold text-white tracking-tighter bg-gradient-to-tr from-indigo-500 to-purple-500 w-6 h-6 rounded-full items-center justify-center">
            PS
          </div>
          <span className="group-hover:opacity-80 transition-opacity text-base font-bold text-white tracking-tighter font-jakarta">
            PREZSO LABS
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#demo" className="hover:text-white transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden sm:block text-xs font-medium hover:text-white transition-colors">
            Sign in
          </a>
          <a href="#join" className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-full border border-white/10 transition-all duration-300 backdrop-blur-sm">
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}
