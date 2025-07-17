import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import PodcastSection from '../components/PodcastSection';
import SocialLinksSection from '../components/SocialLinksSection';
import MaerkesagerSection from '../components/MaerkesagerSection';

export default function Page() {
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
}

export const documentProps = {
  title: 'Jeanette Hassel - Vækst og Nærvær | Det Konservative Folkeparti',
  description: 'Jeanette Hassel - Byrådskandidat for Det Konservative Folkeparti i Frederikssund Kommune. Din stemme på Vækst og Nærvær.',
  keywords: 'Jeanette Hassel, Det Konservative Folkeparti, Frederikssund Kommune, byråd, valgkamp, Jægerspris, politik, vækst, nærvær',
  ogImage: '/Logo.png',
  canonical: 'https://jeanette.dk/',
  author: 'Jeanette Hassel',
  twitterHandle: '@JeanetteHassel',
  siteName: 'Jeanette Hassel - Det Konservative Folkeparti',
};
