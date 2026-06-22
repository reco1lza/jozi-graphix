import './globals.css'

export const metadata = {
  title: 'Jozi Graphix — Print Bold. Stand Out.',
  description: "Johannesburg's premier printing partner. Banners, signage, branded merch, and more.",
  icons: { icon: '/favicon.png' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
