import React from "react";

const testimonials = [
  {
    name: "Aarav Patel",
    role: "CTO, TechNova",
    quote:
      "Their network solutions are fast, secure, and reliable. Our business connectivity has never been better!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    role: "IT Manager, CloudSync",
    quote:
      "Excellent support and seamless integration. Highly recommended for any enterprise!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Founder, StartNet",
    quote:
      "The team is responsive and the service is top-notch. We trust them with our critical infrastructure.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const TestimonialsSection = () => (
  <section className="w-full py-20 bg-white text-[#181d23]">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-br from-[#66FCF1] via-[#45A29E] to-[#0B0C10] bg-clip-text text-transparent">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#0B0C10] flex flex-col items-center text-center transition-transform hover:-translate-y-1"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-3 border-2 border-[#45A29E] object-cover"
            />
            <p className="italic mb-3 text-base text-[#181d23]">&quot;{t.quote}&quot;</p>
            <div className="font-semibold text-[#66FCF1]">{t.name}</div>
            <div className="text-xs text-[#45A29E]">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;