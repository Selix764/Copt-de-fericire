"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "ro"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ro: {
    // Hero Section
    "hero.title": "COPT DE FERICIRE",
    "hero.subtitle": "Savurează tradițiile culinare românești într-un ambient cald și primitor",
    "hero.restaurant": "Restaurant",
    
    // Story Section
    "story.header": "Povestea Noastră",
    "story.ourStory": "Povestea Noastră",
    "story.paragraph1": "Copt de Fericire este mai mult decât un restaurant – este o călătorie prin tradițiile culinare românești. Fiecare preparat este gătit cu pasiune și respect pentru rețetele transmise din generație în generație.",
    "story.paragraph2": "Folosim doar ingrediente proaspete și de calitate superioară, respectând metodele tradiționale de preparare care fac din fiecare masă o experiență de neuitat.",
    "story.tagline": "Unde tradiția întâlnește excelența culinară",
    "story.awardWinning": "Premiat",
    "story.awardDesc": "Cel mai bun restaurant românesc 2023",
    "story.expertChefs": "Chefi Experți",
    "story.expertDesc": "15+ Ani de Experiență",
    "story.madeWithLove": "Făcut cu Dragoste",
    "story.loveDesc": "Proaspăt Zilnic",
    "story.yearsExperience": "Ani de Excelență",
    
    // Menu Section
    "menu.header": "Meniul Nostru",
    "menu.subtitle": "Explorează Meniul Nostru Autentic",
    "menu.description": "Răsfoiește meniul nostru complet și descoperă toate delicioasele preparate românești pe care le avem de oferit.",
    "menu.appetizers": "Aperitive Tradiționale",
    "menu.mainCourses": "Feluri Principale",
    "menu.desserts": "Deserturi",
    "menu.viewFullMenu": "Vezi Meniul Complet",
    "menu.downloadMenu": "Descarcă Meniul Complet",
    "menu.troubleViewing": "Probleme cu vizualizarea meniului?",
    "menu.openDirectly": "Deschide PDF-ul direct",
    "currency": "RON",
    
    // Menu Items - Appetizers
    "menu.items.salataBoef": "Salată de Boeuf",
    "menu.descriptions.salataBoef": "Salată tradițională cu legume fierte, carne de vită și maioneză",
    "menu.items.papanasi": "Papanași cu Smântână",
    "menu.descriptions.papanasi": "Gogoși tradiționale servite cu smântână și dulceață de vișine",
    "menu.items.mici": "Mici cu Muștar",
    "menu.descriptions.mici": "Cârnăciori tradițional preparați pe grătar, serviți cu muștar și pâine",
    "menu.items.sarmale": "Sarmale cu Mămăligă",
    "menu.descriptions.sarmale": "Varză umplută cu carne de porc și orez, servită cu mămăligă și smântână",
    
    // Menu Items - Main Courses
    "menu.items.schnitzel": "Șnițel Vienez",
    "menu.descriptions.schnitzel": "Cotlet de porc pane, servit cu cartofi prăjiți și salată de varză",
    "menu.items.gulas": "Gulaș Unguresc",
    "menu.descriptions.gulas": "Tocană de vită cu paprica, servită cu găluște de cartofi",
    "menu.items.papricash": "Papricaș de Pui",
    "menu.descriptions.papricash": "Pui în sos de paprica cu smântână, servit cu găluște de făină",
    "menu.items.tochitura": "Tochitură Moldovenească",
    "menu.descriptions.tochitura": "Preparat tradițional cu carne de porc, cârnați și ou, servit cu mămăligă",
    
    // Menu Items - Desserts
    "menu.items.cozonac": "Cozonac de Casă",
    "menu.descriptions.cozonac": "Cozonac tradițional cu nucă și rahat, preparat după rețeta bunicii",
    "menu.items.mucenici": "Mucenici Moldovenești",
    "menu.descriptions.mucenici": "Figuri tradiționale în lapte dulce cu nucă și scorțișoară",
    "menu.items.amandine": "Prăjitură Amandine",
    "menu.descriptions.amandine": "Blat cu migdale acoperit cu ciocolată și glazură fondantă",
    "menu.items.cremaBurnover": "Cremă de Zahăr Ars",
    "menu.descriptions.cremaBurnover": "Desert cremos cu zahăr caramelizat și aromă de vanilie",
    
    // Products Section
    "products.header": "Produsele Noastre",
    "products.title": "Cele Mai Populare Preparate",
    "products.subtitle": "Descoperă cele mai îndrăgite preparate ale clienților noștri, gătite cu ingrediente proaspete și dragoste.",
    "products.cheesecake.title": "Cheesecake de Casă",
    "products.cheesecake.description": "Desertul nostru emblematic - un cheesecake cremos și delicios care îți va cuceri inima la prima degustare.",
    "products.meatyPotato.title": "Cartof Copt cu Pui",
    "products.meatyPotato.description": "Pentru iubitorii de carne - cartof copt pufos cu bucăți suculente de pui și sos aromat, perfect pentru o masă consistentă.",
    "products.veganPotato.title": "Cartof Copt cu Tofu",
    "products.veganPotato.description": "Opțiunea noastră vegană delicioasă - cartof copt cu tofu aromat și legume proaspete, plin de savoare și nutrienți.",
    
    // Locations Section
    "locations.header": "Locațiile Noastre",
    "locations.subtitle": "Găsește un Copt de Fericire în Apropierea Ta!",
    "locations.getDirections": "Obține Direcții",
    "locations.central": "Restaurant Central",
    "locations.centralAddress": "Strada Principală nr. 123, București, Sector 1",
    "locations.north": "Sucursala Nord",
    "locations.northAddress": "Bulevardul Aviatorilor nr. 45, București, Sector 1",
    "locations.oldCenter": "Centrul Vechi",
    "locations.oldCenterAddress": "Strada Lipscani nr. 78, București, Sector 3",
    
    // Social Media Section
    "social.header": "Social Media",
    "social.title": "Urmărește-ne & Rămâi Conectat",
    "social.description": "Primește cele mai recente actualizări, oferte speciale și fotografii delicioase!",
    
    // Contact Section
    "contact.header": "Contactează-ne",
    "contact.restaurantDetails": "Detalii Restaurant",
    "contact.addressTitle": "Adresa",
    "contact.address": "Strada Principală nr. 123\nBucurești, Sector 1",
    "contact.phoneTitle": "Telefon",
    "contact.phone": "+40 721 234 567",
    "contact.hoursTitle": "Program",
    "contact.hours": "Luni - Duminică\n11:00 - 23:00",
    "contact.reserveTable": "Rezervă o Masă",
    "contact.firstName": "Prenume",
    "contact.lastName": "Nume",
    "contact.email": "Email",
    "contact.phoneNumber": "Număr de Telefon",
    "contact.message": "Mesaj",
    "contact.sendMessage": "Trimite Mesajul",
    "contact.messagePlaceholder": "Scrie mesajul tău...",
    
    // Footer
    "footer.tagline": "Unde fiecare masă devine o sărbătoare a tradițiilor românești",
    "footer.followUs": "Urmărește-ne",
    "footer.pages": "Pagini",
    "footer.about": "Despre",
    "footer.menu": "Meniu",
    "footer.locations": "Locații",
    "footer.contact": "Contact",
    "footer.specialties": "Specialități",
    "footer.newsletter": "Abonează-te pentru oferte exclusive și actualizări",
    "footer.enterEmail": "Introdu emailul tău",
    "footer.subscribe": "Abonează-te",
    "footer.privacyPolicy": "Politica de Confidențialitate",
    "footer.terms": "Termeni și Condiții",
    "footer.rights": "Toate drepturile rezervate.",
    "footer.authenticCuisine": "Bucătărie Autentică",
    "footer.familyTraditions": "Tradiții de Familie",
    "footer.excellence": "Excelență",
  },
  en: {
    // Hero Section
    "hero.title": "COPT DE FERICIRE",
    "hero.subtitle": "Experience authentic Romanian culinary traditions in a warm and welcoming atmosphere",
    "hero.restaurant": "Restaurant",
    
    // Story Section
    "story.header": "Our Story",
    "story.ourStory": "Our Story",
    "story.paragraph1": "Copt de Fericire is more than a restaurant – it's a journey through Romanian culinary traditions. Each dish is prepared with passion and respect for recipes passed down through generations.",
    "story.paragraph2": "We use only fresh, high-quality ingredients, respecting traditional preparation methods that make every meal an unforgettable experience.",
    "story.tagline": "Where tradition meets culinary excellence",
    "story.awardWinning": "Award Winning",
    "story.awardDesc": "Best Romanian Restaurant 2023",
    "story.expertChefs": "Expert Chefs",
    "story.expertDesc": "15+ Years Experience",
    "story.madeWithLove": "Made with Love",
    "story.loveDesc": "Fresh Daily",
    "story.yearsExperience": "Years of Excellence",
    
    // Menu Section
    "menu.header": "Our Menu",
    "menu.subtitle": "Explore Our Authentic Menu",
    "menu.description": "Browse our complete menu and discover all the delicious Romanian dishes we have to offer.",
    "menu.appetizers": "Traditional Appetizers",
    "menu.mainCourses": "Main Courses",
    "menu.desserts": "Desserts",
    "menu.viewFullMenu": "View Full Menu",
    "menu.downloadMenu": "Download Full Menu",
    "menu.troubleViewing": "Having trouble viewing the menu?",
    "menu.openDirectly": "Open PDF directly",
    "currency": "RON",
    
    // Menu Items - Appetizers
    "menu.items.salataBoef": "Beef Salad",
    "menu.descriptions.salataBoef": "Traditional salad with boiled vegetables, beef and mayonnaise",
    "menu.items.papanasi": "Papanași with Sour Cream",
    "menu.descriptions.papanasi": "Traditional donuts served with sour cream and sour cherry jam",
    "menu.items.mici": "Mici with Mustard",
    "menu.descriptions.mici": "Traditional grilled sausages served with mustard and bread",
    "menu.items.sarmale": "Sarmale with Polenta",
    "menu.descriptions.sarmale": "Cabbage rolls stuffed with pork and rice, served with polenta and sour cream",
    
    // Menu Items - Main Courses
    "menu.items.schnitzel": "Viennese Schnitzel",
    "menu.descriptions.schnitzel": "Breaded pork cutlet served with french fries and cabbage salad",
    "menu.items.gulas": "Hungarian Goulash",
    "menu.descriptions.gulas": "Beef stew with paprika, served with potato dumplings",
    "menu.items.papricash": "Chicken Paprikash",
    "menu.descriptions.papricash": "Chicken in paprika sauce with sour cream, served with flour dumplings",
    "menu.items.tochitura": "Moldovan Tochitură",
    "menu.descriptions.tochitura": "Traditional dish with pork, sausages and egg, served with polenta",
    
    // Menu Items - Desserts
    "menu.items.cozonac": "Homemade Cozonac",
    "menu.descriptions.cozonac": "Traditional sweet bread with walnuts and Turkish delight, made from grandmother's recipe",
    "menu.items.mucenici": "Moldovan Mucenici",
    "menu.descriptions.mucenici": "Traditional figures in sweet milk with walnuts and cinnamon",
    "menu.items.amandine": "Amandine Cake",
    "menu.descriptions.amandine": "Almond sponge cake covered with chocolate and fondant glaze",
    "menu.items.cremaBurnover": "Crème Brûlée",
    "menu.descriptions.cremaBurnover": "Creamy dessert with caramelized sugar and vanilla flavor",
    
    // Products Section
    "products.header": "Our Products",
    "products.title": "Most Popular Dishes",
    "products.subtitle": "Discover our customers' favorite dishes, made with fresh ingredients and love.",
    "products.cheesecake.title": "Homemade Cheesecake",
    "products.cheesecake.description": "Our signature dessert - a creamy and delicious cheesecake that will win your heart at first taste.",
    "products.meatyPotato.title": "Baked Potato with Chicken",
    "products.meatyPotato.description": "For meat lovers - fluffy baked potato with succulent chicken pieces and flavorful sauce, perfect for a hearty meal.",
    "products.veganPotato.title": "Baked Potato with Tofu",
    "products.veganPotato.description": "Our delicious vegan option - baked potato with seasoned tofu and fresh vegetables, full of flavor and nutrients.",
    
    // Locations Section
    "locations.header": "Our Locations",
    "locations.subtitle": "Find a Copt de Fericire Near You!",
    "locations.getDirections": "Get Directions",
    "locations.central": "Central Restaurant",
    "locations.centralAddress": "123 Main Street, Bucharest, Sector 1",
    "locations.north": "North Branch",
    "locations.northAddress": "45 Aviators Boulevard, Bucharest, Sector 1",
    "locations.oldCenter": "Old Center",
    "locations.oldCenterAddress": "78 Lipscani Street, Bucharest, Sector 3",
    
    // Social Media Section
    "social.header": "Social Media",
    "social.title": "Follow Us & Stay Connected",
    "social.description": "Get the latest updates, special offers, and mouthwatering food photos!",
    
    // Contact Section
    "contact.header": "Contact Us",
    "contact.restaurantDetails": "Restaurant Details",
    "contact.addressTitle": "Address",
    "contact.address": "123 Main Street\nBucharest, Sector 1",
    "contact.phoneTitle": "Phone",
    "contact.phone": "+40 721 234 567",
    "contact.hoursTitle": "Hours",
    "contact.hours": "Monday - Sunday\n11:00 AM - 11:00 PM",
    "contact.reserveTable": "Reserve a Table",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.email": "Email",
    "contact.phoneNumber": "Phone Number",
    "contact.message": "Message",
    "contact.sendMessage": "Send Message",
    "contact.messagePlaceholder": "Write your message...",
    
    // Footer
    "footer.tagline": "Where every meal becomes a celebration of Romanian traditions",
    "footer.followUs": "Follow Us",
    "footer.pages": "Pages",
    "footer.about": "About",
    "footer.menu": "Menu",
    "footer.locations": "Locations",
    "footer.contact": "Contact",
    "footer.specialties": "Specialties",
    "footer.newsletter": "Subscribe for exclusive deals and updates",
    "footer.enterEmail": "Enter your e-mail",
    "footer.subscribe": "Subscribe",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.rights": "All rights reserved.",
    "footer.authenticCuisine": "Authentic Cuisine",
    "footer.familyTraditions": "Family Traditions",
    "footer.excellence": "Excellence",
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ro")

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "ro" : "en")
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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
