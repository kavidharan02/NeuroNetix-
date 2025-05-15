import React from "react";

const features = [
  {
    title: "Lightning-Fast Performance",
    desc: "Delivering ultra-low latency and high throughput for mission-critical operations.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
        <path d="M7 2v13h3v7l7-12h-4l4-8z" fill="#66FCF1"/>
      </svg>
    ),
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Comprehensive protection with advanced encryption and real-time threat monitoring.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
        <path d="M12 2l7 4v6c0 5.25-3.5 10-7 12-3.5-2-7-6.75-7-12V6l7-4z" stroke="#66FCF1" strokeWidth="2" fill="none"/>
        <rect x="9" y="11" width="6" height="5" rx="2" fill="#66FCF1"/>
        <circle cx="12" cy="13.5" r="1" fill="#0B0C10"/>
      </svg>
    ),
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Expert assistance available around the clock to ensure seamless operations.",
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
        <path d="M4 13v-2a8 8 0 1 1 16 0v2" stroke="#66FCF1" strokeWidth="2" fill="none"/>
        <rect x="2" y="13" width="4" height="6" rx="2" fill="#66FCF1"/>
        <rect x="18" y="13" width="4" height="6" rx="2" fill="#66FCF1"/>
        <rect x="8" y="17" width="8" height="3" rx="1.5" fill="#66FCF1"/>
      </svg>
    ),
  },
];

const FeaturesSection = () => (
  <section className="w-full py-20 bg-white text-[#181d23]">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-br from-[#66FCF1] via-[#45A29E] to-[#0B0C10] bg-clip-text text-transparent">
        Our Capabilities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#0B0C10] transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold mb-1 text-[#45A29E]">{f.title}</h3>
            <p className="text-base text-[#181d23]">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;