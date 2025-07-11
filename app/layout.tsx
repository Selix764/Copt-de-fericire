import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans, Poppins, Permanent_Marker, Rock_Salt, Bangers } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "./contexts/LanguageContext"
import Header from "./components/Header"

// Main Title Font - Tall, clean geometric sans-serif
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
})

// Body Copy Font - Simple, highly legible sans-serif
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "600"],
})

// Sub-title Font - Rounded, friendly sans-serif
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
})

// Section Label Font - Playful hand-drawn/display
const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-permanent-marker",
  weight: ["400"],
})

// Banner Text Font - Brush-stroke script
const rockSalt = Rock_Salt({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rock-salt",
  weight: ["400"],
})

// Price Badge Font - Bold, comic/cartoon display
const bangers = Bangers({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bangers",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Copt de Fericire - Authentic Romanian Restaurant",
  description: "Experience authentic Romanian culinary traditions in a warm and welcoming atmosphere. Traditional dishes prepared with passion and respect for recipes passed down through generations.",
}

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      {children}
    </LanguageProvider>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${poppins.variable} ${permanentMarker.variable} ${rockSalt.variable} ${bangers.variable}`}>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
