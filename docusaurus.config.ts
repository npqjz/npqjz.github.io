import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { navbarConfig } from './static/data/navbar';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: '阿泽の个人博客',
  tagline: '好好学习，天天向上',
  favicon: 'https://ys.mihoyo.com/main/favicon.ico',

  // Set the production url of your site here
  url: 'https://npqjz.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'npqjz', // Usually your GitHub org/user name.
  projectName: 'npqjz.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
    path: 'i18n',
    localeConfigs: {
      // en: {
      //   label: 'English',
      //   direction: 'ltr',
      //   htmlLang: 'en-US',
      //   calendar: 'gregory',
      //   path: 'en',
      // },
      zh: {
        label: '中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
        path: 'zh',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // sidebarCollapsible: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/npqjz/npqjz.github.io/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // showLastUpdateTime: true,

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/npqjz/npqjz.github.io/tree/main/',
          // showLastUpdateTime: true,
          blogTitle: '近期博客',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],


  plugins: ['docusaurus-plugin-sass', 'custom-docusaurus-plugin', 'plugin-image-zoom'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/meta-img.png',
    navbar: navbarConfig as any,
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    algolia: {
      apiKey: '65cb00ea86023159c589d01fa775b3ac',
      appId: 'LOWWJ8AQCB',
      indexName: 'npqjzio',
    },
    footer: {
      logo: {
        src: 'img/meta-img.png',
        style: { width: '150px', height: '80px' },
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '数据结构',
              to: '/docs/category/数据结构',
            },
            {
              label: '操作系统',
              to: '/docs/category/操作系统',
            },
            {
              label: '计算机网络',
              to: '/docs/category/计算机网络',
            },
            {
              label: '计算机组成原理',
              to: `/docs/category/计算机组成原理`,
            },
            {
              label: 'vue',
              to: `/docs/category/vue`,
            },
            {
              label: 'react',
              to: `/docs/category/react`,
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/26329528/jianze-qin',
            },
            {
              label: '稀土掘金',
              href: 'https://juejin.cn/user/3848734726962429',
            },
            {
              label: '哔哩哔哩',
              href: 'https://space.bilibili.com/365316765',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/npqjz',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NPqjz.`,
    },
    giscus: {
      repo: 'npqjz/npqjz.github.io', // edit this
      repoId: 'R_kgDOMfhO6Q', // edit this
      category: 'General',
      categoryId: 'DIC_kwDOMfhO6c4Chege', // edit this
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['powershell', 'cpp', 'c', 'bash', 'go', 'java'],
      magicComments: [
        {
          className: 'code-block-error-line',
          line: 'error',
        },
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
      ]
    },
  } satisfies Preset.ThemeConfig,

  scripts: [],

  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
};

export default config;
