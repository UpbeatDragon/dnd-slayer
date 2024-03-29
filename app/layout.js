import { Inter } from 'next/font/google'
import './globals.css'
import TitleBar from './components/title-bar/title-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DnD Behind',
  description: 'A website for all your DnD needs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TitleBar></TitleBar>
        <div className="container mx-auto sm:px-6 lg:px-8">{children}</div>
      </body>
    </html>
  )
}
