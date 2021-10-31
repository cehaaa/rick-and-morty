module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      inset: ["group-hover"],
      scale: ["group-hover"],
      rotate: ["group-hover"],
    },
  },
  plugins: [],
};
