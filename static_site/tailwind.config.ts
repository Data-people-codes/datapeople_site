import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // custom color
      colors:{
        'atom_bg':'#292d34',
        'atom_red': '#c16266',
        'datacamp_green': '	#03ef62',
        'atom_green_light':'#9bbf50',
        'atom_orange': '#be8a59'
      },
      // bg hero image
      backgroundImage:{
        'hero-pattern':"url('/hero-img.png')"
      },
    },
  },
  plugins: [],
}
export default config
