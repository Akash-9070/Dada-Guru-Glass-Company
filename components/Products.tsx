'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'


const products = [
  { id: 1, name: 'Glass Partition', image: '/pexels-hardeep-29381747.jpg', span: 'col-span-1 row-span-1' },
  { id: 2, name: 'Aluminum Window', image: '/pexels-pixabay-258626.jpg', span: 'col-span-2 row-span-2' },
  { id: 3, name: 'Frameless Shower', image: '/pexels-heyho-6198661.jpg', span: 'col-span-1 row-span-2' },
  { id: 4, name: 'Glass Railing', image: '/pexels-pixabay-534174.jpg', span: 'col-span-1 row-span-2' },
  { id: 5, name: 'Glass work', image: '/pexels-tobias-reinert-1248572188-28555961.jpg', span: 'col-span-2 row-span-1' },
  { id: 6, name: 'Mirror Wall', image: '/pexels-heyho-6438753.jpg', span: 'col-span-1 row-span-1' },
  { id: 7, name: 'Glass Table', image: '/table.jpg', span: 'col-span-1 row-span-1' },
  { id: 8, name: 'Shower Enclosure', image: '/pexels-perqued-17840522.jpg', span: 'col-span-2 row-span-1' },
  { id: 9, name: 'Glass Balustrade', image: '/pexels-yagmur-ozdogan-56681684-17143099.jpg', span: 'col-span-1 row-span-2' },
  { id: 10, name: 'Office Partition', image: '/pexels-heyho-13068361.jpg', span: 'col-span-2 row-span-2' },
  { id: 11, name: 'Glass Door', image: '/pexels-weekendplayer-1098982.jpg', span: 'col-span-1 row-span-1' },
  { id: 12, name: 'Aluminum Frame', image: '/pexels-konstantinolsen-287263.jpg', span: 'col-span-2 row-span-1' },
  { id: 13, name: 'Glass Staircase', image: '/pexels-laura-tancredi-7078471.jpg', span: 'col-span-2 row-span-3' },
  { id: 14, name: 'Bathroom Mirror', image: '/pexels-ron-lach-10222468.jpg', span: 'col-span-2 row-span-1' },
  { id: 15, name: 'Glass Facade', image: '/pexels-qui-nguyen-7862521-17700123.jpg', span: 'col-span-2 row-span-2' },
]

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <section className="py-12 md:py-20 bg-[#F5F5F5] px-4 md:px-8">
      <div className="bg-[#F0E6D9] rounded-3xl p-4 md:p-8 lg:p-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#3E362E]"
        >
          Our Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {products.map((product) => (
            <motion.div
              key={product.id}
              layoutId={`product-${product.id}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-lg cursor-pointer ${
                isDesktop ? product.span : 'col-span-1'
              }`}
              onClick={() => setSelectedProduct(product)}
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                width={800}  // Adjust based on your needs
                height={600} // Adjust based on your needs
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E362E]/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-base md:text-lg font-semibold">{product.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#3E362E] bg-opacity-90 flex items-center justify-center z-50 p-4 md:p-8"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              layoutId={`product-${selectedProduct.id}`}
              className="bg-white rounded-lg overflow-hidden w-full max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedProduct.image || "/placeholder.svg"}
                alt={selectedProduct.name}
                className="w-full h-auto object-contain max-h-[70vh]"
                width={1200} // Adjust based on your needs
                height={800}  // Adjust based on your needs
              />
              <div className="p-4 bg-[#F5F5F5]">
                <h3 className="text-lg md:text-xl font-semibold text-[#3E362E]">{selectedProduct.name}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}