"use client";
import React, { useState } from "react";

/* ─── Subscribe + Call Bar ─── */
const SubscribeBar: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="relative z-20 flex justify-center px-4">
      <div className="w-full max-w-5xl flex shadow-2xl rounded-xl overflow-hidden" style={{ transform: "translateY(50%)" }}>
        {/* Left: Call Us — yellow with sunray effect */}
        <div
          className="flex items-center gap-5 px-10 py-7"
          style={{
            background: "linear-gradient(135deg, #f9c62b 0%, #f5a623 100%)",
            minWidth: "300px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative sunrays */}
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-30px",
              left: "60px",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
            }}
          />
          <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.22)", position: "relative", zIndex: 1 }}>
            <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
              Call Us Now
            </p>
            <p style={{ color: "#fff", fontWeight: 800, fontSize: "20px", letterSpacing: "0.3px" }}>
              +980 765 (546) 900
            </p>
          </div>
        </div>

        {/* Right: Subscribe — blue */}
        <div
          className="flex flex-1 items-center gap-6 px-10 py-7"
          style={{ background: "#1a3fbf" }}
        >
          <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "22px", whiteSpace: "nowrap" }}>
            Subscribe Now
          </h3>
          <div className="flex flex-1" style={{ maxWidth: "420px", borderRadius: "4px", overflow: "hidden" }}>
            <input
              type="email"
              placeholder="Enter E-Mail*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: "13px 18px",
                fontSize: "14px",
                color: "#555",
                border: "none",
                outline: "none",
                background: "#fff",
              }}
            />
            <button
              style={{
                background: "#1a2e8f",
                color: "#fff",
                fontWeight: 700,
                fontSize: "14px",
                padding: "13px 22px",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.5px",
                whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#f5a623")}
              onMouseLeave={e => (e.currentTarget.style.background = "#1a2e8f")}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Footer ─── */
const Footer: React.FC = () => {
  const companyLinks = ["Home", "About Us", "Our Services", "Meet Our Team", "Latest Blog"];

  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=100&q=80",
      title: "10 Most Popular Clean Tips for Housey",
      date: "Nov 16, 2024",
    },
    {
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=100&q=80",
      title: "Floor cleeny and Washing New...",
      date: "Nov 16, 2024",
    },
  ];

  const socials = [
    { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
    { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
    { label: "Pinterest", path: "M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.566 0-2.387-1.716-4.057-4.165-4.057-2.837 0-4.502 2.128-4.502 4.328 0 .857.33 1.776.741 2.279a.3.3 0 01.069.286c-.076.314-.244.995-.277 1.134-.044.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" },
  ];

  const contactItems = [
    {
      label: "Address",
      value: "102/B Philosophy Market Road California, USA",
      icon: (
        <svg fill="none" stroke="#f5a623" strokeWidth={2} viewBox="0 0 24 24" width="16" height="16">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: "Call Us",
      value: "+880 123 (4567) 890",
      icon: (
        <svg fill="none" stroke="#f5a623" strokeWidth={2} viewBox="0 0 24 24" width="16" height="16">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: "Email",
      value: "example@yahoo.com",
      icon: (
        <svg fill="none" stroke="#f5a623" strokeWidth={2} viewBox="0 0 24 24" width="16" height="16">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const bubbles = [
    { size: 80, top: "12%", left: "2%" },
    { size: 50, bottom: "18%", left: "6%" },
    { size: 110, top: "6%", right: "3%" },
    { size: 60, bottom: "22%", right: "9%" },
    { size: 130, top: "40%", right: "28%" },
  ];

  return (
    <>
      <SubscribeBar />

      <footer
        style={{
          background: "linear-gradient(135deg, #0f1f6e 0%, #1a3fbf 100%)",
          position: "relative",
          overflow: "hidden",
          paddingTop: "100px",
          paddingBottom: "0",
        }}
      >
        {/* Bubble decorations */}
        {bubbles.map((b, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: b.size,
              height: b.size,
              borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.08)",
              pointerEvents: "none",
              top: (b as any).top,
              left: (b as any).left,
              right: (b as any).right,
              bottom: (b as any).bottom,
            }}
          />
        ))}

        {/* Main grid */}
        <div
          className="relative z-10 mx-auto"
          style={{
            maxWidth: "1100px",
            padding: "48px 24px 0",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.9fr 1.1fr 1.1fr",
            gap: "40px",
          }}
        >
          {/* Col 1: Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{ width: "34px", height: "34px", background: "#f5a623", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span style={{ color: "#fff", fontSize: "20px", fontWeight: 800 }}>Cleeny</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.75, marginBottom: "20px" }}>
              Competently repurpose forward conveniently target e-business multipurpose clean
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "15px", marginBottom: "20px" }}>Company</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "13px" }}>
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      fontSize: "13.5px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    <svg width="12" height="12" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Latest Blog */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "15px", marginBottom: "20px" }}>Latest Blog</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "18px" }}>
              {blogPosts.map((post) => (
                <li key={post.title} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: "58px", height: "58px", objectFit: "cover", flexShrink: 0 }}
                  />
                  <div>
                    <a
                      href="#"
                      style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", fontWeight: 600, lineHeight: 1.45, display: "block", marginBottom: "6px", textDecoration: "none" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                    >
                      {post.title}
                    </a>
                    <p style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.4)", fontSize: "11.5px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f5a623", display: "inline-block", flexShrink: 0 }} />
                      {post.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "15px", marginBottom: "20px" }}>Contact Us</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "18px" }}>
              {contactItems.map((item) => (
                <li key={item.label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: "13.5px", marginBottom: "3px" }}>{item.label}</p>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.5 }}>{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="relative z-10 mx-auto"
          style={{
            maxWidth: "1100px",
            padding: "18px 24px",
            marginTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px" }}>
            © Copyrights 2024 Cleeny All rights reserved by{" "}
            <a href="#" style={{ color: "#f5a623", textDecoration: "none", fontWeight: 600 }}>Dream IT</a>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "#f5a623",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#e09510")}
            onMouseLeave={e => (e.currentTarget.style.background = "#f5a623")}
          >
            <svg width="16" height="16" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
export { SubscribeBar };