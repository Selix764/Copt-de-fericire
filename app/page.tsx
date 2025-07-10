"use client"

import Link from "next/link"
import { Star, Clock, MapPin, Phone, Mail, ChefHat, Users, Award, Heart } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation, getAnimationClass } from "./hooks/useScrollAnimation"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("grilled")

  // Animation hooks for different sections
  const heroAnimation = useScrollAnimation(0.1)
  const aboutAnimation = useScrollAnimation(0.1)
  const menuAnimation = useScrollAnimation(0.1)
  const pdfAnimation = useScrollAnimation(0.1)
  const contactAnimation = useScrollAnimation(0.1)

  const menuTabs = [
    { id: "grilled", label: "Grilled", count: "12 items" },
    { id: "crunchy", label: "Crunchy", count: "8 items" },
    { id: "classic", label: "Classic", count: "15 items" },
    { id: "veggie", label: "Veggie Delight", count: "10 items" }
  ]

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-cdf-cream overflow-hidden -mt-20 pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')",
            }}
          />
          <div className="absolute inset-0 bg-cdf-cream/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-4xl">
            <div ref={heroAnimation.ref} className={getAnimationClass(heroAnimation.isVisible, "fadeUp")}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-cdf-brown mb-8 leading-tight tracking-tight">
                COPT DE
                <span className="block text-cdf-terracotta font-black">FERICIRE</span>
              </h1>
            </div>
            
            <div className={getAnimationClass(heroAnimation.isVisible, "fadeUp", 1)}>
              <p className="text-xl md:text-2xl text-cdf-brown/80 mb-12 leading-relaxed max-w-3xl font-light">
                Experience culinary excellence with our signature dishes crafted from the finest ingredients. 
                Every bite tells a story of passion and authentic Romanian flavors.
              </p>
            </div>
            
            <div className={getAnimationClass(heroAnimation.isVisible, "fadeUp", 2)}>
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link
                  href="#menu"
                  className="bg-cdf-terracotta hover:bg-cdf-terracotta/90 text-cdf-white px-10 py-5 rounded-none font-bold text-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center border border-cdf-terracotta"
                >
                  VIEW OUR MENU
                </Link>
                <Link
                  href="#contact"
                  className="bg-transparent border-2 border-cdf-brown text-cdf-brown hover:bg-cdf-brown hover:text-cdf-white px-10 py-5 rounded-none font-bold text-lg uppercase tracking-wide transition-all duration-300 text-center"
                >
                  BOOK A TABLE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-cdf-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={aboutAnimation.ref} className={getAnimationClass(aboutAnimation.isVisible, "fadeLeft")}>
              <h2 className="text-5xl md:text-6xl font-bold text-cdf-brown mb-8 leading-tight uppercase tracking-wide">
                About <span className="text-cdf-terracotta">Our Story</span>
              </h2>
              <p className="text-cdf-brown/80 text-lg mb-8 leading-relaxed font-light">
                For over 15 years, Copt de Fericire has been serving exceptional Romanian cuisine that brings families together. 
                Our passionate chefs combine traditional techniques with modern innovation to create unforgettable dining experiences.
              </p>
              <p className="text-cdf-brown/80 text-lg mb-10 leading-relaxed font-light">
                From our signature grilled specialties to our fresh seasonal delights, every dish is prepared 
                with love and attention to detail that you can taste in every bite.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 1)}>
                  <div className="text-center p-6 border border-cdf-divider bg-cdf-cream rounded-none">
                    <div className="bg-cdf-terracotta w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                      <Award className="w-8 h-8 text-cdf-white" />
                    </div>
                    <h3 className="text-cdf-brown font-bold text-lg uppercase tracking-wide mb-1">Award Winning</h3>
                    <p className="text-cdf-brown/60 text-sm">Best Restaurant 2023</p>
                  </div>
                </div>
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 2)}>
                  <div className="text-center p-6 border border-cdf-divider bg-cdf-cream rounded-none">
                    <div className="bg-cdf-terracotta w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                      <ChefHat className="w-8 h-8 text-cdf-white" />
                    </div>
                    <h3 className="text-cdf-brown font-bold text-lg uppercase tracking-wide mb-1">Expert Chefs</h3>
                    <p className="text-cdf-brown/60 text-sm">15+ Years Experience</p>
                  </div>
                </div>
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 3)}>
                  <div className="text-center p-6 border border-cdf-divider bg-cdf-cream rounded-none">
                    <div className="bg-cdf-terracotta w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                      <Heart className="w-8 h-8 text-cdf-white" />
                    </div>
                    <h3 className="text-cdf-brown font-bold text-lg uppercase tracking-wide mb-1">Made with Love</h3>
                    <p className="text-cdf-brown/60 text-sm">Fresh Daily</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={getAnimationClass(aboutAnimation.isVisible, "fadeRight")}>
              <div className="relative">
                <div className="border border-cdf-divider p-4 bg-cdf-white">
                  <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070"
                    alt="Chef cooking"
                    className="w-full transition-transform hover:scale-105"
                  />
                </div>
                <div className={getAnimationClass(aboutAnimation.isVisible, "scale", 1)}>
                  <div className="absolute -bottom-8 -left-8 bg-cdf-terracotta text-cdf-white p-8 shadow-xl transition-transform hover:scale-110 border border-cdf-divider">
                    <div className="text-center">
                      <div className="text-4xl font-bold">15+</div>
                      <div className="text-sm uppercase tracking-wide">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-cdf-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div ref={menuAnimation.ref} className={getAnimationClass(menuAnimation.isVisible, "fadeUp")}>
            <h2 className="text-5xl md:text-6xl font-bold text-cdf-brown mb-8 text-center uppercase tracking-wide">
              Our <span className="text-cdf-terracotta">Menu</span>
            </h2>
            <p className="text-cdf-brown/80 text-xl max-w-4xl mb-20 text-center mx-auto font-light leading-relaxed">
              Explore our diverse menu categories, each offering unique flavors and culinary experiences 
              rooted in authentic Romanian tradition.
            </p>
          </div>

          {/* Menu Tabs */}
          <div className={getAnimationClass(menuAnimation.isVisible, "fadeUp", 1)}>
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {menuTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-10 py-6 font-bold text-lg uppercase tracking-wide transition-all duration-300 border border-cdf-divider ${
                    activeTab === tab.id
                      ? "bg-cdf-terracotta text-cdf-white shadow-lg"
                      : "bg-cdf-white text-cdf-brown hover:bg-cdf-cream"
                  }`}
                >
                  {tab.label}
                  <span className="block text-sm opacity-75 normal-case">{tab.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className={getAnimationClass(menuAnimation.isVisible, "fadeUp", 2)}>
            <div className="bg-cdf-white border border-cdf-divider p-12">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-cdf-brown mb-6 uppercase tracking-wide">{activeTab} Specialties</h3>
                <p className="text-cdf-brown/80 text-lg mb-12 font-light max-w-2xl mx-auto">
                  Our {activeTab} selection features the finest ingredients and expert preparation techniques 
                  passed down through generations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="bg-cdf-cream border border-cdf-divider p-8 text-left">
                      <h4 className="text-cdf-brown font-bold text-xl mb-3 uppercase tracking-wide">
                        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Dish {i + 1}
                      </h4>
                      <p className="text-cdf-brown/70 mb-6 font-light leading-relaxed">
                        Delicious {activeTab} specialty with premium ingredients and expert preparation 
                        that honors traditional Romanian flavors.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-cdf-terracotta font-bold text-2xl">{(15 + i * 3)} Lei</span>
                        <button className="bg-cdf-terracotta hover:bg-cdf-terracotta/90 text-cdf-white px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-300">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Menu Section */}
      <section id="choice" className="py-24 bg-cdf-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div ref={pdfAnimation.ref} className={getAnimationClass(pdfAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-cdf-brown mb-8 uppercase tracking-wide">
                The Choice is <span className="text-cdf-terracotta">Yours</span>
              </h2>
              <p className="text-cdf-brown/80 text-xl max-w-4xl mx-auto font-light leading-relaxed">
                Browse our complete menu and discover all the delicious options we have to offer. 
                Each dish tells a story of Romanian culinary heritage.
              </p>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className={getAnimationClass(pdfAnimation.isVisible, "scale", 1)}>
            <div className="w-full max-w-7xl mx-auto">
              <div className="bg-cdf-cream border border-cdf-divider p-6 shadow-lg">
                <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-cdf-white border border-cdf-divider">
                  <iframe
                    src="/api/menu-pdf"
                    className="w-full h-full border-0"
                    title="Restaurant Menu PDF"
                    style={{
                      minHeight: '400px',
                      background: '#ffffff'
                    }}
                  />
                </div>
                
                <div className="text-center mt-6 text-cdf-brown/70">
                  <p className="text-sm font-light">
                    Having trouble viewing the menu? 
                    <a 
                      href="/api/menu-pdf" 
                      className="text-cdf-terracotta hover:text-cdf-terracotta/80 underline ml-2 font-medium"
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
            <div className="text-center mt-8 sm:hidden">
              <a 
                href="/api/menu-pdf" 
                className="inline-flex items-center bg-cdf-terracotta hover:bg-cdf-terracotta/90 text-cdf-white px-8 py-4 font-semibold uppercase tracking-wide transition-colors duration-300 border border-cdf-terracotta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-cdf-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div ref={contactAnimation.ref} className={getAnimationClass(contactAnimation.isVisible, "fadeUp")}>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-cdf-brown mb-8 uppercase tracking-wide">
                Contact <span className="text-cdf-terracotta">Us</span>
              </h2>
              <p className="text-cdf-brown/80 text-xl max-w-4xl mx-auto font-light leading-relaxed">
                Ready to experience Copt de Fericire? Book your table or get in touch with us today. 
                We look forward to welcoming you to our family.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className={getAnimationClass(contactAnimation.isVisible, "fadeLeft", 1)}>
              <div className="bg-cdf-white border border-cdf-divider p-10">
                <h3 className="text-3xl font-bold text-cdf-brown mb-8 uppercase tracking-wide">Get in Touch</h3>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-cdf-terracotta mr-6 mt-1" />
                    <div>
                      <h4 className="text-cdf-brown font-semibold text-lg uppercase tracking-wide mb-2">Main Location</h4>
                      <p className="text-cdf-brown/70 font-light">123 Main Street, Downtown City</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-cdf-terracotta mr-6 mt-1" />
                    <div>
                      <h4 className="text-cdf-brown font-semibold text-lg uppercase tracking-wide mb-2">Phone</h4>
                      <p className="text-cdf-brown/70 font-light">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-cdf-terracotta mr-6 mt-1" />
                    <div>
                      <h4 className="text-cdf-brown font-semibold text-lg uppercase tracking-wide mb-2">Email</h4>
                      <p className="text-cdf-brown/70 font-light">info@coptdefericire.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-cdf-terracotta mr-6 mt-1" />
                    <div>
                      <h4 className="text-cdf-brown font-semibold text-lg uppercase tracking-wide mb-2">Hours</h4>
                      <p className="text-cdf-brown/70 font-light">Mon-Sun: 11AM - 11PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={getAnimationClass(contactAnimation.isVisible, "fadeRight", 1)}>
              <div className="bg-cdf-white border border-cdf-divider p-10">
                <h3 className="text-3xl font-bold text-cdf-brown mb-8 uppercase tracking-wide">Book a Table</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-cdf-cream text-cdf-brown px-4 py-4 border border-cdf-divider focus:outline-none focus:ring-2 focus:ring-cdf-terracotta font-light"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="bg-cdf-cream text-cdf-brown px-4 py-4 border border-cdf-divider focus:outline-none focus:ring-2 focus:ring-cdf-terracotta font-light"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="date"
                      className="bg-cdf-cream text-cdf-brown px-4 py-4 border border-cdf-divider focus:outline-none focus:ring-2 focus:ring-cdf-terracotta font-light"
                    />
                    <select className="bg-cdf-cream text-cdf-brown px-4 py-4 border border-cdf-divider focus:outline-none focus:ring-2 focus:ring-cdf-terracotta font-light">
                      <option>Select Time</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                      <option>9:00 PM</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="Number of Guests"
                    className="w-full bg-cdf-cream text-cdf-brown px-4 py-4 border border-cdf-divider focus:outline-none focus:ring-2 focus:ring-cdf-terracotta font-light"
                  />
                  <textarea
                    placeholder="Special Requests"
                    rows={4}
                    className="w-full bg-cdf-cream text-cdf-brown px-4 py-4 border border-cdf-divider focus:outline-none focus:ring-2 focus:ring-cdf-terracotta font-light"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-cdf-terracotta hover:bg-cdf-terracotta/90 text-cdf-white py-4 font-bold text-lg uppercase tracking-wide transition-colors duration-300 border border-cdf-terracotta"
                  >
                    BOOK NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
