import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
