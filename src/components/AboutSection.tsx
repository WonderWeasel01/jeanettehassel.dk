import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, TrendingUp, MapPin } from 'lucide-react';
import Jeanette from '../assets/Jeanette.jpg';

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-background z-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-lg leading-relaxed flex flex-col items-center">
              <motion.div 
                {...fadeInUp}
                className="mb-6 text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Kandidat præsentation
                </h2>
                <div className="w-24 h-1 bg-conservative-green mx-auto mb-8"></div>
              </motion.div>
              <p>
                Jeg er mor til to drenge og har boet i Jægerspris hele mit liv. Her kender jeg hver en sti og hvert et hjørne – og det er her, jeg føler mig hjemme. Det lokale fællesskab betyder meget for mig, og det har det altid gjort.
              </p>
              <p>
                Jeg har i mange år arbejdet som erhvervskvinde med fokus på HR, bæredygtighed, ledelse og forretningsudvikling. Jeg ved, hvordan man skaber resultater med både mennesker og økonomi for øje, og jeg tror på, at god ledelse handler om at lytte, tage ansvar og handle med hjertet på rette sted.
              </p>
              <p>
                Ved siden af mit arbejdsliv har jeg været frivillig i foreningslivet i mange år, fordi jeg tror på, at stærke fællesskaber skabes, når vi engagerer os og løfter i flok.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img 
                src={Jeanette} 
                alt="Jeanette Hassel campaign" 
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-conservative-green bg-opacity-10 rounded-lg"></div>
            </div>
          </motion.div>
        </div>

        {/* Values Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            { icon: Heart, title: "Nærvær", desc: "Tætte fællesskaber og omtanke" },
            { icon: TrendingUp, title: "Vækst", desc: "Udvikling og fremgang" },
            { icon: Users, title: "Fællesskab", desc: "Stærke lokale bånd" },
            { icon: MapPin, title: "Lokalområdet", desc: "Jægerspris og Frederikssund" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="text-center p-6 h-full border-conservative-green/20 hover:border-conservative-green/40 transition-colors">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-conservative-light-green rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="w-8 h-8 text-conservative-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Conservative */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-conservative-green text-white p-8 md:p-12">
            <CardContent className="space-y-6">
              <h3 className="text-3xl font-bold mb-6">Hvorfor er jeg konservativ?</h3>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  Jeg har valgt at være medlem af Det Konservative Folkeparti, fordi jeg tror på ansvar, frihed og fællesskab. For mig handler politik om at skabe de bedste rammer for os alle – uanset om det drejer sig om tryghed i vores hverdag, stærke lokale fællesskaber eller en ansvarlig forvaltning af vores skattekroner.
                </p>
                <p>
                  Mit valgsprog "Vækst og Nærvær" afspejler mine værdier og mit politiske fokus. Vi skal skabe gode rammer for vækst – både for erhvervslivet og for vores lokalsamfund – samtidig med at vi bevarer nærværet og det lokale engagement, der gør vores kommune til et trygt og godt sted at bo.
                </p>
                <p className="text-xl font-semibold">
                  Jeg håber på din støtte – sammen kan vi skabe vækst og nærvær i vores kommune!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
