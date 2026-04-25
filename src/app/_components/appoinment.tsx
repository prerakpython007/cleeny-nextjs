"use client";
import React, { useState } from "react";

/* ─────────────────────────────────────────
   Zigzag SVG helpers
───────────────────────────────────────── */
const ZigzagBottom: React.FC<{ color?: string }> = ({ color = "#ffffff" }) => (
  <div className="w-full overflow-hidden leading-none" style={{ height: 30 }}>
    <svg
      viewBox="0 0 1200 30"
      preserveAspectRatio="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        points={"0,0 " + Array.from({ length: 61 }, (_, i) =>
          `${i * 20},${i % 2 === 0 ? 0 : 30}`
        ).join(" ") + " 1200,0 1200,30 0,30"}
        fill={color}
      />
    </svg>
  </div>
);

/* ─────────────────────────────────────────
   Appointment Section
───────────────────────────────────────── */
const AppointmentSection: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const serviceOptions = [
    "House Cleaning",
    "Office Floor Cleaning",
    "Window Cleaning",
    "Kitchen Cleaning",
    "Roof Clean & Wash",
  ];

  return (
    <div className="relative">
      {/* Zigzag top — white zigzag at top */}
      <ZigzagBottom color="#ffffff" />

      {/* BG: hero-bg.png with blue overlay */}
      <div
        className="relative py-10 px-4 overflow-hidden"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Strong blue overlay so content is readable */}
        <div className="absolute inset-0 bg-[#1a3fbf]/90" />

        {/* Bubble decorations */}
        {[
          { size: 130, top: "8%", left: "4%" },
          { size: 80, top: "55%", left: "18%" },
          { size: 170, top: "15%", right: "6%" },
          { size: 60, bottom: "12%", right: "22%" },
          { size: 100, bottom: "5%", left: "40%" },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/20 pointer-events-none"
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

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-[#f5a623] font-bold uppercase tracking-widest text-sm mb-2">
              Our Services
            </p>
            <h2 className="text-white text-4xl font-extrabold">
              Professional cleeny Services
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-stretch">
            <input
              type="text"
              placeholder="Enter Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-5 py-3.5 bg-white text-gray-700 placeholder-gray-400 text-sm font-medium outline-none focus:ring-2 focus:ring-[#f5a623] transition rounded"
            />
            <input
              type="tel"
              placeholder="Phone No."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 px-5 py-3.5 bg-white text-gray-700 placeholder-gray-400 text-sm font-medium outline-none focus:ring-2 focus:ring-[#f5a623] transition rounded"
            />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="flex-1 px-5 py-3.5 bg-white text-gray-400 text-sm font-medium outline-none focus:ring-2 focus:ring-[#f5a623] transition appearance-none cursor-pointer rounded"
            >
              <option value="" disabled>Select Service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s} className="text-gray-700">{s}</option>
              ))}
            </select>
            <button className="bg-[#f5a623] hover:bg-[#e09510] text-white font-bold px-7 py-3.5 text-sm transition shadow-lg whitespace-nowrap flex items-center gap-2 rounded">
              Book Appoinment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Zigzag bottom — blue cuts into white */}
      <ZigzagBottom color="#ffffff" />
    </div>
  );
};

/* ─────────────────────────────────────────
   Services Section
───────────────────────────────────────── */
interface ServiceCardData {
  image: string;
  iconSvg: React.ReactNode;
  title: string;
  checks: string[];
}

const serviceCards: ServiceCardData[] = [
  {
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&q=80",
    iconSvg: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Office Floor Cleaning",
    checks: ["House Floor Cleaning", "Roof Clean & Wash"],
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    iconSvg: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "House Wash & Clean",
    checks: ["House Floor Cleaning", "Roof Clean & Wash"],
  },
  {
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&q=80",
    iconSvg: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "House Kitchen Cleaning",
    checks: ["House Floor Cleaning", "Roof Clean & Wash"],
  },
];

const ServicesSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div
      className="relative py-14 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Strong blue overlay */}
      <div className="absolute inset-0 bg-[#0e1f8a]/92" />

      {/* Bubble decorations */}
      {[
        { size: 180, top: "-5%", left: "-3%" },
        { size: 120, bottom: "10%", right: "5%" },
        { size: 80, top: "40%", left: "50%" },
      ].map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/10 pointer-events-none"
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

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#f5a623] font-bold uppercase tracking-widest text-sm mb-2">
            Our Services
          </p>
          <h2 className="text-white text-4xl font-extrabold">
            Professional cleeny Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="group cursor-pointer overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              style={{ background: "#1a3fbf" }}
            >
              {/* Image — top portion, no radius */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Icon badge: sits half on image, half on card body */}
                <div className="absolute bottom-[-22px] left-5 w-12 h-12 bg-[#1a3fbf] flex items-center justify-center z-10 shadow-lg">
                  {card.iconSvg}
                </div>
              </div>

              {/* Card body */}
              <div className="pt-10 pb-6 px-6">
                <h3 className="text-white font-extrabold text-lg mb-3">{card.title}</h3>
                <ul className="space-y-2 mb-5">
                  {card.checks.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-white/80 text-sm">
                      <svg className="w-4 h-4 text-[#f5a623] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
                <a href="#" className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold transition group/link">
                  View Details
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-3 rounded-full transition-all duration-300 ${
                activeSlide === i ? "bg-[#f5a623] w-7" : "bg-white/40 w-3"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Zigzag bottom of services — white below */}
      <div className="absolute bottom-0 left-0 right-0">
        <ZigzagBottom color="#ffffff" />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   Combined default export
───────────────────────────────────────── */
const AppointmentAndServices: React.FC = () => (
  <div>
    <AppointmentSection />
    {/* Zigzag transition between sections */}
    <div className="relative">
      <ZigzagBottom color="#ffffff" />
      <ServicesSection />
    </div>
  </div>
);

export default AppointmentAndServices;
export { AppointmentSection, ServicesSection };