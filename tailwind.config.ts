import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        white: '#f8f9fa'
      },
      fontFamily: {
        body: ['Manrope', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        list: 'repeat(auto-fill, minmax(400px, max-content))'
      }
    }
  },
  plugins: [typography]
}

export default config
