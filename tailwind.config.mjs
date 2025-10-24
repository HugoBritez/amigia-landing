/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'amigia': {
          'blue': '#3bb3c3',
          'green': '#56e39f',
          'coral': '#ff6b6b',
        },
      },
    },
  },
  plugins: [],
}
