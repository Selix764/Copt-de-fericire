import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Chalkboard Design Palette
        chalkboard: '#1E1E1E',
        'chalk-white': '#FFFFFF',
        'brush-orange': '#F2994A',
        'deep-orange': '#D97E2F',
        'gold-accent': '#FFC107',
        'burst-yellow': '#F2994A',
        'strawberry-red': '#E53935',
        'leaf-green': '#66BB6A',
      },
      fontFamily: {
        // Typography System
        'montserrat': ['Montserrat', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
        'poppins': ['Poppins', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
        'section-label': ['Permanent Marker', 'Comic Sans MS', 'cursive'],
        'banner': ['Rock Salt', 'Brush Script MT', 'cursive'],
        'body': ['Open Sans', 'system-ui', 'Arial', 'sans-serif'],
        'bangers': ['Bangers', 'Comic Sans MS', 'cursive'],
        
        // Romanian-safe font for text with special characters
        'romanian': ['Noto Sans', 'Inter', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
        },
      animation: {
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
      },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
      },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
      },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
