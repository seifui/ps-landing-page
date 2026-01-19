import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md transition-all duration-300 reveal active">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <Image 
            src="/logo.svg" 
            alt="Prezso Labs" 
            width={156} 
            height={28}
            className="group-hover:opacity-80 transition-opacity"
          />
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/about" className="hover:text-white transition-colors">About Us</a>
          <div className="relative group">
            <button className="hover:text-white transition-colors flex items-center gap-1">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="transition-transform group-hover:rotate-180">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9l6 6l6-6"></path>
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-[#030304]/95 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-xl">
                <a href="/product-design" className="block px-4 py-2 hover:bg-white/5 rounded-lg transition-colors">Product Design</a>
                <a href="/engineering" className="block px-4 py-2 hover:bg-white/5 rounded-lg transition-colors">Engineering</a>
                <a href="/ai-delivery" className="block px-4 py-2 hover:bg-white/5 rounded-lg transition-colors">AI Delivery</a>
              </div>
            </div>
          </div>
          <a href="/work" className="hover:text-white transition-colors">Our Work</a>
          <a href="/process" className="hover:text-white transition-colors">Process</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="/careers" className="hidden sm:block text-xs font-medium hover:text-white transition-colors">
            Careers
          </a>
          <a href="#join" className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-full border border-white/10 transition-all duration-300 backdrop-blur-sm">
            Talk to Us
          </a>
        </div>
      </div>
    </nav>
  );
}
