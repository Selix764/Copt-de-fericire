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
      <section className="relative h-screen flex items-center bg-gray-900 overflow-hidden -mt-20 pt-20">
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
                  href="#menu"
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
      <section id="about" className="py-20 bg-gray-900">
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

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={menuAnimation.ref} className={getAnimationClass(menuAnimation.isVisible, "fadeUp")}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-red-500">Menu</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mb-16">
              Explore our diverse menu categories, each offering unique flavors and culinary experiences.
            </p>
          </div>

          {/* Menu Tabs */}
          <div className={getAnimationClass(menuAnimation.isVisible, "fadeUp", 1)}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {menuTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {tab.label}
                  <span className="block text-sm opacity-75">{tab.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className={getAnimationClass(menuAnimation.isVisible, "fadeUp", 2)}>
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4 capitalize">{activeTab} Specialties</h3>
                <p className="text-gray-300 text-lg mb-8">
                  Our {activeTab} selection features the finest ingredients and expert preparation techniques.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="bg-gray-900 rounded-lg p-6 text-left">
                      <h4 className="text-white font-bold text-lg mb-2">
                        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Dish {i + 1}
                      </h4>
                      <p className="text-gray-400 mb-3">
                        Delicious {activeTab} specialty with premium ingredients and expert preparation.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-red-500 font-bold text-xl">${(15 + i * 3).toFixed(0)}</span>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-semibold">
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
      <section id="choice" className="py-20 bg-gray-800">
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
              <div className="bg-gray-900 rounded-xl p-2 sm:p-4 shadow-2xl">
                <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-white">
                  <iframe
                    src="/api/menu-pdf"
                    className="w-full h-full rounded-lg border-0"
                    title="Restaurant Menu PDF"
                    style={{
                      minHeight: '400px',
                      background: '#ffffff'
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={contactAnimation.ref} className={getAnimationClass(contactAnimation.isVisible, "fadeUp")}>
            <div className="text-left mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact <span className="text-red-500">Us</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl">
                Ready to experience HotBite? Book your table or get in touch with us today.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={getAnimationClass(contactAnimation.isVisible, "fadeLeft", 1)}>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-red-500 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold">Main Location</h4>
                    <p className="text-gray-300">123 Main Street, Downtown City</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-red-500 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-red-500 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">info@hotbiterestaurant.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-red-500 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold">Hours</h4>
                    <p className="text-gray-300">Mon-Sun: 11AM - 11PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={getAnimationClass(contactAnimation.isVisible, "fadeRight", 1)}>
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Book a Table</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="date"
                      className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <select className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
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
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <textarea
                    placeholder="Special Requests"
                    rows={4}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold text-lg transition-colors duration-300"
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
