/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, CheckCircle } from 'lucide-react'

const images = [
  '/images/tissues.png?height=400&width=400',
  '/images/containers.png?height=400&width=400',
  '/images/balls.png?height=400&width=400',
]

// const catalogs = [
//   {
//     name: 'Pulpwood Company Profile',
//     url: '/catalogs/pulpwood-company-profile.pdf'
//   },
//   {
//     name: 'Pulpwood Product Catalog', 
//     url: '/catalogs/pulpwood-product-catalog.pdf'
//   }
// ]

const highlights = [
  "100% biodegradable and eco-friendly",
  "Premium quality virgin tissue",
  "Household hygiene chemical range",
  "Bulk packaging options for business"
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [showCatalog, setShowCatalog] = useState(false)
  const [selectedCatalog, setSelectedCatalog] = useState<string | null>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  // Set initial catalog when modal opens
  // useEffect(() => {
  //   if (showCatalog) {
  //     setSelectedCatalog(catalogs[0].url)
  //     setScale(1) // Reset zoom when modal opens
  //   }
  // }, [showCatalog])

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 2))
  const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5))

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/video/bg video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/30 to-earth-brown/30 mix-blend-multiply" />
      </div>

      <div className="container px-8 md:px-12 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-forest-green font-blue-ocean-bold ">
              Premium Eco-Friendly Products
            </h1>
            <p className="max-w-[600px] text-earth-brown md:text-xl font-open-sans">
              Discover our extensive catalog of sustainable, high-quality disposable and household products designed for modern living.
            </p>
            <ul className="space-y-3 my-4">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-earth-brown font-open-sans"
                >
                  <CheckCircle className="text-forest-green w-5 h-5 flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="default" onClick={() => setShowCatalog(true)} className="bg-forest-green hover:bg-forest-green/90 text-white font-montserrat">
                View Catalog
              </Button>
              <Button size="lg" variant="secondary" className="bg-soft-beige text-earth-brown hover:bg-soft-beige/90 font-montserrat">
                Learn More
              </Button>
            </div>
          </motion.div>

          <div className="relative pr-10 left-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <img
                  src={images[currentImage]}
                  alt={`Product ${currentImage + 1}`}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentImage === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Modal */}
      <AnimatePresence>
        {showCatalog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowCatalog(false)
              setSelectedCatalog(null)
            }}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="bg-white rounded-lg p-6 max-w-5xl w-full h-[80vh] flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-forest-green font-montserrat">Our Catalogs</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={zoomOut}
                    className="p-2 hover:bg-gray-100 rounded-full"
                    title="Zoom Out"
                  >
                    <ZoomOut className="h-5 w-5" />
                  </button>
                  <button
                    onClick={zoomIn}
                    className="p-2 hover:bg-gray-100 rounded-full"
                    title="Zoom In"
                  >
                    <ZoomIn className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => {
                      setShowCatalog(false)
                      setSelectedCatalog(null)
                    }}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4 h-full">
                {/* <div className="w-64 space-y-4 border-r pr-4">
                  {catalogs.map((catalog, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <button
                        onClick={() => setSelectedCatalog(catalog.url)}
                        className={`p-2 text-left rounded-md transition-colors font-montserrat ${
                          selectedCatalog === catalog.url ? 'bg-forest-green text-white' : 'hover:bg-soft-beige text-earth-brown'
                        }`}
                      >
                        {catalog.name}
                      </button>
                      <a
                        href={catalog.url}
                        download
                        className="text-coral-orange hover:text-coral-orange/80 font-open-sans text-sm"
                      >
                        Download PDF
                      </a>
                    </div>
                  ))}
                </div> */}
                
                <div className="flex-1 bg-gray-50 rounded-lg overflow-hidden">
                  {selectedCatalog ? (
                    <div className="w-full h-full overflow-auto">
                      <motion.iframe
                        animate={{ scale }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        src={`${selectedCatalog}#toolbar=0`}
                        className="w-full h-full origin-top-left"
                        title="Catalog Viewer"
                        style={{ 
                          width: `${100 * scale}%`,
                          height: `${100 * scale}%`
                        }}
                      />
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-500">
                      Select a catalog to view
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
