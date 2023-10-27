import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Contact from "./components/Contact/Contact";
import Footer from './containers/Footer/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chowville',
  description: 'Online ordering system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
          <HowItWorks />
          <Contact />
          <Footer />
      </body>
    </html>
  )
}
