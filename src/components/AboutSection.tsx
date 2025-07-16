"use client"

import { motion } from "framer-motion"
import { AnimatePresence, motion as m } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, TrendingUp, MapPin } from "lucide-react"
import { useEffect, useState } from "react"
import Jeanette from "@/assets/JeanetteHvidBG.jpg" // Importing the image of Jeanette


function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [breakpoint])

  return isMobile
}

const valueCards = [
  {
    icon: Heart,
    title: "Nærvær",
    details: (
      <>
        <h3 className="text-xl font-semibold mb-4">Nærvær</h3>
        <div className="space-y-3">
          <p>
          I en tid præget af afstand og forandring, har vi mere end nogensinde brug for nærvær – både i politik og i hverdagen. For mig handler nærvær om at lytte, være til stede og tage ansvar for det nære fællesskab: familien, lokalsamfundet og de værdier, der binder os sammen. Et stærkt samfund bygges ikke kun gennem vækst, men gennem omsorg, tillid og engagement i det, der betyder mest. Derfor kæmper jeg for en politik, der sætter mennesket før systemet og gør plads til det nære i en travl verden.
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
          Et stærkt samfund kræver en sund økonomi. Vækst og udvikling er grundlaget for vores velfærd, tryghed og muligheder. Jeg arbejder for ansvarlig økonomisk politik, der skaber rum for investeringer, arbejdspladser og innovation – uden at gå på kompromis med vores værdier eller borgerne. Vi skal styrke erhvervslivet, støtte iværksættere og sikre, at næste generation får bedre muligheder end den forrige. Gennem stabilitet og fremsyn kan vi skabe vækst, der varer ved.
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
          <p>Jeg er stolt af at have været engageret i en række frivillige organisationer og initiativer, der alle ligger mit hjerte nært. Det giver mig energi at give tilbage til samfundet på forskellige måder – ikke fordi jeg skal, men fordi jeg ganske enkelt ikke kan lade være.</p>
          <div>
            <h4 className="font-semibold">Foreningen Cancerramte Børn</h4>
            <p>
            Som bestyrelsesmedlem i Foreningen Cancerramte Børn arbejdede jeg for at skabe bedre vilkår og støtte til familier, der står midt i det ubærlige – et barn med kræft. Det er et arbejde, der både kræver hjerte og handling. Foreningens tilbud giver håb, sammenhold og oplevelser til familier, der ellers er presset til det yderste. 
            Jeg har været med til at arrangere diverse aktiviteter og arrangementer for børnene og deres familier. Jeg har været på Rigshospitalet, og talt og leget med det sygebarn, talt med forældre og søskende. 
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Kræftens Bekæmpelse – Lokalafdeling Frederikssund</h4>
            <p>
            I Kræftens Bekæmpelses lokalafdeling i Frederikssund har jeg været et aktivt medlem af bestyrelsen. Her arbejdede vi for at sætte kræftsagen på dagsordenen lokalt og skabe arrangementer og indsatser, der styrkede både oplysning, forebyggelse og støtte til dem, der er ramt. Jeg har været med til at arrangere Lyserød Lørdag, Landsindsamling, Legedage, diverse foredrag mm. 
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Tovholder i Stafet For Livet Frederikssund</h4>
            <p>Et af de stærkeste øjeblikke har været Lysceremonien ved Stafet For Livet. Her var jeg tovholder for både lysceremonien og salget af lysposer. Hver pose fortæller en historie – om håb, om tab, om kamp. Det er en stærk og bevægende stund, hvor fællesskabet og minderne samler os. Det var her vi tændte lys i mørket. </p>
          </div>
          <div>
            <h4 className="font-semibold">AB Fyrreparken</h4>
            <p>
            Som formand for boligafdelingen AB Fyrreparken arbejder jeg lige nu for tryghed, ordentlighed og et godt naboskab. Det frivillige beboerdemokrati er en hjørnesten i vores boligform, og her ser jeg det som min opgave at sikre både stabil drift og et godt fællesskab.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Rotary Frederikssund</h4>
            <p>Som medlem af Rotary Frederikssund er jeg en del af et engageret fællesskab, der arbejder for at gøre en positiv forskel – både lokalt og globalt. Jeg nyder det stærke fællesskab, vi har i klubben, og har mødt mange inspirerende mennesker gennem mit medlemskab. Rotarys værdier om fællesskab, etik og ansvarlighed harmonerer med mine egne, og jeg sætter stor pris på de meningsfulde møder, det tværfaglige samarbejde og muligheden for at støtte velgørende formål i vores lokalsamfund.</p>
          </div>
       

<div>


          <h4 className="font-semibold">Næstformand i Den Konservative Vælgerforening i Frederikssund.</h4>
          <p>
            Min politiske rejse begyndte efter kommunalvalget i 2021. På få år har jeg udviklet mig fra ny medlem til
            næstformand og byrådskandidat i 2025.
       
            Jeg bidrager til at styrke det lokale partiarbejde og forme en konservativ retning for vores kommune. Jeg
            nyder samarbejdet i bestyrelsen og det stærke fællesskab i vælgerforeningen.
            
            Det er en tillid, jeg er stolt af – og en opgave, jeg går til med både energi og ansvarsfølelse.</p>
            </div>
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

]

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const [pendingCard, setPendingCard] = useState<number | null>(null)
  const isMobile = useIsMobile()

  const handleCardClick = (index: number) => {
    if (selectedCard === index) {
      setSelectedCard(null)
      setPendingCard(null)
    } else if (selectedCard !== null) {
      setSelectedCard(null)
      setPendingCard(index)
    } else {
      setSelectedCard(index)
      setPendingCard(null)
    }
  }

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
              <motion.div {...fadeInUp} className="mb-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#00583C] mb-6">Kandidat præsentation</h2>
                <div className="w-24 h-1" style={{ backgroundColor: "#00583C" }}></div>
              </motion.div>
              <p>
              Jeg er mor til to drenge og har boet i Jægerspris det meste af mit liv.
              Jeg er oprindeligt født på Østerbro, men flyttede som 2-årig med mine forældre til Jægerspris.
              Herfra har jeg haft min base, bortset fra en kort årrække i Ferslev, Skibby. Jægerspris er mit hjem – her kender jeg hver en sti og hvert et hjørne.
              Det lokale fællesskab har altid betydet meget for mig, og det er en grundlæggende del af, hvem jeg er.
              </p>
              <p>
                Siden 2018 har jeg arbejdet i lokale virksomheder i Frederikssund Kommune, hvor jeg har beskæftiget mig
                med HR, ledelse, bæredygtighed og forretningsudvikling. Jeg har en stærk tro på, at gode resultater
                skabes i balancen mellem mennesker og økonomi. Ledelse handler for mig om at tage ansvar, lytte
                oprigtigt og handle med hjertet på rette sted.
              </p>
              <p>
                Jeg bor i dag i Jægerspris sammen med min hund, TopGun – også kaldet Topper – en energisk Jack Russell
                Terrier, der sørger for daglig glæde og frisk luft. Livet har også budt på svære tider. I 2005 mistede
                jeg min ældste søn til knoglekræft – en sorg, som har præget mig og min familie dybt. Det er en
                erfaring, jeg bærer med mig hver dag. Som mor har jeg oplevet, hvordan mistrivsel og livets sårbarheder
                kan ramme hårdt. Det har givet mig en stærk forståelse for, hvor vigtigt det er, at vi som samfund tager
                ansvar for hinanden og skaber trygge rammer – særligt for vores børn og unge.
              </p>
              <p>
                Jeg stiller op til byrådet, fordi jeg ønsker at bidrage aktivt til et stærkt og trygt lokalsamfund, hvor
                der er plads til både mennesker og ambitioner. Med mine erfaringer fra både erhvervslivet og det
                personlige liv ved jeg, hvor vigtigt det er med ansvarlig ledelse, lokale fællesskaber og en politik,
                der bygger på ordentlighed, nærvær og respekt for den enkelte.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full">
              <div className="relative w-full flex flex-col items-center">
                <img
                  src={Jeanette || "/placeholder.svg"}
                  alt="Jeanette Hassel campaign"
                  className="rounded-lg shadow-2xl"
                  style={{
                    backgroundColor: "#FFFFFF",
                    maxWidth: 600, // Mindre billede
                    width: "100%",
                    margin: "0 auto",
                    display: "block",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: "#00583C",
                    opacity: 0.1,
                    borderRadius: "0.5rem",
                    pointerEvents: "none",
                    maxWidth: 600,
                    margin: "0 auto",
                  }}
                ></div>
              </div>
              <a
                href="/indblik"
                className="mt-6 px-6 py-2 rounded font-semibold transition-colors block"
                style={{
                  backgroundColor: "#00583C",
                  color: "#FFFFFF",
                  border: "2px solid #00583C",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Se karriere-tidslinje
              </a>
            </div>
          </motion.div>
        </div>

        {/* Values Cards */}
        <div className={`mt-16 ${isMobile ? "space-y-6" : "grid md:grid-cols-1 lg:grid-cols-3 gap-6"}`}>
          {valueCards.map((item, index) => (
            <div key={index} className={`${isMobile ? "w-full" : "relative"}`}>
              <m.div
                whileHover={{ scale: selectedCard === index ? 1.08 : 1.03 }}
                animate={
                  selectedCard === index
                    ? { scale: 1.1, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)", borderColor: "#00583C" }
                    : { scale: 1, boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)", borderColor: "#9ED196" }
                }
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => handleCardClick(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedCard === index
                    ? "border-2 bg-[#FFFFFF] shadow-2xl ring-2"
                    : "opacity-70 hover:opacity-100"
                } text-center p-6 h-full rounded-lg`}
                style={{
                  borderColor: selectedCard === index ? "#00583C" : "#9ED196",
                  boxShadow: selectedCard === index
                    ? "0 8px 32px 0 rgba(0,0,0,0.18)"
                    : "0 2px 8px 0 rgba(0,0,0,0.08)",
                }}
              >
                <CardContent className="space-y-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    style={{ backgroundColor: "#9ED196" }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: "#00583C" }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: "#00583C" }}>
                    {item.title}
                  </h3>
                  <button
                    className="mt-4 px-4 py-2 rounded transition-colors text-sm font-medium"
                    style={{
                      backgroundColor: "#00583C",
                      color: "#FFFFFF",
                    }}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCardClick(index)
                    }}
                  >
                    {selectedCard === index ? "Luk" : "Læs mere"}
                  </button>
                </CardContent>
              </m.div>

              {/* Mobile: dropdown directly under each card */}
              {isMobile && selectedCard === index && (
                <AnimatePresence>
                  <m.div
                    key={`mobile-${selectedCard}`}
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mt-4 border shadow-lg bg-white rounded-lg p-6"
                      style={{
                        borderColor: "#9ED196",
                        borderLeftWidth: "8px",
                        backgroundColor: "#FFFFFF",
                      }}
                    >
                      {valueCards[selectedCard].details}
                    </div>
                  </m.div>
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: dropdown under all cards */}
        {!isMobile && (
          <AnimatePresence
            onExitComplete={() => {
              if (pendingCard !== null) {
                setSelectedCard(pendingCard)
                setPendingCard(null)
              }
            }}
          >
            {selectedCard !== null && (
              <m.div
                key={`desktop-${selectedCard}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mt-8 w-full"
              >
                <div
                  className="border rounded-lg p-6"
                  style={{
                    borderColor: "#9ED196",
                    borderLeftWidth: "8px",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  {valueCards[selectedCard].details}
                </div>
              </m.div>
            )}
          </AnimatePresence>
        )}

        {/* Why Conservative */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card
            className="p-8 md:p-12"
            style={{ backgroundColor: "#00583C", color: "#FFFFFF" }}
          >
            <CardContent className="space-y-6">
              <h3 className="text-3xl font-bold mb-6">Hvorfor er jeg konservativ?</h3>
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  Jeg har valgt at være medlem af Det Konservative Folkeparti, fordi jeg tror på ansvar, frihed og
                  fællesskab. For mig handler politik om at skabe de bedste rammer for os alle – uanset om det drejer
                  sig om tryghed i vores hverdag, stærke lokale fællesskaber eller en ansvarlig forvaltning af vores
                  skattekroner.
                </p>
                <p>
                  Mit valgsprog "Vækst og Nærvær" afspejler mine værdier og mit politiske fokus. Vi skal skabe gode
                  rammer for vækst – både for erhvervslivet og for vores lokalsamfund – samtidig med at vi bevarer
                  nærværet og det lokale engagement, der gør vores kommune til et trygt og godt sted at bo.
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
  )
}

export default AboutSection
