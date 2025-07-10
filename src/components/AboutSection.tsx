import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence, motion as m } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, TrendingUp, MapPin } from 'lucide-react';
import Jeanette from '../assets/Jeanette.jpg';

const valueCards = [
  {
    icon: Heart,
    title: "Nærvær",
    details: (
      <>
        <h3 className="text-xl font-semibold mb-4">Nærvær</h3>
        <div className="space-y-3">
          <p>
            Frivillighed har altid spillet en vigtig rolle i mit liv. Det er her, jeg oplever det stærkeste fællesskab, den største mening – og den ægte mulighed for at gøre en forskel.
          </p>
          <p>
            Jeg er stolt af at have været engageret i en række frivillige organisationer og initiativer, der alle ligger mit hjerte nært. Det giver mig energi at give tilbage til samfundet på forskellige måder – ikke fordi jeg skal, men fordi jeg ganske enkelt ikke kan lade være.
          </p>
          <p>
            Den drivkraft – ønsket om at gøre en forskel og skabe positiv forandring – er også det, der har ført mig ind i lokalpolitik. Her ser jeg en mulighed for at omsætte nærvær og handling til konkret udvikling og bedre vilkår for borgere og fællesskaber i vores kommune.
          </p>
          <p>
            For mig handler det ikke kun om ord – men om at tage ansvar og være med til at skabe det samfund, vi gerne vil være en del af.
          </p>
        </div>
      </>
    ),
  },
  {
    icon: TrendingUp,
    title: "Vækst & Udvikling",
    details: (
      <>
        <h3 className="text-xl font-semibold mb-4">Vækst & Udvikling</h3>
        <div className="space-y-3">
          <p>
            Jeg har altid været drevet af lysten til at lære og udvikle mig – både personligt og fagligt. Mit arbejdsliv har ført mig vidt omkring: Fra butik til bæredygtighed, fra sundhedsvæsenet til skoleverdenen, og senest som konsulent i erhvervslivet. Den rejse har givet mig en bred erfaring og en stærk forståelse for de udfordringer, mennesker møder i deres hverdag.
          </p>
          <p>
            Det vigtigste, jeg har lært? At lytte. At forstå, før jeg handler. Og at forandring starter med relationer og respekt.
          </p>
          <p>
            Jeg tror på, at vi skal sætte barren højt – ikke kun for os selv, men også for hinanden og for det fællesskab, vi er en del af. Udvikling kræver mod, nysgerrighed og vilje til at gøre tingene lidt bedre, hver dag.
          </p>
        </div>
      </>
    ),
  },
  {
    icon: Users,
    title: "Frivillighed & Fællesskab",
    details: (
      <>
        <h3 className="text-xl font-semibold mb-4">Frivillighed & Fællesskab</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold">Foreningen Cancerramte Børn</h4>
            <p>
              Som bestyrelsesmedlem arbejdede jeg for at støtte familier med kræftramte børn – gennem arrangementer, samvær og håb midt i en svær tid.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Kræftens Bekæmpelse – Frederikssund</h4>
            <p>
              Aktiv i lokalbestyrelsen og tovholder på events som Lyserød Lørdag og Landsindsamling. Fokus på oplysning, støtte og lokal engagement.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Stafet For Livet – Lysceremoni</h4>
            <p>
              Tovholder på lysceremonien og salget af lysposer. Et rørende øjeblik hvor fællesskab og minder mødes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">AB Fyrreparken</h4>
            <p>
              Som formand arbejder jeg for tryghed, stabil drift og et godt naboskab gennem det frivillige beboerdemokrati.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Rotary Frederikssund</h4>
            <p>
              Som medlem støtter jeg lokale og globale initiativer gennem netværk, etik og engagement.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: MapPin,
    title: "Lokal Forankring",
    details: (
      <>
        <h3 className="text-xl font-semibold mb-4">Lokal Forankring</h3>
        <div className="space-y-3">
          <p>
            Næstformand i Den Konservative Vælgerforening i Frederikssund.
          </p>
          <p>
            Min politiske rejse begyndte efter kommunalvalget i 2021. På få år har jeg udviklet mig fra ny medlem til næstformand og byrådskandidat i 2025.
          </p>
          <p>
            Jeg bidrager til at styrke det lokale partiarbejde og forme en konservativ retning for vores kommune. Jeg nyder samarbejdet i bestyrelsen og det stærke fællesskab i vælgerforeningen.
          </p>
          <p>
            Det er en tillid, jeg er stolt af – og en opgave, jeg går til med både energi og ansvarsfølelse.
          </p>
        </div>
      </>
    ),
  }
];

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [pendingCard, setPendingCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (selectedCard === index) {
      setSelectedCard(null);
      setPendingCard(null);
    } else if (selectedCard !== null) {
      setSelectedCard(null);
      setPendingCard(index);
    } else {
      setSelectedCard(index);
      setPendingCard(null);
    }
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
              Jeg er mor til to drenge og har boet i Jægerspris det meste af mit liv. Jeg er oprindeligt født på Østerbro, men flyttede som 2-årig med mine forældre til Gerlev i Jægerspris. Herfra har jeg haft min base, bortset fra en kort årrække i Ferslev, Skibby. Jægerspris er mit hjem – her kender jeg hver en sti og hvert et hjørne. Det lokale fællesskab har altid betydet meget for mig, og det er en grundlæggende del af, hvem jeg er.
              </p>
              <p>
              Siden 2018 har jeg arbejdet i lokale virksomheder i Frederikssund Kommune, hvor jeg har beskæftiget mig med HR, ledelse, bæredygtighed og forretningsudvikling. Jeg har en stærk tro på, at gode resultater skabes i balancen mellem mennesker og økonomi. Ledelse handler for mig om at tage ansvar, lytte oprigtigt og handle med hjertet på rette sted.
              </p>
              <p>
              Jeg bor i dag i Jægerspris sammen med min hund, TopGun – også kaldet Topper – en energisk Jack Russell Terrier, der sørger for daglig glæde og frisk luft.
              Livet har også budt på svære tider. I 2005 mistede jeg min ældste søn til knoglekræft – en sorg, som har præget mig og min familie dybt. Det er en erfaring, jeg bærer med mig hver dag. Som mor har jeg oplevet, hvordan mistrivsel og livets sårbarheder kan ramme hårdt. Det har givet mig en stærk forståelse for, hvor vigtigt det er, at vi som samfund tager ansvar for hinanden og skaber trygge rammer – særligt for vores børn og unge.
              Ved siden af mit arbejdsliv har jeg i mange år engageret mig frivilligt i foreningslivet. Jeg tror på, at stærke lokalsamfund opstår, når vi står sa
              </p>
              <p>
              Jeg stiller op til byrådet, fordi jeg ønsker at bidrage aktivt til et stærkt og trygt lokalsamfund, hvor der er plads til både mennesker og ambitioner. Med mine erfaringer fra både erhvervslivet og det personlige liv ved jeg, hvor vigtigt det er med ansvarlig ledelse, lokale fællesskaber og en politik, der bygger på ordentlighed, nærvær og respekt for den enkelte.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {valueCards.map((item, index) => (
            <m.div
              key={index}
              whileHover={{ scale: selectedCard === index ? 1.08 : 1.03 }}
              animate={selectedCard === index ? { scale: 1.10, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)", borderColor: "#2e7d4f" } : { scale: 1, boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)", borderColor: "rgba(46,125,79,0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => handleCardClick(index)}
              className={`cursor-pointer transition-all duration-300 ${selectedCard === index ? 'border-2 border-conservative-green bg-white shadow-2xl ring-2 ring-conservative-green' : 'opacity-70 hover:opacity-100'} text-center p-6 h-full border-conservative-green/20 hover:border-conservative-green/40 rounded-lg`}
            >
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-conservative-light-green rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-conservative-green" />
                </div>
                <h3 className="text-xl font-semibold text-foreground flex items-center justify-center gap-2">
                  {item.title}
                </h3>
                <button
                  className="mt-4 px-4 py-2 bg-conservative-green text-white rounded hover:bg-conservative-green/90 transition-colors text-sm font-medium"
                  onClick={e => { e.stopPropagation(); handleCardClick(index); }}
                >
                  {selectedCard === index ? "Luk" : "Læs mere"}
                </button>
              </CardContent>
            </m.div>
          ))}
        </div>

        {/* Uddybende Card for valgt værdi */}
        <AnimatePresence
          onExitComplete={() => {
            if (pendingCard !== null) {
              setSelectedCard(pendingCard);
              setPendingCard(null);
            }
          }}
        >
          {selectedCard !== null && (
            <m.div
              key={selectedCard}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-8 w-full"
            >
              <div className="border border-neutral-200 border-l-8 border-conservative-green shadow-none bg-white rounded-lg p-6">
                {valueCards[selectedCard].details}
              </div>
            </m.div>
          )}
        </AnimatePresence>

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
