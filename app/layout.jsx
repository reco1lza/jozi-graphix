import { Permanent_Marker, Inter } from 'next/font/google'
import './globals.css'

const marker = Permanent_Marker({ weight: '400', subsets: ['latin'], variable: '--font-marker' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Jozi Graphix — Print Bold. Stand Out.',
  description: "Johannesburg's premier printing partner. Banners, signage, branded merch, and more.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${marker.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
