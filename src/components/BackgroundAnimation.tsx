'use client';

import { useEffect } from 'react';

export default function BackgroundAnimation() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <div 
      className="aura-background-component fixed top-0 w-full h-screen -z-10" 
      data-alpha-mask="80" 
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'
      }}
    >
      <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
        <div data-us-project="ILgOO23w4wEyPQOKyLO4" className="absolute w-full h-full left-0 top-0 -z-10"></div>
      </div>
    </div>
  );
}
