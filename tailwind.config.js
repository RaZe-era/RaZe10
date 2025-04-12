/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
         'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
         'pulse-glow': {
           '0%, 100%': { opacity: '1', boxShadow: '0 0 5px rgba(234, 179, 8, 0.5), 0 0 10px rgba(234, 179, 8, 0.4)' }, // Yellow glow example
           '50%': { opacity: '0.8', boxShadow: '0 0 15px rgba(234, 179, 8, 0.8), 0 0 25px rgba(234, 179, 8, 0.6)' },
         }
      },
    },
  },
  plugins: [],
   // Safelist might be needed if Vercel build prunes dynamic classes, but try without first
  // safelist: [
  //   { pattern: /(bg|text|border|from|to)-(cyan|magenta|yellow|blue|purple|indigo|pink|red|green)-(100|200|300|400|500|600|700|800|900)/ },
  //   { pattern: /text-glow-(cyan|magenta|yellow|blue|purple|indigo|pink|red|green|white)/ },
  //   { pattern: /box-glow-(cyan|magenta|yellow|blue|purple|indigo)/ },
  // ],
}
