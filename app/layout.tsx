import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Nav from './components/Nav'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Responsive Design',
  description: 'A responsive Navigation Menu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
