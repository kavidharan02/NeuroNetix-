import React, { useEffect, useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 shadow-md flex justify-between items-center px-8 py-6 ${
        scrolled ? "bg-white" : "bg-[#0B0C10]"
      }`}
      style={{
        background: scrolled ? "#fff" : "#0B0C10",
      }}
    >
      <div
        className="text-2xl font-bold transition-colors duration-300"
        style={{
          color: scrolled ? "#0B0C10" : "#66FCF1",
          letterSpacing: "2px",
        }}
      >
        NeuroNetix
      </div>
      {/* Hamburger Icon */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path 
            d="M4 6h16M4 12h16M4 18h16" 
            stroke={scrolled ? "#0B0C10" : "#fff"} 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </div>
      {/* Desktop Nav */}
      <nav className="space-x-6 hidden md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              color: scrolled ? "#0B0C10" : "#C5C6C7",
              transition: "color 0.2s",
            }}
            onMouseOver={e => (e.target.style.color = "#66FCF1")}
            onMouseOut={e => (e.target.style.color = scrolled ? "#0B0C10" : "#C5C6C7")}
          >
            {item.label}
          </a>
        ))}
      </nav>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#0B0C10] flex flex-col items-center md:hidden shadow-lg animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-4 w-full text-center"
              style={{
                color: "#C5C6C7",
                fontWeight: "bold",
                borderBottom: "1px solid #232323",
              }}
              onClick={handleNavClick}
              onMouseOver={e => (e.target.style.color = "#66FCF1")}
              onMouseOut={e => (e.target.style.color = "#C5C6C7")}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

const FeaturesSection = () => (
  <section id="features" className="scroll-mt-24">
    {/* Features content */}
  </section>
);

const ContactSection = () => (
  <section id="contact" className="scroll-mt-24">
    {/* Contact content */}
  </section>
);

export { Header, FeaturesSection, ContactSection };