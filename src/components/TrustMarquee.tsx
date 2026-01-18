import React from 'react';

export default function TrustMarquee() {
  const companies = [
    { icon: "hexagon", name: "AcmeCorp" },
    { icon: "triangle", name: "Vortex" },
    { icon: "circle", name: "Sphere" },
    { icon: "square-stack", name: "Layer" },
    { icon: "gem", name: "Crystal" },
    { icon: "boxes", name: "Block" },
  ];

  const getIcon = (icon: string) => {
    const icons: { [key: string]: React.ReactElement } = {
      hexagon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"></path>
        </svg>
      ),
      triangle: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
        </svg>
      ),
      circle: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
        </svg>
      ),
      "square-stack": (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2m0 12c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"></path>
            <rect width="8" height="8" x="14" y="14" rx="2"></rect>
          </g>
        </svg>
      ),
      gem: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path>
            <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path>
          </g>
        </svg>
      ),
      boxes: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3zM7 16.5l-4.74-2.85M7 16.5l5-3m-5 3v5.17m5-8.17V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5zm5 3l-5-3m5 3l4.74-2.85M17 16.5v5.17"></path>
            <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3l5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0zM12 8L7.26 5.15M12 8l4.74-2.85M12 13.5V8"></path>
          </g>
        </svg>
      ),
    };
    return icons[icon] || null;
  };

  return (
    <section className="py-10 border-y border-white/5 bg-white/[0.01] overflow-hidden reveal">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <p className="text-xs font-medium text-slate-500 tracking-wider uppercase">
          Partnering with startups and growing teams
        </p>
      </div>
      
      <div 
        className="relative w-full overflow-hidden" 
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="animate-marquee flex gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[...companies, ...companies, ...companies].map((company, idx) => (
            <div key={idx} className="flex items-center gap-2 flex-shrink-0">
              {getIcon(company.icon)}
              <span className="font-bold text-lg text-white tracking-tight">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
