import React from "react";

const services = [
  {
    title: "Network Design",
    description: "Custom network architecture design optimized for your specific business requirements and future scalability.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M13 2L3 14h7v8l11-12h-8l2-8z" fill="#66FCF1"/>
      </svg>
    ),
  },
  {
    title: "Security Solutions",
    description: "Advanced threat detection, prevention and response systems to keep your network safe from cyber attacks.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M12 2C7 4 4 7 4 12c0 5 4 8 8 10 4-2 8-5 8-10 0-5-3-8-8-10z" stroke="#66FCF1" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="14" r="2" fill="#66FCF1"/>
      </svg>
    ),
  },
  {
    title: "Cloud Networking",
    description: "Seamless integration between on-premises and cloud environments for hybrid networking solutions.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#66FCF1" strokeWidth="2" fill="none"/>
        <path d="M12 6v6l4 2" stroke="#66FCF1" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    title: "SD-WAN Implementation",
    description: "Software-defined wide area networking for improved connectivity, efficiency and reduced operational costs.",
    icon: (     
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="#66FCF1" strokeWidth="2" fill="none"/>
        <path d="M8 12h8" stroke="#66FCF1" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Remote Access Solutions",
    description: "Secure remote connectivity options for your distributed workforce and branch offices.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M12 2v20M2 12h20" stroke="#66FCF1" strokeWidth="2"/>
      </svg>
    ),
  },
];

const Services = () => (
  <section id="services" className="w-full py-20 bg-white text-[#181d23] flex flex-col items-center">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-br from-[#66FCF1] via-[#45A29E] to-[#0B0C10] bg-clip-text text-transparent">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#0B0C10] transition-transform hover:-translate-y-1 flex flex-col items-center h-full"
          >
            <div className="flex items-center mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-1 text-[#45A29E] text-center">{service.title}</h3>
            <p className="text-base text-[#181d23] text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;