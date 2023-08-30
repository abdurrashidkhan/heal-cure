import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Heal Cure',
  description: "Welcome to our healing and curing medicine seller website. Here, we offer a wide range of remedies and treatments to promote health and wellness. Explore our selection of medicines designed to heal and cure various ailments, all conveniently available on our user-friendly platform. Trust in our quality products to support your journey towards a healthier life.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
