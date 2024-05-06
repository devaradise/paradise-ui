/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'selector',
	content: [
		'./src/**/*.{html,scss,js,ts,jsx,tsx}',
		'./blog/**/*.{html,scss,js,ts,jsx,tsx,md,mdx}',
		'./docs/**/*.{html,scss,js,ts,jsx,tsx,md,mdx}'
	],
	corePlugins: {
		preflight: false
	},
	theme: {
		extend: {}
	},
	plugins: []
};
