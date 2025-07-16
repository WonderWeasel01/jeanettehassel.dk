"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, ChevronDown } from "lucide-react"
import JeanetteHassel from "../assets/JeanetteBG.png"

const HeroSection = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={JeanetteHassel}
              alt="Jeanette Hassel"
              className="w-full h-full object-cover object-right"
            />
   
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-start px-8 lg:px-16 xl:px-24 w-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-2xl"
            >
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
                Jeanette Hassel
              </h1>
              
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-light mb-8 leading-relaxed">
                Din stemme på <span className="text-primary-dark font-semibold">Vækst og Nærvær</span>
              </h2>

              <p className="text-xl lg:text-2xl mb-4 font-medium">
                Byrådskandidat for Det Konservative Folkeparti
              </p>

              <p className="text-lg mb-8 opacity-90">Frederikssund Kommune</p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex gap-4"
              >
                <Button size="lg" className="text-lg bg-white text-[#00583C] hover:bg-[#00583C] hover:text-white px-8 py-4">
                  Lær mig at kende
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-white text-[#00583C hover:bg-white hover:text-[#00583C]">
                  Kontakt mig
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden relative w-full min-h-screen">
          {/* Top Section with Image */}
          <div className="relative h-[60vh] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={JeanetteHassel}
                alt="Jeanette Hassel"
                className="w-full h-full object-cover object-[85%_center]"
              />
              {/* Stylish overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#00583C]/90"></div>
              
              {/* Decorative shape overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#00583C] to-transparent"></div>
            </div>

            {/* Floating name card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 left-6 right-6"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2 leading-tight">
                  Jeanette Hassel
                </h1>
                <p className="text-primary/80 text-lg font-medium">
                  Byrådskandidat for Det Konservative Folkeparti
                </p>
                <p className="text-primary/60 text-sm mt-1">
                  Frederikssund Kommune
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section with Content */}
          <div className="relative h-[40vh] bg-[#00583C] flex flex-col justify-center">
            {/* Decorative wave at top */}
            <div className="absolute top-0 left-0 right-0">
              <svg className="w-full h-8 text-primary" viewBox="0 0 1440 120" fill="#00583C">
                <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="px-6 text-center text-white space-y-6 mt-4"
            >
              <h2 className="text-2xl sm:text-3xl font-light leading-relaxed">
                Din stemme på
                <span className="block font-bold text-primary-light mt-1">
                  Vækst og Nærvær
                </span>
              </h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col gap-4 max-w-xs mx-auto"
              >
                <Button
                  size="lg"
                  className="bg-white text-[#00583C] hover:bg-[#9ED196] hover:text-[#00583C] px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
                >
                  Lær mig at kende
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#00583C] text-white hover:bg-[#9ED196] hover:text-[#00583C] px-8 py-4 text-lg font-semibold rounded-xl bg-transparent transition-all duration-300"
                >
                  Kontakt mig
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - All Screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <ChevronDown size={32} className="opacity-80" />
          </motion.div>
        </motion.div>
      </section>
    </div>
    
  )
}

export default HeroSection
