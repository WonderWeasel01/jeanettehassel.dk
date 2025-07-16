
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, User, Users } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kontakt
          </h2>
          <div className="w-24 h-1 bg-conservative-green mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">
            Du er altid velkommen til at kontakte mig – jeg lytter gerne.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-conservative-green/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-conservative-green" />
                  Kontakt Jeanette direkte
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-conservative-light-green rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-conservative-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a 
                        href="mailto:Jeanette.hassel70@gmail.com" 
                        className="text-conservative-green hover:underline"
                      >
                        Jeanette.hassel70@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-conservative-light-green rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-conservative-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Mobil</p>
                      <a 
                        href="tel:+4528270341" 
                        className="text-conservative-green hover:underline"
                      >
                        +45 28 27 03 41
                      </a>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full mt-8 bg-conservative-green hover:bg-conservative-green/90"
                  asChild
                >
                  <a href="mailto:Jeanette.hassel70@gmail.com">
                    Send en besked
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Campaign Team */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-conservative-green/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-conservative-green" />
                  Kampagneteam
                </h3>
                <div className="space-y-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Vælgerforeningsformand</h4>
                    <p className="text-muted-foreground">Henrik Biehl</p>
                    <div className="flex items-center gap-3 mt-1">
                      <Phone className="w-4 h-4 text-conservative-green" />
                      <a href="tel:+4520259514" className="text-conservative-green hover:underline text-sm">20 25 95 14</a>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <Mail className="w-4 h-4 text-conservative-green" />
                      <a href="mailto:hb@hbrc.dk" className="text-conservative-green hover:underline text-sm">hb@hbrc.dk</a>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Kampagneleder</h4>
                    <p className="text-muted-foreground">Jens Otto Tram</p>
                    <div className="flex items-center gap-3 mt-1">
                      <Phone className="w-4 h-4 text-conservative-green" />
                      <a href="tel:+4551517482" className="text-conservative-green hover:underline text-sm">51 51 74 82</a>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <Mail className="w-4 h-4 text-conservative-green" />
                      <a href="mailto:jot@executivepartner.dk" className="text-conservative-green hover:underline text-sm">jot@executivepartner.dk</a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-conservative-light-green/20 rounded-lg">
                  <p className="text-sm text-conservative-green font-medium mb-2">
                    Ønsker du at støtte min valgkamp?
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Kontakt kampagneleder Jens Otto Tram for at høre hvordan du kan hjælpe.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
