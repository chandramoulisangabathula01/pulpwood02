import Hero from '@/components/hero'
// import Features from '@/components/features'
// import ProductShowcase from '@/components/product-showcase'
// import ProductCategories from '@/components/product-categories'
// import Distribution from '@/components/distribution'
// import Sustainability from '@/components/sustainability'
// import Partners from '@/components/partners'
import Contact from '@/components/contact'
import ProductShowcase from '@/components/product-showcase'
import ProductCategories from '@/components/product-categories'
import Features from '@/components/features'
import Distribution from '@/components/distribution'
import Sustainability from '@/components/sustainability'
import Partners from '@/components/partners'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProductCategories />
      <Features />
      <ProductShowcase />
      <Distribution />
      <Sustainability />
      <Partners />
      <Contact />
    </main>
  )
}

