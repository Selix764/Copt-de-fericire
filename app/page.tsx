"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Star, Clock, MapPin, Phone, Mail, ChefHat, Users, Award, Heart, Facebook, Instagram, Twitter, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation, getAnimationClass } from "./hooks/useScrollAnimation"
import { useLanguage } from "./contexts/LanguageContext"

export default function HomePage() {
  const { t, language, toggleLanguage } = useLanguage()

  // Animation hooks for different sections
  const heroAnimation = useScrollAnimation(0.1)
  const aboutAnimation = useScrollAnimation(0.1)
  const productsAnimation = useScrollAnimation(0.1)
  const pdfAnimation = useScrollAnimation(0.1)
  const locationsAnimation = useScrollAnimation(0.1)
  const socialAnimation = useScrollAnimation(0.1)
  const contactAnimation = useScrollAnimation(0.1)

  // Products slider state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)

  // Products data
  const products = [
    {
      id: 'traditional',
      title: t("products.traditional.title"),
      description: t("products.traditional.description"),
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=1000",
      alt: "Traditional Romanian Dishes"
    },
    {
      id: 'grill',
      title: t("products.grill.title"),
      description: t("products.grill.description"),
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1000",
      alt: "Grilled Romanian Mici"
    },
    {
      id: 'desserts',
      title: t("products.desserts.title"),
      description: t("products.desserts.description"),
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1000",
      alt: "Romanian Desserts"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoSliding) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoSliding, products.length])

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
    setIsAutoSliding(false)
    setTimeout(() => setIsAutoSliding(true), 8000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
    setIsAutoSliding(false)
    setTimeout(() => setIsAutoSliding(true), 8000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoSliding(false)
    setTimeout(() => setIsAutoSliding(true), 8000)
  }

  // Menu data from the Romanian restaurant
  const menuCategories = [
    {
      title: t("menu.appetizers"),
      items: [
        {
          name: t("menu.items.salataBoef"),
          description: t("menu.descriptions.salataBoef"),
          price: "25"
        },
        {
          name: t("menu.items.papanasi"),
          description: t("menu.descriptions.papanasi"),
          price: "18"
        },
        {
          name: t("menu.items.mici"),
          description: t("menu.descriptions.mici"),
          price: "22"
        },
        {
          name: t("menu.items.sarmale"),
          description: t("menu.descriptions.sarmale"),
          price: "28"
        }
      ]
    },
    {
      title: t("menu.mainCourses"),
      items: [
        {
          name: t("menu.items.schnitzel"),
          description: t("menu.descriptions.schnitzel"),
          price: "35"
        },
        {
          name: t("menu.items.gulas"),
          description: t("menu.descriptions.gulas"),
          price: "32"
        },
        {
          name: t("menu.items.papricash"),
          description: t("menu.descriptions.papricash"),
          price: "30"
        },
        {
          name: t("menu.items.tochitura"),
          description: t("menu.descriptions.tochitura"),
          price: "38"
        }
      ]
    }
  ]

  const testimonials = [
    {
      name: "Maria Popescu",
      rating: 5,
      text: "Cea mai bună mâncare românească din oraș! Sarmalele sunt ca la mama acasă.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Alexandru Ionescu", 
      rating: 5,
      text: "Atmosfera caldă și mâncarea delicioasă. Recomand cu încredere!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Elena Radu",
      rating: 5,
      text: "Papanașii sunt excepționali! Un restaurant autentic românesc.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ]

  const locations = [
    {
      name: t("locations.central"),
      address: t("locations.centralAddress")
    },
    {
      name: t("locations.north"), 
      address: t("locations.northAddress")
    },
    {
      name: t("locations.oldCenter"),
      address: t("locations.oldCenterAddress")
    }
  ]

  const socialImages = [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop"
  ]

  return (
    <>
      {/* Language Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleLanguage}
          className="bg-terracotta text-cream px-4 py-2 rounded-2xl font-heading font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-terracotta-600 transition-colors duration-300"
        >
          {language === 'en' ? 'RO' : 'EN'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-cream overflow-hidden -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074')",
            }}
          />
          <div className="absolute inset-0 bg-cream/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <div ref={heroAnimation.ref} className={getAnimationClass(heroAnimation.isVisible, "fadeUp")}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-charcoal mb-6 leading-tight tracking-wider">
                {t("hero.title")}
                <span className="block text-terracotta">{t("hero.restaurant")}</span>
              </h1>
            </div>
            
            <div className={getAnimationClass(heroAnimation.isVisible, "fadeUp", 1)}>
              <p className="text-xl md:text-2xl text-charcoal/80 mb-8 leading-relaxed max-w-3xl font-open-sans">
                {t("hero.subtitle")}
              </p>
            </div>
            
            <div className={getAnimationClass(heroAnimation.isVisible, "fadeUp", 2)}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="#menu"
                  className="bg-terracotta hover:bg-terracotta-600 text-cream px-8 py-4 rounded-2xl font-heading font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center uppercase tracking-wider"
                >
                  {t("menu.viewFullMenu")}
                </Link>
                <Link
                  href="#contact"
                  className="bg-transparent border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-8 py-4 rounded-2xl font-heading font-bold text-lg transition-all duration-300 text-center uppercase tracking-wider"
                >
                  {t("contact.reserveTable")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-warmGray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={aboutAnimation.ref} className={getAnimationClass(aboutAnimation.isVisible, "fadeLeft")}>
              <p className="text-terracotta text-sm font-heading font-semibold mb-4 uppercase tracking-wider">{t("story.ourStory")}</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
                {t("story.header")}
              </h2>
              <p className="text-charcoal/80 text-lg mb-6 leading-relaxed font-open-sans">
                {t("story.paragraph1")}
              </p>
              <p className="text-charcoal/80 text-lg mb-8 leading-relaxed font-open-sans">
                {t("story.paragraph2")}
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 1)}>
                  <div className="text-center">
                    <div className="bg-terracotta rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110">
                      <Award className="w-8 h-8 text-cream" />
                    </div>
                    <h3 className="text-charcoal font-heading font-bold text-lg">{t("story.awardWinning")}</h3>
                    <p className="text-charcoal/60 text-sm font-open-sans">{t("story.awardDesc")}</p>
                  </div>
                </div>
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 2)}>
                  <div className="text-center">
                    <div className="bg-terracotta rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110">
                      <ChefHat className="w-8 h-8 text-cream" />
                    </div>
                    <h3 className="text-charcoal font-heading font-bold text-lg">{t("story.expertChefs")}</h3>
                    <p className="text-charcoal/60 text-sm font-open-sans">{t("story.expertDesc")}</p>
                  </div>
                </div>
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 3)}>
                  <div className="text-center">
                    <div className="bg-terracotta rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110">
                      <Heart className="w-8 h-8 text-cream" />
                    </div>
                    <h3 className="text-charcoal font-heading font-bold text-lg">{t("story.madeWithLove")}</h3>
                    <p className="text-charcoal/60 text-sm font-open-sans">{t("story.loveDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={getAnimationClass(aboutAnimation.isVisible, "fadeRight")}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070"
                  alt="Romanian Chef cooking"
                  className="rounded-2xl shadow-2xl w-full transition-transform hover:scale-105"
                  style={{ filter: 'drop-shadow(8px 8px 16px rgba(0,0,0,0.3))' }}
                />
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 1)}>
                  <div className="absolute -bottom-6 -left-6 bg-terracotta text-cream p-6 rounded-2xl shadow-xl transition-transform hover:scale-110">
                    <div className="text-center">
                      <div className="text-3xl font-heading font-bold">15+</div>
                      <div className="text-sm font-open-sans">{t("story.yearsExperience")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Slider */}
      <section 
        className="py-20 bg-charcoal relative overflow-hidden"
        onMouseEnter={() => setIsAutoSliding(false)}
        onMouseLeave={() => setIsAutoSliding(true)}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={productsAnimation.ref} className={getAnimationClass(productsAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-16">
              <p className="text-terracotta text-sm font-heading font-semibold mb-4 uppercase tracking-wider">{t("products.header")}</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-cream mb-6 leading-tight">
                {t("products.title")}
              </h2>
              <p className="text-cream/80 text-xl max-w-3xl mx-auto font-open-sans">
                {t("products.subtitle")}
              </p>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Slides */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className="w-full flex-shrink-0 relative group"
                  >
                    {/* Background Image */}
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center max-w-4xl px-8">
                        <div className={getAnimationClass(productsAnimation.isVisible, "fadeUp", index + 1)}>
                          <h3 className="text-4xl md:text-6xl font-heading font-bold text-cream mb-6 leading-tight">
                            {product.title}
                          </h3>
                          <p className="text-cream/90 text-xl md:text-2xl font-open-sans leading-relaxed max-w-2xl mx-auto">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute top-8 right-8">
                      <div className="bg-terracotta/20 backdrop-blur-sm text-cream w-16 h-16 rounded-full flex items-center justify-center border-2 border-terracotta">
                        <span className="text-2xl font-heading font-bold">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-terracotta/90 hover:bg-terracotta text-cream w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-terracotta/90 hover:bg-terracotta text-cream w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-terracotta scale-125'
                      : 'bg-cream/50 hover:bg-cream/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-cream/20">
              <div
                className="h-full bg-terracotta transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / products.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {products.map((product, index) => (
              <div
                key={`info-${product.id}`}
                className={`bg-cream/10 backdrop-blur-sm rounded-2xl p-6 border border-cream/20 hover:bg-cream/20 transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? 'ring-2 ring-terracotta' : ''
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-cream font-heading font-bold text-lg">{product.title}</h4>
                  <div className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-terracotta' : 'bg-cream/50'
                  }`} />
                </div>
                <p className="text-cream/70 text-sm font-open-sans">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Menu Section */}
      <section id="choice" className="py-20 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={pdfAnimation.ref} className={getAnimationClass(pdfAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-12">
              <p className="text-terracotta text-sm font-heading font-semibold mb-4 uppercase tracking-wider">{t("menu.header")}</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
                {t("menu.subtitle")}
              </h2>
              <p className="text-charcoal/80 text-xl max-w-3xl mx-auto font-open-sans">
                {t("menu.description")}
              </p>
            </div>
          </div>

          {/* Sample Menu Items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className={getAnimationClass(pdfAnimation.isVisible, "fadeUp", categoryIndex + 1)}>
                <div className="bg-warmGray/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-8 text-center border-b-2 border-terracotta pb-4">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-lg font-heading font-semibold text-charcoal mb-2">{item.name}</h4>
                          <p className="text-charcoal/70 text-sm font-open-sans leading-relaxed">{item.description}</p>
                        </div>
                        <div className="ml-6 text-right">
                          <span className="text-xl font-heading font-bold text-terracotta">{item.price} {t("currency")}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PDF Viewer */}
          <div className={getAnimationClass(pdfAnimation.isVisible, "scale", 1)}>
            <div className="w-full max-w-7xl mx-auto">
              <div className="bg-warmGray/30 rounded-2xl p-2 sm:p-4 shadow-2xl">
                <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-cream">
                  <iframe
                    src="/api/menu-pdf"
                    className="w-full h-full rounded-2xl border-2 border-warmGray"
                    title="Restaurant Menu PDF"
                    style={{
                      minHeight: '400px',
                      background: '#F6F2EC'
                    }}
                  />
                </div>
                
                <div className="text-center mt-4 text-charcoal/70">
                  <p className="text-sm font-open-sans">
                    {t("menu.troubleViewing")}
                    <a 
                      href="/api/menu-pdf" 
                      className="text-terracotta hover:text-terracotta-600 underline ml-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("menu.openDirectly")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile download button */}
          <div className={getAnimationClass(pdfAnimation.isVisible, "fadeUp", 2)}>
            <div className="text-center mt-6 sm:hidden">
              <a 
                href="/api/menu-pdf" 
                className="inline-flex items-center bg-terracotta hover:bg-terracotta-600 text-cream px-6 py-3 rounded-2xl font-heading font-semibold transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t("menu.downloadMenu")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-warmGray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Map Side */}
            <div ref={locationsAnimation.ref} className={getAnimationClass(locationsAnimation.isVisible, "fadeLeft")}>
              <div className="relative">
                {/* Romania Map Outline */}
                <div className="w-full h-96 flex items-center justify-center">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Romania country outline */}
                    <path
                      d="M80 120 L90 100 L120 95 L150 90 L180 95 L210 100 L240 110 L270 115 L300 120 L320 140 L325 160 L330 180 L325 200 L320 220 L300 240 L280 250 L250 255 L220 250 L190 245 L160 240 L130 235 L100 220 L85 200 L80 180 L75 160 L80 140 Z"
                      fill="none"
                      stroke="#3A2D2D"
                      strokeWidth="2"
                    />
                    {/* Location pin for Bucharest */}
                    <circle cx="200" cy="160" r="8" fill="#C36B51" stroke="#3A2D2D" strokeWidth="2" />
                    <circle cx="200" cy="160" r="4" fill="#F6F2EC" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={getAnimationClass(locationsAnimation.isVisible, "fadeRight")}>
              <div className="text-charcoal">
                <p className="text-terracotta text-sm font-heading font-semibold mb-4 uppercase tracking-wide">{t("locations.header")}</p>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                  {t("locations.subtitle")}
                </h2>
                
                <button className="bg-terracotta hover:bg-terracotta-600 text-cream px-8 py-3 rounded-2xl font-heading font-bold text-sm uppercase tracking-wide transition-all duration-300 mb-12 flex items-center">
                  {t("locations.getDirections")}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="space-y-8">
                  {locations.map((location, index) => (
                    <div key={index} className={getAnimationClass(locationsAnimation.isVisible, "fadeUp", index + 1)}>
                      <h3 className="text-xl font-heading font-bold text-charcoal mb-2">{location.name}</h3>
                      <p className="text-charcoal/70 font-open-sans">{location.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="py-20 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={socialAnimation.ref} className={getAnimationClass(socialAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-16">
              <p className="text-terracotta text-sm font-heading font-semibold mb-4 uppercase tracking-wide">{t("social.header")}</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
                {t("social.title")}
              </h2>
              <p className="text-charcoal/80 text-xl max-w-3xl mx-auto font-open-sans">
                {t("social.description")}
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className={getAnimationClass(socialAnimation.isVisible, "fadeUp", 1)}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {socialImages.map((image, index) => (
                <div key={index} className={`${getAnimationClass(socialAnimation.isVisible, "scale", index + 1)} overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                  <img 
                    src={image} 
                    alt={`Social media post ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className={getAnimationClass(socialAnimation.isVisible, "fadeUp", 2)}>
            <div className="text-center mt-12">
              <div className="flex justify-center space-x-6">
                <div className="bg-terracotta hover:bg-terracotta-600 text-cream w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </div>
                <div className="bg-terracotta hover:bg-terracotta-600 text-cream w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="bg-terracotta hover:bg-terracotta-600 text-cream w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20 relative"
        style={{
          backgroundImage: "url('/images/red-ornate-background.jpg'), linear-gradient(135deg, #C36B51 0%, #B85A47 25%, #A54A3B 50%, #943C31 75%, #832E27 100%)",
          backgroundSize: 'cover, 100% 100%',
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat, no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-charcoal/40"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div ref={contactAnimation.ref} className={getAnimationClass(contactAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-16">
              <p className="text-cream/80 text-sm font-heading font-semibold mb-4 uppercase tracking-wide">{t("contact.header")}</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-cream mb-6">
                {t("contact.header")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className={getAnimationClass(contactAnimation.isVisible, "fadeLeft", 1)}>
              <div className="relative">
                {/* Decorative Romanian Element */}
                <div className="absolute -top-8 -left-8 opacity-80">
                  <div className="w-24 h-24 bg-gradient-to-br from-terracotta to-terracotta-600 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center">
                      <ChefHat className="w-8 h-8 text-terracotta" />
                    </div>
                  </div>
                </div>

                <div className="bg-cream/20 backdrop-blur-sm rounded-2xl p-8 ml-8">
                  <h3 className="text-2xl font-heading font-bold text-cream mb-8">{t("contact.restaurantDetails")}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-cream mb-2">COPT DE FERICIRE</h4>
                      <p className="text-cream/80 font-open-sans italic">{t("footer.tagline")}</p>
                    </div>
                    
                    <div className="flex items-start text-cream">
                      <MapPin className="w-5 h-5 mr-3 mt-1 text-cream/80" />
                      <div>
                        <h5 className="font-heading font-semibold mb-1">{t("contact.addressTitle")}</h5>
                        <p className="font-open-sans whitespace-pre-line">{t("contact.address")}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start text-cream">
                      <Phone className="w-5 h-5 mr-3 mt-1 text-cream/80" />
                      <div>
                        <h5 className="font-heading font-semibold mb-1">{t("contact.phoneTitle")}</h5>
                        <p className="font-open-sans">{t("contact.phone")}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start text-cream">
                      <Clock className="w-5 h-5 mr-3 mt-1 text-cream/80" />
                      <div>
                        <h5 className="font-heading font-semibold mb-1">{t("contact.hoursTitle")}</h5>
                        <p className="font-open-sans whitespace-pre-line">{t("contact.hours")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={getAnimationClass(contactAnimation.isVisible, "fadeRight", 1)}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream text-sm font-heading font-medium mb-2">{t("contact.firstName")}</label>
                    <input
                      type="text"
                      placeholder="Alexandru"
                      className="w-full bg-cream/20 backdrop-blur-sm text-cream placeholder-cream/60 px-4 py-3 rounded-2xl border border-cream/30 focus:outline-none focus:ring-2 focus:ring-cream focus:border-transparent font-open-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-cream text-sm font-heading font-medium mb-2">{t("contact.lastName")}</label>
                    <input
                      type="text"
                      placeholder="Popescu"
                      className="w-full bg-cream/20 backdrop-blur-sm text-cream placeholder-cream/60 px-4 py-3 rounded-2xl border border-cream/30 focus:outline-none focus:ring-2 focus:ring-cream focus:border-transparent font-open-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream text-sm font-heading font-medium mb-2">{t("contact.email")}</label>
                    <input
                      type="email"
                      placeholder="alexandru@example.com"
                      className="w-full bg-cream/20 backdrop-blur-sm text-cream placeholder-cream/60 px-4 py-3 rounded-2xl border border-cream/30 focus:outline-none focus:ring-2 focus:ring-cream focus:border-transparent font-open-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-cream text-sm font-heading font-medium mb-2">{t("contact.phoneNumber")}</label>
                    <div className="flex">
                      <div className="flex items-center bg-cream/20 backdrop-blur-sm px-3 py-3 rounded-l-2xl border border-cream/30 border-r-0">
                        <span className="text-xs mr-2">🇷🇴</span>
                        <span className="text-cream text-sm">▼</span>
                      </div>
                      <input
                        type="tel"
                        placeholder="+40 721 234 567"
                        className="flex-1 bg-cream/20 backdrop-blur-sm text-cream placeholder-cream/60 px-4 py-3 rounded-r-2xl border border-cream/30 focus:outline-none focus:ring-2 focus:ring-cream focus:border-transparent font-open-sans"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-cream text-sm font-heading font-medium mb-2">{t("contact.message")}</label>
                  <textarea
                    rows={6}
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full bg-cream/20 backdrop-blur-sm text-cream placeholder-cream/60 px-4 py-3 rounded-2xl border border-cream/30 focus:outline-none focus:ring-2 focus:ring-cream focus:border-transparent resize-none font-open-sans"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cream text-terracotta py-4 rounded-2xl font-heading font-bold text-lg hover:bg-cream/90 transition-colors duration-300 uppercase tracking-wider"
                >
                  {t("contact.sendMessage")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-charcoal py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold text-terracotta mb-2">COPT DE FERICIRE®</h3>
                <div className="flex items-center text-cream mb-4">
                  <span className="text-2xl mr-2">🍽️</span>
                  <span className="font-open-sans font-medium">{t("footer.tagline")}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-cream/60 text-sm font-open-sans mb-4">{t("footer.followUs")}</p>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-warmGray rounded-full flex items-center justify-center hover:bg-terracotta transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-warmGray rounded-full flex items-center justify-center hover:bg-terracotta transition-colors cursor-pointer">
                    <Facebook className="w-4 h-4 text-charcoal" />
                  </div>
                  <div className="w-8 h-8 bg-warmGray rounded-full flex items-center justify-center hover:bg-terracotta transition-colors cursor-pointer">
                    <Instagram className="w-4 h-4 text-charcoal" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pages Column */}
            <div>
              <h4 className="text-cream font-heading font-semibold mb-4">{t("footer.pages")}</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-cream/70 hover:text-cream transition-colors font-open-sans">{t("footer.about")}</a></li>
                <li><a href="#choice" className="text-cream/70 hover:text-cream transition-colors font-open-sans">{t("footer.menu")}</a></li>
                <li><a href="#locations" className="text-cream/70 hover:text-cream transition-colors font-open-sans">{t("footer.locations")}</a></li>
                <li><a href="#contact" className="text-cream/70 hover:text-cream transition-colors font-open-sans">{t("footer.contact")}</a></li>
              </ul>
            </div>

            {/* Menu Column */}
            <div>
              <h4 className="text-cream font-heading font-semibold mb-4">{t("footer.specialties")}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-open-sans">{t("menu.items.sarmale")}</a></li>
                <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-open-sans">{t("menu.items.mici")}</a></li>
                <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-open-sans">{t("menu.items.papanasi")}</a></li>
                <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-open-sans">{t("menu.items.cozonac")}</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h4 className="text-cream font-heading font-semibold mb-4">{t("footer.newsletter")}</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t("footer.enterEmail")}
                  className="flex-1 bg-warmGray text-charcoal px-4 py-3 rounded-l-2xl border border-warmGray focus:outline-none focus:border-terracotta font-open-sans"
                />
                <button className="bg-terracotta hover:bg-terracotta-600 text-cream px-6 py-3 rounded-r-2xl font-heading font-semibold transition-colors flex items-center">
                  {t("footer.subscribe")}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-warmGray pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-cream/60 text-sm font-open-sans mb-4 md:mb-0">
              © 2024 Copt de Fericire. {t("footer.rights")}
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-cream/60 hover:text-cream text-sm font-open-sans transition-colors">{t("footer.privacyPolicy")}</a>
              <a href="#" className="text-cream/60 hover:text-cream text-sm font-open-sans transition-colors">{t("footer.terms")}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
