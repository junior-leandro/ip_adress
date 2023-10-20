import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Home from './page'
import { Footer } from './components/Footer'


const rubik = Rubik ({ 
  subsets: ['latin'],
weight: ['400', '500', '700'] 
})



export const metadata: Metadata = {
  title: 'Chalenge IP Address Tracker | Frontend Mentor',
  description: 'Frontend Mentor Chalenges',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col w-screen h-full">
        <Home />
        <Footer />
      </body>
    </html>
  )
}
