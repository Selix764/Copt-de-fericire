"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "RO" | "EN"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  RO: {
    // Header
    "header.locations": "Locații",
    "header.contact": "Contact",
    "header.findLocker": "Găsește Locker",
    "header.downloadApp": "Descarcă App",
    "header.switchTo": "Schimbă la",
    "header.english": "Engleză",
    "header.romanian": "Română",

    // Homepage Hero
    "hero.title": "Găsește-ți echilibrul",
    "hero.subtitle":
      "Sari peste bătaia de cap cu închirierea. Lockerele noastre sigure îți oferă acces instant la plăci de paddleboard premium 24/7. Experimentează libertatea pe apă.",
    "hero.findLocker": "Găsește un Locker",
    "hero.contactUs": "Contactează-ne",

    // How It Works
    "howItWorks.title": "Cum funcționează",
    "howItWorks.subtitle": "Trei pași simpli către aventura ta perfectă cu paddleboard",
    "howItWorks.step1.title": "Găsește Lockerul Tău",
    "howItWorks.step1.description":
      "Localizează cel mai apropiat locker securizat pentru paddleboard folosind aplicația noastră inteligentă",
    "howItWorks.step2.title": "Deblochează Instant",
    "howItWorks.step2.description": "Scanează codul QR cu telefonul - SUP-ul tău premium este gata în câteva secunde",
    "howItWorks.step3.title": "Vâslește și Bucură-te",
    "howItWorks.step3.description": "Ieși pe apă imediat, returnează la orice locație când ai terminat",

    // Benefits
    "benefits.title": "De ce să alegi",
    "benefits.subtitle": "Experimentează libertatea și securitatea închirierilor automate de paddleboard",
    "benefits.quickRentals.title": "Închirieri Rapide",
    "benefits.quickRentals.subtitle": "aventuri super",
    "benefits.quickRentals.description":
      "Ajunge pe apă în mai puțin de 60 de secunde cu sistemul nostru de lockere inteligente",
    "benefits.onDemand.title": "Închiriază la Cerere",
    "benefits.onDemand.subtitle": "vibrații bune",
    "benefits.onDemand.description": "Nu sunt necesare rezervări - SUP-uri premium disponibile 24/7 la îndemâna ta",
    "benefits.liveYourMoment.title": "Trăiește-ți Momentul",
    "benefits.liveYourMoment.subtitle": "plutește prin natură",
    "benefits.liveYourMoment.description":
      "Experimentează libertatea pe apă cu echipamentele noastre premium și locațiile sigure",

    // Location Section
    "location.title": "Unde găsești",
    "location.subtitle": "Acum disponibil în peste 50 de locații premium!",
    "location.expanding.title": "Mereu în Expansiune",
    "location.expanding.subtitle": "Mai Multe Locații",
    "location.expanding.description":
      "Adăugăm constant noi locații de lockere sigure în cele mai bune puncte de pe malul apei. Experiențele SUP premium sunt acum disponibile în locurile tale favorite de pe plaje și lacuri.",
    "location.viewAll": "Vezi Toate Locațiile",

    // Pricing
    "pricing.title": "Prețuri Simple",
    "pricing.subtitle": "Tarife transparente fără taxe ascunse. Plătești doar pentru ceea ce folosești.",
    "pricing.hourly": "Pe Oră",
    "pricing.hourly.price": "25 lei",
    "pricing.hourly.period": "pe oră",
    "pricing.halfDay": "Jumătate de Zi",
    "pricing.halfDay.price": "80 lei",
    "pricing.halfDay.period": "4 ore",
    "pricing.fullDay": "Zi Întreagă",
    "pricing.fullDay.price": "120 lei",
    "pricing.fullDay.period": "8 ore",
    "pricing.features.premiumBoard": "Placă SUP premium",
    "pricing.features.safetyEquipment": "Echipament de siguranță",
    "pricing.features.access247": "Acces 24/7",
    "pricing.features.save20": "Economisești 20 lei",
    "pricing.features.save80": "Economisești 80 lei",
    "pricing.startAdventure": "Începe Aventura",

    // CTA Section
    "cta.title": "Gata să Vâslești?",
    "cta.subtitle":
      "Descarcă aplicația noastră și descoperă libertatea închirierilor instant de SUP. Următoarea ta aventură este la doar un tap distanță.",
    "cta.findLocker": "Găsește Lockerul Tău",
    "cta.downloadApp": "Descarcă App",
    "cta.ios": "iOS și Android",
    "cta.secure": "Sigur și Asigurat",
    "cta.support": "Suport 24/7",

    // Locations Page
    "locations.hero.title": "Descoperă-ți",
    "locations.hero.spot": "locul",
    "locations.hero.subtitle":
      "Găsește lockerul perfect pentru paddleboard lângă tine. De la lacuri liniștite la plaje oceanice, următoarea ta aventură te așteaptă la una dintre locațiile noastre premium.",
    "locations.hero.viewMap": "Vezi Harta",
    "locations.hero.getHelp": "Obține Ajutor",
    "locations.map.title": "Hartă Interactivă Lockere",
    "locations.map.subtitle": "Vezi toate stațiile de lockere inteligente în timp real",
    "locations.map.enableLocation": "Activează Serviciile de Localizare",
    "locations.stats.smartLockers": "Lockere Inteligente",
    "locations.stats.availableNow": "Disponibile Acum",
    "locations.stats.alwaysOpen": "Mereu Deschis",
    "locations.stats.cities": "Orașe",
    "locations.filters.title": "Găsește Lockerul Tău Perfect",
    "locations.filters.allCities": "Toate Orașele",
    "locations.filters.allTypes": "Toate Tipurile de Lockere",
    "locations.filters.allStatus": "Toate Statusurile",
    "locations.filters.availableNow": "Disponibil Acum",
    "locations.filters.limited": "Disponibilitate Limitată",
    "locations.filters.maintenance": "Mentenanță",
    "locations.filters.apply": "Aplică Filtrele",
    "locations.nearby.title": "Stații de Lockere din Apropiere",
    "locations.nearby.sortDistance": "Sortează după distanță",
    "locations.locker.available": "Disponibil",
    "locations.locker.fullyBooked": "Complet Rezervat",
    "locations.locker.operational": "Operațional",
    "locations.locker.maintenance": "Mentenanță",
    "locations.locker.access247": "Acces 24/7",
    "locations.locker.lockers": "Lockere",
    "locations.locker.unlock": "Deblochează Lockerul",
    "locations.locker.underMaintenance": "În Mentenanță",
    "locations.locker.details": "Detalii",
    "locations.support.title": "Probleme cu Lockerul?",
    "locations.support.subtitle": "Echipa noastră de suport tehnic este disponibilă 24/7",
    "locations.support.report": "Raportează Problema",

    // Contact Page
    "contact.hero.title": "Suntem aici să",
    "contact.hero.help": "ajutăm",
    "contact.hero.subtitle":
      "Ai întrebări despre lockerele noastre inteligente? Ai nevoie de suport tehnic? Echipa noastră dedicată este gata să te asiste 24/7.",
    "contact.hero.sendMessage": "Trimite Mesaj",
    "contact.hero.callNow": "Sună Acum",
    "contact.form.title": "Trimite-ne un Mesaj",
    "contact.form.firstName": "Prenume",
    "contact.form.lastName": "Nume",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefon",
    "contact.form.subject": "Subiect",
    "contact.form.message": "Mesaj",
    "contact.form.placeholder": "Spune-ne cum te putem ajuta...",
    "contact.form.send": "Trimite Mesajul",
    "contact.form.subjects.general": "Întrebare Generală",
    "contact.form.subjects.technical": "Suport Tehnic",
    "contact.form.subjects.partnership": "Oportunitate de Parteneriat",
    "contact.form.subjects.locker": "Probleme cu Lockerul",
    "contact.form.subjects.other": "Altele",
    "contact.info.title": "Intră în Contact",
    "contact.info.headquarters": "Sediul Central",
    "contact.info.phone": "Telefon",
    "contact.info.email": "Email",
    "contact.info.hours": "Program de Lucru",
    "contact.info.schedule": "Luni - Vineri: 8:00 - 18:00\nSâmbătă: 9:00 - 16:00\nDuminică: Închis",
    "contact.map.title": "Hartă Interactivă",
    "contact.help.title": "Ajutor Rapid",
    "contact.help.subtitle": "Cauți răspunsuri rapide? Verifică întrebările noastre cele mai comune:",
    "contact.help.howToRent": "Cum închiriez un paddleboard?",
    "contact.help.lockerIssues": "Ce fac dacă am probleme cu un locker?",
    "contact.help.technical": "Cum raportez o problemă tehnică?",
    "contact.help.partnership": "Oportunități de parteneriat",

    // Footer
    "footer.description":
      "Cea mai inteligentă modalitate de a închiria paddleboard-uri. Acces instant, echipament premium, libertate totală.",
    "footer.quickAccess": "Acces Rapid",
    "footer.findLocations": "Găsește Locații",
    "footer.contact": "Contact",
    "footer.getApp": "Obține App-ul",
    "footer.downloadOn": "Descarcă pe",
    "footer.appStore": "App Store",
    "footer.getItOn": "Obține pe",
    "footer.googlePlay": "Google Play",
    "footer.rights": "Toate drepturile rezervate.",

    // Amenities
    "amenities.parking": "Parcare",
    "amenities.cafe": "Cafenea",
    "amenities.wifi": "WiFi",
    "amenities.secure": "Sigur",
    "amenities.beachAccess": "Acces la Plajă",
    "amenities.premiumSecurity": "Securitate Premium",
    "amenities.refreshments": "Răcoritoare",
    "amenities.familyParking": "Parcare Familie",
    "amenities.calmWaters": "Ape Calme",
    "amenities.extraLarge": "Extra Mare",
    "amenities.riverAccess": "Acces la Râu",
    "amenities.ecoFriendly": "Eco-Friendly",
    "amenities.transitAccess": "Acces Transport",
    "amenities.foodNearby": "Mâncare în Apropiere",
    "amenities.highSecurity": "Securitate Înaltă",
    "amenities.freeWifi": "WiFi Gratuit",
    "amenities.marineAccess": "Acces Marin",
    "amenities.weatherProof": "Rezistent la Vreme",
    "amenities.touristArea": "Zonă Turistică",
  },
  EN: {
    // Header
    "header.locations": "Locations",
    "header.contact": "Contact",
    "header.findLocker": "Find Locker",
    "header.downloadApp": "Download App",
    "header.switchTo": "Switch to",
    "header.english": "English",
    "header.romanian": "Romanian",

    // Homepage Hero
    "hero.title": "Find your balance",
    "hero.subtitle":
      "Skip the rental shop hassle. Our secure lockers give you instant access to premium paddleboards 24/7. Experience freedom on the water.",
    "hero.findLocker": "Find a Locker",
    "hero.contactUs": "Contact Us",

    // How It Works
    "howItWorks.title": "How pddle Works",
    "howItWorks.subtitle": "Three simple steps to your perfect paddleboard adventure",
    "howItWorks.step1.title": "Find Your Locker",
    "howItWorks.step1.description": "Locate the nearest secure paddleboard locker using our smart app",
    "howItWorks.step2.title": "Unlock Instantly",
    "howItWorks.step2.description": "Scan QR code with your phone - your premium SUP is ready in seconds",
    "howItWorks.step3.title": "Paddle & Enjoy",
    "howItWorks.step3.description": "Hit the water immediately, return to any location when you're done",

    // Benefits
    "benefits.title": "Why Choose pddle?",
    "benefits.subtitle": "Experience the freedom and security of automated paddleboard rentals",
    "benefits.quickRentals.title": "Quick Rentals",
    "benefits.quickRentals.subtitle": "super adventures",
    "benefits.quickRentals.description": "Get on the water in under 60 seconds with our smart locker system",
    "benefits.onDemand.title": "Rent on Demand",
    "benefits.onDemand.subtitle": "good vibes",
    "benefits.onDemand.description": "No reservations needed - premium SUPs available 24/7 at your fingertips",
    "benefits.liveYourMoment.title": "Live Your Moment",
    "benefits.liveYourMoment.subtitle": "float through nature",
    "benefits.liveYourMoment.description":
      "Experience freedom on the water with our premium equipment and secure locations",

    // Location Section
    "location.title": "Where you find pddle",
    "location.subtitle": "Now available at 50+ premium locations!",
    "location.expanding.title": "Always Expanding",
    "location.expanding.subtitle": "More Locations",
    "location.expanding.description":
      "We're constantly adding new secure locker locations at the best waterfront spots. Premium SUP experiences are now available at your favorite beaches and lakes.",
    "location.viewAll": "View All Locations",

    // Pricing
    "pricing.title": "Simple Pricing",
    "pricing.subtitle": "Transparent rates with no hidden fees. Pay only for what you use.",
    "pricing.hourly": "Hourly",
    "pricing.hourly.price": "$25",
    "pricing.hourly.period": "per hour",
    "pricing.halfDay": "Half Day",
    "pricing.halfDay.price": "$80",
    "pricing.halfDay.period": "4 hours",
    "pricing.fullDay": "Full Day",
    "pricing.fullDay.price": "$120",
    "pricing.fullDay.period": "8 hours",
    "pricing.features.premiumBoard": "Premium SUP board",
    "pricing.features.safetyEquipment": "Safety equipment",
    "pricing.features.access247": "24/7 access",
    "pricing.features.save20": "Save $20",
    "pricing.features.save80": "Save $80",
    "pricing.startAdventure": "Start Your Adventure",

    // CTA Section
    "cta.title": "Ready to Paddle?",
    "cta.subtitle":
      "Download our app and discover the freedom of instant SUP rentals. Your next adventure is just a tap away.",
    "cta.findLocker": "Find Your Locker",
    "cta.downloadApp": "Download App",
    "cta.ios": "iOS & Android",
    "cta.secure": "Secure & Insured",
    "cta.support": "24/7 Support",

    // Locations Page
    "locations.hero.title": "Discover your",
    "locations.hero.spot": "spot",
    "locations.hero.subtitle":
      "Find the perfect paddleboard locker near you. From serene lakes to ocean beaches, your next adventure is waiting at one of our premium locations.",
    "locations.hero.viewMap": "View Map",
    "locations.hero.getHelp": "Get Help",
    "locations.map.title": "Interactive Locker Map",
    "locations.map.subtitle": "View all smart locker stations in real-time",
    "locations.map.enableLocation": "Enable Location Services",
    "locations.stats.smartLockers": "Smart Lockers",
    "locations.stats.availableNow": "Available Now",
    "locations.stats.alwaysOpen": "Always Open",
    "locations.stats.cities": "Cities",
    "locations.filters.title": "Find Your Perfect Locker",
    "locations.filters.allCities": "All Cities",
    "locations.filters.allTypes": "All Locker Types",
    "locations.filters.allStatus": "All Status",
    "locations.filters.availableNow": "Available Now",
    "locations.filters.limited": "Limited Availability",
    "locations.filters.maintenance": "Maintenance",
    "locations.filters.apply": "Apply Filters",
    "locations.nearby.title": "Nearby Locker Stations",
    "locations.nearby.sortDistance": "Sort by distance",
    "locations.locker.available": "Available",
    "locations.locker.fullyBooked": "Fully Booked",
    "locations.locker.operational": "Operational",
    "locations.locker.maintenance": "Maintenance",
    "locations.locker.access247": "24/7 Access",
    "locations.locker.lockers": "Lockers",
    "locations.locker.unlock": "Unlock Locker",
    "locations.locker.underMaintenance": "Under Maintenance",
    "locations.locker.details": "Details",
    "locations.support.title": "Locker Issues?",
    "locations.support.subtitle": "Our technical support team is available 24/7",
    "locations.support.report": "Report Issue",

    // Contact Page
    "contact.hero.title": "We're here to",
    "contact.hero.help": "help",
    "contact.hero.subtitle":
      "Have questions about our smart lockers? Need technical support? Our dedicated team is ready to assist you 24/7.",
    "contact.hero.sendMessage": "Send Message",
    "contact.hero.callNow": "Call Now",
    "contact.form.title": "Send us a Message",
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.placeholder": "Tell us how we can help you...",
    "contact.form.send": "Send Message",
    "contact.form.subjects.general": "General Inquiry",
    "contact.form.subjects.technical": "Technical Support",
    "contact.form.subjects.partnership": "Partnership Opportunity",
    "contact.form.subjects.locker": "Locker Issues",
    "contact.form.subjects.other": "Other",
    "contact.info.title": "Get in Touch",
    "contact.info.headquarters": "Headquarters",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.info.schedule": "Monday - Friday: 8:00 AM - 6:00 PM PST\nSaturday: 9:00 AM - 4:00 PM PST\nSunday: Closed",
    "contact.map.title": "Interactive Map",
    "contact.help.title": "Quick Help",
    "contact.help.subtitle": "Looking for quick answers? Check out our most common questions:",
    "contact.help.howToRent": "How do I rent a paddleboard?",
    "contact.help.lockerIssues": "What if I have issues with a locker?",
    "contact.help.technical": "How do I report a technical issue?",
    "contact.help.partnership": "Partnership opportunities",

    // Footer
    "footer.description": "The smartest way to rent paddleboards. Instant access, premium equipment, total freedom.",
    "footer.quickAccess": "Quick Access",
    "footer.findLocations": "Find Locations",
    "footer.contact": "Contact",
    "footer.getApp": "Get the App",
    "footer.downloadOn": "Download on",
    "footer.appStore": "App Store",
    "footer.getItOn": "Get it on",
    "footer.googlePlay": "Google Play",
    "footer.rights": "All rights reserved.",

    // Amenities
    "amenities.parking": "Parking",
    "amenities.cafe": "Cafe",
    "amenities.wifi": "WiFi",
    "amenities.secure": "Secure",
    "amenities.beachAccess": "Beach Access",
    "amenities.premiumSecurity": "Premium Security",
    "amenities.refreshments": "Refreshments",
    "amenities.familyParking": "Family Parking",
    "amenities.calmWaters": "Calm Waters",
    "amenities.extraLarge": "Extra Large",
    "amenities.riverAccess": "River Access",
    "amenities.ecoFriendly": "Eco-Friendly",
    "amenities.transitAccess": "Transit Access",
    "amenities.foodNearby": "Food Nearby",
    "amenities.highSecurity": "High Security",
    "amenities.freeWifi": "Free WiFi",
    "amenities.marineAccess": "Marine Access",
    "amenities.weatherProof": "Weather Proof",
    "amenities.touristArea": "Tourist Area",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("RO")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("pddle-language") as Language
    if (savedLanguage && (savedLanguage === "RO" || savedLanguage === "EN")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("pddle-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
