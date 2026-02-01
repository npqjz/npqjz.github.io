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
         label: '文档',
      },
      { to: '/blog', label: '博客', position: 'left' },
      {
         type: 'dropdown',
         label: '学科基础',
         position: 'left',
         items: [
            {
               type: 'docSidebar',
               sidebarId: 'cnSidebar',
               label: '计算机网络',
            },
            {
               type: 'docSidebar',
               sidebarId: 'osSidebar',
               label: '操作系统',
            },
            {
               type: 'docSidebar',
               sidebarId: 'dsSidebar',
               label: '数据结构',
            },
            {
               type: 'docSidebar',
               sidebarId: 'coaSidebar',
               label: '计算机组成原理',
            }
            // ... more items
         ],
      },
      {
         type: 'dropdown',
         label: '框架',
         position: 'left',
         items: [
            {
               type: 'docSidebar',
               sidebarId: 'vueSidebar',
               label: 'vue',
            },
            {
               type: 'docSidebar',
               sidebarId: 'reactSidebar',
               label: 'react',
            },
            // ... more items
         ],
      },
      {
         type: 'docSidebar',
         sidebarId: 'otherSidebar',
         position: 'left',
         label: '心得',
      },
      {
         href: 'https://github.com/npqjz',
         position: 'right',
         className: 'header-github-link',
         'aria-label': 'GitHub repository',
      },
      {
         type: 'search',
         position: 'right',
      }
   ],
}