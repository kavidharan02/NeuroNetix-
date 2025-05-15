import React from "react";

const ContactSection = () => (
  <section className="w-full py-20 bg-gradient-to-br from-[#f8fafd] via-[#eaf6f8] to-[#f8fafd] text-[#181d23]">
    <div className="container mx-auto px-4 max-w-xl">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-br from-[#66FCF1] via-[#45A29E] to-[#0B0C10] bg-clip-text text-transparent">
        Contact Us
      </h2>
      <form className="rounded-2xl p-10 shadow-2xl border border-[#e0e7ef] bg-white flex flex-col gap-6">
        <div>
          <label className="block text-[#45A29E] font-semibold mb-2" htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-4 rounded-lg bg-[#f8fafd] border border-[#66FCF1] text-[#181d23] placeholder-[#45A29E] focus:outline-none focus:ring-2 focus:ring-[#45A29E] shadow-sm transition"
          />
        </div>
        <div>
          <label className="block text-[#45A29E] font-semibold mb-2" htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-lg bg-[#f8fafd] border border-[#66FCF1] text-[#181d23] placeholder-[#45A29E] focus:outline-none focus:ring-2 focus:ring-[#45A29E] shadow-sm transition"
          />
        </div>
        <div>
          <label className="block text-[#45A29E] font-semibold mb-2" htmlFor="message">Your Message</label>
          <textarea
            id="message"
            placeholder="Type your message..."
            className="w-full p-4 rounded-lg bg-[#f8fafd] border border-[#66FCF1] text-[#181d23] placeholder-[#45A29E] focus:outline-none focus:ring-2 focus:ring-[#45A29E] shadow-sm transition"
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="w-full font-semibold py-4 rounded-lg bg-[#66FCF1] text-[#0B0C10] text-lg shadow-md hover:bg-[#45A29E] hover:text-white transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;