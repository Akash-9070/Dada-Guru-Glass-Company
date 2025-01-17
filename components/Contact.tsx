'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false)
  const [typeEffect] = useTypewriter({
    words: ['Contact Us', 'Get in Touch', 'Reach Out'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 3000)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#3E362E] h-[60px]">
          <span>{typeEffect}</span>
          <Cursor cursorStyle="_" />
        </h2>
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#3E362E]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-[#93785B] shadow-sm focus:border-[#865D36] focus:ring-[#865D36]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#3E362E]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-[#93785B] shadow-sm focus:border-[#865D36] focus:ring-[#865D36]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#3E362E]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-[#93785B] shadow-sm focus:border-[#865D36] focus:ring-[#865D36]"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#865D36] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#93785B] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-[#3E362E] text-white px-6 py-3 rounded-md shadow-lg"
          >
            Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

