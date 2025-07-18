"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, Clock, MapPin, Phone, Mail, ChefHat, Users, Award, Heart, Facebook, Instagram } from "lucide-react"
import { useScrollAnimation, getAnimationClass } from "./hooks/useScrollAnimation"
import { useLanguage } from "./contexts/LanguageContext"

export default function HomePage() {
  const { t, language, toggleLanguage } = useLanguage()

  // Animation hooks for different sections
  const aboutAnimation = useScrollAnimation(0.1)
  const productsAnimation = useScrollAnimation(0.1)
  const pdfAnimation = useScrollAnimation(0.1)
  const locationsAnimation = useScrollAnimation(0.1)
  const socialAnimation = useScrollAnimation(0.1)
  const contactAnimation = useScrollAnimation(0.1)

  // Most Popular Menu Items
  const products = [
    {
      id: 'deluxePotato',
      title: t("products.deluxePotato.title"),
      description: t("products.deluxePotato.description"),
      image: "/images/baked-potato-deluxe-popular.jpg",
      alt: "Baked Potato with Chicken, Cheese, Valerian and Sour Cream"
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

  // Review texts for each dish
  const reviewTexts = [
    t("reviews.review1"),
    t("reviews.review2"),
    t("reviews.review3")
  ]

  // No menu categories - removed desserts section

  const testimonials = [
    {
      name: "Maria Popescu",
      rating: 5,
      text: t("testimonials.maria"),
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      isRomanian: true
    },
    {
      name: "Alexandru Ionescu", 
      rating: 5,
      text: t("testimonials.alexandru"),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      isRomanian: true
    },
    {
      name: "Elena Radu",
      rating: 5,
      text: t("testimonials.elena"),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      isRomanian: true
    }
  ]

  const locations = [
    {
      name: "Copt de Fericire",
      address: "Splaiul Independenței 2K, București 030099",
      coordinates: { lat: 44.4275, lng: 26.0985 }, // Updated Splaiul Independenței coordinates
      googleMapsUrl: "https://www.google.com/maps/place/Splaiul+Independen%C8%9Bei+2K,+Bucure%C8%99ti+030099,+Romania"
    }
  ]

  // High-quality food images for social media
  const socialImages = [
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=400&fit=crop&crop=center&auto=format&q=80",
      alt: "Delicious Romanian traditional food",
      fallback: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop&crop=center&auto=format&q=80",
      alt: "Chef preparing traditional dishes",
      fallback: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&h=400&fit=crop"
    },
    {
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=400&fit=crop&crop=center&auto=format&q=80",
      alt: "Beautiful restaurant atmosphere",
      fallback: "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=500&h=400&fit=crop"
    },
    {
      src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&h=400&fit=crop&crop=center&auto=format&q=80",
      alt: "Traditional Romanian sarmale",
      fallback: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=400&fit=crop"
    },
    {
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=400&fit=crop&crop=center&auto=format&q=80",
      alt: "Fresh ingredients and cooking",
      fallback: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop"
    },
    {
      src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop&crop=center&auto=format&q=80",
      alt: "Romanian desserts and sweets",
      fallback: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=400&fit=crop"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative w-full bg-chalkboard overflow-hidden"
        style={{
          height: '100vh',
          minHeight: '100vh',
          maxHeight: '100vh',
          paddingTop: '5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          overflowY: 'hidden',
          overflowX: 'hidden',
          position: 'relative'
        }}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074")',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        />
        
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-chalkboard/80"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}
        />
        
        {/* Content */}
        <div 
          className="relative z-10 w-full"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            position: 'relative',
            zIndex: 10,
            height: 'auto',
            overflow: 'hidden'
          }}
        >
                                <div 
             style={{
               maxWidth: '600px',
               pointerEvents: 'auto'
             }}
           >
             <h1 
               className="animate-fade-in-up"
               style={{
                 fontSize: 'clamp(2rem, 8vw, 5rem)',
                 fontFamily: 'var(--font-section-label)',
                 fontWeight: 700,
                 color: 'white',
                 lineHeight: 1.1,
                 margin: 0,
                 marginBottom: '1.5rem',
                 userSelect: 'none',
                 pointerEvents: 'none'
               }}
             >
               <span 
                 style={{
                   color: '#F2994A',
                   display: 'block',
                   fontSize: '0.6em'
                 }}
               >
                 {t("hero.restaurant")}
               </span>
               <span 
                 style={{
                   color: 'white',
                   display: 'block'
                 }}
               >
                 COPT DE FERICIRE
               </span>
             </h1>
             
             <p 
               className="animate-fade-in-up animation-delay-300"
               style={{
                 fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                 fontFamily: 'var(--font-body)',
                 lineHeight: 1.6,
                 color: 'rgba(255, 255, 255, 0.9)',
                 margin: 0,
                 marginBottom: '2rem',
                 maxWidth: '500px',
                 userSelect: 'none',
                 pointerEvents: 'none'
               }}
             >
               {t("hero.subtitle")}
             </p>
             
             <Link 
               href="#menu"
               className="animate-fade-in-up animation-delay-600 inline-block bg-brush-orange hover:bg-gold-accent text-chalkboard px-6 py-3 md:px-8 md:py-4 rounded-2xl font-poppins font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wider"
             >
               {t("menu.viewFullMenu")}
             </Link>
           </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-chalkboard">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={aboutAnimation.ref} className={getAnimationClass(aboutAnimation.isVisible, "fadeLeft")}>
              <div className="inline-flex items-center mb-6">
                <div className="w-16 h-px bg-brush-orange mr-4"></div>
                <span className="text-brush-orange text-sm font-romanian font-bold uppercase tracking-[0.2em]">
                  {t("story.ourStory")}
                </span>
                <div className="w-16 h-px bg-brush-orange ml-4"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-chalk-white mb-6">
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
                    <div className="bg-brush-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110">
                      <Award className="w-8 h-8 text-chalkboard" />
                    </div>
                    <h3 className="text-chalk-white font-poppins font-bold text-lg">{t("story.awardWinning")}</h3>
                    <p className="text-chalk-white/60 text-sm font-romanian">{t("story.awardDesc")}</p>
                  </div>
                </div>
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 2)}>
                  <div className="text-center">
                    <div className="bg-brush-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110">
                      <ChefHat className="w-8 h-8 text-chalkboard" />
                    </div>
                    <h3 className="text-chalk-white font-poppins font-bold text-lg">{t("story.expertChefs")}</h3>
                    <p className="text-chalk-white/60 text-sm font-romanian">{t("story.expertDesc")}</p>
                  </div>
                </div>
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 3)}>
                  <div className="text-center">
                    <div className="bg-brush-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110">
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
                  <div className="absolute -bottom-6 -left-6 bg-brush-orange text-chalkboard p-6 rounded-2xl shadow-xl transition-transform hover:scale-110">
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
      <section className="section-padding bg-gradient-to-br from-chalkboard via-chalkboard/95 to-chalkboard relative overflow-visible">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brush-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-deep-orange/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10 overflow-visible">
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
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-bold text-chalk-white mb-8 leading-tight">
                {t("products.title")}
            </h2>
              
              <p className="text-chalk-white/70 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-body leading-relaxed">
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
          <div className="space-y-24 w-full max-w-full py-12 overflow-visible">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-16 overflow-visible`}
              >
                {/* Dish Image */}
                <div 
                  className="lg:w-1/2 relative"
                  onWheel={(e) => e.preventDefault()}
                  onTouchMove={(e) => e.preventDefault()}
                  style={{ overflow: 'hidden' }}
                >
                  <div 
                    className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700"
                    onWheel={(e) => e.preventDefault()}
                    onTouchMove={(e) => e.preventDefault()}
                    style={{ overflow: 'hidden' }}
                  >
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-80 md:h-96 lg:h-[500px] object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      onWheel={(e) => e.preventDefault()}
                      onTouchMove={(e) => e.preventDefault()}
                      style={{
                        userSelect: 'none',
                        pointerEvents: 'none',
                        transform: 'translate3d(0, 0, 0)',
                        backfaceVisibility: 'hidden'
                      }}
                      draggable="false"
                    />
                    
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ pointerEvents: 'none' }}
                    ></div>
                    
                    {/* Decorative Corner Elements */}
                    <div 
                      className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-chalk-white/30 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{ pointerEvents: 'none' }}
                    ></div>
                    <div 
                      className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-chalk-white/30 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{ pointerEvents: 'none' }}
                    ></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div 
                    className="absolute -top-6 -right-6 w-32 h-32 bg-gold-accent/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    style={{ pointerEvents: 'none' }}
                  ></div>
                  <div 
                    className="absolute -bottom-6 -left-6 w-24 h-24 bg-brush-orange/20 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                    style={{ pointerEvents: 'none' }}
                  ></div>
                </div>

                {/* Content Card */}
                <div className="lg:w-1/2 relative">
                  <div className="bg-chalk-white/10 backdrop-blur-xl rounded-3xl p-12 border border-chalk-white/20 group-hover:bg-chalk-white/15 group-hover:border-brush-orange/30 transition-all duration-500 shadow-2xl exact-height">
                    {/* Category Badge */}
                    <div className="inline-flex items-center bg-brush-orange/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
                      <span className="text-brush-orange font-romanian font-bold text-sm uppercase tracking-wider">
                        {t("features.specialty")}
                      </span>
          </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-banner text-chalk-white mb-6 group-hover:text-brush-orange transition-colors duration-500">
                      {product.title}
                    </h3>
                    
                    {/* Decorative Line */}
                    <div className="w-24 h-1 bg-gradient-to-r from-brush-orange to-deep-orange rounded-full mb-8 group-hover:w-32 transition-all duration-500"></div>
                    
                    {/* Description */}
                    <p className="text-chalk-white/80 text-lg font-body leading-relaxed mb-8 group-hover:text-chalk-white/95 transition-colors duration-300">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-3 mb-8 exact-height">
                      <span className="px-4 py-2 bg-chalkboard/20 rounded-full text-chalk-white/70 text-sm font-romanian backdrop-blur-sm">
                        {t("features.freshPrepared")}
                      </span>
                      <span className="px-4 py-2 bg-chalkboard/20 rounded-full text-chalk-white/70 text-sm font-body backdrop-blur-sm">
                        {t("features.localIngredients")}
                      </span>
                      <span className="px-4 py-2 bg-chalkboard/20 rounded-full text-chalk-white/70 text-sm font-romanian backdrop-blur-sm">
                        {t("features.traditionalRecipe")}
                      </span>
                    </div>
                  </div>
                  
                  {/* Customer Review - Inline Design */}
                  <div className="mt-8 bg-brush-orange/10 backdrop-blur-sm rounded-xl p-4 border border-brush-orange/20">
                    <div className="flex items-center mb-3">
                      <div className="bg-brush-orange text-chalkboard text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {t("features.specialty")}
                      </div>
                      <div className="flex text-brush-orange ml-auto">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-chalk-white/90 font-romanian text-sm italic leading-relaxed">
                      "{reviewTexts[index]}"
                    </p>
                  </div>
          </div>
              </div>
            ))}
          </div>
          

        </div>
      </section>

      {/* PDF Menu Section */}
      <section id="menu" className="section-padding bg-gradient-to-br from-chalkboard via-chalkboard/95 to-chalkboard relative overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-brush-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div ref={pdfAnimation.ref} className={getAnimationClass(pdfAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center mb-6">
                <div className="w-16 h-px bg-brush-orange mr-4"></div>
                <span className="text-brush-orange text-sm font-section-label uppercase tracking-[0.2em]">
                  {t("menu.header")}
                </span>
                <div className="w-16 h-px bg-brush-orange ml-4"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-bold text-chalk-white mb-8 leading-tight">
                {t("menu.subtitle")}
            </h2>
              
              <p className="text-chalk-white/70 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-romanian leading-relaxed">
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
                <div className="iframe-container w-full h-[600px] rounded-2xl bg-chalk-white">
                <iframe
                  src="/api/menu-pdf"
                    className="w-full h-full rounded-2xl no-scrollbar"
                  title="Restaurant Menu PDF"
                  style={{
                      border: 'none',
                      background: '#FFFFFF'
                    }}
                    scrolling="no"
                  />
                </div>
              </div>

              {/* Mobile PDF Viewer - Google Drive Embed for Mobile */}
              <div className="md:hidden bg-chalk-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-chalk-white/20">
                <div className="iframe-container w-full h-[400px] sm:h-[500px] rounded-2xl bg-chalk-white">
                  <iframe
                    src="https://drive.google.com/file/d/1syb-SgovlRgSXTXgslq72fWAvQ7eOUxC/preview"
                    className="w-full h-full rounded-2xl border-0 no-scrollbar"
                    title="Restaurant Menu PDF"
                    style={{
                      border: 'none',
                      background: '#FFFFFF'
                    }}
                    allow="autoplay"
                    loading="eager"
                    frameBorder="0"
                    scrolling="no"
                  />
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="section-padding bg-chalkboard">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Interactive Map Side */}
            <div ref={locationsAnimation.ref} className={getAnimationClass(locationsAnimation.isVisible, "fadeLeft")}>
              <div className="relative">
                {/* Artistic Romania Map Background */}
                <div className="absolute inset-0 w-full h-96 flex items-center justify-center opacity-20 z-0">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Romania country outline */}
                    <path
                      d="M80 120 L90 100 L120 95 L150 90 L180 95 L210 100 L240 110 L270 115 L300 120 L320 140 L325 160 L330 180 L325 200 L320 220 L300 240 L280 250 L250 255 L220 250 L190 245 L160 240 L130 235 L100 220 L85 200 L80 180 L75 160 L80 140 Z"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    {/* Location pins for all restaurants */}
                    <circle cx="200" cy="160" r="6" fill="#F2994A" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="190" cy="140" r="6" fill="#F2994A" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="210" cy="170" r="6" fill="#F2994A" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>
                
                {/* Interactive Google Maps */}
                <div className="iframe-container relative z-10 w-full h-96 rounded-2xl shadow-2xl border-2 border-chalk-white/20">
                  <iframe
                    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Splaiul%20Independen%C8%9Bei%202K,%20Bucure%C8%99ti%20030099,%20Romania&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Copt de Fericire Restaurant - Splaiul Independenței 2K, București 030099"
                    className="rounded-2xl no-scrollbar"
                    scrolling="no"
                  ></iframe>
                  
                  {/* Overlay corner decorations */}
                  <div className="absolute top-4 right-4 bg-brush-orange/90 backdrop-blur-sm rounded-full p-2">
                    <MapPin className="w-4 h-4 text-chalkboard" />
                  </div>
          </div>

                {/* Map Legend */}
                <div className="mt-4 bg-chalk-white/10 backdrop-blur-xl rounded-lg p-4 border border-chalk-white/20">
                  <div className="flex items-center text-chalk-white text-sm">
                    <div className="w-3 h-3 bg-brush-orange rounded-full mr-2"></div>
                    <span className="font-romanian">{t("locations.mapLegend")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Content Side */}
            <div className={getAnimationClass(locationsAnimation.isVisible, "fadeRight")}>
              <div className="text-chalk-white">
                <div className="inline-flex items-center mb-6">
                  <div className="w-16 h-px bg-brush-orange mr-4"></div>
                  <span className="text-brush-orange text-sm font-romanian font-bold uppercase tracking-[0.2em]">
                    {t("locations.header")}
                  </span>
                  <div className="w-16 h-px bg-brush-orange ml-4"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-8 leading-tight">
                  {t("locations.subtitle")}
                </h2>
                
                {/* Enhanced location cards */}
                <div className="space-y-6 mb-8">
                  {locations.map((location, index) => (
                    <div key={index} className={getAnimationClass(locationsAnimation.isVisible, "fadeUp", index + 1)}>
                      <div className="bg-chalk-white/10 backdrop-blur-xl rounded-2xl p-6 border border-chalk-white/20 hover:bg-chalk-white/15 hover:border-brush-orange/30 transition-all duration-300 group">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-poppins font-bold text-chalk-white mb-2 group-hover:text-brush-orange transition-colors">
                              {location.name}
                            </h3>
                            <p className="text-chalk-white/70 font-body mb-3">{location.address}</p>
                            <div className="flex items-center text-chalk-white/60 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span className="font-romanian">București, România</span>
                            </div>
                          </div>
                          <a
                            href={location.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brush-orange hover:bg-gold-accent text-chalkboard p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                            title="Deschide în Google Maps"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <div className="bg-gradient-to-r from-brush-orange/20 to-deep-orange/20 backdrop-blur-sm rounded-2xl p-6 border border-brush-orange/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-chalk-white font-poppins font-bold text-lg mb-2">{t("locations.findNearest")}</h4>
                      <p className="text-chalk-white/70 font-romanian text-sm">{t("locations.mapInstructions")}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <a href="tel:+40721234567" className="bg-brush-orange hover:bg-gold-accent text-chalkboard p-3 rounded-full transition-all duration-300 hover:scale-110">
                        <Phone className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="section-padding bg-chalkboard">
        <div className="container-custom">
          <div ref={socialAnimation.ref} className={getAnimationClass(socialAnimation.isVisible, "fadeUp")}>
          <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-16 h-px bg-brush-orange mr-4"></div>
                <span className="text-brush-orange text-sm font-section-label uppercase tracking-[0.2em]">
                  {t("social.header")}
                </span>
                <div className="w-16 h-px bg-brush-orange ml-4"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-chalk-white mb-6">
                {t("social.title")}
            </h2>
              <p className="text-chalk-white/80 text-lg md:text-xl max-w-3xl mx-auto font-romanian">
                {t("social.description")}
              </p>
            </div>
          </div>

          {/* Enhanced Image Grid */}
          <div className={getAnimationClass(socialAnimation.isVisible, "fadeUp", 1)}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-full exact-height">
              {socialImages.map((image, index) => (
                <div key={index} className={`${getAnimationClass(socialAnimation.isVisible, "scale", index + 1)} group relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl exact-height`}>
                  {/* Image with fallback */}
                  <div className="relative w-full h-48 md:h-64 exact-height">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = image.fallback;
                      }}
                      priority={index < 3} // Prioritize first 3 images
                    />
                    

                  </div>
                </div>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="text-center mt-8">
              <a
                href="https://www.instagram.com/copt_de_fericire?igsh=cHFqeTN0eGdkcGYz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-brush-orange to-deep-orange hover:from-deep-orange hover:to-brush-orange text-chalk-white px-6 py-4 md:px-8 md:py-4 rounded-2xl font-poppins font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap min-h-[48px]"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6 mr-3 flex-shrink-0" />
                <span className="mx-2">{t("social.followInstagram")}</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              </div>
          </div>

       
         
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="section-padding relative"
        style={{
          backgroundImage: "url('/images/red-ornate-background.jpg'), linear-gradient(135deg, #C36B51 0%, #B85A47 25%, #A54A3B 50%, #943C31 75%, #832E27 100%)",
          backgroundSize: 'cover, 100% 100%',
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat, no-repeat'
        }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container-custom relative z-10">
          <div ref={contactAnimation.ref} className={getAnimationClass(contactAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-16 h-px bg-brush-orange mr-4"></div>
                <span className="text-brush-orange text-sm font-romanian font-bold uppercase tracking-[0.2em]">
                  {t("contact.header")}
                </span>
                <div className="w-16 h-px bg-brush-orange ml-4"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
                {t("contact.header")}
            </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className={getAnimationClass(contactAnimation.isVisible, "fadeLeft", 1)}>
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 exact-height">
                {/* Decorative Header */}
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-brush-orange rounded-full flex items-center justify-center mr-4">
                    <ChefHat className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-white">{t("contact.restaurantDetails")}</h3>
                </div>
                
                <div className="space-y-6 exact-height">
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
              <div className="space-y-4 exact-height">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-poppins font-medium mb-2">{t("contact.firstName")}</label>
                  <input
                    type="text"
                      placeholder="Alexandru"
                      className="w-full bg-black/30 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-brush-orange focus:border-transparent font-body min-h-[48px] no-scrollbar"
                  />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-poppins font-medium mb-2">{t("contact.lastName")}</label>
                  <input
                      type="text"
                      placeholder="Popescu"
                      className="w-full bg-black/30 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-brush-orange focus:border-transparent font-body min-h-[48px] no-scrollbar"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-poppins font-medium mb-2">{t("contact.email")}</label>
                    <input
                      type="email"
                      placeholder="alexandru@example.com"
                      className="w-full bg-black/30 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-brush-orange focus:border-transparent font-body min-h-[48px] no-scrollbar"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-poppins font-medium mb-2">{t("contact.phoneNumber")}</label>
                    <div className="flex">
                      <div className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-3 rounded-l-xl border border-white/20 border-r-0 min-h-[48px]">
                        <span className="text-xs mr-2">🇷🇴</span>
                        <span className="text-white text-sm">▼</span>
                      </div>
                  <input
                        type="tel"
                        placeholder="+40 721 234 567"
                        className="flex-1 bg-black/30 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3 rounded-r-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-brush-orange focus:border-transparent font-body min-h-[48px] no-scrollbar"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-poppins font-medium mb-2">{t("contact.message")}</label>
                <textarea
                    rows={6}
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full bg-black/30 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-brush-orange focus:border-transparent resize-none font-body no-scrollbar"
                ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-200 hover:bg-orange-300 text-orange-800 py-4 md:py-5 rounded-xl font-poppins font-bold text-base md:text-lg transition-all duration-300 uppercase tracking-wider shadow-lg min-h-[48px] flex items-center justify-center whitespace-nowrap"
                >
                  {t("contact.sendMessage")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer Section */}
      <footer className="relative bg-gradient-to-br from-chalkboard via-chalkboard/98 to-chalkboard/95 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-brush-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-accent/3 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container-custom py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
              {/* Brand Section - Takes more space */}
              <div className="lg:col-span-5">
                <div className="mb-8">
                  <h2 className="text-4xl font-section-label text-brush-orange mb-4">
                    COPT DE FERICIRE
                  </h2>
                  <p className="text-chalk-white/80 text-lg font-romanian leading-relaxed mb-6 max-w-md">
                    {t("footer.tagline")}
                  </p>
                  <div className="bg-brush-orange/10 backdrop-blur-sm rounded-2xl p-6 border border-brush-orange/20">
                    <h3 className="text-chalk-white font-poppins font-bold text-lg mb-4">
                      📍 Găsește-ne în București
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-brush-orange mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-chalk-white font-romanian font-semibold">Restaurant Principal</p>
                          <p className="text-chalk-white/70 text-sm">Splaiul Independenței 2K, București 030099</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-brush-orange mr-3" />
                        <a href="tel:+40721234567" className="text-chalk-white hover:text-brush-orange transition-colors font-romanian">
                          +40 721 234 567
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-brush-orange mr-3" />
                        <span className="text-chalk-white/70 text-sm font-romanian">Luni - Duminică: 11:00 - 23:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-2">
                <h4 className="text-chalk-white font-poppins font-bold text-lg mb-6 relative">
                  {t("footer.pages")}
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brush-orange"></div>
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#about" className="text-chalk-white/70 hover:text-brush-orange transition-colors font-romanian flex items-center group">
                      <span className="w-1.5 h-1.5 bg-brush-orange/50 rounded-full mr-3 group-hover:bg-brush-orange transition-colors"></span>
                      {t("footer.about")}
                    </a>
                  </li>
                  <li>
                    <a href="#menu" className="text-chalk-white/70 hover:text-brush-orange transition-colors font-romanian flex items-center group">
                      <span className="w-1.5 h-1.5 bg-brush-orange/50 rounded-full mr-3 group-hover:bg-brush-orange transition-colors"></span>
                      {t("footer.menu")}
                    </a>
                  </li>
                  <li>
                    <a href="#locations" className="text-chalk-white/70 hover:text-brush-orange transition-colors font-romanian flex items-center group">
                      <span className="w-1.5 h-1.5 bg-brush-orange/50 rounded-full mr-3 group-hover:bg-brush-orange transition-colors"></span>
                      {t("footer.locations")}
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-chalk-white/70 hover:text-brush-orange transition-colors font-romanian flex items-center group">
                      <span className="w-1.5 h-1.5 bg-brush-orange/50 rounded-full mr-3 group-hover:bg-brush-orange transition-colors"></span>
                      {t("footer.contact")}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media & Newsletter */}
              <div className="lg:col-span-5">
                <div className="space-y-8">
                  {/* Social Media */}
                  <div>
                    <h4 className="text-chalk-white font-poppins font-bold text-lg mb-6 relative">
                      Urmărește-ne & Rămâi Conectat
                      <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brush-orange"></div>
                    </h4>
                    <p className="text-chalk-white/70 text-sm font-romanian mb-6">
                      Primește cele mai recente actualizări, oferte speciale și fotografii delicioase!
                    </p>
                    <div className="flex space-x-4 mb-6">
                      <a 
                        href="https://www.facebook.com/share/1AyJAsg6TP/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-brush-orange/20 hover:bg-brush-orange rounded-2xl p-4 transition-all duration-300 transform hover:scale-105"
                        aria-label="Follow us on Facebook"
                      >
                        <Facebook className="w-6 h-6 text-brush-orange group-hover:text-chalkboard transition-colors" />
                      </a>
                      <a 
                        href="https://www.instagram.com/copt_de_fericire?igsh=cHFqeTN0eGdkcGYz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-brush-orange/20 hover:bg-brush-orange rounded-2xl p-4 transition-all duration-300 transform hover:scale-105"
                        aria-label="Follow us on Instagram"
                      >
                        <Instagram className="w-6 h-6 text-brush-orange group-hover:text-chalkboard transition-colors" />
                      </a>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-gradient-to-r from-brush-orange/10 to-gold-accent/5 backdrop-blur-sm rounded-2xl p-6 border border-brush-orange/20">
                    <h4 className="text-chalk-white font-poppins font-bold text-lg mb-4">
                      📧 Newsletter
                    </h4>
                    <p className="text-chalk-white/70 text-sm font-romanian mb-4">
                      {t("footer.newsletter")}
                    </p>
                    <div className="flex gap-3">
                      <input
                        type="email"
                        placeholder={t("footer.enterEmail")}
                        className="flex-1 bg-chalkboard/50 text-chalk-white placeholder-chalk-white/50 px-4 py-3 rounded-xl border border-chalk-white/20 focus:outline-none focus:border-brush-orange focus:ring-2 focus:ring-brush-orange/20 font-romanian transition-all duration-300"
                      />
                      <button className="bg-brush-orange hover:bg-gold-accent text-chalkboard px-6 py-3 rounded-xl font-poppins font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap">
                        {t("footer.subscribe")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-chalk-white/10">
            <div className="container-custom py-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-chalk-white/60 text-sm font-romanian mb-4 md:mb-0 text-center md:text-left">
                  © 2024 Copt de Fericire. {t("footer.rights")}
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="text-chalk-white/60 hover:text-brush-orange text-sm font-romanian transition-colors">
                    {t("footer.privacyPolicy")}
                  </a>
                  <a href="#" className="text-chalk-white/60 hover:text-brush-orange text-sm font-romanian transition-colors">
                    {t("footer.terms")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
