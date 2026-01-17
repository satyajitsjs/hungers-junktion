/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Sophisticated Canvas
        primary: {
          DEFAULT: "#1A1A1A", // gray-900
          50: "#F5F5F5", // gray-50
          100: "#E5E5E5", // gray-100
          200: "#D4D4D4", // gray-200
          300: "#A3A3A3", // gray-300
          400: "#737373", // gray-400
          500: "#525252", // gray-500
          600: "#404040", // gray-600
          700: "#262626", // gray-700
          800: "#1A1A1A", // gray-800
          900: "#0F0F0F", // gray-900
        },
        // Secondary Colors - Warm Dark Depth
        secondary: {
          DEFAULT: "#2D1B1B", // brown-900
          50: "#FDF8F6", // orange-50
          100: "#F2E8E5", // orange-100
          200: "#EADDD7", // orange-200
          300: "#E0CBBE", // orange-300
          400: "#A8978F", // stone-400
          500: "#78716C", // stone-500
          600: "#57534E", // stone-600
          700: "#44403C", // stone-700
          800: "#2D1B1B", // brown-800
          900: "#1C0A0A", // brown-900
        },
        // Accent Colors - Appetite-Triggering Flame
        accent: {
          DEFAULT: "#FF4500", // orange-red-600
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#F97316", // orange-500
          600: "#FF4500", // orange-red-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
        },
        // Background Colors
        background: {
          DEFAULT: "#0F0F0F", // neutral-950
          light: "#1A1A1A", // gray-900
          dark: "#000000", // black
        },
        // Surface Colors
        surface: {
          DEFAULT: "#252525", // gray-800
          light: "#2D2D2D", // gray-700
          dark: "#1F1F1F", // gray-850
        },
        // Text Colors
        text: {
          primary: "#FFFFFF", // white
          secondary: "#B8B8B8", // gray-400
          tertiary: "#737373", // gray-500
          inverse: "#0F0F0F", // gray-900
        },
        // Success Colors - Fresh Ingredient Confidence
        success: {
          DEFAULT: "#22C55E", // green-500
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          200: "#BBF7D0", // green-200
          300: "#86EFAC", // green-300
          400: "#4ADE80", // green-400
          500: "#22C55E", // green-500
          600: "#16A34A", // green-600
          700: "#15803D", // green-700
          800: "#166534", // green-800
          900: "#14532D", // green-900
        },
        // Warning Colors - Spice Level Alerts
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#92400E", // amber-800
          900: "#78350F", // amber-900
        },
        // Error Colors - Helpful Guidance
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
        },
      },
      fontFamily: {
        headline: ['Outfit', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
        cta: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'dramatic': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.3)',
        'elevated': '0 12px 48px rgba(0, 0, 0, 0.5)',
        'accent-glow': '0 4px 16px rgba(255, 69, 0, 0.3)',
        'accent-glow-lg': '0 8px 32px rgba(255, 69, 0, 0.4)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      animation: {
        'reveal': 'reveal 0.5s ease-out',
        'smooth': 'smooth 0.3s ease-out',
        'fast': 'fast 0.15s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        smooth: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fast: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        'premium': '12px',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}