"use client"

import Link from "next/link"
import { Star, Clock, MapPin, Phone, Mail, ChefHat, Users, Award, Heart, Facebook, Instagram, Twitter } from "lucide-react"
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

  // Most Popular Menu Items
  const products = [
    {
      id: 'cheesecake',
      title: t("products.cheesecake.title"),
      description: t("products.cheesecake.description"),
      image: "/images/cheesecake-popular.jpg",
      alt: "Homemade Cheesecake"
    },
    {
      id: 'meatyPotato',
      title: t("products.meatyPotato.title"),
      description: t("products.meatyPotato.description"),
      image: "/images/baked-potato-chicken-popular.jpg",
      alt: "Baked Potato with Chicken"
    },
    {
      id: 'veganPotato',
      title: t("products.veganPotato.title"),
      description: t("products.veganPotato.description"),
      image: "/images/baked-potato-tofu-popular.jpg",
      alt: "Baked Potato with Tofu"
    }
  ]

  // No menu categories - removed desserts section

  const testimonials = [
    {
      name: "Maria Popescu",
      rating: 5,
      text: "Cea mai bună mâncare românească din oraș! Sarmalele sunt ca la mama acasă.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      isRomanian: true
    },
    {
      name: "Alexandru Ionescu", 
      rating: 5,
      text: "Atmosfera caldă și mâncarea delicioasă. Recomand cu încredere!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      isRomanian: true
    },
    {
      name: "Elena Radu",
      rating: 5,
      text: "Papanașii sunt excepționali! Un restaurant autentic românesc.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      isRomanian: true
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
          className="bg-burst-yellow text-chalkboard px-4 py-2 rounded-2xl font-poppins font-bold text-sm uppercase tracking-wider shadow-lg hover:bg-gold-accent transition-colors duration-300"
        >
          {language === 'en' ? 'RO' : 'EN'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-chalkboard overflow-hidden -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074')",
            }}
          />
          <div className="absolute inset-0 bg-chalkboard/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <div ref={heroAnimation.ref} className={getAnimationClass(heroAnimation.isVisible, "fadeUp")}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-chalk-white mb-6 leading-tight tracking-wider">
                <span className="font-poppins font-semibold text-brush-orange">{t("hero.restaurant")}</span>
                <span className="block font-poppins font-semibold">COPT DE FERICIRE</span>
              </h1>
            </div>
            
            <div className={getAnimationClass(heroAnimation.isVisible, "fadeUp", 1)}>
              <p className="text-xl md:text-2xl text-chalk-white/80 mb-8 leading-relaxed max-w-3xl font-romanian">
                {t("hero.subtitle")}
              </p>
            </div>
            
            <div className={getAnimationClass(heroAnimation.isVisible, "fadeUp", 2)}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="#menu"
                  className="bg-burst-yellow hover:bg-gold-accent text-chalkboard px-8 py-4 rounded-2xl font-poppins font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center uppercase tracking-wider"
                >
                  {t("menu.viewFullMenu")}
                </Link>
                <Link
                  href="#contact"
                  className="bg-transparent border-2 border-chalk-white text-chalk-white hover:bg-chalk-white hover:text-chalkboard px-8 py-4 rounded-full font-poppins font-bold text-lg transition-all duration-300 text-center uppercase tracking-wider"
                >
                  {t("contact.reserveTable")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-chalkboard">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={aboutAnimation.ref} className={getAnimationClass(aboutAnimation.isVisible, "fadeLeft")}>
              <div className="inline-flex items-center mb-6">
                <div className="w-16 h-px bg-brush-orange mr-4"></div>
                <span className="text-brush-orange text-sm font-romanian font-bold uppercase tracking-[0.2em]">
                  {t("story.ourStory")}
                </span>
                <div className="w-16 h-px bg-brush-orange ml-4"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-chalk-white mb-6">
                {t("story.header")}
              </h2>
              <p className="text-chalk-white/80 text-lg mb-6 leading-relaxed font-romanian">
                {t("story.paragraph1")}
              </p>
              <p className="text-chalk-white/80 text-lg mb-8 leading-relaxed font-romanian">
                {t("story.paragraph2")}
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 1)}>
                  <div className="text-center">
                    <div className="bg-burst-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110">
                      <Award className="w-8 h-8 text-chalkboard" />
                    </div>
                    <h3 className="text-chalk-white font-poppins font-bold text-lg">{t("story.awardWinning")}</h3>
                    <p className="text-chalk-white/60 text-sm font-romanian">{t("story.awardDesc")}</p>
                  </div>
                </div>
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 2)}>
                  <div className="text-center">
                    <div className="bg-burst-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110">
                      <ChefHat className="w-8 h-8 text-chalkboard" />
                    </div>
                    <h3 className="text-chalk-white font-poppins font-bold text-lg">{t("story.expertChefs")}</h3>
                    <p className="text-chalk-white/60 text-sm font-romanian">{t("story.expertDesc")}</p>
                  </div>
                </div>
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 3)}>
                  <div className="text-center">
                    <div className="bg-burst-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110">
                      <Heart className="w-8 h-8 text-chalkboard" />
                    </div>
                    <h3 className="text-chalk-white font-poppins font-bold text-lg">{t("story.madeWithLove")}</h3>
                    <p className="text-chalk-white/60 text-sm font-romanian">{t("story.loveDesc")}</p>
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
                  <div className="absolute -bottom-6 -left-6 bg-burst-yellow text-chalkboard p-6 rounded-2xl shadow-xl transition-transform hover:scale-110">
                    <div className="text-center">
                      <div className="text-3xl font-montserrat font-bold">15+</div>
                      <div className="text-sm font-romanian">{t("story.yearsExperience")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Showcase */}
      <section className="py-32 bg-gradient-to-br from-chalkboard via-chalkboard/95 to-chalkboard relative overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brush-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-deep-orange/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Section Header */}
          <div ref={productsAnimation.ref} className={getAnimationClass(productsAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center mb-6">
                <div className="w-16 h-px bg-brush-orange mr-4"></div>
                <span className="text-brush-orange text-sm font-section-label uppercase tracking-[0.2em]">
                  {t("products.header")}
                </span>
                <div className="w-16 h-px bg-brush-orange ml-4"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-chalk-white mb-8 leading-tight">
                {t("products.title")}
              </h2>
              
              <p className="text-chalk-white/70 text-xl md:text-2xl max-w-4xl mx-auto font-body leading-relaxed">
                {t("products.subtitle")}
              </p>
              
              {/* Decorative Flourish */}
              <div className="flex justify-center mt-12">
                <svg width="120" height="20" viewBox="0 0 120 20" className="text-brush-orange">
                  <path d="M0 10 Q30 0 60 10 T120 10" stroke="currentColor" strokeWidth="2" fill="none" className="opacity-60"/>
                  <circle cx="60" cy="10" r="3" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Dishes Showcase */}
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-16`}
              >
                {/* Dish Image */}
                <div className="lg:w-1/2 relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-chalk-white/30 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-chalk-white/30 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-accent/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brush-orange/20 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                </div>

                {/* Content Card */}
                <div className="lg:w-1/2 relative">
                  <div className="bg-chalk-white/10 backdrop-blur-xl rounded-3xl p-12 border border-chalk-white/20 group-hover:bg-chalk-white/15 group-hover:border-brush-orange/30 transition-all duration-500 shadow-2xl">
                    {/* Category Badge */}
                    <div className="inline-flex items-center bg-brush-orange/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
                      <span className="text-brush-orange font-romanian font-bold text-sm uppercase tracking-wider">
                        Specialitate
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl font-banner text-chalk-white mb-6 group-hover:text-brush-orange transition-colors duration-500">
                      {product.title}
                    </h3>
                    
                    {/* Decorative Line */}
                    <div className="w-24 h-1 bg-gradient-to-r from-brush-orange to-deep-orange rounded-full mb-8 group-hover:w-32 transition-all duration-500"></div>
                    
                    {/* Description */}
                    <p className="text-chalk-white/80 text-lg font-body leading-relaxed mb-8 group-hover:text-chalk-white/95 transition-colors duration-300">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="px-4 py-2 bg-chalkboard/20 rounded-full text-chalk-white/70 text-sm font-romanian backdrop-blur-sm">
                        Preparat proaspăt
                      </span>
                      <span className="px-4 py-2 bg-chalkboard/20 rounded-full text-chalk-white/70 text-sm font-body backdrop-blur-sm">
                        Ingrediente locale
                      </span>
                      <span className="px-4 py-2 bg-chalkboard/20 rounded-full text-chalk-white/70 text-sm font-romanian backdrop-blur-sm">
                        Rețetă tradițională
                      </span>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="group/btn bg-burst-yellow hover:bg-gold-accent text-chalkboard px-8 py-4 rounded-2xl font-romanian font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
                      Comandă acum
                      <svg className="w-5 h-5 ml-3 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Floating Quote */}
                  <div className="absolute -top-8 -right-8 bg-chalk-white rounded-2xl p-6 shadow-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-500 opacity-90 group-hover:opacity-100 max-w-sm">
                    <p className="text-chalkboard font-romanian text-sm italic leading-relaxed">
                      "Cel mai apreciat preparat de clienților noștri"
                    </p>
                    <div className="flex text-brush-orange mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          

        </div>
      </section>

      {/* PDF Menu Section */}
      <section id="menu" className="py-32 bg-gradient-to-br from-chalkboard via-chalkboard/95 to-chalkboard relative overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-brush-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div ref={pdfAnimation.ref} className={getAnimationClass(pdfAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center mb-6">
                <div className="w-16 h-px bg-brush-orange mr-4"></div>
                <span className="text-brush-orange text-sm font-section-label uppercase tracking-[0.2em]">
                  {t("menu.header")}
                </span>
                <div className="w-16 h-px bg-brush-orange ml-4"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-chalk-white mb-8 leading-tight">
                {t("menu.subtitle")}
              </h2>
              
              <p className="text-chalk-white/70 text-xl md:text-2xl max-w-4xl mx-auto font-romanian leading-relaxed">
                {t("menu.description")}
              </p>
              
              {/* Decorative Flourish */}
              <div className="flex justify-center mt-12">
                <svg width="120" height="20" viewBox="0 0 120 20" className="text-brush-orange">
                  <path d="M0 10 Q30 0 60 10 T120 10" stroke="currentColor" strokeWidth="2" fill="none" className="opacity-60"/>
                  <circle cx="60" cy="10" r="3" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          {/* PDF Viewer - Desktop and Mobile Versions */}
          <div className={getAnimationClass(pdfAnimation.isVisible, "scale", 1)}>
            <div className="w-full max-w-7xl mx-auto">
              
              {/* Desktop PDF Viewer */}
              <div className="hidden md:block bg-chalk-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-chalk-white/20">
                <div className="w-full h-[600px] rounded-2xl overflow-hidden bg-chalk-white">
                  <iframe
                    src="/api/menu-pdf"
                    className="w-full h-full rounded-2xl"
                    title="Restaurant Menu PDF"
                    style={{
                      minHeight: '600px',
                      background: '#FFFFFF'
                    }}
                  />
                </div>
              </div>

              {/* Mobile PDF Viewer - Full Screen PDF Display */}
              <div className="md:hidden bg-chalk-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-chalk-white/20">
                <div className="w-full h-screen rounded-2xl overflow-hidden bg-chalk-white">
                  <iframe
                    src="/api/menu-pdf"
                    className="w-full h-full rounded-2xl border-0"
                    title="Restaurant Menu PDF"
                    style={{
                      minHeight: '100vh',
                      background: '#FFFFFF'
                    }}
                    allow="fullscreen"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-chalkboard">
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
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    {/* Location pin for Bucharest */}
                    <circle cx="200" cy="160" r="8" fill="#F2994A" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="200" cy="160" r="4" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={getAnimationClass(locationsAnimation.isVisible, "fadeRight")}>
              <div className="text-chalk-white">
                <div className="inline-flex items-center mb-6">
                  <div className="w-16 h-px bg-brush-orange mr-4"></div>
                  <span className="text-brush-orange text-sm font-romanian font-bold uppercase tracking-[0.2em]">
                    {t("locations.header")}
                  </span>
                  <div className="w-16 h-px bg-brush-orange ml-4"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8 leading-tight">
                  {t("locations.subtitle")}
                </h2>
                
                <button className="bg-burst-yellow hover:bg-gold-accent text-chalkboard px-8 py-3 rounded-2xl font-poppins font-bold text-sm uppercase tracking-wide transition-all duration-300 mb-12 flex items-center">
                  {t("locations.getDirections")}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="space-y-8">
                  {locations.map((location, index) => (
                    <div key={index} className={getAnimationClass(locationsAnimation.isVisible, "fadeUp", index + 1)}>
                      <h3 className="text-xl font-poppins font-bold text-chalk-white mb-2">{location.name}</h3>
                      <p className="text-chalk-white/70 font-body">{location.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="py-20 bg-chalkboard">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={socialAnimation.ref} className={getAnimationClass(socialAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-16 h-px bg-brush-orange mr-4"></div>
                <span className="text-brush-orange text-sm font-section-label uppercase tracking-[0.2em]">
                  {t("social.header")}
                </span>
                <div className="w-16 h-px bg-brush-orange ml-4"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-chalk-white mb-6">
                {t("social.title")}
              </h2>
              <p className="text-chalk-white/80 text-xl max-w-3xl mx-auto font-romanian">
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
                <div className="bg-burst-yellow hover:bg-gold-accent text-chalkboard w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </div>
                <div className="bg-burst-yellow hover:bg-gold-accent text-chalkboard w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="bg-burst-yellow hover:bg-gold-accent text-chalkboard w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110">
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
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div ref={contactAnimation.ref} className={getAnimationClass(contactAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-16 h-px bg-brush-orange mr-4"></div>
                <span className="text-brush-orange text-sm font-romanian font-bold uppercase tracking-[0.2em]">
                  {t("contact.header")}
                </span>
                <div className="w-16 h-px bg-brush-orange ml-4"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
                {t("contact.header")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className={getAnimationClass(contactAnimation.isVisible, "fadeLeft", 1)}>
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                {/* Decorative Header */}
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-brush-orange rounded-full flex items-center justify-center mr-4">
                    <ChefHat className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-white">{t("contact.restaurantDetails")}</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-brush-orange pl-6">
                    <h4 className="text-lg font-poppins font-bold text-white mb-2">COPT DE FERICIRE</h4>
                    <p className="text-white/80 font-romanian italic text-sm">{t("footer.tagline")}</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <MapPin className="w-4 h-4 text-brush-orange" />
                    </div>
                    <div>
                      <h5 className="font-poppins font-semibold text-white mb-1 text-sm">{t("contact.addressTitle")}</h5>
                      <p className="font-romanian text-white/70 text-sm whitespace-pre-line">{t("contact.address")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Phone className="w-4 h-4 text-brush-orange" />
                    </div>
                    <div>
                      <h5 className="font-poppins font-semibold text-white mb-1 text-sm">{t("contact.phoneTitle")}</h5>
                      <p className="font-body text-white/70 text-sm">{t("contact.phone")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Clock className="w-4 h-4 text-brush-orange" />
                    </div>
                    <div>
                      <h5 className="font-poppins font-semibold text-white mb-1 text-sm">{t("contact.hoursTitle")}</h5>
                      <p className="font-romanian text-white/70 text-sm whitespace-pre-line">{t("contact.hours")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={getAnimationClass(contactAnimation.isVisible, "fadeRight", 1)}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-poppins font-medium mb-2">{t("contact.firstName")}</label>
                    <input
                      type="text"
                      placeholder="Alexandru"
                      className="w-full bg-black/30 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-brush-orange focus:border-transparent font-body"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-poppins font-medium mb-2">{t("contact.lastName")}</label>
                    <input
                      type="text"
                      placeholder="Popescu"
                      className="w-full bg-black/30 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-brush-orange focus:border-transparent font-body"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-poppins font-medium mb-2">{t("contact.email")}</label>
                    <input
                      type="email"
                      placeholder="alexandru@example.com"
                      className="w-full bg-black/30 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-brush-orange focus:border-transparent font-body"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-poppins font-medium mb-2">{t("contact.phoneNumber")}</label>
                    <div className="flex">
                      <div className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-3 rounded-l-xl border border-white/20 border-r-0">
                        <span className="text-xs mr-2">🇷🇴</span>
                        <span className="text-white text-sm">▼</span>
                      </div>
                      <input
                        type="tel"
                        placeholder="+40 721 234 567"
                        className="flex-1 bg-black/30 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3 rounded-r-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-brush-orange focus:border-transparent font-body"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-poppins font-medium mb-2">{t("contact.message")}</label>
                  <textarea
                    rows={6}
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full bg-black/30 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-brush-orange focus:border-transparent resize-none font-body"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-200 hover:bg-orange-300 text-orange-800 py-4 rounded-xl font-poppins font-bold text-lg transition-all duration-300 uppercase tracking-wider shadow-lg"
                >
                  {t("contact.sendMessage")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-chalkboard py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-poppins font-bold text-brush-orange mb-2">COPT DE FERICIRE®</h3>
                <div className="flex items-center text-chalk-white mb-4">
                  <span className="text-2xl mr-2">🍽️</span>
                  <span className="font-body font-medium">{t("footer.tagline")}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-chalk-white/60 text-sm font-body mb-4">{t("footer.followUs")}</p>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-burst-yellow rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-chalkboard" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-burst-yellow rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors cursor-pointer">
                    <Facebook className="w-4 h-4 text-chalkboard" />
                  </div>
                  <div className="w-8 h-8 bg-burst-yellow rounded-full flex items-center justify-center hover:bg-gold-accent transition-colors cursor-pointer">
                    <Instagram className="w-4 h-4 text-chalkboard" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pages Column */}
            <div>
              <h4 className="text-chalk-white font-poppins font-semibold mb-4">{t("footer.pages")}</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-chalk-white/70 hover:text-chalk-white transition-colors font-body">{t("footer.about")}</a></li>
                <li><a href="#menu" className="text-chalk-white/70 hover:text-chalk-white transition-colors font-body">{t("footer.menu")}</a></li>
                <li><a href="#locations" className="text-chalk-white/70 hover:text-chalk-white transition-colors font-body">{t("footer.locations")}</a></li>
                <li><a href="#contact" className="text-chalk-white/70 hover:text-chalk-white transition-colors font-body">{t("footer.contact")}</a></li>
              </ul>
            </div>

            {/* Menu Column */}
            <div>
              <h4 className="text-chalk-white font-poppins font-semibold mb-4">{t("footer.specialties")}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-chalk-white/70 hover:text-chalk-white transition-colors font-body">{t("products.cheesecake.title")}</a></li>
                <li><a href="#" className="text-chalk-white/70 hover:text-chalk-white transition-colors font-body">{t("products.meatyPotato.title")}</a></li>
                <li><a href="#" className="text-chalk-white/70 hover:text-chalk-white transition-colors font-body">{t("products.veganPotato.title")}</a></li>
                <li><a href="#" className="text-chalk-white/70 hover:text-chalk-white transition-colors font-body">{t("menu.items.cozonac")}</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h4 className="text-chalk-white font-poppins font-semibold mb-4">{t("footer.newsletter")}</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t("footer.enterEmail")}
                  className="flex-1 bg-chalk-white/20 text-chalk-white placeholder-chalk-white/60 px-4 py-3 rounded-l-2xl border border-chalk-white/30 focus:outline-none focus:border-burst-yellow font-body"
                />
                <button className="bg-burst-yellow hover:bg-gold-accent text-chalkboard px-6 py-3 rounded-r-2xl font-poppins font-semibold transition-colors flex items-center">
                  {t("footer.subscribe")}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-chalk-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-chalk-white/60 text-sm font-body mb-4 md:mb-0">
              © 2024 Copt de Fericire. {t("footer.rights")}
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-chalk-white/60 hover:text-chalk-white text-sm font-body transition-colors">{t("footer.privacyPolicy")}</a>
              <a href="#" className="text-chalk-white/60 hover:text-chalk-white text-sm font-body transition-colors">{t("footer.terms")}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
