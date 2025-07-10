"use client"

import Link from "next/link"
import { Star, Clock, MapPin, Phone, Mail, ChefHat, Users, Award, Heart, Facebook, Instagram, Twitter } from "lucide-react"
import { useScrollAnimation, getAnimationClass } from "./hooks/useScrollAnimation"

export default function HomePage() {
  // Animation hooks for different sections
  const heroAnimation = useScrollAnimation(0.1)
  const aboutAnimation = useScrollAnimation(0.1)
  const pdfAnimation = useScrollAnimation(0.1)
  const locationsAnimation = useScrollAnimation(0.1)
  const socialAnimation = useScrollAnimation(0.1)
  const contactAnimation = useScrollAnimation(0.1)

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely incredible food! The grilled chicken was perfectly seasoned.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Mike Chen", 
      rating: 5,
      text: "Best restaurant in town! The veggie options are outstanding.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The ambiance and food quality exceeded all expectations!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ]

  const locations = [
    {
      name: "Downtown Branch",
      address: "123 Main Street, Berlin, 10115"
    },
    {
      name: "Riverside Outlet", 
      address: "45 River Road, Hamburg, 20095"
    },
    {
      name: "City Center Spot",
      address: "78 Market Square, Munich, 80331"
    }
  ]

  const socialImages = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop"
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-black overflow-hidden -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')",
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div ref={heroAnimation.ref} className={getAnimationClass(heroAnimation.isVisible, "fadeUp")}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                HotBite
                <span className="block text-red-500">Restaurant</span>
              </h1>
            </div>
            
            <div className={getAnimationClass(heroAnimation.isVisible, "fadeUp", 1)}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Experience culinary excellence with our signature dishes crafted from the finest ingredients. 
                Every bite tells a story of passion and flavor.
              </p>
            </div>
            
            <div className={getAnimationClass(heroAnimation.isVisible, "fadeUp", 2)}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="#choice"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  VIEW OUR MENU
                </Link>
                <Link
                  href="#contact"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 text-center"
                >
                  BOOK A TABLE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={aboutAnimation.ref} className={getAnimationClass(aboutAnimation.isVisible, "fadeLeft")}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-red-500">Our Story</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                For over 15 years, HotBite has been serving exceptional cuisine that brings people together. 
                Our passionate chefs combine traditional techniques with modern innovation to create unforgettable dining experiences.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                From our signature grilled specialties to our fresh veggie delights, every dish is prepared 
                with love and attention to detail that you can taste in every bite.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 1)}>
                  <div className="text-center">
                    <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Award Winning</h3>
                    <p className="text-gray-400 text-sm">Best Restaurant 2023</p>
                  </div>
                </div>
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 2)}>
                  <div className="text-center">
                    <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110">
                      <ChefHat className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Expert Chefs</h3>
                    <p className="text-gray-400 text-sm">15+ Years Experience</p>
                  </div>
                </div>
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 3)}>
                  <div className="text-center">
                    <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Made with Love</h3>
                    <p className="text-gray-400 text-sm">Fresh Daily</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={getAnimationClass(aboutAnimation.isVisible, "fadeRight")}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070"
                  alt="Chef cooking"
                  className="rounded-lg shadow-2xl w-full transition-transform hover:scale-105"
                  style={{ filter: 'drop-shadow(8px 8px 16px rgba(0,0,0,0.3))' }}
                />
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 1)}>
                  <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-xl transition-transform hover:scale-110">
                    <div className="text-center">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-sm">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* PDF Menu Section */}
      <section id="choice" className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={pdfAnimation.ref} className={getAnimationClass(pdfAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Choice is <span className="text-red-500">Yours</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Browse our complete menu and discover all the delicious options we have to offer.
              </p>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className={getAnimationClass(pdfAnimation.isVisible, "scale", 1)}>
            <div className="w-full max-w-7xl mx-auto">
              <div className="bg-black rounded-xl p-2 sm:p-4 shadow-2xl">
                <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-black">
                  <iframe
                    src="/api/menu-pdf"
                    className="w-full h-full rounded-lg border-2 border-gray-700"
                    title="Restaurant Menu PDF"
                    style={{
                      minHeight: '400px',
                      background: '#000000'
                    }}
                  />
                </div>
                
                <div className="text-center mt-4 text-gray-300">
                  <p className="text-sm">
                    Having trouble viewing the menu? 
                    <a 
                      href="/api/menu-pdf" 
                      className="text-red-500 hover:text-red-400 underline ml-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open PDF directly
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
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Map Side */}
            <div ref={locationsAnimation.ref} className={getAnimationClass(locationsAnimation.isVisible, "fadeLeft")}>
              <div className="relative">
                {/* Poland Map Outline */}
                <div className="w-full h-96 flex items-center justify-center">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Poland country outline */}
                    <path
                      d="M80 120 L90 100 L120 95 L150 90 L180 95 L210 100 L240 110 L270 115 L300 120 L320 140 L325 160 L330 180 L325 200 L320 220 L300 240 L280 250 L250 255 L220 250 L190 245 L160 240 L130 235 L100 220 L85 200 L80 180 L75 160 L80 140 Z"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    />
                    {/* Location pin */}
                    <circle cx="200" cy="160" r="8" fill="#dc2626" stroke="white" strokeWidth="2" />
                    <circle cx="200" cy="160" r="4" fill="white" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={getAnimationClass(locationsAnimation.isVisible, "fadeRight")}>
              <div className="text-white">
                <p className="text-red-500 text-sm font-semibold mb-4 uppercase tracking-wide">Location</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Find a HotBite<br />
                  <span className="text-red-500">Near You!</span>
                </h2>
                
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-300 mb-12 flex items-center">
                  GET DIRECTIONS
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="space-y-8">
                  {locations.map((location, index) => (
                    <div key={index} className={getAnimationClass(locationsAnimation.isVisible, "fadeUp", index + 1)}>
                      <h3 className="text-xl font-bold text-white mb-2">{location.name}</h3>
                      <p className="text-gray-400">{location.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={socialAnimation.ref} className={getAnimationClass(socialAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-16">
              <p className="text-red-500 text-sm font-semibold mb-4 uppercase tracking-wide">Social Media</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Follow Us & Stay Connected
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Get the latest updates, special offers, and mouthwatering food photos!
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className={getAnimationClass(socialAnimation.isVisible, "fadeUp", 1)}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {socialImages.map((image, index) => (
                <div key={index} className={`${getAnimationClass(socialAnimation.isVisible, "scale", index + 1)} overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                  <img 
                    src={image} 
                    alt={`Social media post ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Social Pizza Slice */}
          <div className="absolute top-4 right-8 opacity-20">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
              <path d="M50 10 L90 85 L10 85 Z" fill="white" />
              <circle cx="35" cy="65" r="3" fill="#dc2626" />
              <circle cx="55" cy="60" r="3" fill="#dc2626" />
              <circle cx="45" cy="70" r="3" fill="#dc2626" />
            </svg>
          </div>
        </div>
      </section>

            {/* Contact Section - New Design */}
      <section 
        id="contact" 
        className="py-20 relative"
        style={{
          backgroundImage: "url('/images/red-ornate-background.jpg'), linear-gradient(135deg, #8B1538 0%, #6B1426 25%, #5A1021 50%, #4A0D1B 75%, #3A0A16 100%)",
          backgroundSize: 'cover, 100% 100%',
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat, no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div ref={contactAnimation.ref} className={getAnimationClass(contactAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-16">
              <p className="text-red-200 text-sm font-semibold mb-4 uppercase tracking-wide">Contact Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch with Us!
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className={getAnimationClass(contactAnimation.isVisible, "fadeLeft", 1)}>
              <div className="relative">
                {/* Sushi Roll Image */}
                <div className="absolute -top-8 -left-8 opacity-80">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-800/50 backdrop-blur-sm rounded-xl p-8 ml-8">
                  <h3 className="text-2xl font-bold text-white mb-8">Contact Details</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Wendys</h4>
                    </div>
                    
                    <div className="flex items-start text-white">
                      <MapPin className="w-5 h-5 mr-3 mt-1 text-red-300" />
                      <div>
                        <p>456 Sunset Blvd, CA 90028, Los Angeles</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start text-white">
                      <Phone className="w-5 h-5 mr-3 mt-1 text-red-300" />
                      <div>
                        <p>+1 (203) 456-7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start text-white">
                      <Mail className="w-5 h-5 mr-3 mt-1 text-red-300" />
                      <div>
                        <p>contact@restaurantname.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start text-white">
                      <Clock className="w-5 h-5 mr-3 mt-1 text-red-300" />
                      <div>
                        <p>Mon - Sun | 12:00 PM - 11:00 PM</p>
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
                    <label className="block text-white text-sm font-medium mb-2">First name</label>
                    <input
                      type="text"
                      placeholder="Alexandre"
                      className="w-full bg-red-700/50 backdrop-blur-sm text-white placeholder-red-200 px-4 py-3 rounded-lg border border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Last name</label>
                    <input
                      type="text"
                      placeholder="Gobert"
                      className="w-full bg-red-700/50 backdrop-blur-sm text-white placeholder-red-200 px-4 py-3 rounded-lg border border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="helloalexandre@gmail.com"
                      className="w-full bg-red-700/50 backdrop-blur-sm text-white placeholder-red-200 px-4 py-3 rounded-lg border border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                    <div className="flex">
                      <div className="flex items-center bg-red-700/50 backdrop-blur-sm px-3 py-3 rounded-l-lg border border-red-600/50 border-r-0">
                        <span className="text-xs mr-2">🇺🇸</span>
                        <span className="text-white text-sm">▼</span>
                      </div>
                      <input
                        type="tel"
                        placeholder="+1 (203) 868-0023"
                        className="flex-1 bg-red-700/50 backdrop-blur-sm text-white placeholder-red-200 px-4 py-3 rounded-r-lg border border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full bg-red-700/50 backdrop-blur-sm text-white placeholder-red-200 px-4 py-3 rounded-lg border border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-red-700 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-red-500 mb-2">HotBite®</h3>
                <div className="flex items-center text-white mb-4">
                  <span className="text-2xl mr-2">🔥</span>
                  <span className="font-medium">Great Food, Amazing Experience - Visit Us Today!</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-4">Follow Us</p>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                    <Facebook className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pages Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">Pages</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Jobs</a></li>
                <li><a href="#locations" className="text-gray-400 hover:text-white transition-colors">Locations</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Grill & Kebabs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wraps & Sandwiches</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sides & Extras</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Desserts & Beverages</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">Subscribe for exclusive deals and updates</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-l-lg border border-gray-700 focus:outline-none focus:border-red-500"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors flex items-center">
                  Subscribe
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 HotBite Restaurant. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
