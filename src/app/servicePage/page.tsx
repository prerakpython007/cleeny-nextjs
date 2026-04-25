"use client";

const services = [
  {
    title: "House Wash & Clean",
    img: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: "Office Floor Cleaning",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Kitchen Cleaning",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path d="M8 3v4M16 3v4M3 8h18M5 21h14a2 2 0 002-2V8H3v11a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Glass Cleaning",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Carpet Cleaning",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path d="M3 6h18M3 12h18M3 18h18" />
      </svg>
    ),
  },
  {
    title: "Door Cleaning",
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path d="M14 2H4v20h16V8l-6-6z" />
        <circle cx="15" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

const plans = [
  {
    name: "Starter Plans",
    price: 39,
    bg: "bg-blue-600",
    btn: "bg-blue-600 hover:bg-blue-700 text-white",
    features: ["15% OFF All Service","Floor Wash & Cleans","Maintainance Equipment","Schedule Booking","24/7 Support"],
  },
  {
    name: "Standard Plans",
    price: 59,
    bg: "bg-blue-700",
    featured: true,
    btn: "bg-blue-700 hover:bg-blue-800 text-white",
    features: ["15% OFF All Service","Floor Wash & Cleans","Maintainance Equipment","Schedule Booking","24/7 Support"],
  },
  {
    name: "Premium Plans",
    price: 89,
    bg: "bg-blue-800",
    btn: "bg-blue-800 hover:bg-blue-900 text-white",
    features: ["15% OFF All Service","Floor Wash & Cleans","Maintainance Equipment","Schedule Booking","24/7 Support"],
  },
];

export default function CleenyPage() {
  return (
    <div className="min-h-screen bg-gray-100" style={{fontFamily:"'Nunito',sans-serif"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        .card-img{transition:transform .4s ease}
        .svc-card:hover .card-img{transform:scale(1.07)}
        .svc-card:hover .vd-btn{color:#2563eb}
        @keyframes spark{0%,100%{opacity:1;transform:scale(1) rotate(0deg)}50%{opacity:.6;transform:scale(1.3) rotate(15deg)}}
        .sp1{animation:spark 2.2s ease-in-out infinite}
        .sp2{animation:spark 2.8s ease-in-out infinite .6s}
        @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .bob{animation:bob 3s ease-in-out infinite}
      `}</style>

      {/* HERO */}
      <div className="relative overflow-hidden" style={{background:"linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 70%,#3b82f6 100%)", minHeight:"300px"}}>
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage:"url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=30')",backgroundSize:"cover",backgroundPosition:"center"}} />
        <div className="absolute top-5 left-20 text-yellow-300 text-3xl sp1 select-none">✦</div>
        <div className="absolute top-8 right-28 text-yellow-300 text-4xl sp2 select-none">✦</div>
        <div className="absolute bottom-5 left-1/3 text-yellow-200 text-2xl sp1 select-none">✦</div>
        <div className="relative z-10 text-center py-20 px-6">
          <div className="flex items-center justify-center gap-2 text-blue-200 text-xs mb-3">
            <span>🏠</span><span>Cleeny</span><span>›</span><span>Our Services</span>
          </div>
          <h1 className="text-white text-4xl font-extrabold tracking-tight">Our Services</h1>
        </div>
      </div>

      {/* SERVICES */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div>
              <p className="text-blue-600 text-xs font-extrabold uppercase tracking-widest mb-2">OUR SERVICES</p>
              <h2 className="text-2xl md:text-[28px] font-extrabold text-gray-800 leading-tight">
                Professional cleeny Services<br/>
                <span className="text-blue-700">What we Provide</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed mt-1">
              Competently repurpose go-forward benefits without goal-driven conveniently impact exceptional opportunities whereas provide multifaceted ideal best services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="svc-card rounded-xl overflow-visible shadow-sm hover:shadow-lg border border-gray-100 bg-white transition-shadow duration-300">
                <div className="overflow-hidden h-48 rounded-t-xl">
                  <img src={s.img} alt={s.title} className="card-img w-full h-full object-cover" />
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-gray-800 text-sm mb-1">{s.title}</h3>
                    <button className="vd-btn flex items-center gap-1 text-xs font-bold text-gray-400 transition-colors">
                      View Details →
                    </button>
                  </div>
                  <div className="w-10 h-10 rounded bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
                    {s.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-5 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-xl overflow-hidden flex flex-col md:flex-row items-center gap-5 px-8 py-7 shadow-lg"
            style={{background:"linear-gradient(120deg,#1e3a8a 0%,#1d4ed8 100%)"}}>
            {/* subtle dot pattern */}
            <div className="absolute right-0 top-0 h-full w-56 opacity-10"
              style={{backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)",backgroundSize:"18px 18px"}} />
            
            <div className="bob flex-shrink-0 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=160&q=80"
                alt="cleaner"
                className="w-20 h-20 object-cover rounded-full border-4 border-white border-opacity-25 shadow-xl"
              />
            </div>

            <div className="text-white flex-1">
              <h3 className="text-xl md:text-2xl font-extrabold leading-snug">
                Please Call Us to Take the<br/>
                Extraordinary Service!
              </h3>
            </div>

            <button className="flex-shrink-0 flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-sm px-7 py-3 rounded-full shadow-lg transition-all duration-200 whitespace-nowrap">
              📞 Call: (800) 555-0199
            </button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-blue-600 text-xs font-extrabold uppercase tracking-widest text-center mb-2">PRICING PLAN</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-700 text-center mb-14">
            Affordable Pricing Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i}
                className={`relative pt-10 rounded-2xl bg-white border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.featured ? "border-blue-500 shadow-xl" : "border-gray-200 shadow-md"
                }`}
              >
                {/* Badge */}
                <div className={`${plan.bg} w-24 h-24 mx-auto -mt-16 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg`}>
                  <span className="text-xs font-semibold opacity-70">$</span>
                  <span className="text-4xl font-extrabold leading-none">{plan.price}</span>
                  <span className="text-xs opacity-70 mt-0.5">Monthly</span>
                </div>

                <div className="p-6 pt-4">
                  <h3 className="text-center font-extrabold text-gray-800 text-base mb-5">{plan.name}</h3>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-2.5 rounded-full text-sm font-extrabold transition-colors ${plan.btn}`}>
                    Choose Plan →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}