/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gold': '#fdd835',
				'camo': '#4c4a3d',
				'sand': '#908d77',
			},
		},
	},
	plugins: [],
}
