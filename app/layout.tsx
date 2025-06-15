import type { Metadata } from 'next'
import './globals.css'
import NavBar from "../components/NavBar"

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="transition-opacity duration-300">
        <NavBar />
        <div className="transition-all duration-300 ease-in-out">
          {children}
        </div>
      </body>
    </html>
  )
}
