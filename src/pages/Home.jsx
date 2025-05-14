import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactSection from '../components/ContactSection';
import MainLayout from '../layouts/MainLayout';

const Home = () => (
  <MainLayout>
    <HeroSection />
    <FeaturesSection />
    <ContactSection />
  </MainLayout>
);

export default Home;