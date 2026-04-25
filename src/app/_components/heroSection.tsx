import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-5 flex items-start gap-4 flex-1 min-w-[240px]">
    <div className="shrink-0 w-14 h-14 flex items-center justify-center">
      <img src={icon} alt={title} className="w-12 h-12 object-contain" />
    </div>
    <div>
      <h3 className="text-[#1a3a6b] font-bold text-lg leading-snug mb-1">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        Competently repurpose clean conveniently target
      </p>
    </div>
  </div>
);

const HeroSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: "/feature-icon.png",
      title: "House Cleeny",
      description: "Competently repurpose clean conveniently target",
    },
    {
      icon: "/feature-icon2.png",
      title: "Window Cleeny",
      description: "Competently repurpose clean conveniently target",
    },
    {
      icon: "/feature-icon3.png",
      title: "Instrument",
      description: "Competently repurpose clean conveniently target",
    },
  ];

  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a3fbf 0%, #1230a0 100%)" }}>
      {/* ── Hero Background ── */}
      <div
        className="relative min-h-[540px] md:min-h-[600px] flex items-center"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blue overlay to match design tone */}
        <div className="absolute inset-0 bg-[#1a3fbf]/80" />

        {/* ── Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="text-white">
            {/* Badge */}
            <p className="text-[#f5a623] font-semibold uppercase tracking-widest text-sm mb-4">
              Best Cleeny Agency
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              Need Cleeny? <br />
              <span className="text-white">Call</span>
              <span className="text-[#f5a623]">US TODAY</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/80 text-base leading-relaxed max-w-md mb-8">
              Need Clean of your home or office? Just Feel Free to Contact us.
              We try to Help you as soon as possible.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#e09510] text-white font-bold px-7 py-3.5 rounded-full text-base transition shadow-xl hover:shadow-2xl"
            >
              Get Started Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Women image */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/hero-women.png"
              alt="Cleeny professional cleaner"
              className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* ── Feature Cards ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-12 pb-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;