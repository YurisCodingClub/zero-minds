/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'Helvetica'],
    },
    extend: {
      aspectRatio: {
        '2/1': '2 / 1',
        '3/2': '3 / 2',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}