// @ts-check

const config = {
  title: 'Disnake Guide',
  tagline: '',
  url: 'https://www.abhigyantrips.dev/',
  baseUrl: '/docusaurus-guide/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'abhigyantrips',
  projectName: 'disnake-guide-react', 

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/abhigyantrips/disnake-guide-vuepress',
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
          src: 'img/logo.png',
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
    },
};

module.exports = config;
