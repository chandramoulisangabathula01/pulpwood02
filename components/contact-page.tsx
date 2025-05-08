'use client'

import { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Mail, Phone, MapPin, Globe, Clock, Facebook, Twitter, Instagram, Youtube, ArrowRight, } from 'lucide-react'

interface FormData {
  name: string;
  mobile: string;
  email: string;
  project: string;
}

export default function ContactPage() {
  // Mouse position for interactive gradient
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 10 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 10 })
  
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    project: ''
  })
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would integrate with EmailJS or another service
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({
      name: '',
      mobile: '',
      email: '',
      project: ''
    })
    // Show success message
    alert('Thank you for your message. We will get back to you soon!')
  }
  
  // Mouse move handler for gradient effect
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e
    mouseX.set(clientX)
    mouseY.set(clientY)
  }
  
  return (
    <main 
      className="min-h-screen bg-background pt-20"
      onMouseMove={handleMouseMove}>
      {/* Contact Card Section */}
      <section className="py-12 px-4 md:py-24 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl shadow-2xl flex flex-col lg:flex-row"
        >

          {/* Left Panel - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/5 bg-gradient-to-br from-forest-green to-earth-brown p-8 md:p-12 text-white relative overflow-hidden"
            style={{
              background: `radial-gradient(circle at ${springX}px ${springY}px, rgba(34, 139, 34, 0.7) 0%, rgba(101, 67, 33, 1) 70%)`
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/10"></div>
            </div>
            
            <div className="relative z-10">
              {/* Logo and company name */}
              <div className="flex items-center mb-12">
                <div className="text-2xl font-bold tracking-tight flex items-center">
                  <span className="text-amber-600 mr-2">PULPWOOD</span> PRODUCTS
                </div>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg text-white/80 mb-8">
                Looking for sustainable tissue and hygiene solutions? Reach out to Pulpwood for eco-friendly products and partnership opportunities.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  { icon: Mail, title: 'Email Us', content: 'info@pulpwood.in', href: 'mailto:info@pulpwood.in' },
                  { icon: Phone, title: 'Call Us', content: '+91 98765 43210', href: 'tel:+919876543210' },
                  { icon: MapPin, title: 'Visit Us', content: 'Pulpwood, 123 Green Avenue, Bengaluru, Karnataka, India', href: 'https://maps.google.com/?q=Pulpwood,123 Green Avenue,Bengaluru' },
                  { icon: Clock, title: 'Business Hours', content: 'Monday – Saturday: 9 AM - 6 PM', href: null },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 bg-white/10 rounded-full">
                      <item.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{item.title}</h3>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-white/70 hover:text-amber-400 transition-colors"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-white/70">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Social Media Links */}
              <div className="flex space-x-4 mt-auto">
                {[
                  { icon: Facebook, href: 'https://facebook.com/pulpwoodindia' },
                  { icon: Twitter, href: 'https://twitter.com/pulpwoodindia' },
                  { icon: Instagram, href: 'https://instagram.com/pulpwoodindia' },
                  { icon: Youtube, href: 'https://youtube.com/@pulpwoodindia' },
                 
                ].map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="p-2 bg-white/10 rounded-full hover:bg-amber-400/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-3/5 bg-white p-8 md:p-12"
          >
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-bold text-forest-green mb-2">Let's create a greener future</h2>
              <h3 className="text-3xl font-bold text-earth-brown mb-6">with Pulpwood</h3>
              <p className="text-gray-600 mb-8">
                Share your requirements, and our team will help you choose the best eco-friendly products for your needs.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md py-3"
                  />
                  
                  <Input 
                    id="mobile" 
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Your mobile number" 
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md py-3"
                  />
                  
                  <Input 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="Your email (optional)" 
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md py-3"
                  />
                  
                  <div className="relative">
                    <Textarea 
                      id="project" 
                      value={formData.project}
                      onChange={handleChange}
                      placeholder="Tell us about your project" 
                      className="min-h-[120px] border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md"
                    />
                    <div className="absolute top-3 right-3 text-red-500">*</div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-forest-green to-earth-brown hover:from-forest-green/90 hover:to-earth-brown/90 text-white py-3 rounded-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Inquiry
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Map Section */}
      
       <section id="map" className="w-full max-w-7xl py-16 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-forest-green mb-4">Our India Office</h2>
          <p className="text-earth-brown text-xl max-w-3xl mx-auto">
            Visit our headquarters to discuss sustainable solutions for tissue and hygiene products.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[500px] relative w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248797.4788014521!2d77.1627330780029!3d13.006313954787547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3b8fe92aa263%3A0x9f0a4c14af1723fc!2sPulp%20Wood%20Tissue%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1746689086332!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pulpwood India Location"
              className="filter grayscale"
            ></iframe>
          </motion.div>

          <motion.div
            className="md:absolute relative top-8 left-8 bg-slate-900/90 backdrop-blur-md p-8 rounded-xl border border-white/10 max-w-md mt-4 md:mt-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Pulpwood Headquarters</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-earth-brown mt-1" />
                <div>
                  <p className="text-white">123 Green Avenue</p>
                  <p className="text-white">Bengaluru, Karnataka 560001, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-earth-brown mt-1" />
                <a href='tel:+919876543210' className="text-white">+91 98765 43210</a>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-earth-brown mt-1" />
                <p className="text-white">info@pulpwood.in</p>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-earth-brown mt-1" />
                <div>
                  <p className="text-white">Monday – Saturday: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
            <motion.a
              href="https://maps.google.com/?q=Pulpwood,123 Green Avenue,Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-gradient-to-r from-forest-green to-earth-brown text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:opacity-90 transition-all w-full justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Directions</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-forest-green">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Find quick answers to common questions about our eco-friendly tissue and hygiene products.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What makes Pulpwood's tissue products eco-friendly?",
                answer: "Our products are made from responsibly sourced pulp, are biodegradable, and manufactured using environmentally conscious processes."
              },
              {
                question: "Do you offer bulk or B2B supply for hotels, offices, or institutions?",
                answer: "Yes, we specialize in supplying eco-friendly tissue and hygiene products in bulk for businesses, hotels, offices, and institutions. Contact us for tailored solutions."
              },
              {
                question: "Are Pulpwood products safe for sensitive skin?",
                answer: "Absolutely. Our products are dermatologically tested and free from harsh chemicals, making them safe for all skin types."
              },
              {
                question: "How can I become a distributor or partner with Pulpwood?",
                answer: "Simply fill out our contact form or call us. Our team will reach out to discuss partnership opportunities and next steps."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-forest-green"
              >
                <h3 className="text-lg font-bold mb-2 text-forest-green">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}