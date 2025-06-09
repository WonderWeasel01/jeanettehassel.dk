
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import PodcastSection from '../components/PodcastSection';
import SocialLinksSection from '../components/SocialLinksSection';
import QRCodeSection from '../components/QRCodeSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <PodcastSection />
      <ContactSection />
      <SocialLinksSection />
      <QRCodeSection />
    </div>
  );
};

export default Index;
