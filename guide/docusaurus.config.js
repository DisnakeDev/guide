// @ts-check

const config = {
  title: 'Disnake Guide',
  url: 'https://www.abhigyantrips.github.io/',
  favicon: 'public/favicon.ico',

  organizationName: 'abhigyantrips',
  projectName: 'disnake-guide-react',
  baseUrl: '/disnake-guide-react/',

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
          editUrl: 'https://github.com/abhigyantrips/disnake-guide-react/blob/main/guide',
        },
        theme: {
          customCss: [
			require.resolve('./src/css/lightTheme.css'),
			require.resolve('./src/css/darkTheme.css'),
		  ],
        },
      }),
    ],
  ],

  themeConfig:
    {
      colorMode: {
        defaultMode: 'dark'
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
            href: 'https://discord.gg/gJDbCw8aQy',
            label: 'Discord',
            position: 'left',
          },
          {
            href: 'https://docs.disnake.dev/',
            label: 'Documentation',
            position: 'left',
          },
          {
            href: 'https://github.com/DisnakeDev/disnake',
            className: 'navbar-item-github',
            position: 'right',
          },
        ],
      },
      prism: {
		theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
      },
    },
};

module.exports = config;
