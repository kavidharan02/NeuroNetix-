import React from "react";
import networkImg from "../assets/network.jpg";

const HeroSection = () => (
  <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 pt-32 md:pt-40 bg-gradient-to-br from-[#0B0C10] via-[#0B0C10] to-[#1F2833]">
    
    <div className="flex-1 flex flex-col justify-center md:items-start items-center md:pl-20">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-8 text-[#66FCF1] tracking-tight text-center md:text-left drop-shadow-lg leading-tight break-words">
        Next-Gen <span className="block sm:inline">Network Solutions</span>
      </h1>
      <p className="text-lg md:text-2xl mb-12 max-w-2xl text-center md:text-left text-[#C5C6C7] font-medium">
        Empowering enterprises with secure, scalable, and high-performance connectivity.<br />
        Future-proof your business with innovative infrastructure and expert support.
      </p>
      <a
        href="#contact"
        className="px-10 py-4 rounded-xl font-semibold shadow-lg bg-[#45A29E] text-[#0B0C10] text-lg md:text-xl transition-colors duration-200 hover:bg-[#66FCF1]"
      >
        Get Started
      </a>
    </div>
    
    <div className="flex-1 flex justify-center items-center md:justify-end md:items-center mt-8 md:mt-0 md:pr-16">
      <img
        src={networkImg}
        alt="Network"
        className="w-[420px] md:w-[620px] rounded-2xl shadow-2xl object-cover border-4 border-[#0B0C10]"
        style={{ maxHeight: "480px", background: "#0B0C10" }}
      />
    </div>
  </section>
);

export default HeroSection;