'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Custom Glass Design',
    description: 'Bespoke glass solutions tailored to your unique needs and preferences.',
    icon: '🎨',
  },
  {
    title: 'Aluminum Frameworks',
    description: 'Durable and stylish aluminum frameworks for various applications.',
    icon: '🏗️',
  },
  {
    title: 'Window Installation',
    description: 'Expert installation of high-quality windows for residential and commercial spaces.',
    icon: '🪟',
  },
  {
    title: 'Door Fabrication',
    description: 'Custom-made doors combining functionality with aesthetic appeal.',
    icon: '🚪',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  }),
}

export default function Services() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-[#3E362E]"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#F0E6D9] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-4xl mb-4 inline-block"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-[#3E362E]">{service.title}</h3>
              <p className="text-[#3E362E]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

