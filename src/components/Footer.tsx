
import React from 'react';
import { Facebook, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-conservative-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo og beskrivelse */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-conservative-green font-bold text-lg">JH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Jeanette Hassel</h3>
                <p className="text-conservative-light-green">Vækst og Nærvær</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Byrådskandidat for Det Konservative Folkeparti i Frederikssund Kommune. 
              Sammen skaber vi vækst og nærvær i vores kommune.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a 
                href="mailto:Jeanette.hassel70@gmail.com"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>Jeanette.hassel70@gmail.com</span>
              </a>
              <a 
                href="tel:+4528270341"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>+45 28 27 03 41</span>
              </a>
            </div>
          </div>

          {/* Sociale medier */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Følg mig</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61569208993009&locale=da_DK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jeanettehassel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Jeanette Hassel. Alle rettigheder forbeholdes.
          </p>
          <p className="text-white/60 mt-2">
            Betalt af: Det Konservative Folkeparti, Frederikssund
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
