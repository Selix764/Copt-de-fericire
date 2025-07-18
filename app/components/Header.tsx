"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Home, Utensils, MessageCircle, Globe } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, language, toggleLanguage } = useLanguage()

  const navigation = [
    { name: t("story.header"), href: "#about", icon: Home },
    { name: t("menu.header"), href: "#menu", icon: Utensils },
    { name: t("contact.header"), href: "#contact", icon: MessageCircle },
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
        <div className="flex items-center py-2">
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

          {/* CTA Buttons */}
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

          {/* Mobile - Language Toggle and Phone */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="text-chalk-white hover:text-brush-orange p-2 rounded-lg transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <Link
              href="tel:+40721234567"
              className="text-chalk-white hover:text-brush-orange p-2 rounded-lg transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Call restaurant"
            >
              <Phone className="w-5 h-5" />
            </Link>
          </div>
        </div>
              </nav>

        {/* Mobile Bottom Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-chalkboard/95 backdrop-blur-md border-t border-chalk-white/20">
          <div className="flex items-center justify-around py-2 px-4">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center justify-center text-chalk-white/70 hover:text-brush-orange transition-colors duration-300 min-h-[60px] min-w-[60px] group"
                >
                  <IconComponent className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-body font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>
    )
  }
