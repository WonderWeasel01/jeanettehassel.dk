import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Facebook, Linkedin, Users, ExternalLink } from 'lucide-react';

const SocialLinksSection = () => {
  const socialLinks = [
    {
      title: "Politisk Facebook Side",
      description: "Følg min valgkamp og læs mine læserbreve",
      url: "https://www.facebook.com/profile.php?id=61569208993009&locale=da_DK",
      icon: Facebook,
      type: "political"
    },
    {
      title: "Privat Facebook Side",
      description: "Se mere om mig som person",
      url: "https://www.facebook.com/jeanette.hassel9/?locale=da_DK",
      icon: Facebook,
      type: "personal"
    },
    {
      title: "LinkedIn Profil",
      description: "Mit professionelle netværk",
      url: "https://www.linkedin.com/in/jeanettehassel/",
      icon: Linkedin,
      type: "professional"
    }
  ];

  const partyLinks = [
    {
      title: "Det Konservative Folkeparti",
      url: "https://www.facebook.com/Konservative?locale=da_DK",
      icon: Facebook
    },
    {
      title: "Konservative i Frederikssund",
      url: "https://www.facebook.com/search/top?q=konservative%20i%20frederikssund&locale=da_DK",
      icon: Facebook
    },
    {
      title: "Konservative LinkedIn",
      url: "https://www.linkedin.com/company/konservativedk/posts/?feedView=all",
      icon: Linkedin
    },
    {
      title: "Konservative Frederikssund LinkedIn",
      url: "https://www.linkedin.com/company/konservative-frederikssund/posts/?feedView=all",
      icon: Linkedin
    }
  ];

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
            Sociale Medier
          </h2>
          <div className="w-24 h-1 bg-conservative-green mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">
            Følg med i min valgkamp og det konservative arbejde
          </p>
        </motion.div>

        {/* Personal Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Følg Jeanette
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-conservative-green/20 hover:border-conservative-green/40 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-conservative-light-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <link.icon className="w-8 h-8 text-conservative-green" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{link.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-conservative-green text-conservative-green hover:bg-conservative-green hover:text-white"
                      asChild
                    >
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-conservative-green"
                      >
                        <ExternalLink size={14} />
                        Besøg
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Party Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-conservative-green text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <Users className="w-6 h-6" />
                Følg Det Konservative Folkeparti
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {partyLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-conservative-green"
                    asChild
                  >
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-conservative-green"
                    >
                      <link.icon size={16} />
                      {link.title}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinksSection;
