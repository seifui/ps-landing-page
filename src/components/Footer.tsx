import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020203] py-12 text-sm reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.svg" 
                alt="Prezso Labs" 
                width={130} 
                height={23}
              />
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Prezso Labs is an AI-powered product studio building modern digital experiences through design, engineering, and intelligent workflows.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-slate-500">
              <li className="font-jakarta rounded-full">
                <a href="#" className="hover:text-white transition-colors">Product Design</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Engineering</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">AI Delivery</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Studio</h4>
            <ul className="space-y-2 text-slate-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Process</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Security</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-slate-600 text-xs">© 2026 Prezso Labs. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"></path>
              </svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </g>
              </svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
