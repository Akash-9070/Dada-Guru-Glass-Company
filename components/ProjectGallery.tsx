'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Glass Office Building',
    location: 'Jaipur, Rajasthan',
    image: '/pexels-pixabay-262367.jpg',
  },
  {
    id: 2,
    title: 'Modern Residence',
    location: 'Delhi NCR',
    image: '/pexels-max-vakhtbovych-7031607.jpg',
  },
  {
    id: 3,
    title: 'Shopping Complex',
    location: 'Mumbai, Maharashtra',
    image: '/pexels-pixabay-264507.jpg',
  },
  {
    id: 4,
    title: 'Corporate Headquarters',
    location: 'Bangalore, Karnataka',
    image: '/pexels-alex-qian-2343465.jpg',
  },
  {
    id: 5,
    title: 'Luxury Hotel',
    location: 'Udaipur, Rajasthan',
    image: '/pexels-thorsten-technoman-338504.jpg',
  },
  {
    id: 6,
    title: 'Restaurant Interior',
    location: 'Jaipur, Rajasthan',
    image: '/pexels-rachel-claire-4577410.jpg',
  },
  // Add more projects as needed
]

export default function ProjectGallery() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#3E362E] mb-4">Our Projects</h2>
          <p className="text-[#93785B] text-lg">Transforming spaces across India</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E362E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[#AC8968]">{project.location}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-12"
        >
          
        </motion.div>
      </div>
    </section>
  )
} 