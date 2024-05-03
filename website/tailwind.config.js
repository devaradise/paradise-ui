/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'selector',
	content: [
		'./src/**/*.{html,scss,js,ts,jsx,tsx}',
		'./blog/**/*.{html,scss,js,ts,jsx,tsx,mdx}',
		'./docs/**/*.{html,scss,js,ts,jsx,tsx,mdx}'
	],
	corePlugins: {
		preflight: false
	},
	theme: {
		extend: {}
	},
	plugins: []
};
