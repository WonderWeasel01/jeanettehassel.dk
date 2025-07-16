import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Heart, Users, Building, Globe, TreePine, Star } from "lucide-react"

export default function MaerkesagerPage() {
  const sections = [
    {
      title: "Børn og unge først",
      icon: Heart,
      color: "bg-conservative-green/10 text-conservative-green",
      points: [
        "Tidlig indsats – hver gang: Vi skal sætte hurtigt ind ved mistrivsel, mobning og psykiske udfordringer. Det må ikke tage måneder at få hjælp.",
        "Trivsel og faglighed i skolen: Elever og lærere skal opleve ro, respekt og nærvær. Faglighed og tryghed skal gå hånd i hånd.",
        "Mere tid til kerneopgaven: Mindre dokumentation – mere nærvær i klasselokalet og daginstitutionen.",
        "Plads til forskellighed: Flere valgmuligheder for forældre – også når det gælder skole og pasning."
      ]
    },
    {
      title: "Ældre og pårørende med i centrum",
      icon: Users,
      color: "bg-conservative-accent/10 text-conservative-green",
      points: [
        "Værdighed i ældreplejen: Ældre skal mødes med respekt – ikke stopur og systemkrav.",
        "Tid og tillid til plejepersonalet: Jeg vil fjerne unødigt bureaukrati og give mere ansvar til de fagprofessionelle.",
        "Støt de pårørende: Mange bærer et stort ansvar – kommunen skal møde dem med respekt og fleksibilitet.",
        "Valgfrihed: Lige vilkår for private og offentlige leverandører – det handler om kvalitet, ikke om hvem der leverer."
      ]
    },
    {
      title: "En kommune med plads til vækst og initiativ",
      icon: Building,
      color: "bg-blue-50 text-conservative-green",
      points: [
        "Erhvervsvenlig kommune – igen: Mindre bureaukrati, mere tillid. Virksomheder skal føle sig velkomne.",
        "Hurtig og effektiv sagsbehandling: Tydelige kontaktveje, faste sagsbehandlere og en \"vi finder en løsning\"-mentalitet.",
        "Flere arbejdspladser lokalt: Gode rammer for både iværksættere og større virksomheder – også uden for bymidten.",
        "Stærkere samarbejde med skoler og erhverv: Uddannelse og arbejdsmarked skal hænge bedre sammen."
      ]
    },
    {
      title: "En kommune, der er til for borgerne",
      icon: Globe,
      color: "bg-conservative-accent/10 text-conservative-green",
      points: [
        "Borgervenlighed i centrum: Du skal som borger føle dig mødt med respekt – uanset om du ringer, skriver eller møder op.",
        "Mindre system, mere menneske: Vi vil have færre regler og mere sund fornuft.",
        "Lige vilkår mellem private og offentlige aktører: Det vigtigste er kvalitet og borgerens frie valg – ikke hvem der står bag tilbuddet."
      ]
    },
    {
      title: "Udvikling i hele kommune",
      icon: TreePine,
      color: "bg-green-50 text-conservative-green",
      points: [
        "Mere fokus vest for fjorden: Hornsherred skal ikke glemmes. Vi ønsker bedre balance i investeringer og prioriteringer mellem kommunens østlige og vestlige egne.",
        "Byudvikling med respekt for lokal identitet: Vi vil styrke de mindre lokalsamfund i Hornsherred med flere boliger, lokale arbejdspladser og fællesskaber – uden at ødelægge det grønne og landsbyernes særpræg.",
        "Bedre infrastruktur og transportforbindelser: Det skal være nemmere at bo, arbejde og drive virksomhed i Hornsherred – og nemmere at komme til og fra."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-conservative-green">
              Mine mærkesager KV25
            </h1>
            <div className="inline-flex items-center bg-conservative-green/10 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 text-conservative-green mr-2" />
              <span className="text-conservative-green font-semibold text-lg">
                "Trygge rammer – hele livet"
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-conservative-green to-conservative-green/80 text-white">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full bg-white/20`}>
                        <section.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-2xl font-bold">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      {section.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-conservative-green rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Konservativ retning */}
      <section className="py-16 px-4 bg-conservative-green/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-conservative-green">
              Konservativ retning – med fokus på det nære
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Jeg kæmper for nærvær, værdighed og valgfrihed – og for en kommune, hvor børn trives, ældre respekteres, og initiativ belønnes.
              </p>
              <p className="font-semibold text-conservative-green">
                Jeg tror på mennesket og hele familien før systemet, faglighed før symbolpolitik og tryghed før eksperimenter.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}