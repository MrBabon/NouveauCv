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
        "menu": "300px 1fr 150px"
      },
      textShadow: {
        sm: '0 1px 2px var(0,0,0,0.2)',
        DEFAULT: '1px 1px 3px var(0,0,0,0.2)',
        lg: '0 8px 16px var(0,0,0,0.2)',
      },
      animation: {
        spin: 'spin 15s linear infinite',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
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

