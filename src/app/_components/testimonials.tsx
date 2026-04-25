"use client";
import React, { useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  tag: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jhon D. Alexon",
    role: "Web Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    tag: "Service Quality",
    quote:
      "Competently cultivate worldwide e-tailers through to principles professionally engineer high-payoff deliverables without excet Rapidiously network effective",
  },
  {
    name: "Anjelina Watson",
    role: "UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    tag: "Service Quality",
    quote:
      "Competently cultivate worldwide e-tailers through to principles professionally engineer high-payoff deliverables without excet Rapidiously network effective",
  },
];

const TestimonialsSection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f1f6e 0%, #1a3fbf 100%)" }}
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#f5a623] font-bold uppercase tracking-widest text-xs mb-3">
            Testimonials
          </p>
          <h2 className="text-white text-4xl font-extrabold">
            Our Customer's Feedback
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-[#1a3fbf]/60 backdrop-blur border border-white/10 p-6 shadow-xl"
            >
              {/* Top row: avatar + name + quote icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-1">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <svg key={s} className="w-3.5 h-3.5 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-white/60 text-xs">{t.role}</p>
                  </div>
                </div>
                {/* Quote mark */}
                <div className="text-[#f5a623] opacity-60">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Tag */}
              <p className="text-[#f5a623] font-bold text-sm mb-2">{t.tag}</p>

              {/* Quote */}
              <p className="text-white/75 text-sm leading-relaxed">"{t.quote}"</p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                active === i ? "bg-[#f5a623] w-7" : "bg-white/30 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;