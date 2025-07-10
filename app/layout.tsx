import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import ClientLayout from "./components/ClientLayout"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "HotBite Restaurant - Taste the Perfect Bite",
  description:
    "Experience culinary excellence with our chef-crafted dishes made from the finest ingredients. Every bite tells a story of passion and flavor.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-gray-900 text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
