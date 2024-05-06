/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'selector',
	content: [
		'./src/**/*.{html,scss,js,ts,jsx,tsx}',
		'./blog/**/*.{html,scss,js,ts,jsx,tsx,md,mdx}',
		'./docs/**/*.{html,scss,js,ts,jsx,tsx,md,mdx}',
		'./node_modules/@paradise-ui/**/*.{js,jsx,ts,tsx}'
	],
	corePlugins: {
		preflight: false
	},
	theme: {
		extend: {}
	},
	plugins: []
};
