import { DeepPartial } from "@arco-design/web-react/es/Form/store";

export const navbarConfig = {
   title: '阿泽の博客',
   hideOnScroll: true,
   logo: {
      alt: 'My Site Logo',
      src: 'img/pikachu.png',
   },
   items: [
      {
         type: 'docSidebar',
         sidebarId: 'tutorialSidebar',
         position: 'left',
         label: '文档',
      },
      { to: '/blog', label: '博客', position: 'left' },
      {
         href: 'https://github.com/npqjz',
         position: 'right',
         className: 'header-github-link',
         'aria-label': 'GitHub repository',
      },
      {
         type: 'search',
         position: 'right',
      },
      // {
      //    type: 'localeDropdown',
      //    position: 'left',
      // },
      {
         type: 'dropdown',
         label: '学科基础',
         position: 'left',
         items: [
            {
               type: 'doc',
               docId: 'CN/cn',
               label: '计算机网络',
            },
            {
               type: 'doc',
               docId: 'OS/ready',
               label: '操作系统',
            },
            {
               type: 'doc',
               docId: 'DS/ds',
               label: '数据结构',
            },
            {
               type: 'doc',
               docId: 'COA/coa',
               label: '计算机组成原理',
            }
            // ... more items
         ],
      },


   ],
}