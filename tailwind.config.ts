import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        cream: '#F6F2EC',
        charcoal: '#3A2D2D',
        terracotta: '#C36B51',
        'terracotta-600': '#B85A47',
        warmGray: '#E8E1D8',
        
        // New Chalkboard Design Palette
        'chalkboard': '#1E1E1E',
        'chalk-white': '#FFFFFF',
        'brush-orange': '#F2994A',
        'deep-orange': '#D97E2F',
        'gold-accent': '#FFC107',
        'burst-yellow': '#FFEB3B',
        'strawberry-red': '#E53935',
        'leaf-green': '#66BB6A',
        
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        // Main Title Font - Tall, clean geometric sans-serif (supports Romanian)
        'heading': ['var(--font-montserrat)', 'Arial', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'Arial', 'sans-serif'],
        
        // Body Copy Font - Simple, highly legible sans-serif (supports Romanian)
        'open-sans': ['var(--font-open-sans)', 'Arial', 'sans-serif'],
        'body': ['var(--font-open-sans)', 'Arial', 'sans-serif'],
        
        // Sub-title Font - Rounded, friendly sans-serif (supports Romanian)
        'poppins': ['var(--font-poppins)', 'Arial', 'sans-serif'],
        'subtitle': ['var(--font-poppins)', 'Arial', 'sans-serif'],
        
        // Section Label Font - Playful hand-drawn/display (fallback to system fonts for Romanian)
        'permanent-marker': ['var(--font-permanent-marker)', 'Arial', 'cursive'],
        'section-label': ['var(--font-permanent-marker)', 'Arial', 'cursive'],
        
        // Banner Text Font - Brush-stroke script (fallback to system fonts for Romanian)
        'rock-salt': ['var(--font-rock-salt)', 'Georgia', 'cursive'],
        'banner': ['var(--font-rock-salt)', 'Georgia', 'cursive'],
        
        // Price Badge Font - Bold, comic/cartoon display (fallback to system fonts for Romanian)
        'bangers': ['var(--font-bangers)', 'Arial Black', 'cursive'],
        'price': ['var(--font-bangers)', 'Arial Black', 'cursive'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
