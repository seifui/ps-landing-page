export default function Testimonials() {
  const testimonials = [
    {
      quote: "Prezso Labs brought clarity and speed to our product vision. They took our idea from concept to MVP in record time without sacrificing quality.",
      name: "Alex Chen",
      title: "Founder, Streamline",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    },
    {
      quote: "Their design thinking paired with engineering rigor is rare. The team delivered a scalable platform that our users love.",
      name: "Sarah Miller",
      title: "Product Lead, Nova",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
      quote: "They don't just build what you ask for—they challenge assumptions and deliver what you actually need. True product partners.",
      name: "James Wilson",
      title: "CTO, TechFlow",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
    }
  ];

  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
    </svg>
  );

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-medium text-center text-white mb-16 tracking-tight reveal">
        Trusted by founders and product leaders
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`glass-panel p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors reveal delay-${(index + 1) * 100}`}
          >
            <div className="flex gap-1 mb-4 text-indigo-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="flex items-center gap-3">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-8 h-8 rounded-full bg-slate-700 object-cover"
              />
              <div>
                <p className="text-xs font-medium text-white">{testimonial.name}</p>
                <p className="text-[10px] text-slate-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
