import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans, Poppins, Permanent_Marker, Rock_Salt, Bangers } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "./contexts/LanguageContext"
import Header from "./components/Header"

// Main Title Font - Tall, clean geometric sans-serif (Romanian support)
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

// Body Copy Font - Simple, highly legible sans-serif (Romanian support)
const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-open-sans", 
  weight: ["400", "600"],
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

// Sub-title Font - Rounded, friendly sans-serif (Romanian support)
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

// Section Label Font - Playful hand-drawn/display (fallback for Romanian)
const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-permanent-marker",
  weight: ["400"],
  fallback: ['cursive', 'system-ui'],
})

// Banner Text Font - Brush-stroke script (fallback for Romanian)
const rockSalt = Rock_Salt({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rock-salt",
  weight: ["400"],
  fallback: ['Georgia', 'serif', 'system-ui'],
})

// Price Badge Font - Bold, comic/cartoon display (fallback for Romanian)
const bangers = Bangers({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bangers",
  weight: ["400"],
  fallback: ['Impact', 'Arial Black', 'sans-serif'],
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
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Improve Romanian character rendering */
            * {
              font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            
            /* Ensure proper Romanian character display */
            body {
              font-variant-ligatures: common-ligatures;
              font-kerning: normal;
            }
          `
        }} />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
