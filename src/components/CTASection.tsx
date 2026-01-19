'use client';

import { useState, FormEvent } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset status
    setStatus({ type: null, message: '' });
    
    // Validate email
    if (!email) {
      setStatus({ type: 'error', message: 'Please enter your email address' });
      return;
    }
    
    if (!validateEmail(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Send to your API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit');
      }
      
      setStatus({ 
        type: 'success', 
        message: 'Thanks! We\'ll get back to you within 24 hours.' 
      });
      setEmail('');
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="join" className="py-24 relative overflow-hidden">
      <div className="z-10 reveal text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
          Have an idea or product in mind?
        </h2>
        <p className="text-slate-400 text-lg mb-10">
          Let&apos;s build something meaningful together.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            className="absolute left-4 text-slate-500 pointer-events-none"
          >
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            </g>
          </svg>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-11 pr-32 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-white text-black text-xs font-semibold rounded-full hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Talk to Us'}
          </button>
        </form>
        
        {/* Status Messages */}
        {status.type && (
          <div 
            className={`mt-4 text-sm animate-fadeIn ${
              status.type === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {status.message}
          </div>
        )}
        
        {!status.type && (
          <p className="text-[10px] text-slate-600 mt-4">We&apos;ll respond within 24 hours.</p>
        )}
      </div>
      
      {/* Background Accents */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] pointer-events-none"></div>
    </section>
  );
}
