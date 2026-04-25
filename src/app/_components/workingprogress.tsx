import React from "react";

const WorkingProcess: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Find Us Online",
      description: "Repurpose go forward benefits more conveniently e-business",
      icon: (
        // Magnifier with person silhouette inside
        <svg className="w-9 h-9 text-[#1a3fbf]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <circle cx="10" cy="8" r="3" />
          <path strokeLinecap="round" d="M6 20v-1a4 4 0 018 0v1" />
          <circle cx="10" cy="10" r="7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Choose Services",
      description: "Repurpose go forward benefits more conveniently e-business",
      icon: (
        // Hand / cleaning glove icon
        <svg className="w-9 h-9 text-[#1a3fbf]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Book Appoinment",
      description: "Repurpose go forward benefits more conveniently e-business",
      icon: (
        // Calendar with checkmark
        <svg className="w-9 h-9 text-[#1a3fbf]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#1a3fbf] font-bold uppercase tracking-widest text-sm mb-3">
            Working Process
          </p>
          <h2 className="text-4xl font-extrabold text-[#0f1f5c] mb-4">
            Easy Steps to Works
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Competently repurpose go forward benefits without goal-oriented ROI
            conveniently target e-business opportunities whereas
          </p>
        </div>

        {/* Steps row — with SVG connector arc drawn behind them */}
        <div className="relative">

          {/*
            Dashed arc connector — single SVG spanning the full row,
            positioned behind the step cards.
            The path connects center of step 1 → step 2 → step 3.
            At max-w-5xl (800px effective), each step center is at ~133px, ~400px, ~667px.
            Arc peaks midway between steps.
          */}
          <svg
            className="absolute top-[52px] left-0 right-0 w-full pointer-events-none"
            height="40"
            viewBox="0 0 900 40"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Arc 1→2 */}
            <path
              d="M150,20 Q300,2 450,20"
              fill="none"
              stroke="#1a3fbf"
              strokeWidth="1.8"
              strokeDasharray="6 5"
              opacity="0.45"
            />
            {/* Arc 2→3 */}
            <path
              d="M450,20 Q600,38 750,20"
              fill="none"
              stroke="#1a3fbf"
              strokeWidth="1.8"
              strokeDasharray="6 5"
              opacity="0.45"
            />
          </svg>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center text-center">

                {/* Icon box */}
                <div className="relative mb-7">
                  <div
                    className="w-[100px] h-[100px] flex items-center justify-center shadow-md"
                    style={{
                      background: "linear-gradient(145deg, #eef2ff 0%, #dde5ff 100%)",
                      borderRadius: 18,
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Number badge */}
                  <div
                    className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-[#f5a623] text-white text-xs font-extrabold flex items-center justify-center shadow-md"
                  >
                    {step.number}
                  </div>
                </div>

                <h3 className="text-[#0f1f5c] font-extrabold text-xl mb-2">
                  {step.title}
                </h3>

                {/* Blue underline accent */}
                <div className="w-8 h-[3px] bg-[#1a3fbf] rounded-full mb-3" />

                <p className="text-gray-500 text-sm leading-relaxed max-w-[210px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;