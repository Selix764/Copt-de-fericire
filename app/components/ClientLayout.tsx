"use client"

import type React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
} 