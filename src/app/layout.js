import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wasilewski Holdings',
  description: 'Investment and project portfolio of Wasilewski Holdings',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-white min-h-screen`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 