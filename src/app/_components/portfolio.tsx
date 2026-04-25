"use client";
import React, { useState } from "react";

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    tag: null,
    location: null,
    title: null,
  },
  {
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
    tag: "Cleaning",
    location: "Sandigo, USA",
    title: "House Floor Cleaning",
  },
  {
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80",
    tag: null,
    location: null,
    title: null,
  },
];

const PortfolioSection: React.FC = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-[#f5f7fa] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[#1a3fbf] font-bold uppercase tracking-widest text-xs mb-2">
              Cleeny Portfolio
            </p>
            <h2 className="text-3xl font-extrabold text-[#0f1f5c] leading-tight">
              Latest cleeny Portfolio <br /> from Work Galary
            </h2>
          </div>
          <div className="shrink-0 self-center md:self-start">
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white font-bold px-6 py-2.5 rounded-full text-sm transition"
            >
              View All Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolioItems.map((item, i) => (
            <div key={i} className="relative overflow-hidden group cursor-pointer" style={{ height: 240 }}>
              <img
                src={item.image}
                alt={item.title || `Portfolio ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Middle card overlay */}
              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-[#1a3fbf] px-4 py-3 flex items-center justify-between">
                  <div>
                    {item.tag && (
                      <span className="inline-block bg-[#f5a623] text-white text-[10px] font-bold px-2 py-0.5 mb-1">
                        {item.tag}
                      </span>
                    )}
                    {item.location && (
                      <p className="text-white/70 text-xs flex items-center gap-1 mb-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                        </svg>
                        {item.location}
                      </p>
                    )}
                    <p className="text-white font-bold text-sm">{item.title}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#f5a623] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                active === i ? "bg-[#1a3fbf] w-8" : "bg-gray-300 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;