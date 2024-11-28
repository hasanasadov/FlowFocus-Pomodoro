module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/block/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "16px",
        xs: "16px",
        sm: "32px",
        md: "32px",
        lg: "32px ",
        xl: "32px ",
        "2xl": "32px ",
      },
    },
    extend: {
      colors: {
        primary: "#1A1A1A",
        "input-bg": "#f9fafb",
        "dark-input-bg": "#232426",
        "input-border": "#E5E6EB",
        "dark-input-border": "#2D2D2D",
        light: "#9CA3AF",
        white: "#ffffff",
        "success-primary": "#046C4E",
        "success-primary-light": "#DEF7EC",
        "warning-primary": "#9B1C1C",
        "warning-primary-light": "#FDE8E8",
        "red-bg": "#FDE8E8",
        "red-text": "#9B1C1C",
        "blue-bg": "#E8EDFF",
        "blue-text": "#184BFE",
        "green-bg": "#DEF7EC",
        "green-text": "#046C4E",
        "gray-bg": "#E5E6EB",
        "gray-text": "#9CA3AF",
        "blue-primary": "#037ef3",
        "blue-light": "#edfbff",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
      },
      screens: {
        xs: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      spacing: {
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        12: "12px",
        16: "16px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
        72: "72px",
        80: "80px",
        96: "96px",
        128: "128px",
        144: "144px",
        160: "160px",
        176: "176px",
      },
      borderRadius: {
        main: "10px",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(180deg)" },
        },
        flipTop: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(-90deg)" },
        },
        flipBottom: {
          "0%": { transform: "rotateX(90deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },
      animation: {
        flip: "flip 0.6s ease-in-out forwards",
        flipTop: "flipTop 0.6s ease-in-out forwards",
        flipBottom: "flipBottom 0.6s ease-in-out forwards",
      },
    },
  },
  plugins: ["tailwindcss", "postcss-100vh-fix"],
  darkMode: "class",
  safelist: [
    {
      pattern: /bg-(red|blue|green|gray)-bg/,
      variants: ["responsive", "hover", "focus", "dark"],
    },
    {
      pattern: /text-(red|blue|green|gray)-text/,
      variants: ["responsive", "hover", "focus", "dark"],
    },
  ],
};