'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

interface Job {
  title: string;
  description: string;
  color: string;
  location: string;
  type: string;
  about: string;
  requirements: string[];
  responsibilities: string[];
  niceToHave: string[];
}

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const openModal = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedJob(null), 300); // Delay to allow exit animation
  };

  const handleApply = (jobTitle: string) => {
    const email = 'careers@company.com';
    const subject = `Application for ${jobTitle}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  const jobs = [
    {
      title: '☕ Senior Design Engineer (AI-First UX)',
      description: 'We design experiences between coffee sips.\nAI-first. Human-centered.',
      color: 'indigo',
      location: 'Remote (US/EU Timezones)',
      type: 'Full-time',
      about: `We're looking for a Senior Design Engineer who thinks in systems, ships in code, and obsesses over the invisible details that make AI feel effortless. You'll work at the intersection of design and engineering, crafting interfaces that make complex AI capabilities feel intuitive and delightful.\n\nThis role is perfect for someone who gets excited about component APIs, design tokens, and the subtle animations that make interactions feel alive. You'll be designing and building our core product experience from the ground up.`,
      requirements: [
        '5+ years designing and building production web applications',
        'Expert-level proficiency in React, TypeScript, and modern CSS (Tailwind preferred)',
        'Strong portfolio demonstrating systems thinking and attention to detail',
        'Experience designing for AI/ML products or complex developer tools',
        'Ability to prototype quickly and iterate based on user feedback'
      ],
      responsibilities: [
        'Design and implement core UI components and interaction patterns',
        'Build and maintain our design system and component library',
        'Collaborate with ML engineers to create intuitive AI-powered features',
        'Conduct user research and usability testing to validate design decisions',
        'Ship high-quality code with pixel-perfect attention to detail'
      ],
      niceToHave: [
        'Experience with 3D graphics, WebGL, or creative coding',
        'Background in motion design or animation',
        'Open source contributions to design tools or libraries'
      ]
    },
    {
      title: '☕ Senior ML Engineer (Applied / Production)',
      description: 'We ship AI like we brew coffee.\nStrong. Real. No demos.',
      color: 'purple',
      location: 'Remote (Global)',
      type: 'Full-time',
      about: `We're building production AI systems that developers actually use. No research papers, no demo videos—just real products that ship. We need someone who knows the difference between a cool model and a scalable system.\n\nYou'll be working on challenging problems: making LLMs faster, building evaluation frameworks that matter, and creating AI features that feel like magic but run on reasonable infrastructure.`,
      requirements: [
        '5+ years building and deploying ML systems in production',
        'Deep understanding of LLMs, transformers, and modern AI architectures',
        'Strong Python skills and experience with PyTorch or JAX',
        'Proven track record of shipping ML features that users love',
        'Experience optimizing model inference for latency and cost'
      ],
      responsibilities: [
        'Design and implement AI-powered features for code generation and analysis',
        'Build robust evaluation pipelines to measure model performance',
        'Optimize inference latency and cost without sacrificing quality',
        'Collaborate with product team to scope and ship ML features',
        'Monitor production systems and quickly debug issues'
      ],
      niceToHave: [
        'Experience fine-tuning or training LLMs from scratch',
        'Background in compiler design or program analysis',
        'Contributions to major ML frameworks or libraries'
      ]
    },
    {
      title: '☕ Technical Content Engineer (AI + Dev)',
      description: 'Good coffee.\nGreat code.\nClear explanations.',
      color: 'blue',
      location: 'Remote (US/EU Timezones)',
      type: 'Full-time',
      about: `Great products need great documentation. We're looking for someone who can write about complex technical concepts with clarity and style. You'll be creating docs, tutorials, and educational content that help developers get the most out of AI-powered tools.\n\nThis isn't just technical writing—it's about understanding how developers think, what they struggle with, and crafting content that makes "aha moments" happen. You should be equally comfortable writing code examples and narrative explanations.`,
      requirements: [
        '3+ years writing technical content for developer audiences',
        'Strong programming skills (TypeScript, Python, or similar)',
        'Portfolio of technical writing samples (docs, tutorials, or blog posts)',
        'Understanding of AI/ML concepts and modern development workflows',
        'Ability to explain complex topics in simple, engaging ways'
      ],
      responsibilities: [
        'Write and maintain comprehensive product documentation',
        'Create tutorials, guides, and code examples for key use cases',
        'Develop educational content (blog posts, videos, workshops)',
        'Work with engineering team to document new features',
        'Gather feedback from users to improve content quality'
      ],
      niceToHave: [
        'Experience building developer communities or running workshops',
        'Background in developer advocacy or developer relations',
        'Video production or presentation skills'
      ]
    },
  ];

  return (
    <main>
      <BackgroundAnimation />
      <Navigation />
      
      <section className="pt-48 pb-24 relative min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16 md:text-center max-w-2xl md:mx-auto reveal">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight title-gradient">
              Join Our Team
            </h1>
            <p className="text-slate-400 text-lg">
              We're building the future of AI-powered product development. 
              Come brew some great work with us.
            </p>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`group p-8 glass-panel rounded-2xl hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden reveal delay-${(index + 1) * 100} flex flex-col`}
              >
                {/* Job Title */}
                <h3 className="text-lg font-medium text-white mb-4 leading-relaxed">
                  {job.title}
                </h3>

                {/* Job Description */}
                <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-line flex-1">
                  {job.description}
                </p>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => openModal(job)}
                    className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white text-sm font-medium transition-all duration-200"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => handleApply(job.title)}
                    className="flex-1 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white text-sm font-medium transition-all duration-200 group-hover:translate-y-[-2px]"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Job Description Modal */}
      {isModalOpen && selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl p-8 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Job Header */}
            <div className="mb-6 pr-12">
              <h2 id="modal-title" className="text-3xl font-medium text-white mb-3 leading-tight">
                {selectedJob.title}
              </h2>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {selectedJob.location}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {selectedJob.type}
                </span>
              </div>
            </div>

            {/* About the Role */}
            <div className="mb-8">
              <h3 className="text-xl font-medium text-white mb-3">About the Role</h3>
              <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                {selectedJob.about}
              </p>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className="text-xl font-medium text-white mb-3">Requirements</h3>
              <ul className="space-y-2">
                {selectedJob.requirements.map((req, index) => (
                  <li key={index} className="flex items-start text-slate-300">
                    <span className="mr-3 mt-1 text-indigo-400">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className="text-xl font-medium text-white mb-3">Responsibilities</h3>
              <ul className="space-y-2">
                {selectedJob.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start text-slate-300">
                    <span className="mr-3 mt-1 text-indigo-400">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to Have */}
            <div className="mb-8">
              <h3 className="text-xl font-medium text-white mb-3">Nice to Have</h3>
              <ul className="space-y-2">
                {selectedJob.niceToHave.map((nice, index) => (
                  <li key={index} className="flex items-start text-slate-300">
                    <span className="mr-3 mt-1 text-indigo-400">•</span>
                    <span>{nice}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-white/10">
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white font-medium transition-all duration-200"
              >
                Close
              </button>
              <button
                onClick={() => handleApply(selectedJob.title)}
                className="flex-1 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white font-medium transition-all duration-200 hover:scale-[1.02]"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
