module.exports = {
  title: 'Uap Site',
  tagline: 'The tagline of uap site',
  url: 'https://15927506127.github.io',
  baseUrl: '/uap-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themes:['@docusaurus/theme-live-codeblock'],
  organizationName: '15927506127', // Usually your GitHub org/user name.
  projectName: 'uap-site', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Uap Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'API Docs',
          position: 'left',
        },
        {to: 'enviroment/support', activeBasePath: '/enviroment/',label: '产品信息', position: 'left'},
        {
          href: 'https://github.com/15927506127/uap-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/15927506127/uap-site',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with U+ UAP.`,
    },
  },
  plugins:[
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'enviroment',
        path: 'enviroment',
        editUrl: 'https://github.com/15927506127/uap-site/tree/master/',
        routeBasePath: 'enviroment',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/15927506127/uap-site/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
