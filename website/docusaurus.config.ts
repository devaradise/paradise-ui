import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
	title: 'Paradise UI',
	titleDelimiter: '-',
	tagline: 'Modular & Highly Customizable React UI Component Library',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://paradise-ui.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'devaradise', // Usually your GitHub org/user name.
	projectName: 'paradise-ui', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts'
				},
				blog: {
					showReadingTime: true
				},
				theme: {
					customCss: './src/css/custom.css'
				}
			} satisfies Preset.Options
		]
	],

	themeConfig: {
		// Replace with your project's social card
		navbar: {
			title: 'Paradise UI',
			logo: {
				alt: 'Paradise UI Logo',
				src: 'img/logo.svg'
			},
			items: [
				{
					href: 'https://github.com/devaradise/paradise-ui',
					html: '<span class="github-link-icon" title="GitHub"></span>',
					position: 'right'
				}
			]
		},
		footer: {
			copyright: `Copyright © ${new Date().getFullYear()} Paradise UI.`
		},
		prism: {
			theme: prismThemes.vsDark,
			magicComments: [
				// Remember to extend the default highlight class name as well!
				{
					className: 'theme-code-block-highlighted-line',
					line: 'highlight-next-line',
					block: { start: 'highlight-start', end: 'highlight-end' }
				}
			]
		}
	} satisfies Preset.ThemeConfig,
	plugins: [
		async function tailwindcss(context, options) {
			return {
				name: 'docusaurus-tailwindcss',
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(require('tailwindcss'));
					postcssOptions.plugins.push(require('autoprefixer'));
					return postcssOptions;
				}
			};
		}
	]
};

export default config;
