'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Define the image interface
interface GalleryImage {
  src: string
  alt: string
  title?: string
  description?: string
}

export default function GalleryPage() {
  // State for images, lightbox, and pagination
  const [images, setImages] = useState<GalleryImage[]>([])
  const [visibleImages, setVisibleImages] = useState<GalleryImage[]>([])
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [page, setPage] = useState(1)
  const imagesPerPage = 12
  
  // Populate images from the pulpwood images folder
  useEffect(() => {
    // This would ideally come from an API or CMS
    // For now, we'll hardcode the image paths from the public folder
    const productImages: GalleryImage[] = [
      { src: '/images/pulpwood images/plain paper plates 5in 50p.webp', alt: 'Plain Paper Plates - 5 inches', title: 'Plain Paper Plates - 5 inches', description: 'Eco-friendly 5-inch paper plates, perfect for snacks and appetizers' },
      { src: '/images/pulpwood images/plain paper plates 6in 50p.webp', alt: 'Plain Paper Plates - 6 inches', title: 'Plain Paper Plates - 6 inches', description: 'Versatile 6-inch paper plates for everyday use' },
      { src: '/images/pulpwood images/plain paper plates 7in 50p.webp', alt: 'Plain Paper Plates - 7 inches', title: 'Plain Paper Plates - 7 inches', description: 'Medium-sized paper plates perfect for regular meals' },
      { src: '/images/pulpwood images/plain paper plates 8in 50p.webp', alt: 'Plain Paper Plates - 8 inches', title: 'Plain Paper Plates - 8 inches', description: 'Durable 8-inch paper plates for larger meals' },
      { src: '/images/pulpwood images/plain paper plates 9in 50p.webp', alt: 'Plain Paper Plates - 9 inches', title: 'Plain Paper Plates - 9 inches', description: 'Large 9-inch paper plates for generous portions' },
      { src: '/images/pulpwood images/plain paper plates 12in 50p.webp', alt: 'Plain Paper Plates - 12 inches', title: 'Plain Paper Plates - 12 inches', description: 'Extra-large 12-inch paper plates for parties and special occasions' },
      { src: '/images/pulpwood images/strong phenyl rose.webp', alt: 'Rose Perfumed Phenyl', title: 'Rose Perfumed Phenyl', description: 'Rose-scented phenyl for a pleasant fragrance while cleaning' },
      { src: '/images/pulpwood images/strong phenyl lemon.webp', alt: 'Lemon Perfumed Phenyl', title: 'Lemon Perfumed Phenyl', description: 'Lemon-scented phenyl for a refreshing clean' },
      { src: '/images/pulpwood images/strong phenyl sandal.webp', alt: 'Sandal Perfumed Phenyl', title: 'Sandal Perfumed Phenyl', description: 'Sandal-scented phenyl for long-lasting freshness' },
      { src: '/images/pulpwood images/strong phenyl jasmine.webp', alt: 'Jasmine Perfumed Phenyl', title: 'Jasmine Perfumed Phenyl', description: 'Jasmine-scented phenyl for a soothing atmosphere' },
      { src: '/images/pulpwood images/strong phenyl pack of 3.webp', alt: 'Phenyl Pack of 3', title: 'Phenyl Pack of 3', description: 'Convenient pack of three phenyl variants' },
      { src: '/images/pulpwood images/black floor cleaner.webp', alt: 'Black Floor Cleaner', title: 'Black Floor Cleaner', description: 'Specialized black floor cleaner for deep cleaning' },
      { src: '/images/pulpwood images/floor cleaners.webp', alt: 'Floor Cleaners', title: 'Floor Cleaners', description: 'Effective floor cleaning solutions for all surfaces' },
      { src: '/images/pulpwood images/napkins 100p.webp', alt: 'Table Top Napkins (100 pieces)', title: 'Table Top Napkins (100 pieces)', description: 'High-quality table napkins for dining and everyday use' },
      { src: '/images/pulpwood images/napkins 50p.webp', alt: 'Table Top Napkins (50 pieces)', title: 'Table Top Napkins (50 pieces)', description: 'Convenient pack of table napkins for smaller households' },
      { src: '/images/pulpwood images/value pack soft napkins.webp', alt: 'Value Pack Napkins', title: 'Value Pack Napkins', description: 'Economical pack of napkins for budget-conscious consumers' },
      { src: '/images/pulpwood images/value pack soft napkins side.webp', alt: 'Value Pack Napkins Side View', title: 'Value Pack Napkins', description: 'Side view of our economical napkin pack' },
      { src: '/images/pulpwood images/epic premium napkins.webp', alt: 'Epic Premium Napkins', title: 'Epic Premium Napkins', description: 'Premium quality napkins for special occasions' },
      { src: '/images/pulpwood images/epic premium napkins pyramid.webp', alt: 'Epic Premium Napkins Pyramid', title: 'Epic Premium Napkins', description: 'Pyramid display of our premium napkins' },
      { src: '/images/pulpwood images/premium tissues  front.webp', alt: 'Premium Tissues', title: 'Premium Tissues', description: 'Convenient box of facial tissues for home and office' },
      { src: '/images/pulpwood images/premium tissues  front 2.webp', alt: 'Premium Tissues Large Box', title: 'Premium Tissues Large Box', description: 'Large box of facial tissues for extended use' },
      { src: '/images/pulpwood images/tissue roll 6in1.webp', alt: 'Toilet Rolls Pack', title: 'Toilet Rolls Pack', description: 'Premium toilet paper in convenient multi-packs' },
      { src: '/images/pulpwood images/kitchen towel.webp', alt: 'Kitchen Towel', title: 'Kitchen Towel', description: 'Single roll of absorbent kitchen towel for everyday use' },
      { src: '/images/pulpwood images/kitchen towel 2in1.webp', alt: 'Kitchen Towel 2-Pack', title: 'Kitchen Towel 2-Pack', description: 'Convenient 2-pack of kitchen towels for extended use' },
      { src: '/images/pulpwood images/kitchen towel 4in1.webp', alt: 'Kitchen Towel 4-Pack', title: 'Kitchen Towel 4-Pack', description: 'Economical 4-pack of kitchen towels for family use' },
      { src: '/images/pulpwood images/bleaching powder 1kg.webp', alt: 'Bleaching Powder (1Kg)', title: 'Bleaching Powder (1Kg)', description: 'Powerful bleaching powder for deep cleaning and disinfection' },
      { src: '/images/pulpwood images/bleaching powder 500g.webp', alt: 'Bleaching Powder (500g)', title: 'Bleaching Powder (500g)', description: 'Convenient pack of bleaching powder for regular cleaning' },
      { src: '/images/pulpwood images/napthalene balls 500g.webp', alt: 'Naphthalene Balls (500g)', title: 'Naphthalene Balls (500g)', description: 'Effective naphthalene balls for moth and insect control' },
      { src: '/images/pulpwood images/napthalene balls 200g.webp', alt: 'Naphthalene Balls (200g)', title: 'Naphthalene Balls (200g)', description: 'Compact pack of naphthalene balls for smaller spaces' },
      { src: '/images/pulpwood images/paper cups 90ml 100p.webp', alt: 'Paper Cups (90ml)', title: 'Paper Cups (90ml, 100 pieces)', description: 'Compact paper cups for small servings' },
      { src: '/images/pulpwood images/paper cups 110ml 100p.webp', alt: 'Paper Cups (110ml)', title: 'Paper Cups (110ml, 100 pieces)', description: 'Medium-sized paper cups for tea and coffee' },
      { src: '/images/pulpwood images/paper cups 150ml 100p.webp', alt: 'Paper Cups (150ml)', title: 'Paper Cups (150ml, 100 pieces)', description: 'Standard paper cups for hot and cold beverages' },
      { src: '/images/pulpwood images/paper cups 210ml 100p.webp', alt: 'Paper Cups (210ml)', title: 'Paper Cups (210ml, 100 pieces)', description: 'Large paper cups for generous servings' },
      { src: '/images/pulpwood images/paper cups 250ml 100p.webp', alt: 'Paper Cups (250ml, 100 pieces)', title: 'Paper Cups (250ml, 100 pieces)', description: 'Extra-large paper cups for cold drinks and shakes' },
      { src: '/images/pulpwood images/paper cups 250ml 50p.webp', alt: 'Paper Cups (250ml, 50 pieces)', title: 'Paper Cups (250ml, 50 pieces)', description: 'Convenient pack of extra-large paper cups' },
    ]
    
    setImages(productImages)
    updateVisibleImages(productImages, 1)
  }, [])
  
  // Update visible images based on pagination
  const updateVisibleImages = (allImages: GalleryImage[], currentPage: number) => {
    const endIndex = currentPage * imagesPerPage
    setVisibleImages(allImages.slice(0, endIndex))
  }
  
  // Load more images
  const loadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    updateVisibleImages(images, nextPage)
  }
  
  // Open lightbox
  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }
  
  // Close lightbox
  const closeLightbox = useCallback(() => {
    setSelectedImage(null)
  }, []) // setSelectedImage is stable
  
  // Navigate to next image
  const nextImage = useCallback(() => {
    if (visibleImages.length === 0) return;
    const newIndex = (currentIndex + 1) % visibleImages.length
    setSelectedImage(visibleImages[newIndex])
    setCurrentIndex(newIndex)
  }, [currentIndex, visibleImages]) // setSelectedImage & setCurrentIndex are stable
  
  // Navigate to previous image
  const prevImage = useCallback(() => {
    if (visibleImages.length === 0) return;
    const newIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length
    setSelectedImage(visibleImages[newIndex])
    setCurrentIndex(newIndex)
  }, [currentIndex, visibleImages]) // setSelectedImage & setCurrentIndex are stable
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return
      
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, currentIndex, nextImage, prevImage, closeLightbox])

  return (
    <main className="min-h-screen bg-background pt-20">
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-forest-green">Product Gallery</h1>
            <p className="mt-4 text-earth-brown max-w-2xl mx-auto">
              Browse our collection of high-quality, eco-friendly products designed for everyday use
            </p>
          </motion.div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold truncate">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Load More Button */}
          {visibleImages.length < images.length && (
            <div className="mt-12 text-center">
              <Button
                onClick={loadMore}
                className="bg-forest-green hover:bg-forest-green/90 text-white px-8 py-2"
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Image */}
              <div className="relative flex-grow flex items-center justify-center bg-black/30 rounded-t-lg overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[70vh] w-auto"
                />
              </div>
              
              {/* Caption */}
              <div className="bg-white p-4 rounded-b-lg">
                <h3 className="text-xl font-bold text-forest-green">{selectedImage.title}</h3>
                {selectedImage.description && (
                  <p className="text-earth-brown mt-2">{selectedImage.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}