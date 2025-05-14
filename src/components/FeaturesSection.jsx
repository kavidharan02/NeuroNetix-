import React from "react";

const features = [
  {
    title: "Lightning-Fast Performance",
    desc: "Delivering ultra-low latency and high throughput for mission-critical operations.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M13 2L3 14h7v8l11-12h-8l2-8z" fill="#66FCF1"/>
      </svg>
    ),
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Comprehensive protection with advanced encryption and real-time threat monitoring.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M12 2C7 4 4 7 4 12c0 5 4 8 8 10 4-2 8-5 8-10 0-5-3-8-8-10z" stroke="#66FCF1" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="14" r="2" fill="#66FCF1"/>
      </svg>
    ),
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Expert assistance available around the clock to ensure seamless operations.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#66FCF1" strokeWidth="2" fill="none"/>
        <path d="M12 6v6l4 2" stroke="#66FCF1" strokeWidth="2" fill="none"/>
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
            <div className="flex items-center mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold mb-1 text-[#45A29E]">{f.title}</h3>
            <p className="text-base text-[#181d23]">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;