module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      gray: "#252525",
      darkGray: "#151515",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
