import React from "react";

/* ─────────────────────────────────────────
   HERO BANNER  (About page variant)
───────────────────────────────────────── */
const HeroBanner: React.FC = () => (
  <section style={{ background: "linear-gradient(135deg,#1a3fbf 0%,#1230a0 100%)", position: "relative", overflow: "hidden", minHeight: "300px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
    {/* Bg texture */}
    <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.18 }} />
    <div style={{ position: "absolute", inset: 0, background: "rgba(26,63,191,0.82)" }} />
    {/* Sparkles */}
    {[{ top: "20%", left: "8%", size: 28 }, { top: "22%", right: "10%", size: 22 }, { bottom: "22%", left: "14%", size: 20 }].map((s, i) => (
      <div key={i} style={{ position: "absolute", top: (s as any).top, left: (s as any).left, right: (s as any).right, bottom: (s as any).bottom, color: "#f5a623", fontSize: s.size, zIndex: 1 }}>✦</div>
    ))}
    <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
      <h1 style={{ color: "#fff", fontSize: "46px", fontWeight: 900, margin: "0 0 12px" }}>About Us</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
        <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>🏠 Cleeny</span>
        <span style={{ color: "#f5a623" }}>→</span>
        <span style={{ fontSize: "15px", color: "#fff" }}>About Us</span>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   FEATURE CARDS  (from HeroSection)
───────────────────────────────────────── */
interface FeatureCardProps { icon: string; title: string; }

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => (
  <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", padding: "20px 24px", display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: "220px" }}>
    <div style={{ width: "56px", height: "56px", borderRadius: "12px", background: "linear-gradient(135deg,#e8f0ff,#d0dcff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", flexShrink: 0 }}>{icon}</div>
    <div>
      <h3 style={{ color: "#1a3a6b", fontWeight: 800, fontSize: "16px", margin: "0 0 5px" }}>{title}</h3>
      <p style={{ color: "#888", fontSize: "13px", margin: 0, lineHeight: 1.5 }}>Competently repurpose clean conveniently target</p>
    </div>
  </div>
);

const FeatureCards: React.FC = () => (
  <div style={{ maxWidth: "1100px", margin: "-40px auto 0", padding: "0 40px", position: "relative", zIndex: 10, display: "flex", gap: "20px" }}>
    {[{ icon: "🏠", title: "House Cleeny" }, { icon: "🪟", title: "Window Cleeny" }, { icon: "🧰", title: "Instrument" }].map((f) => (
      <FeatureCard key={f.title} {...f} />
    ))}
  </div>
);

/* ─────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────── */
const AboutSection: React.FC = () => (
  <section style={{ padding: "80px 40px", maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "64px", alignItems: "center" }}>
    {/* Left: Image collage */}
    <div style={{ flex: "0 0 420px", position: "relative" }}>
      <div style={{ position: "absolute", left: 0, top: "10%", width: "6px", height: "75%", background: "#1a3fbf", borderRadius: "3px" }} />
      <img src="https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-04-25%2FMiniMax-M2.7%2F2041057483379708677%2F473c227507cb273541bcc9b584e63ac34500b726b3f11a72c52311208fdbf7b5..png?Expires=1777186904&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=%2FQGbrelGK3fmgdFCpK9%2BBMeKatk%3D" alt="Cleaning professional" style={{ width: "350px", height: "400px", objectFit: "cover", borderRadius: "8px", marginLeft: "20px", display: "block" }} />
      {/* Play button */}
      <div style={{ position: "absolute", top: "34%", left: "54%", transform: "translate(-50%,-50%)", width: "54px", height: "54px", borderRadius: "50%", background: "#1a3fbf", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 0 0 10px rgba(26,63,191,0.18)" }}>
        <span style={{ color: "#fff", fontSize: "18px", marginLeft: "3px" }}>▶</span>
      </div>
    </div>

    {/* Right: Text */}
    <div style={{ flex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <p style={{ color: "#1a3fbf", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>ABOUT US</p>
        <span style={{ color: "#1a3fbf", fontSize: "24px" }}>✦</span>
      </div>
      <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#1a2e8f", lineHeight: 1.2, margin: "0 0 16px" }}>
        Making Your House Clean<br />For Looks As a New
      </h2>
      <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.75, marginBottom: "26px" }}>
        Competently repurpose go forward benefits without goal-oriented ROI conveniently target e-business opportunities whereas parallel task multimedia based web services
      </p>
      {/* Checklist + badge */}
      <div style={{ display: "flex", gap: "28px", alignItems: "flex-start", marginBottom: "30px" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
          {["Cleeny Your Home or Office", "24/7 Emergency Quality Services", "Online Booking System available"].map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#333", fontWeight: 500 }}>
              <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#1a3fbf", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "12px", flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
        <div style={{ background: "#f5a623", borderRadius: "10px", padding: "22px 26px", textAlign: "center", minWidth: "120px", flexShrink: 0 }}>
          <div style={{ fontSize: "30px", color: "#1a2e8f", marginBottom: "6px" }}>🏆</div>
          <div style={{ fontSize: "30px", fontWeight: 900, color: "#1a2e8f", lineHeight: 1 }}>12+</div>
          <div style={{ fontSize: "12px", color: "#1a2e8f", fontWeight: 700, marginTop: "5px" }}>Years Experience</div>
        </div>
      </div>
      {/* CTA — pill style from HeroSection */}
      <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#1a3fbf", color: "#fff", padding: "13px 30px", borderRadius: "30px", fontWeight: 700, fontSize: "14px", textDecoration: "none", boxShadow: "0 6px 20px rgba(26,63,191,0.3)" }}>
        More About Us
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   CALL BANNER
───────────────────────────────────────── */
const CallBanner: React.FC = () => (
  <section style={{ background: "linear-gradient(135deg,#0f1f6e 0%,#1a3fbf 100%)", position: "relative", overflow: "hidden", minHeight: "160px", display: "flex", alignItems: "center" }}>
    {[{ w: 80, top: "10%", left: "38%" }, { w: 50, bottom: "10%", left: "45%" }, { w: 60, top: "20%", right: "15%" }].map((b, i) => (
      <div key={i} style={{ position: "absolute", width: b.w, height: b.w, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.1)", top: (b as any).top, left: (b as any).left, right: (b as any).right, bottom: (b as any).bottom }} />
    ))}
    <img src="https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-04-25%2FMiniMax-M2.7%2F2041057483379708677%2F473c227507cb273541bcc9b584e63ac34500b726b3f11a72c52311208fdbf7b5..png?Expires=1777186904&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=%2FQGbrelGK3fmgdFCpK9%2BBMeKatk%3D" alt="Cleaner" style={{ position: "absolute", left: "44%", bottom: 0, height: "170px", objectFit: "cover", objectPosition: "top" }} />
    <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", padding: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
      <h2 style={{ color: "#fff", fontSize: "28px", fontWeight: 900, margin: 0, maxWidth: "340px", lineHeight: 1.35 }}>
        Please Call Us to Take the<br />Extraordinary Service!
      </h2>
      <a href="tel:+1234567890" style={{ background: "#f5a623", color: "#fff", padding: "14px 28px", borderRadius: "30px", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 4px 20px rgba(245,166,35,0.4)" }}>
        📞 Call : 123 (4567) 890
      </a>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   WORKING PROCESS
───────────────────────────────────────── */
const WorkingProcess: React.FC = () => {
  const steps = [
    { num: "1", icon: "🔍", title: "Find Us Online", desc: "Repurpose go forward benefits more conveniently e-business" },
    { num: "2", icon: "🤝", title: "Choose Services", desc: "Repurpose go forward benefits more conveniently e-business" },
    { num: "3", icon: "📅", title: "Book Appointment", desc: "Repurpose go forward benefits more conveniently e-business" },
  ];
  return (
    <section style={{ padding: "80px 40px", textAlign: "center", background: "#f7f8fd", position: "relative", overflow: "hidden" }}>
      <img src="https://images.unsplash.com/photo-1527515673510-8aa78ce21f9b?w=120&q=80" alt="" style={{ position: "absolute", left: 0, top: "8%", width: "90px", borderRadius: "4px", opacity: 0.6 }} />
      <img src="https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=120&q=80" alt="" style={{ position: "absolute", right: 0, top: "8%", width: "90px", borderRadius: "4px", opacity: 0.6 }} />
      <p style={{ color: "#f5a623", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>WORKING PROCESS</p>
      <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#1a2e8f", marginBottom: "12px" }}>Easy Steps to Works</h2>
      <p style={{ color: "#888", fontSize: "14px", maxWidth: "480px", margin: "0 auto 52px", lineHeight: 1.7 }}>Competently repurpose go forward benefits without goal-oriented ROI conveniently target e-business opportunities whereas</p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", maxWidth: "800px", margin: "0 auto", position: "relative" }}>
        {/* Curved dashed connector SVG */}
        <svg width="600" height="24" viewBox="0 0 600 24" style={{ position: "absolute", top: "44px", left: "100px", right: "100px", zIndex: 0 }}>
          <path d="M0 12 Q150 0 300 12 Q450 24 600 12" stroke="#c5d0f0" strokeWidth="2" strokeDasharray="8 6" fill="none" />
        </svg>
        {steps.map((step, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
            <div style={{ position: "relative", marginBottom: "20px" }}>
              <div style={{ width: "88px", height: "88px", background: "#fff", borderRadius: "16px", boxShadow: "0 8px 32px rgba(26,63,191,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", border: "1px solid #e8eef8" }}>{step.icon}</div>
              <div style={{ position: "absolute", top: "-10px", right: "-10px", width: "26px", height: "26px", borderRadius: "50%", background: "#f5a623", color: "#fff", fontSize: "12px", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{step.num}</div>
            </div>
            <h3 style={{ color: "#1a2e8f", fontWeight: 800, fontSize: "16px", marginBottom: "8px" }}>{step.title}</h3>
            <div style={{ width: "30px", height: "3px", background: "#1a3fbf", borderRadius: "2px", marginBottom: "10px" }} />
            <p style={{ color: "#888", fontSize: "13px", lineHeight: 1.6, maxWidth: "180px", textAlign: "center", margin: 0 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   TEAM SECTION
───────────────────────────────────────── */
const TeamSection: React.FC = () => {
  const members = [
    { name: "Anjelina Watson", role: "House Cleaner", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80" },
    { name: "Jhon D. Alexon", role: "Office Cleaner", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80" },
    { name: "Mariyo Hena", role: "Floor Cleaner", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" },
    { name: "Henry Weters", role: "Glass Cleaner", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80" },
  ];
  return (
    <section style={{ background: "linear-gradient(135deg,#0f1f6e 0%,#1a3fbf 100%)", padding: "80px 40px", position: "relative", overflow: "hidden" }}>
      {[{ s: 100, top: "10%", left: "2%" }, { s: 60, bottom: "15%", left: "4%" }, { s: 80, top: "5%", right: "2%" }, { s: 50, bottom: "20%", right: "5%" }].map((b, i) => (
        <div key={i} style={{ position: "absolute", width: b.s, height: b.s, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.1)", top: (b as any).top, left: (b as any).left, right: (b as any).right, bottom: (b as any).bottom }} />
      ))}
      <div style={{ textAlign: "center", marginBottom: "50px", position: "relative", zIndex: 1 }}>
        <p style={{ color: "#f5a623", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>OUR TEAM</p>
        <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#fff", margin: 0 }}>Meet Our Expert Members</h2>
      </div>
      <div style={{ display: "flex", gap: "24px", justifyContent: "center", maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1, flexWrap: "wrap" }}>
        {members.map((member, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: "10px", width: "210px", textAlign: "center", paddingTop: "70px", paddingBottom: "24px", paddingLeft: "16px", paddingRight: "16px", position: "relative", marginTop: "60px" }}>
            <div style={{ position: "absolute", top: "-55px", left: "50%", transform: "translateX(-50%)", width: "110px", height: "110px", borderRadius: "50%", border: "4px solid #1a3fbf", overflow: "hidden", background: "#e8eef8" }}>
              <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <h4 style={{ color: "#1a2e8f", fontWeight: 800, fontSize: "15px", margin: "0 0 4px" }}>{member.name}</h4>
            <p style={{ color: "#888", fontSize: "13px", marginBottom: "16px" }}>{member.role}</p>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
              {["f", "𝕏", "in", "P"].map((ic) => (
                <a key={ic} href="#" style={{ width: "28px", height: "28px", borderRadius: "4px", border: "1px solid #e0e6f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a3fbf", fontSize: "11px", fontWeight: 700, textDecoration: "none" }}>{ic}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────── */
const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Jhon D. Alexon", role: "Web Developer", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80", heading: "Service Quality", text: "Competently cultivate worldwide e-tailers through to principles professionally engineer high-payoff deliverables without excet Rapidiously network effective", active: false },
    { name: "Anjelina Watson", role: "UI/UX Designer", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80", heading: "Service Quality", text: "Competently cultivate worldwide e-tailers through to principles professionally engineer high-payoff deliverables without excet Rapidiously network effective", active: true },
  ];
  return (
    <section style={{ padding: "80px 40px", background: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "160px", fontWeight: 900, color: "rgba(26,63,191,0.04)", whiteSpace: "nowrap", userSelect: "none", pointerEvents: "none" }}>CLEENY</div>
      <div style={{ textAlign: "center", marginBottom: "50px", position: "relative", zIndex: 1 }}>
        <p style={{ color: "#f5a623", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>TESTIMONIALS</p>
        <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#1a2e8f", margin: 0 }}>Our Customer's Feedback</h2>
      </div>
      <div style={{ display: "flex", gap: "24px", maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {reviews.map((r, i) => (
          <div key={i} style={{ flex: 1, background: r.active ? "#1a3fbf" : "#fff", borderRadius: "10px", padding: "28px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", position: "relative", border: r.active ? "none" : "1px solid #eef0f8" }}>
            <div style={{ position: "absolute", top: "20px", right: "24px", fontSize: "48px", color: r.active ? "rgba(255,255,255,0.2)" : "rgba(26,63,191,0.12)", fontWeight: 900, lineHeight: 1 }}>"</div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <img src={r.img} alt={r.name} style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", border: "3px solid #f5a623" }} />
              <div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "3px" }}>{"★★★★★".split("").map((s, si) => <span key={si} style={{ color: "#f5a623", fontSize: "13px" }}>{s}</span>)}</div>
                <div style={{ fontWeight: 800, fontSize: "14px", color: r.active ? "#fff" : "#1a2e8f" }}>{r.name}</div>
                <div style={{ fontSize: "12px", color: r.active ? "rgba(255,255,255,0.7)" : "#888" }}>{r.role}</div>
              </div>
            </div>
            <h4 style={{ color: r.active ? "#fff" : "#1a2e8f", fontWeight: 700, fontSize: "14px", marginBottom: "8px" }}>{r.heading}</h4>
            <p style={{ color: r.active ? "rgba(255,255,255,0.8)" : "#666", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>"{r.text}"</p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px" }}>
        {[0, 1, 2].map((d) => <div key={d} style={{ width: d === 1 ? "24px" : "8px", height: "8px", borderRadius: "4px", background: d === 1 ? "#1a3fbf" : "#c5d0f0" }} />)}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────── */
const AboutPage: React.FC = () => (
  <div style={{ fontFamily: "'Segoe UI', sans-serif", margin: 0, padding: 0, overflowX: "hidden" }}>
    <HeroBanner />
    <FeatureCards />
    <div style={{ background: "#fff", paddingTop: "60px" }}>
      <AboutSection />
    </div>
    <CallBanner />
    <WorkingProcess />
    <TeamSection />
    <Testimonials />
  </div>
);

export default AboutPage;