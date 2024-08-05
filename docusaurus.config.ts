import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { navbarConfig } from './static/data/navbar';

const config: Config = {
  title: '阿泽の个人博客',
  tagline: '好好学习，天天向上',
  favicon: 'https://ys.mihoyo.com/main/favicon.ico',

  // Set the production url of your site here
  url: 'https://npqjz.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/npqjz.github.io/',

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
      fa: {
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/npqjz/npqjz.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/npqjz/npqjz.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: ['docusaurus-plugin-sass', 'custom-docusaurus-plugin'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/meta-img.png',
    navbar: navbarConfig as any,
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
              to: '/docs/DS',
            },
            {
              label: '操作系统',
              to: '/docs/OS',
            },
            {
              label: '计算机网络',
              to: '/docs/CN',
            },
            {
              label: '计算机组成原理',
              to: '/docs/COA',
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
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/npqjz',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'cpp', 'c'],
    },
  } satisfies Preset.ThemeConfig,

  scripts: [
    // {
    //   src: "@site/static/anim/screen_effect.js",
    //   async: true
    // },
    // {
    //   src: "@site/static/anim//pointer_effect.js",
    //   async: true
    // }
  ],

  themes: ['@docusaurus/theme-live-codeblock'],
};

export default config;
