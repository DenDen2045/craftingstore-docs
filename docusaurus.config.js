/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CraftingStore',
  tagline: 'Documentation',
  url: 'https://help.craftingstore.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.webp',
  organizationName: 'craftingsotre',
  projectName: 'craftingstore-docs',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'CraftingStore Logo',
        src: 'img/logo.png',
      },
      items: [],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/craftingstre/craftingstore-docs/tree/master/',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      docsRouteBasePath: '/',
      indexBlog: false,
    }]
  ],
};
