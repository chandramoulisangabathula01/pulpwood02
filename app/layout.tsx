import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap'
})

import LenisProvider from '@/components/lenis-provider'
import { SmoothCursor } from '@/components/ui/smootCursor'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        {/* You can add metadata, title, or other head elements here */}
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>
        <LenisProvider>
        {/* <SmoothCursor /> */}
          <Header />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
