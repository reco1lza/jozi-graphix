import './globals.css'

export const metadata = {
  metadataBase: new URL('https://jozi-graphix.vercel.app'),
  title: 'Jozi Graphix — Print Bold. Stand Out.',
  description: "Johannesburg's premier printing partner. Banners, signage, branded merch, and more.",
  keywords: ['printing Johannesburg', 'signage', 'large format printing', 'banners', 'branded merch', 'vinyl', 'Jozi Graphix'],
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Jozi Graphix — Print Bold. Stand Out.',
    description: "Johannesburg's premier printing partner. Banners, signage, branded merch, and more.",
    url: 'https://jozi-graphix.vercel.app',
    siteName: 'Jozi Graphix',
    images: [{ url: '/logo-white.png', width: 2000, height: 863, alt: 'Jozi Graphix' }],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jozi Graphix — Print Bold. Stand Out.',
    description: "Johannesburg's premier printing partner. Banners, signage, branded merch, and more.",
    images: ['/logo-white.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
