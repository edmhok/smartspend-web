/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          primary: withOpacity("--color-primary"),
          secondary: withOpacity("--color-secondary"),
        },
      },
      textColor: {
        palette: {
          base: withOpacity("--color-text-base"),
          mute: withOpacity("--color-text-muted"),
          side: withOpacity("--color-text-side"),
        },
      },
      backgroundColor: {
        palette: {
          fill: withOpacity("--color-bg"),
          card: withOpacity("--color-bg-side"),
          dark: withOpacity("--color-bg-dark"),
          healthCategory: "var(--health-category-bgc)",
          digitalCategory: "var(--digital-category-bgc)",
          fashionCategory: "var(--fashion-category-bgc)",
          beautyCategory: "var( --beauty-category-bgc)",
          travelCategory: "var(--travel-category-bgc)",
          sportCategory: "var(--sport-category-bgc)",
          houseCategory: "var(--house-category-bgc)",
          toyCategory: "var(--toy-category-bgc)",
          stationeryCategory: "var(--stationery-category-bgc)",
        },
      },
      fontFamily: {
        english: "'Poppins', 'Roboto', 'sans-serif'",
      },
      keyframes: {
        sidenavLTR: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0px)" },
        },
        sidenavRTL: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0px)" },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        dropDown: {
          "0%": { opacity: 0, transform: "scaleY(0)" },
          "100%": { opacity: 1, transform: "scaleY(1)" },
        },
      },
      animation: {
        sidenavLTREntering: "sidenavLTR 0.3s ease-in-out forwards",
        sidenavLTRExit: "sidenavLTR 0.3s ease-in-out reverse forwards",
        fadeEntering: "fade 0.3s forwards",
        fadeExit: "fade 0.3s reverse forwards",
        dropDown: "dropDown 0.3s forwards",
        dropDownExit: "dropDown 0.3s reverse forwards",
      },
      backgroundImage: {
        offersBG: "url('/images/carouselBox-bg/offersbg.png')",
      },
    },
  },
  plugins: [],
};
