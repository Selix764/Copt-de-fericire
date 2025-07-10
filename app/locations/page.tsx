"use client"

import {
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Filter,
  Navigation,
  Phone,
  Lock,
  Wifi,
  Car,
  Coffee,
  Waves,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "../contexts/LanguageContext"
import ScrollAnimatedSection from "../components/ScrollAnimatedSection"
import StaggeredScrollAnimation from "../components/StaggeredScrollAnimation"

export default function LocationsPage() {
  const { t } = useLanguage()

  const lockerLocations = [
    {
      id: 1,
      name: "Lake Tahoe Marina Lockers",
      address: "123 Marina Dr, Lake Tahoe, CA 96150",
      city: "Lake Tahoe",
      available: 8,
      total: 12,
      distance: "2.3 miles",
      price: "$25/hour",
      lockerType: "Smart Lockers",
      features: ["Parking Available", "Restrooms", "Cafe Nearby", "WiFi", "24/7 Access"],
      amenities: [
        { icon: <Car className="w-4 h-4" />, name: t("amenities.parking") },
        { icon: <Coffee className="w-4 h-4" />, name: t("amenities.cafe") },
        { icon: <Wifi className="w-4 h-4" />, name: t("amenities.wifi") },
        { icon: <Lock className="w-4 h-4" />, name: t("amenities.secure") },
      ],
      image: "/placeholder.svg?height=200&width=300&text=Smart+Locker+Station+Lake+Tahoe",
      status: "operational",
    },
    {
      id: 2,
      name: "Santa Monica Pier Locker Hub",
      address: "200 Santa Monica Pier, Santa Monica, CA 90401",
      city: "Santa Monica",
      available: 3,
      total: 10,
      distance: "5.7 miles",
      price: "$25/hour",
      lockerType: "Premium Lockers",
      features: ["Beach Access", "Lifeguards", "Equipment Storage", "Shower Facilities"],
      amenities: [
        { icon: <Waves className="w-4 h-4" />, name: t("amenities.beachAccess") },
        { icon: <Lock className="w-4 h-4" />, name: t("amenities.premiumSecurity") },
        { icon: <Coffee className="w-4 h-4" />, name: t("amenities.refreshments") },
      ],
      image: "/placeholder.svg?height=200&width=300&text=Premium+Locker+Hub+Santa+Monica",
      status: "operational",
    },
    {
      id: 3,
      name: "Mission Bay Locker Station",
      address: "2688 E Mission Bay Dr, San Diego, CA 92109",
      city: "San Diego",
      available: 6,
      total: 8,
      distance: "12.1 miles",
      price: "$25/hour",
      lockerType: "Family Lockers",
      features: ["Calm Waters", "Family Friendly", "Picnic Areas", "Large Storage"],
      amenities: [
        { icon: <Car className="w-4 h-4" />, name: t("amenities.familyParking") },
        { icon: <Waves className="w-4 h-4" />, name: t("amenities.calmWaters") },
        { icon: <Lock className="w-4 h-4" />, name: t("amenities.extraLarge") },
      ],
      image: "/placeholder.svg?height=200&width=300&text=Family+Locker+Station+Mission+Bay",
      status: "operational",
    },
    {
      id: 4,
      name: "Russian River Locker Point",
      address: "16215 1st St, Guerneville, CA 95446",
      city: "Guerneville",
      available: 0,
      total: 6,
      distance: "18.4 miles",
      price: "$25/hour",
      lockerType: "Eco Lockers",
      features: ["River Paddling", "Scenic Views", "Wildlife", "Solar Powered"],
      amenities: [
        { icon: <Waves className="w-4 h-4" />, name: t("amenities.riverAccess") },
        { icon: <Lock className="w-4 h-4" />, name: t("amenities.ecoFriendly") },
      ],
      image: "/placeholder.svg?height=200&width=300&text=Eco+Locker+Point+Russian+River",
      status: "maintenance",
    },
    {
      id: 5,
      name: "Golden Gate Park Lockers",
      address: "1000 Great Highway, San Francisco, CA 94121",
      city: "San Francisco",
      available: 12,
      total: 15,
      distance: "8.9 miles",
      price: "$25/hour",
      lockerType: "Urban Lockers",
      features: ["City Views", "Public Transport", "Bike Racks", "Food Trucks"],
      amenities: [
        { icon: <Car className="w-4 h-4" />, name: t("amenities.transitAccess") },
        { icon: <Coffee className="w-4 h-4" />, name: t("amenities.foodNearby") },
        { icon: <Lock className="w-4 h-4" />, name: t("amenities.highSecurity") },
        { icon: <Wifi className="w-4 h-4" />, name: t("amenities.freeWifi") },
      ],
      image: "/placeholder.svg?height=200&width=300&text=Urban+Locker+Station+Golden+Gate",
      status: "operational",
    },
    {
      id: 6,
      name: "Monterey Bay Locker Terminal",
      address: "886 Cannery Row, Monterey, CA 93940",
      city: "Monterey",
      available: 4,
      total: 8,
      distance: "25.3 miles",
      price: "$25/hour",
      lockerType: "Marine Lockers",
      features: ["Marine Sanctuary", "Seal Watching", "Aquarium Nearby", "Weather Protected"],
      amenities: [
        { icon: <Waves className="w-4 h-4" />, name: t("amenities.marineAccess") },
        { icon: <Lock className="w-4 h-4" />, name: t("amenities.weatherProof") },
        { icon: <Coffee className="w-4 h-4" />, name: t("amenities.touristArea") },
      ],
      image: "/placeholder.svg?height=200&width=300&text=Marine+Locker+Terminal+Monterey",
      status: "operational",
    },
  ]

  return (
    <div className="min-h-screen bg-[#faf2e1]">
      {/* Hero Section - Locations Specific */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
        {/* Background Image - Placeholder for locations-specific image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: "url('/images/locations-hero.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container-custom">
          <div className="flex items-center justify-center h-full text-center">
            {/* Centered Content */}
            <div className="text-white max-w-6xl w-full animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-left">
                {t("locations.hero.title")}{" "}
                <span className="text-[#e85a4f] animate-glow">{t("locations.hero.spot")}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed mx-auto max-w-3xl text-white/90 animate-slide-in-right animation-delay-300">
                {t("locations.hero.subtitle")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
                <Link
                  href="#map"
                  className="bg-[#e85a4f] hover:bg-[#d4472f] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center animate-pulse-glow"
                >
                  {t("locations.hero.viewMap")}
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center hover:animate-shake"
                >
                  {t("locations.hero.getHelp")}
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

      {/* Main Content */}
      <div className="container-custom py-12 scroll-mt-24" id="map">
        {/* Interactive Map - Centered */}
        <ScrollAnimatedSection animation="scaleIn" className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-[#FDDAC0] to-[#FFF6E6] flex items-center justify-center relative">
              <div className="text-center">
                <Lock className="w-16 h-16 text-[#E8563D] mx-auto mb-4 animate-float" />
                <p className="text-[#111C2F] text-lg font-semibold">{t("locations.map.title")}</p>
                <p className="text-[#111C2F]/60">{t("locations.map.subtitle")}</p>
                <button className="mt-4 bg-[#E8563D] text-white px-6 py-2 rounded-lg hover:bg-[#d4472f] transition-colors animate-pulse-glow">
                  {t("locations.map.enableLocation")}
                </button>
              </div>
              {/* Map pins simulation */}
              <div className="absolute top-16 left-20 w-3 h-3 bg-[#E8563D] rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-24 w-3 h-3 bg-[#E8563D] rounded-full animate-pulse animation-delay-300"></div>
              <div className="absolute bottom-20 left-32 w-3 h-3 bg-[#E8563D] rounded-full animate-pulse animation-delay-600"></div>
              <div className="absolute bottom-24 right-16 w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-900"></div>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Quick Stats */}
        <StaggeredScrollAnimation
          animation="slideUp"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-[#E8563D] mb-2">63</div>
            <div className="text-[#111C2F]/70">{t("locations.stats.smartLockers")}</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-500 mb-2">47</div>
            <div className="text-[#111C2F]/70">{t("locations.stats.availableNow")}</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-[#E8563D] mb-2">24/7</div>
            <div className="text-[#111C2F]/70">{t("locations.stats.alwaysOpen")}</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-[#E8563D] mb-2">6</div>
            <div className="text-[#111C2F]/70">{t("locations.stats.cities")}</div>
          </div>
        </StaggeredScrollAnimation>

        {/* Filters */}
        <ScrollAnimatedSection
          animation="slideUp"
          className="bg-white rounded-2xl shadow-lg p-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-[#E8563D] mr-2 animate-float" />
            <h3 className="text-lg font-semibold text-[#111C2F]">{t("locations.filters.title")}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="border border-[#FDDAC0] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#E8563D] focus:border-[#E8563D] bg-[#faf2e1] transition-all duration-300">
              <option>{t("locations.filters.allCities")}</option>
              <option>Lake Tahoe</option>
              <option>Santa Monica</option>
              <option>San Diego</option>
              <option>San Francisco</option>
              <option>Monterey</option>
            </select>
            <select className="border border-[#FDDAC0] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#E8563D] focus:border-[#E8563D] bg-[#faf2e1] transition-all duration-300">
              <option>{t("locations.filters.allTypes")}</option>
              <option>Smart Lockers</option>
              <option>Premium Lockers</option>
              <option>Family Lockers</option>
              <option>Eco Lockers</option>
            </select>
            <select className="border border-[#FDDAC0] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#E8563D] focus:border-[#E8563D] bg-[#faf2e1] transition-all duration-300">
              <option>{t("locations.filters.allStatus")}</option>
              <option>{t("locations.filters.availableNow")}</option>
              <option>{t("locations.filters.limited")}</option>
              <option>{t("locations.filters.maintenance")}</option>
            </select>
            <button className="bg-[#E8563D] text-white px-4 py-2 rounded-lg hover:bg-[#d4472f] transition-colors font-semibold animate-pulse-glow">
              {t("locations.filters.apply")}
            </button>
          </div>
        </ScrollAnimatedSection>

        {/* Nearby Locker Stations - 3xY Grid */}
        <div className="max-w-6xl mx-auto">
          <ScrollAnimatedSection animation="slideUp" className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#111C2F]">{t("locations.nearby.title")}</h2>
            <button className="text-[#E8563D] hover:text-[#d4472f] transition-colors flex items-center">
              <Navigation className="w-4 h-4 mr-1 animate-bounce-gentle" />
              {t("locations.nearby.sortDistance")}
            </button>
          </ScrollAnimatedSection>

          <StaggeredScrollAnimation
            animation="slideUp"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {lockerLocations.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#FDDAC0]/30 transform hover:scale-105"
              >
                <div className="relative h-48">
                  <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-[#E8563D] font-bold">{location.price}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        location.status === "operational"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {location.status === "operational"
                        ? t("locations.locker.operational")
                        : t("locations.locker.maintenance")}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#111C2F]">{location.name}</h3>
                      <p className="text-sm text-[#E8563D] font-semibold">{location.lockerType}</p>
                    </div>
                    <div className="flex items-center">
                      {location.available > 0 ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mr-1 animate-check" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mr-1" />
                      )}
                      <span
                        className={`text-sm font-semibold ${location.available > 0 ? "text-green-600" : "text-red-500"}`}
                      >
                        {location.available > 0
                          ? `${location.available} ${t("locations.locker.available")}`
                          : t("locations.locker.fullyBooked")}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#111C2F]/70 mb-3">{location.address}</p>

                  <div className="flex items-center justify-between mb-4 text-sm text-[#111C2F]/60">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {location.distance}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {t("locations.locker.access247")}
                    </div>
                    <div className="flex items-center">
                      <Lock className="w-4 h-4 mr-1" />
                      {location.available}/{location.total} {t("locations.locker.lockers")}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {location.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-[#FDDAC0] text-[#111C2F] px-2 py-1 rounded text-xs"
                      >
                        {amenity.icon}
                        <span className="ml-1">{amenity.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {location.available > 0 && location.status === "operational" ? (
                      <button className="flex-1 bg-[#E8563D] text-white py-2 px-4 rounded-lg hover:bg-[#d4472f] transition-colors font-semibold animate-pulse-glow">
                        {t("locations.locker.unlock")}
                      </button>
                    ) : (
                      <button
                        className="flex-1 bg-gray-300 text-gray-500 py-2 px-4 rounded-lg cursor-not-allowed"
                        disabled
                      >
                        {location.status === "maintenance"
                          ? t("locations.locker.underMaintenance")
                          : t("locations.locker.fullyBooked")}
                      </button>
                    )}
                    <Link
                      href={`/locations/${location.id}`}
                      className="bg-[#FFF6E6] text-[#E8563D] border border-[#E8563D] py-2 px-4 rounded-lg hover:bg-[#FDDAC0] transition-colors font-semibold hover:animate-wiggle"
                    >
                      {t("locations.locker.details")}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredScrollAnimation>

          {/* Contact Support */}
          <ScrollAnimatedSection
            animation="scaleIn"
            className="bg-[#E8563D] text-white rounded-2xl p-6 text-center mt-12"
          >
            <Phone className="w-8 h-8 mx-auto mb-3 animate-bounce-gentle" />
            <h3 className="text-lg font-bold mb-2">{t("locations.support.title")}</h3>
            <p className="mb-4 text-white/90">{t("locations.support.subtitle")}</p>
            <button className="bg-white text-[#E8563D] px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold hover:animate-shake">
              {t("locations.support.report")}
            </button>
          </ScrollAnimatedSection>
        </div>
      </div>
    </div>
  )
}
