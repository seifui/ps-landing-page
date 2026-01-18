import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md transition-all duration-300 reveal active">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Image 
            src="/logo.svg" 
            alt="Prezso Labs" 
            width={156} 
            height={28}
            className="group-hover:opacity-80 transition-opacity"
          />
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-white transition-colors">Services</a>
          <a href="#demo" className="hover:text-white transition-colors">How We Work</a>
          <a href="#pricing" className="hover:text-white transition-colors">Why Us</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden sm:block text-xs font-medium hover:text-white transition-colors">
            Our Work
          </a>
          <a href="#join" className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-full border border-white/10 transition-all duration-300 backdrop-blur-sm">
            Talk to Us
          </a>
        </div>
      </div>
    </nav>
  );
}
