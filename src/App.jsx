import React from "react";
import { Header } from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Services from "./components/Services";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="scroll-mt-24">
          <HeroSection />
        </section>
        <section id="features" className="scroll-mt-24">
          <FeaturesSection />
        </section>
        <section id="services" className="scroll-mt-24">
          <Services />
        </section>
        <section id="testimonials" className="scroll-mt-24">
          <TestimonialsSection />
        </section>
        <section id="contact" className="scroll-mt-24">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;