import React from "react";

const AboutSection: React.FC = () => {
  const checkItems = [
    "Cleeny Your Home or Office",
    "24/7 Emmergency Quality Services",
    "Online Booking System available",
  ];

  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Overlapping Image Collage ── */}
        <div className="relative h-[460px]">

          {/* Blue vertical bar — far left edge */}
          <div className="absolute left-0 top-6 h-[340px] w-[7px] bg-[#1a3fbf] z-10" />

          {/* Large image — sharp, shifted right of bar */}
          <div className="absolute left-6 top-0 w-[65%] h-[370px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80"
              alt="Cleaner with supplies"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small image — sharp, overlapping lower-right of big image, with white border */}
          <div
            className="absolute bottom-0 right-0 w-[50%] h-[240px] overflow-hidden shadow-2xl z-20"
            style={{ border: "5px solid white" }}
          >
            <img
              src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80"
              alt="Cleaning close-up"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Play button — centered on the overlap seam */}
          <div
            className="absolute z-30 w-16 h-16 bg-white shadow-2xl rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            style={{ left: "58%", top: "52%", transform: "translate(-50%, -50%)" }}
          >
            <div className="w-11 h-11 rounded-full bg-[#eef2ff] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#1a3fbf] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className="relative">
          {/* Sparkle top-right */}
          <div className="absolute -top-4 right-4 text-[#1a3fbf]">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
              <path
                d="M14 0L15.96 12.04L28 14L15.96 15.96L14 28L12.04 15.96L0 14L12.04 12.04L14 0Z"
                fill="#1a3fbf"
              />
            </svg>
          </div>

          <p className="text-[#1a3fbf] font-semibold uppercase tracking-widest text-sm mb-3">
            About Us
          </p>
          <h2 className="text-4xl font-extrabold text-[#0f1f5c] leading-tight mb-5">
            Making Your House Clean <br /> For Looks As a New
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-7 max-w-lg">
            Competently repurpose go forward benefits without goal-oriented ROI
            conveniently target e-business opportunities whereas parallel task
            multimedia based web services
          </p>

          <ul className="space-y-3 mb-8">
            {checkItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#0f1f5c] font-semibold text-[15px]">
                <span className="w-5 h-5 rounded-full bg-[#1a3fbf] flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#1a3fbf] hover:bg-[#1430a0] text-white font-bold px-7 py-3.5 rounded-full text-sm transition shadow-lg hover:shadow-xl"
            >
              More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Experience badge */}
            <div className="bg-[#f5a623] rounded-xl p-5 flex flex-col items-center justify-center min-w-[120px] shadow-lg">
              <svg className="w-8 h-8 text-white mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M5 3H3v5a4 4 0 004 4h.5M19 3h2v5a4 4 0 01-4 4h-.5M7 3h10v6a5 5 0 01-10 0V3z" />
              </svg>
              <span className="text-white font-extrabold text-2xl leading-none">12+</span>
              <span className="text-white/90 text-xs font-medium mt-1 text-center">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;