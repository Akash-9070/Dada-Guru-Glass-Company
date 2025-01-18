'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'


const projects = [
  { id: 1, name: 'Skyline Tower', image: '/pexels-radis-30216355.jpg', description: 'A 50-story glass facade skyscraper' },
  { id: 2, name: 'Eco Greenhouse', image: '/pexels-heyho-7045701.jpg', description: 'Sustainable glass structure for urban farming' },
  { id: 3, name: 'Crystal Mall', image: '/pexels-dar-ius-1051256061-30214412.jpg', description: 'Modern shopping center with expansive glass atrium' },
  { id: 4, name: 'Aquarium Complex', image: '/pexels-julen-garces-2232664-3907128.jpg', description: 'State-of-the-art marine life center with curved glass tanks' },
  { id: 5, name: 'Smart Office', image: '/pexels-mikhail-nilov-9300737.jpg', description: 'Next-gen workspace with intelligent glass partitions' },
  // Add more future projects as needed
]

export default function FutureProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const scrollAnimation = async () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth
        const viewportWidth = containerRef.current.offsetWidth

        await controls.start({
          x: [0, -(scrollWidth - viewportWidth)],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        })
      }
    }

    scrollAnimation()
  }, [controls])

  return (
    <section className="py-20 bg-[#F5F5F5] overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#3E362E] mb-8">Future Projects</h2>
        <p className="text-center text-[#93785B] max-w-2xl mx-auto">
          Explore our upcoming innovative glass and aluminum projects that push the boundaries of design and functionality.
        </p>
      </div>
      <div className="relative">
        <motion.div
          ref={containerRef}
          className="flex"
          animate={controls}
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-shrink-0 w-64 sm:w-80 mx-2 sm:mx-4"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                className="w-full h-full object-cover"
                width={800}  // Adjust based on your needs
                height={600} // Adjust based on your needs
              />
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#3E362E] mb-2">{project.name}</h3>
                  <p className="text-sm sm:text-base text-[#93785B]">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

