/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import Link from 'next/link'

const catalogs = [
  {
    name: 'Pulpwood Company Profile',
    description: 'Learn about our company history, mission, and values',
    image: '/catalogs/Pulp Wood Company Profile_1.jpg',
    url: '/catalogs/pulpwood-product-catalog.pdf'
  
  },
  {
    name: 'Pulpwood Product Catalog',
    description: 'Explore our complete range of products and specifications',
    image: '/catalogs/pulpwood-product-catalog_page-0001.jpg',
    url: '/catalogs/pulpwood-company-profile.pdf'
  }
]

export default function CatalogPage() {
  const [selectedCatalog, setSelectedCatalog] = useState(catalogs[0])

  return (
    <section className="py-16  md:py-24 bg-soft-beige/20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl mt-8 font-bold tracking-tighter sm:text-4xl md:text-5xl text-forest-green font-montserrat">
            Our Catalogs
          </h1>
          <p className="mt-4 text-earth-brown max-w-2xl mx-auto">
            Download our catalogs to learn more about our company and explore our complete product range
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Catalog Selection */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-forest-green mb-4">Available Catalogs</h2>
            {catalogs.map((catalog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-4 rounded-lg cursor-pointer transition-all ${selectedCatalog.name === catalog.name ? 'bg-forest-green text-white' : 'bg-white hover:bg-gray-100'}`}
                onClick={() => setSelectedCatalog(catalog)}
              >
                <h3 className="font-semibold">{catalog.name}</h3>
                <p className={`text-sm mt-1 ${selectedCatalog.name === catalog.name ? 'text-white/80' : 'text-gray-500'}`}>
                  {catalog.description}
                </p>
                <Link 
                  href={catalog.url} 
                  download 
                  className={`inline-flex items-center mt-2 text-sm font-medium ${selectedCatalog.name === catalog.name ? 'text-white/90 hover:text-white' : 'text-coral-orange hover:text-coral-orange/80'}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download PDF
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Catalog Preview */}
          <motion.div
            key={selectedCatalog.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="aspect-video bg-gray-100 relative">
              <img 
                src={selectedCatalog.image} 
                alt={selectedCatalog.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold">{selectedCatalog.name}</h2>
                  <p className="text-white/80 mt-2">{selectedCatalog.description}</p>
                </div>
              </div>
            </div>
            <div className="p-6 flex justify-between items-center">
              <p className="text-gray-500">Preview the catalog or download for offline viewing</p>
              <Button 
                asChild
                className="bg-forest-green hover:bg-forest-green/90"
              >
                <Link href={selectedCatalog.url} download>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}