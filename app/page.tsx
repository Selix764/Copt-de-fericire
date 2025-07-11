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

      {/* Most Popular Dishes Section - Enhanced Carousel */}
      <section 
        className="py-20 bg-charcoal relative overflow-hidden"
      >
        {/* Premium Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-terracotta/5 opacity-30"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div ref={productsAnimation.ref} className={getAnimationClass(productsAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-16">
              <p className="text-terracotta text-sm font-heading font-semibold mb-4 uppercase tracking-wider animate-fade-in-up">{t("products.header")}</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-cream mb-6 leading-tight animate-fade-in-up animation-delay-300">
                {t("products.title")}
              </h2>
              <p className="text-cream/80 text-xl max-w-3xl mx-auto font-open-sans animate-fade-in-up animation-delay-500">
                {t("products.subtitle")}
              </p>
              {/* Decorative Food Icon */}
              <div className="flex justify-center mt-8 animate-fade-in-up animation-delay-800">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-terracotta rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-terracotta/70 rounded-full animate-pulse animation-delay-300"></div>
                  <div className="w-2 h-2 bg-terracotta/50 rounded-full animate-pulse animation-delay-600"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Removed large carousel window - keeping only cards below */}

          {/* Enhanced Food Gallery Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {products.map((product, index) => (
              <div
                key={`info-${product.id}`}
                className="group relative bg-cream/10 backdrop-blur-sm rounded-2xl p-6 border border-cream/20 hover:bg-cream/20 hover:border-terracotta/30 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Food Preview Thumbnail */}
                <div className="w-full h-32 mb-4 rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover object-center image-crisp transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-cream font-heading font-bold text-lg group-hover:text-terracotta transition-colors duration-300">{product.title}</h4>
                  <div className="w-4 h-4 rounded-full bg-cream/50 group-hover:bg-terracotta/70 transition-all duration-300" />
                </div>
                <p className="text-cream/70 text-sm font-open-sans group-hover:text-cream/90 transition-colors duration-300 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Premium Accent */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-terracotta rounded-full shadow-lg shadow-terracotta/50"></div>
                </div>
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

          {/* Menu section removed - no more menu categories */}

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
                <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-open-sans">{t("products.cheesecake.title")}</a></li>
                <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-open-sans">{t("products.meatyPotato.title")}</a></li>
                <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-open-sans">{t("products.veganPotato.title")}</a></li>
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
