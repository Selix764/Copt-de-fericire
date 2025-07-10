"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  const navigation = [
    { name: t("story.header"), href: "#story" },
    { name: t("menu.header"), href: "#menu" },
    { name: t("contact.header"), href: "#contact" },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-cream/95 backdrop-blur-md shadow-lg border-b border-warmGray" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-charcoal font-heading font-bold text-xl lg:text-2xl hover:text-terracotta transition-colors duration-300 tracking-wider"
          >
            COPT DE FERICIRE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-charcoal hover:text-terracotta transition-colors duration-300 font-open-sans font-medium text-base uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="tel:+40721234567"
              className="flex items-center text-charcoal hover:text-terracotta transition-colors duration-300 font-medium"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-open-sans">{t("contact.phone")}</span>
            </Link>
            <Link
              href="#contact"
              className="bg-terracotta hover:bg-terracotta-600 text-cream px-6 py-3 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("contact.reserveTable")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-charcoal p-2 rounded-lg hover:bg-warmGray hover:text-terracotta transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-cream/95 backdrop-blur-md rounded-lg mx-4 mb-4 py-4 shadow-xl border border-warmGray">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-charcoal hover:text-terracotta transition-colors duration-300 font-open-sans font-medium px-6 py-2 text-center uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 px-6 pt-4 border-t border-warmGray">
                <Link
                  href="tel:+40721234567"
                  className="flex items-center justify-center text-charcoal hover:text-terracotta transition-colors duration-300 font-medium py-2"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-open-sans">{t("contact.phone")}</span>
                </Link>
                <Link
                  href="#contact"
                  className="bg-terracotta hover:bg-terracotta-600 text-cream py-3 px-6 rounded-lg font-heading font-semibold text-sm text-center uppercase tracking-wider transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("contact.reserveTable")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
