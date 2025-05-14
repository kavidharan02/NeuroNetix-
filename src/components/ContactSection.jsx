import React from "react";

const ContactSection = () => (
  <section className="w-full py-20 ] text-[#181d23]">
    <div className="container mx-auto px-4 max-w-xl">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-br from-[#66FCF1] via-[#45A29E] to-[#0B0C10] bg-clip-text text-transparent">
        Contact Us
      </h2>
      <form className="rounded-xl p-8 shadow-lg border-2 border-[#0B0C10] bg-white flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded bg-[#f8fafd] border border-[#66FCF1] text-[#181d23] placeholder-[#45A29E] focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded bg-[#f8fafd] border border-[#66FCF1] text-[#181d23] placeholder-[#45A29E] focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 rounded bg-[#f8fafd] border border-[#66FCF1] text-[#181d23] placeholder-[#45A29E] focus:outline-none"
          rows={5}
        />
        <button
          type="submit"
          className="w-full font-semibold py-4 rounded bg-[#66FCF1] text-[#0B0C10] text-lg hover:bg-[#45A29E] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;