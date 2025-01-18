'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Location() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#3E362E]">Visit Our Showroom</h2>
          <p className="text-xl text-[#93785B]">Experience our products in person</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4899375727647!2d75.74056145!3d26.9339236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5196eeeeee9%3A0x5f5e3c5c4b3b8c2a!2sDada%20Guru%20Glass%20Company!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </motion.div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#F0E6D9] rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#3E362E]">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#865D36] mr-4 mt-1" />
                  <p className="text-[#3E362E]">
                    117 k5c scheme near lal mandir,<br />
                    katipura jhotwada jaipur<br />
                    India
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-[#865D36] mr-4" />
                  <p className="text-[#3E362E]">+91 9460191579</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#F0E6D9] rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#3E362E]">Business Hours</h3>
              <ul className="space-y-2 text-[#3E362E]">
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-[#865D36] mr-2" />
                  Monday - Friday: 9:00 AM - 9:00 PM
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-[#865D36] mr-2" />
                  Saturday: 10:00 AM - 7:00 PM
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-[#865D36] mr-2" />
                  Sunday: Closed
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

