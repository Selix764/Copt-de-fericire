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
    { name: t("story.header"), href: "#about" },
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
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent"
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-chalk-white font-poppins font-bold text-xl lg:text-2xl hover:text-burst-yellow transition-colors duration-300 tracking-wider drop-shadow-lg"
          >
            COPT DE FERICIRE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-burst-yellow/20 hover:bg-burst-yellow text-chalk-white hover:text-chalkboard px-6 py-3 rounded-xl font-body font-medium text-base uppercase tracking-wider drop-shadow-md transition-all duration-300 backdrop-blur-sm border border-chalk-white/20 hover:border-burst-yellow"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="tel:+40721234567"
              className="flex items-center text-chalk-white hover:text-burst-yellow transition-colors duration-300 font-medium drop-shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-body">{t("contact.phone")}</span>
            </Link>
            <Link
              href="#contact"
              className="bg-burst-yellow hover:bg-gold-accent text-chalkboard px-6 py-3 rounded-full font-poppins font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("contact.reserveTable")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-chalk-white p-2 rounded-lg hover:bg-chalk-white/10 hover:text-burst-yellow transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-chalkboard/95 backdrop-blur-md rounded-lg mx-4 mb-4 py-4 shadow-xl border border-chalk-white/20">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-chalk-white hover:text-burst-yellow transition-colors duration-300 font-body font-medium px-6 py-2 text-center uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 px-6 pt-4 border-t border-chalk-white/20">
                <Link
                  href="tel:+40721234567"
                  className="flex items-center justify-center text-chalk-white hover:text-burst-yellow transition-colors duration-300 font-medium py-2"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-body">{t("contact.phone")}</span>
                </Link>
                <Link
                  href="#contact"
                  className="bg-burst-yellow hover:bg-gold-accent text-chalkboard py-3 px-6 rounded-full font-poppins font-semibold text-sm text-center uppercase tracking-wider transition-all duration-300"
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
