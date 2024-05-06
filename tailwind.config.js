/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	darkMode: 'selector',
	content: ['./packages/**/*.{html,scss,js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	corePlugins: {
		preflight: false
	},
	plugins: []
};
