import React from "react";

const CTABanner: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Blue overlay */}
          <div className="absolute inset-0 bg-[#1a3fbf]/88" />

          {/* Bubble decorations */}
          {[
            { size: 100, top: "-10%", left: "30%" },
            { size: 70, bottom: "5%", right: "15%" },
            { size: 60, top: "10%", right: "40%" },
          ].map((b, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white/15 pointer-events-none"
              style={{
                width: b.size,
                height: b.size,
                top: (b as any).top,
                left: (b as any).left,
                right: (b as any).right,
                bottom: (b as any).bottom,
              }}
            />
          ))}

          {/* Text — left */}
          <div className="relative z-10">
            <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-snug max-w-sm">
              Please Call Us to Take the <br /> Extraordinary Service!
            </h2>
          </div>

          {/* Center cleaner image — peeking above banner */}
          <div className="relative z-10 hidden md:flex items-end justify-center self-end h-48 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300&q=80"
              alt="Cleaner"
              className="h-full object-contain object-bottom"
              style={{ maxHeight: 180 }}
            />
          </div>

          {/* Call button — right */}
          <div className="relative z-10">
            <a
              href="tel:1234567890"
              className="inline-flex items-center gap-3 bg-[#f5a623] hover:bg-[#e09510] text-white font-bold px-6 py-3.5 rounded-full text-sm transition shadow-xl whitespace-nowrap"
            >
              <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              Call : 123 (4567) 890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;