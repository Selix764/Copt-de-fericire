import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Poppins, Permanent_Marker, Rock_Salt, Open_Sans, Bangers, Noto_Sans } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "./contexts/LanguageContext"
import ClientLayout from "./components/ClientLayout"

const inter = Inter({ subsets: ["latin"] });

// Typography System Fonts
const montserrat = Montserrat({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
  display: 'swap',
});

const permanentMarker = Permanent_Marker({ 
  subsets: ["latin"],
  variable: '--font-section-label',
  weight: '400',
  display: 'swap',
});

const rockSalt = Rock_Salt({ 
  subsets: ["latin"],
  variable: '--font-banner',
  weight: '400',
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-body',
  weight: ['400', '600'],
  display: 'swap',
});

const bangers = Bangers({ 
  subsets: ["latin"],
  variable: '--font-bangers',
  weight: '400',
  display: 'swap',
});

// Romanian-safe font for special characters
const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  variable: '--font-romanian',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Copt de Fericire - Authentic Romanian Restaurant",
  description: "Experience authentic Romanian culinary traditions in a warm and welcoming atmosphere. Traditional dishes prepared with passion and respect for recipes passed down through generations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable} ${permanentMarker.variable} ${rockSalt.variable} ${openSans.variable} ${bangers.variable} ${notoSans.variable}`}>
        <LanguageProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
