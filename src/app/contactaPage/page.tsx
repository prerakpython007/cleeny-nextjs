"use client";
import { useState } from "react";

export default function CleenyContact() {
  const [form, setForm] = useState({ name: "", number: "", email: "", address: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Thank you! We'll be in touch soon.");
    setForm({ name: "", number: "", email: "", address: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        input, textarea {
          outline: none;
          transition: border-color 0.2s;
        }
        input:focus, textarea:focus {
          border-color: #2563eb !important;
        }
        @keyframes spark {
          0%,100%{opacity:1;transform:scale(1) rotate(0deg)}
          50%{opacity:.6;transform:scale(1.3) rotate(15deg)}
        }
        .sp1{animation:spark 2.2s ease-in-out infinite}
        .sp2{animation:spark 2.8s ease-in-out infinite .6s}
        .sp3{animation:spark 2s ease-in-out infinite .3s}
        .play-btn {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .play-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 30px rgba(37,99,235,0.5);
        }
        .submit-btn {
          transition: background 0.2s, transform 0.15s;
        }
        .submit-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }
      `}</style>

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden" style={{background:"linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 70%,#3b82f6 100%)"}}>
        <div className="absolute inset-0 opacity-20"
          style={{backgroundImage:"url('https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1400&q=40')",backgroundSize:"cover",backgroundPosition:"center"}} />
        {/* Sparkles */}
        <div className="absolute top-6 left-16 text-yellow-300 text-2xl sp1 select-none">✦</div>
        <div className="absolute top-4 left-24 text-yellow-300 text-lg sp3 select-none">✦</div>
        <div className="absolute top-8 right-24 text-yellow-300 text-4xl sp2 select-none">✦</div>
        <div className="absolute bottom-5 right-32 text-yellow-200 text-xl sp1 select-none">✦</div>

        <div className="relative z-10 text-center py-14 px-6">
          <h1 className="text-white text-4xl font-extrabold tracking-tight mb-3">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-blue-100 text-xs">
            <span>🏠</span>
            <a href="#" className="hover:text-white transition-colors">Cleeny</a>
            <span>→</span>
            <span className="text-white font-semibold">Contact Us</span>
          </div>
        </div>
      </div>

      {/* ── QUOTE FORM + IMAGE ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row">

            {/* LEFT — cleaner image */}
            <div className="relative md:w-5/12 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=700&q=80"
                alt="Professional cleaner"
                className="w-full h-full object-cover object-top"
                style={{minHeight:"400px", maxHeight:"480px"}}
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-start justify-end p-0">
                <button className="play-btn w-14 h-14 bg-blue-600 rounded-br-none rounded-tr-none rounded-bl-none flex items-center justify-center shadow-xl"
                  style={{borderRadius:"0 0 0 0", marginTop:"0", marginRight:"0"}}>
                  <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="flex-1 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-8">Request A Quote</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name*"
                  className="border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 w-full bg-gray-50"
                />
                <input
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  placeholder="Your Number"
                  className="border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 w-full bg-gray-50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your E-Mail*"
                  className="border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 w-full bg-gray-50"
                />
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Your Address"
                  className="border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 w-full bg-gray-50"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write A Message..."
                rows={4}
                className="border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 w-full bg-gray-50 resize-none mb-6"
              />

              <button
                onClick={handleSubmit}
                className="submit-btn flex items-center gap-2 bg-blue-600 text-white font-bold text-sm px-7 py-3 rounded-full shadow-md"
              >
                Submit Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="w-full" style={{height:"340px"}}>
        <iframe
          title="Cleeny Location"
          src="https://maps.google.com/maps?q=Tel+Aviv,+Israel&z=7&output=embed"
          width="100%"
          height="100%"
          style={{border:0, display:"block"}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}