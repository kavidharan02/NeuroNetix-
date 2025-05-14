import React from "react";

const Footer = () => (
  <footer className="w-full py-12 bg-gradient-to-br from-[#0B0C10] via-[#0B0C10] to-[#1F2833] text-[#C5C6C7] text-center">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start px-4">
      {/* Brand & Description */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-[#1F2833] text-left">
        <div className="text-2xl font-bold mb-2 bg-gradient-to-br from-[#66FCF1] via-[#45A29E] to-[#0B0C10] bg-clip-text text-transparent">
          NeuroNetix
        </div>
        <p className="text-sm mb-4 text-[#181d23]">
          Delivering next-generation network infrastructure and secure connectivity, NeuroNetix enables organizations to scale, innovate, and thrive in a digital-first world.
        </p>
        <div className="text-s" style={{ color: "#45A29E" }}>
          info@NeuroNetix.com<br />
          +91 9884947279
        </div>
      </div>
      {/* Quick Links */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-[#1F2833] text-left">
        <div className="text-2xl font-bold mb-2 bg-gradient-to-br from-[#66FCF1] via-[#45A29E] to-[#0B0C10] bg-clip-text text-transparent">
          Quick Links
        </div>
        <ul className="space-y-1 text-sm">
          <li><a href="#features" className="text-[#181d23] hover:text-[#45A29E]">Features</a></li>
          <li><a href="#services" className="text-[#181d23] hover:text-[#45A29E]">Services</a></li>
          <li><a href="#testimonials" className="text-[#181d23] hover:text-[#45A29E]">Testimonials</a></li>
          <li><a href="#contact" className="text-[#181d23] hover:text-[#45A29E]">Contact</a></li>
        </ul>
      </div>
      {/* Stay Connected */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-[#1F2833] text-left flex flex-col justify-between">
        <div className="text-2xl font-bold mb-2 bg-gradient-to-br from-[#66FCF1] via-[#45A29E] to-[#0B0C10] bg-clip-text text-transparent">
          Stay Connected
        </div>
        <form className="flex flex-col sm:flex-row items-center gap-2 mt-4">
          <input
            type="email"
            placeholder="Your email address"
            className="p-2 rounded bg-[#f8fafd] border border-[#45A29E] text-sm text-[#181d23] flex-1"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded font-semibold bg-[#66FCF1] text-[#0B0C10] min-w-[100px] hover:bg-[#45A29E] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="text-center text-xs mt-10" style={{ color: "#66FCF1" }}>
      &copy; {new Date().getFullYear()} NeuroNetix. All rights reserved.
    </div>
  </footer>
);

export default Footer;