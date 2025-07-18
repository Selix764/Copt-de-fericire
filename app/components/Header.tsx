"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Globe } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, language, toggleLanguage } = useLanguage()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-chalkboard/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="navbar-logo-container hover:scale-105 transition-all duration-300 flex items-center"
            >
              <Image
                src="/placeholder-logo.png"
                alt="Copt de Fericire Logo"
                width={140}
                height={70}
                className="navbar-logo-image w-auto h-16 md:h-20 lg:h-24"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-brush-orange/20 hover:bg-brush-orange text-chalk-white hover:text-chalkboard px-6 py-3 rounded-xl font-body font-medium text-base uppercase tracking-wider drop-shadow-md transition-all duration-300 backdrop-blur-sm border border-chalk-white/20 hover:border-brush-orange"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="bg-brush-orange/20 hover:bg-brush-orange text-chalk-white hover:text-chalkboard px-6 py-3 rounded-xl font-body font-medium text-base uppercase tracking-wider drop-shadow-md transition-all duration-300 backdrop-blur-sm border border-chalk-white/20 hover:border-brush-orange"
            >
              {language === 'en' ? 'RO' : 'EN'}
            </button>
            
            <Link
              href="tel:+40721234567"
              className="flex items-center text-chalk-white hover:text-brush-orange transition-colors duration-300 font-medium drop-shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-body">{t("contact.phone")}</span>
            </Link>
          </div>

          {/* Mobile Menu Button - Moved to right */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-chalk-white hover:text-brush-orange p-2 rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-chalkboard/95 backdrop-blur-md border-t border-chalk-white/20">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-chalk-white hover:text-brush-orange px-4 py-3 text-base font-body transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Toggle and Phone */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-chalk-white/20 mt-4">
                <button
                  onClick={toggleLanguage}
                  className="text-chalk-white hover:text-brush-orange font-body transition-colors duration-300"
                >
                  {language === 'en' ? 'RO' : 'EN'}
                </button>
                <Link
                  href="tel:+40721234567"
                  className="flex items-center text-chalk-white hover:text-brush-orange transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm font-body">{t("contact.phone")}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      </header>
    )
  }
