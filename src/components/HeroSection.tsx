import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import JeanetteHassel from '../assets/JeanetteBG.png';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex overflow-hidden z-10">
      {/* Background - Green on Mobile */}
      <div className="absolute inset-0 z-0 bg-[#9ED196]">
        {/* Image Background for larger screens */}
        <img 
          src={JeanetteHassel} 
          alt="Jeanette Hassel" 
          className="hidden xl:block w-full h-full object-cover" // Hide on mobile
          style={{ objectPosition: 'right' }} // Align the image to the right
        />
      </div>

      {/* Content */}
      <div className="flex flex-row w-full">
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex-1 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              Jeanette Hassel
            </h1>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Din stemme på <span className="text-[#00583C] font-semibold">Vækst og Nærvær</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Byrådskandidat for Det Konservative Folkeparti
            </p>
            <p className="text-lg mb-8">
              Frederikssund Kommune
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-white text-conservative-green hover:bg-gray-100 px-8 py-3 text-lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lær mig at kende
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-conservative-green px-8 py-3 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Kontakt mig
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Hidden on Mobile */}
        <div className="hidden xl:flex flex-1"></div> {/* Hidden on mobile */}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
