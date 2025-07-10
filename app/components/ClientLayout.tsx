"use client"

import type React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { LanguageProvider } from "../contexts/LanguageContext"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  )
} 