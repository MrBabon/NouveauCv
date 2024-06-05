/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'hurricane': ['Hurricane', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'deepNavy': '#051a24',
        'tealBlue': '#06373A',
        'deepTeal': '#1F5F5B',
        'emeraldGreen': '#fff700',
        'emeraldGreen': '#159947',
        'neonGreen': '#4FF57B',
        'moon': '#183153',
        'sun': '#73C0FC'
      },
      gridTemplateColumns:{
        "menu": "300px 1fr 200px"
      },
      backgroundColor: {
        'rgba': 'rgba(5, 26, 36, 0.8)',
      },
      textShadow: {
        sm: '0 1px 2px var(0,0,0,0.2)',
        DEFAULT: '1px 1px 3px var(0,0,0,0.2)',
        lg: '0 8px 16px var(0,0,0,0.2)',
      },
      animation: {
        spin: 'spin 15s linear infinite',
        'slide-in': 'slideIn 0.75s forwards',
        'slide-out': 'slideOut 0.75s forwards',
        'slide-prestation-in': 'slidePrestationIn 0.75s forwards',
        'slide-prestation-out': 'slidePrestationOut 0.75s forwards',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        slideIn: {
          from: {
            transform: 'translateX(20%)',
            opacity: 0,
          },
          to: {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        slideOut: {
          from: {
            transform: 'translateX(0)',
            opacity: 1,
          },
          to: {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
        },
        slidePrestationIn: {
          from: {
            transform: 'translateY(50%)',
            opacity: 0,
          },
          to: {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        slidePrestationOut: {
          from: {
            transform: 'translateX(0)',
            opacity: 1,
          },
          to: {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textShadowUtilities = {};

      Object.entries(theme('textShadow')).forEach(([key, value]) => {
        textShadowUtilities[`.text-shadow-${key}`] = {
          textShadow: value,
        };
      });

      addUtilities(textShadowUtilities, ['responsive', 'hover']);
    },
  ],
}

