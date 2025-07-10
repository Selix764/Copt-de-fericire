"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "../contexts/LanguageContext"
import ScrollAnimatedSection from "../components/ScrollAnimatedSection"
import StaggeredScrollAnimation from "../components/StaggeredScrollAnimation"

export default function ContactPage() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[#e85a4f] mr-4 mt-1 animate-bounce-gentle" />,
      title: t("contact.info.headquarters"),
      content: "123 Marina Boulevard\nSan Francisco, CA 94105\nUnited States",
    },
    {
      icon: <Phone className="w-6 h-6 text-[#e85a4f] mr-4 mt-1 animate-bounce-gentle" />,
      title: t("contact.info.phone"),
      content: "(555) 123-PDDLE\n(555) 123-7335",
    },
    {
      icon: <Mail className="w-6 h-6 text-[#e85a4f] mr-4 mt-1 animate-bounce-gentle" />,
      title: t("contact.info.email"),
      content: "hello@pddle.com\nsupport@pddle.com",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#e85a4f] mr-4 mt-1 animate-spin-slow" />,
      title: t("contact.info.hours"),
      content: t("contact.info.schedule"),
    },
  ]

  const helpLinks = [
    t("contact.help.howToRent"),
    t("contact.help.lockerIssues"),
    t("contact.help.technical"),
    t("contact.help.partnership"),
  ]

  return (
    <div className="min-h-screen bg-[#faf2e1]">
      {/* Hero Section - Contact Specific */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: "url('/images/contact-hero.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container-custom">
          <div className="flex items-center justify-center h-full text-center">
            {/* Centered Content */}
            <div className="text-white max-w-6xl w-full animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-left">
                {t("contact.hero.title")} <span className="text-[#e85a4f] animate-glow">{t("contact.hero.help")}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed mx-auto max-w-3xl text-white/90 animate-slide-in-right animation-delay-300">
                {t("contact.hero.subtitle")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
                <Link
                  href="#contact-form"
                  className="bg-[#e85a4f] hover:bg-[#d4472f] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center animate-pulse-glow"
                >
                  {t("contact.hero.sendMessage")}
                </Link>
                <Link
                  href="tel:+15551237335"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center hover:animate-shake"
                >
                  {t("contact.hero.callNow")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-pulse">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce animation-delay-500"></div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <div className="container-custom py-12 scroll-mt-24" id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollAnimatedSection animation="slideLeft">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">{t("contact.form.title")}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("contact.form.firstName")}
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#e85a4f] focus:border-[#e85a4f] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("contact.form.lastName")}
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#e85a4f] focus:border-[#e85a4f] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t("contact.form.email")}</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#e85a4f] focus:border-[#e85a4f] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t("contact.form.phone")}</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#e85a4f] focus:border-[#e85a4f] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t("contact.form.subject")}</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#e85a4f] focus:border-[#e85a4f] transition-all duration-300">
                    <option>{t("contact.form.subjects.general")}</option>
                    <option>{t("contact.form.subjects.technical")}</option>
                    <option>{t("contact.form.subjects.partnership")}</option>
                    <option>{t("contact.form.subjects.locker")}</option>
                    <option>{t("contact.form.subjects.other")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t("contact.form.message")}</label>
                  <textarea
                    rows={6}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#e85a4f] focus:border-[#e85a4f] transition-all duration-300"
                    placeholder={t("contact.form.placeholder")}
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary animate-pulse-glow">
                  {t("contact.form.send")}
                </button>
              </form>
            </div>
          </ScrollAnimatedSection>

          {/* Contact Information */}
          <div className="space-y-8">
            <ScrollAnimatedSection animation="slideRight">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">{t("contact.info.title")}</h2>
                <StaggeredScrollAnimation animation="fadeIn" className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      {info.icon}
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </StaggeredScrollAnimation>
              </div>
            </ScrollAnimatedSection>

            {/* Map Placeholder */}
            <ScrollAnimatedSection animation="scaleIn">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2 animate-float" />
                    <p className="text-gray-500">{t("contact.map.title")}</p>
                    <p className="text-gray-400 text-sm">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>

            {/* FAQ Quick Links */}
            <ScrollAnimatedSection animation="slideUp">
              <div className="bg-[#e85a4f]/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-[#1e2a4a]">{t("contact.help.title")}</h3>
                <div className="space-y-3">
                  <p className="text-gray-600">{t("contact.help.subtitle")}</p>
                  <StaggeredScrollAnimation animation="slideLeft" className="space-y-2">
                    {helpLinks.map((link, index) => (
                      <div key={index}>
                        <a
                          href="#"
                          className="text-[#e85a4f] hover:text-[#d4472f] transition-colors hover:animate-wiggle"
                        >
                          {link}
                        </a>
                      </div>
                    ))}
                  </StaggeredScrollAnimation>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
