/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      /* ================================
         COLORS
         ================================ */
      colors: {
        /* Brand */
        primary: "#4F46E5",
        secondary: "#6366F1",
        tertiary: "#8B5CF6",

        /* Base */
        white: "#FFFFFF",
        grey: "#64748B",

        /* Background */
        background: "#F8FAFC",
        "background-secondary": "#F1F5F9",

        /* Surface */
        surface: "#FFFFFF",
        "surface-secondary": "#F8FAFC",
        "surface-hover": "#F1F5F9",

        /* Lavender */
        "lavender-light": "#F5F3FF",
        "lavender-soft": "#EEF2FF",

        /* Status */
        success: "#16A34A",
        warning: "#F59E0B",
        info: "#0EA5E9",
        danger: "#EF4444",

        /* UI */
        border: "#E2E8F0",
        card: "#FFFFFF",
      },

      /* ================================
         FONT FAMILY
         ================================ */
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      /* ================================
         FONT SIZES
         ================================ */
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
      },

      /* ================================
         FONT WEIGHT
         ================================ */
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      /* ================================
         LINE HEIGHT
         ================================ */
      lineHeight: {
        tight: "1.25",
        normal: "1.5",
        relaxed: "1.75",
      },

      /* ================================
         BOX SHADOW
         ================================ */
      boxShadow: {
        none: "none",

        sm: "0 1px 2px rgba(15, 23, 42, 0.05)",

        DEFAULT: "0 2px 6px rgba(15, 23, 42, 0.08)",

        md: "0 4px 10px rgba(15, 23, 42, 0.10)",

        lg: "0 8px 20px rgba(15, 23, 42, 0.12)",

        xl: "0 12px 30px rgba(15, 23, 42, 0.15)",

        card: "0 2px 8px rgba(15, 23, 42, 0.08)",

        "card-hover": "0 6px 18px rgba(15, 23, 42, 0.12)",

        dropdown: "0 8px 24px rgba(15, 23, 42, 0.12)",

        modal: "0 20px 40px rgba(15, 23, 42, 0.18)",
      },

      /* ================================
         BORDER RADIUS
         ================================ */
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        full: "9999px",
      },

      /* ================================
         SPACING
         ================================ */
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },

      /* ================================
         SCREEN RESOLUTIONS
         ================================ */
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },

      /* ================================
         MAX WIDTH
         ================================ */
      maxWidth: {
        content: "1440px",
        dashboard: "1600px",
      },

      /* ================================
         TRANSITIONS
         ================================ */
      transitionDuration: {
        fast: "150ms",
        normal: "200ms",
        slow: "300ms",
      },

      /* ================================
         Z INDEX
         ================================ */
      zIndex: {
        header: "100",
        sidebar: "200",
        dropdown: "300",
        modal: "400",
        toast: "500",
      },
    },
  },

  plugins: [],
};
