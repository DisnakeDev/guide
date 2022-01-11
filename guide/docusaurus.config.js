// @ts-check

const config = {
	title: 'Disnake Guide',
	url: 'https://guide.disnake.dev/',
	favicon: 'public/favicon.ico',

	organizationName: 'DisnakeDev',
	projectName: 'guide',
	baseUrl: '/',

	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/DisnakeDev/guide/edit/main/guide',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				theme: {
					customCss: [
						require.resolve('./src/css/lightTheme.css'),
						require.resolve('./src/css/darkTheme.css'),
						require.resolve('./src/css/extraComponents.css'),
					],
				},
			}),
		],
	],

	themeConfig: {
		colorMode: {
			defaultMode: 'dark',
		},
		image: 'https://i.imgur.com/KsTvw5Z.png',
		metaImage: 'https://i.imgur.com/KsTvw5Z.png',
		navbar: {
			title: 'Disnake Guide',
			logo: {
				alt: 'Disnake Logo',
				src: 'public/disnake-logo.png',
			},
			items: [
				{
					href: 'https://docs.disnake.dev/',
					label: 'Documentation',
					position: 'left',
				},
				{
					href: 'https://discord.gg/gJDbCw8aQy',
					className: 'navbar-item-discord',
					position: 'right',
				},
				{
					href: 'https://github.com/DisnakeDev/disnake',
					className: 'navbar-item-github',
					position: 'right',
				},
			],
		},
		prism: {
			theme: require('./src/utils/prismLight'),
			darkTheme: require('./src/utils/prismDark'),
		},
	},
};

module.exports = config;
