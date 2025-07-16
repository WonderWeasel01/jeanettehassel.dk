
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigér til forsiden og scroll til sektion
  const handleNav = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      // Navigér til forsiden med hash
      navigate(`/#${sectionId}`);
    } else {
      // Scroll smooth hvis allerede på forsiden
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/Logo.png" alt="Jeanette Hassel" className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold text-conservative-green">Jeanette Hassel</h1>
              <p className="text-sm text-muted-foreground">Vækst og Nærvær</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleNav('hero')} className="text-conservative-green hover:text-conservative-green/80 transition-colors">Hjem</button>
            <button onClick={() => handleNav('about')} className="text-conservative-green hover:text-conservative-green/80 transition-colors">Om mig</button>
            <button onClick={() => handleNav('maerkesager')} className="text-conservative-green hover:text-conservative-green/80 transition-colors">Mine mærkesager</button>
            <button onClick={() => handleNav('podcast')} 
            className="text-conservative-green hover:text-conservative-green/80 transition-colors">Podcasts</button>
            <button onClick={() => handleNav('contact')} className="text-conservative-green hover:text-conservative-green/80 transition-colors">Kontakt</button>
            <Button className="bg-conservative-green hover:bg-conservative-green/90 text-white" onClick={() => handleNav('contact')}>Støt min kampagne</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-conservative-green" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">

              <button onClick={() => handleNav('hero')} className="text-left text-conservative-green hover:text-conservative-green/80 transition-colors">Hjem</button>

              <button onClick={() => handleNav('about')} className="text-left text-conservative-green hover:text-conservative-green/80 transition-colors">Om mig</button>

              <button onClick={() => handleNav('maerkesager')} className="text-left text-conservative-green hover:text-conservative-green/80 transition-colors">Mine mærkesager</button>

              <button onClick={() => handleNav('podcast')} className="text-left text-conservative-green hover:text-conservative-green/80 transition-colors">Podcasts</button>

              <button onClick={() => handleNav('contact')} className="text-left text-conservative-green hover:text-conservative-green/80 transition-colors">Kontakt</button>

              <Button className="bg-conservative-green hover:bg-conservative-green/90 text-white w-full" onClick={() => handleNav('contact')}>Støt min kampagne</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
