"use client";
import React, { useState } from "react";

interface PricingPlan {
  price: string;
  label: string;
  name: string;
  features: string[];
  highlighted?: boolean;
}

const plans: PricingPlan[] = [
  {
    price: "39",
    label: "Monthly",
    name: "Starter Plans",
    features: [
      "15% OFF All Service",
      "Floor Wash & cleeny",
      "Maintaince Equipment",
      "Schedule Working",
      "24/7 Supports",
    ],
  },
  {
    price: "59",
    label: "Monthly",
    name: "Standard Plans",
    features: [
      "15% OFF All Service",
      "Floor Wash & cleeny",
      "Maintaince Equipment",
      "Schedule Working",
      "24/7 Supports",
    ],
    highlighted: true,
  },
  {
    price: "89",
    label: "Monthly",
    name: "Premium Plans",
    features: [
      "15% OFF All Service",
      "Floor Wash & cleeny",
      "Maintaince Equipment",
      "Schedule Working",
      "24/7 Supports",
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#1a3fbf] font-bold uppercase tracking-widest text-xs mb-2">
            Pricing Plan
          </p>
          <h2 className="text-4xl font-extrabold text-[#0f1f5c]">
            Affordable Pricing Plan
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative bg-[#f5f7fb] border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 pt-14 pb-8 px-7"
            >
              {/* Price badge — blue square at top */}
              <div
                className="absolute -top-1 left-7 bg-[#1a3fbf] text-white px-5 py-3 shadow-lg"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)" }}
              >
                <span className="text-xs font-semibold opacity-80">$</span>
                <span className="text-3xl font-extrabold leading-none">{plan.price}</span>
                <p className="text-[10px] font-semibold opacity-80 mt-0.5">{plan.label}</p>
              </div>

              {/* Plan name with left blue border */}
              <div className="border-l-4 border-[#1a3fbf] pl-3 mb-6 mt-2">
                <h3 className="text-[#0f1f5c] font-extrabold text-lg">{plan.name}</h3>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-[#1a3fbf] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#1a3fbf] hover:bg-[#1430a0] text-white font-bold px-6 py-2.5 rounded-full text-sm transition shadow-md"
              >
                Choose Plan
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;