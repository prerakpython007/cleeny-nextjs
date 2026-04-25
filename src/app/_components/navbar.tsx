"use client";
import React, { useState } from "react";
 
const TopBar: React.FC = () => {
  return (
    <div className="bg-[#1a56db] text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Address + Email */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            102/B New Market, Sandigo-USA
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            example@gmail.com
          </span>
        </div>
 
        {/* Right: Social Icons + Phone */}
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="w-7 h-7 rounded bg-[#1877f2] flex items-center justify-center hover:opacity-80 transition">
            <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* X / Twitter */}
          <a href="#" aria-label="X" className="w-7 h-7 rounded bg-black flex items-center justify-center hover:opacity-80 transition">
            <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="w-7 h-7 rounded bg-[#0077b5] flex items-center justify-center hover:opacity-80 transition">
            <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          {/* Pinterest */}
          <a href="#" aria-label="Pinterest" className="w-7 h-7 rounded bg-[#e60023] flex items-center justify-center hover:opacity-80 transition">
            <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.566 0-2.387-1.716-4.057-4.165-4.057-2.837 0-4.502 2.128-4.502 4.328 0 .857.33 1.776.741 2.279a.3.3 0 01.069.286c-.076.314-.244.995-.277 1.134-.044.183-.145.222-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
          </a>
 
          <span className="w-px h-4 bg-white/30 mx-1" />
 
          <span className="flex items-center gap-1.5 font-medium">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call: <span className="font-bold">+980 234 4567</span>
          </span>
        </div>
      </div>
    </div>
  );
};
 
interface NavItem {
  label: string;
  hasDropdown: boolean;
  href?: string;
}
 
const navItems: NavItem[] = [
  { label: "Home", hasDropdown: true },
  { label: "About", hasDropdown: false, href: "/aboutPage" },
  { label: "Service", hasDropdown: false, href: "/servicePage" },
  { label: "Pages", hasDropdown: true },
  { label: "Blog", hasDropdown: true },
  { label: "Contact", hasDropdown: false, href: "/contactaPage" },
];
 
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Cleeny Logo" className="h-10 w-auto" />
         
        </a>
 
        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <a
                href={item.href || "#"}
                className="flex items-center gap-1 text-gray-700 font-medium hover:text-[#1a56db] transition text-[15px]"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg className="w-3.5 h-3.5 mt-0.5 text-gray-400 group-hover:text-[#1a56db] transition" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              {/* Underline hover effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a56db] group-hover:w-full transition-all duration-300 rounded-full" />
            </li>
          ))}
        </ul>
 
        {/* Right: Search + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button aria-label="Search" className="text-gray-500 hover:text-[#1a56db] transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <a
            href="#"
            className="bg-[#f5a623] hover:bg-[#e09510] text-white font-bold px-5 py-2.5 rounded-full text-sm transition shadow-md hover:shadow-lg"
          >
            Get Free Quote
          </a>
        </div>
 
        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700 hover:text-[#1a56db]"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
 
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-4 pb-4">
          <ul className="flex flex-col gap-3 mt-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href="#" className="flex items-center justify-between text-gray-700 font-medium hover:text-[#1a56db] py-1">
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="inline-block bg-[#f5a623] text-white font-bold px-5 py-2.5 rounded-full text-sm mt-1">
                Get Free Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
 
const Header: React.FC = () => {
  return (
    <>
      <TopBar />
      <Navbar />
    </>
  );
};
 
export default Header;