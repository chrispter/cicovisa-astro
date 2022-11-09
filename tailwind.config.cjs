/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cico-light-blue': '#e8eefa',
				'cico-yellow': '#f3ad34',
				'cico-orange': '#e66114',
				'cico-blue': '#0060a4',
			}
		},
	},
	plugins: [],
}
