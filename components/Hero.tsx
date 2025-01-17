'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useState, useEffect } from 'react'

const letterAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: i * 0.1,
    },
  }),
}

export default function Hero() {
  const [showPhone, setShowPhone] = useState(true)
  const [phone] = useTypewriter({
    words: ['Call Us: +91 9460191579'],
    typeSpeed: 50,
    delaySpeed: 2000,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPhone((prev) => !prev)
    }, 3000) // Toggle every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/glass-background.jpg"
          alt="Glass Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#3E362E]/30 backdrop-blur-sm p-4 sm:p-8 rounded-lg"
        >
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 text-shadow">
              <div className="flex flex-wrap justify-center">
                {["Dada", " ", "Guru", " ", "Glass"].map((word, wordIndex) => (
                  <span key={wordIndex} className="flex">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        custom={wordIndex * 5 + charIndex}
                        variants={letterAnimation}
                        initial="initial"
                        animate="animate"
                        className="inline-block mx-[0.05em] sm:mx-[0.1em] whitespace-pre"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="block text-[#AC8968]"
              >
                Company
              </motion.span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="h-[2px] bg-[#865D36] w-32 my-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl"
            >
              Transforming Spaces with Glass & Aluminum
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="text-[#AC8968] text-sm sm:text-base md:text-lg lg:text-xl mt-2"
            >
              Since 2009
            </motion.p>
          </div>
        </motion.div>
        <motion.a
          href="#gallery"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block bg-[#865D36] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#93785B] transition duration-300"
        >
          Explore Our Work
        </motion.a>
        <AnimatePresence>
          {showPhone && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-white text-sm sm:text-base md:text-lg"
            >
              <span>{phone}</span>
              <Cursor cursorStyle="_" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[#3E362E] opacity-40 z-0"
      />
    </section>
  )
}

