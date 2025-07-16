
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import PodcastSection from '../components/PodcastSection';
import SocialLinksSection from '../components/SocialLinksSection';
import MaerkesagerSection from '../components/MaerkesagerSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="maerkesager">
        <MaerkesagerSection />
      </div>
      <div id="podcast">
        <PodcastSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <SocialLinksSection />
      <Footer />
    </div>
  );
};

export default Index;
