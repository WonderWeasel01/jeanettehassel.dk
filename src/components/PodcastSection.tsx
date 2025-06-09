import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const PodcastSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            PodCast
          </h2>
          <div className="w-24 h-1 bg-conservative-green mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">
            Jeanette Hassel, besøger studiet og vi tager en snak sårbare unge, samt mødet med det offentlige.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden shadow-lg border-conservative-green/20 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Udsatte børn og unge"
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Et vigtigt emne som ligger mig meget på sinde. I denne podcast diskuterer jeg udfordringerne og mulighederne for at hjælpe udsatte børn og unge i vores kommune.
              </p>
              <div className="flex justify-center">
                <iframe 
                  src="https://open.spotify.com/embed/episode/4d13ycBNsNKeQQWbjPW4oz" 
                  width="100%" 
                  height="200" 
                  frameBorder="0" 
                  allow="encrypted-media" 
                  title="Spotify Embed"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Læs flere af mine synspunkter i læserbrevene på min
          </p>
          <Button 
            variant="outline" 
            className="border-conservative-green text-conservative-green hover:bg-conservative-green hover:text-white"
            asChild
          >
            <a 
              href="https://www.facebook.com/profile.php?id=61569208993009&locale=da_DK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Politiske Facebook Side
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PodcastSection;
