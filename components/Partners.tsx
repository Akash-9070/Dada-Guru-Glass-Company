'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'


const partners = [
  {
    id: 1,
    name: "MODIGUARD®",
    role: "Manufacturing company",
    image: "/modigaurd.jpg",
    description: "MODIGUARD® brings to you innovative interior glass solutions that add character to your design project with enamouring reflections and flawless colour neutrality. Providing protection from corrosion, moisture, abrasion or any chemical attack, our products transform any space."
  },
  {
    id: 2,
    name: "Saint-Gobain",
    role: "Manufacturing company",
    image: "/saint-gobain.png",
    description: "Saint-Gobain designs, manufactures and distributes materials and solutions which are key ingredients in the wellbeing of each of us and the future of all."
  },
  {
    id: 3,
    name: "Hindustan National Glass",
    role: "Manufacturing company",
    image: "/hng.jpg",
    description: "(HNGIL) is an Indian container glassmaker based in Kolkata. The company is the largest and one of the oldest glass manufacturing companies in India."
  }
]

export default function Partners() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % partners.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16 text-[#3E362E]"
        >
          Meet Our Partners
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="relative w-64 h-64">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className={`absolute w-full h-full ${
                  index === activeIndex ? 'z-20' : 'z-10'
                }`}
                initial={false}
                animate={isClient ? {
                  scale: index === activeIndex ? 1 : 0.8,
                  opacity: index === activeIndex ? 1 : 0,
                } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden group">
                <Image
                  src={partner.image || "/placeholder.svg"}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                  width={256}  // Specify the actual width
                  height={256} // Specify the actual height
                />
                  <div className="absolute inset-0 bg-[#3E362E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                    <h3 className="text-xl font-semibold">{partner.name}</h3>
                    <p className="text-[#AC8968]">{partner.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full mt-8 md:mt-0"
            >
              <h3 className="text-2xl font-semibold text-[#3E362E] mb-2">{partners[activeIndex].name}</h3>
              <p className="text-[#93785B] mb-4">{partners[activeIndex].role}</p>
              <p className="text-[#3E362E]">{partners[activeIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}