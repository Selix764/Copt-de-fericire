"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone, MapPin, Clock, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-md shadow-xl" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-white font-bold text-2xl lg:text-3xl hover:text-red-500 transition-colors duration-300"
          >
            HotBite
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-red-500 transition-colors duration-300 font-medium text-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="tel:+15551234567"
              className="flex items-center text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">(555) 123-4567</span>
            </Link>
            <Link
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              BOOK TABLE
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-md rounded-lg mx-4 mb-4 py-4 shadow-xl">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-red-500 transition-colors duration-300 font-medium px-6 py-2 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 px-6 pt-4 border-t border-gray-700">
                <Link
                  href="tel:+15551234567"
                  className="flex items-center justify-center text-white hover:text-red-400 transition-colors duration-300 font-medium py-2"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </Link>
                <Link
                  href="#contact"
                  className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-bold text-center transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BOOK TABLE
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
