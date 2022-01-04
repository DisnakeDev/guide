// @ts-check

const config = {
  title: 'Disnake Guide',

  url: 'https://www.abhigyantrips.dev/',
  baseUrl: '/disnake-guide-react/',
  favicon: 'public/favicon.ico',

  organizationName: 'abhigyantrips',
  projectName: 'disnake-guide-react',

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
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    {
      colorMode: {
        defaultMode: 'dark'
      },
      navbar: {
        title: 'Disnake Guide',
        logo: {
          alt: 'Disnake Logo',
          src: 'public/logo.png',
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
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsDark'),
      },
    },
};

module.exports = config;
