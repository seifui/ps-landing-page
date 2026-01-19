'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function AIDelivery() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const capabilities = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-purple-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
            <circle cx="4" cy="20" r="2"></circle>
          </g>
        </svg>
      ),
      title: 'AI Strategy & Consulting',
      description: 'We help you identify high-impact AI opportunities in your business. From feasibility studies to roadmap planning, we guide your AI transformation.',
      color: 'purple',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-indigo-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <path d="M8 10h.01M12 10h.01M16 10h.01"></path>
          </g>
        </svg>
      ),
      title: 'Conversational AI',
      description: 'Intelligent chatbots and virtual assistants powered by LLMs. Natural conversations that understand context and deliver real value.',
      color: 'indigo',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-blue-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <path d="m7.5 4.21l4.5 2.6l4.5-2.6m-9 15.58V14.6L3 12m18 0l-4.5 2.6v5.19M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"></path>
          </g>
        </svg>
      ),
      title: 'Machine Learning Models',
      description: 'Custom ML models trained on your data. From predictive analytics to recommendation systems, we build AI that learns and improves.',
      color: 'blue',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-emerald-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <path d="M7 7h10M7 12h10M7 17h10"></path>
          </g>
        </svg>
      ),
      title: 'Document Intelligence',
      description: 'Extract insights from documents, images, and unstructured data. OCR, classification, and intelligent search powered by AI.',
      color: 'emerald',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-orange-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m12 6l0 6l4 2"></path>
          </g>
        </svg>
      ),
      title: 'Process Automation',
      description: 'Automate repetitive tasks with intelligent workflows. From data entry to customer support, AI handles the heavy lifting.',
      color: 'orange',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-pink-400">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M3 3v18h18M7 16l3-3l3 3l5-5"></path>
          </g>
        </svg>
      ),
      title: 'Predictive Analytics',
      description: 'Forecast trends, detect anomalies, and make data-driven decisions. AI-powered insights that help you stay ahead.',
      color: 'pink',
    },
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      examples: ['Personalized recommendations', 'Dynamic pricing', 'Visual search', 'Chatbot support'],
    },
    {
      industry: 'Healthcare',
      examples: ['Medical image analysis', 'Patient triage', 'Drug discovery', 'Clinical documentation'],
    },
    {
      industry: 'Finance',
      examples: ['Fraud detection', 'Risk assessment', 'Trading algorithms', 'Document processing'],
    },
    {
      industry: 'Manufacturing',
      examples: ['Quality control', 'Predictive maintenance', 'Supply chain optimization', 'Defect detection'],
    },
  ];

  const approach = [
    {
      title: 'Discovery',
      description: 'Understanding your business problem and evaluating AI feasibility.',
    },
    {
      title: 'Prototyping',
      description: 'Building proof-of-concepts to validate technical approach.',
    },
    {
      title: 'Development',
      description: 'Training models and integrating AI into your systems.',
    },
    {
      title: 'Monitoring',
      description: 'Continuous model performance tracking and improvement.',
    },
  ];

  return (
    <main>
      <BackgroundAnimation />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-4xl md:mx-auto reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-purple-400">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </g>
              </svg>
              <span className="text-sm text-purple-300 font-medium">AI Delivery</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight title-gradient">
              Transform Your Business with AI
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              From intelligent automation to predictive analytics, we deliver AI solutions that solve 
              real business problems. Our team combines deep technical expertise with practical experience 
              to build AI that creates value.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal delay-100">
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2">30+</div>
              <div className="text-sm text-slate-400">AI Projects</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2">85%</div>
              <div className="text-sm text-slate-400">Cost Reduction</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2">10M+</div>
              <div className="text-sm text-slate-400">AI Predictions Made</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2">95%</div>
              <div className="text-sm text-slate-400">Model Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              AI Capabilities
            </h2>
            <p className="text-slate-400 text-lg">
              Comprehensive AI solutions powered by the latest machine learning technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden reveal delay-${(index % 3 + 1) * 100}`}
              >
                <div className={`w-12 h-12 bg-${capability.color}-500/10 rounded-lg flex items-center justify-center mb-6 border border-${capability.color}-500/20 group-hover:border-${capability.color}-500/40 transition-colors`}>
                  {capability.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{capability.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Industry Applications
            </h2>
            <p className="text-slate-400 text-lg">
              AI solutions tailored to your industry's unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className={`glass-panel rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300 reveal delay-${(index % 2 + 1) * 100}`}>
                <h3 className="text-xl font-medium text-white mb-6">{useCase.industry}</h3>
                <div className="space-y-3">
                  {useCase.examples.map((example, exIndex) => (
                    <div key={exIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="text-purple-400">
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m5 12l5 5L20 7"></path>
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Our AI Delivery Approach
            </h2>
            <p className="text-slate-400 text-lg">
              A structured methodology that ensures successful AI implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((step, index) => (
              <div key={index} className={`glass-panel rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300 reveal delay-${(index + 1) * 100}`}>
                <div className="text-4xl font-bold text-purple-500/30 mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel rounded-2xl p-12 md:p-16 relative overflow-hidden reveal">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                  Powered by Leading AI Technologies
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  We work with state-of-the-art AI frameworks and platforms to deliver solutions 
                  that are powerful, scalable, and production-ready.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div>
                  <h3 className="text-sm font-medium text-white mb-4">LLMs & NLP</h3>
                  <div className="space-y-2">
                    {['OpenAI GPT-4', 'Claude', 'Llama', 'HuggingFace'].map((tech, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                        <span className="text-sm text-slate-400">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white mb-4">ML Frameworks</h3>
                  <div className="space-y-2">
                    {['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost'].map((tech, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                        <span className="text-sm text-slate-400">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white mb-4">Cloud AI</h3>
                  <div className="space-y-2">
                    {['AWS Bedrock', 'Azure OpenAI', 'Google Vertex', 'LangChain'].map((tech, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        <span className="text-sm text-slate-400">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                >
                  Start Your AI Journey
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="ml-2">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
                  </svg>
                </a>
                <a 
                  href="/work" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-full transition-all duration-300"
                >
                  View AI Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
