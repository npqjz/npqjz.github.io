export type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
  imgUrl?: string
  idx?: number
  subtitle?: string
}

export const FeatureList: FeatureItem[] = [
  {
    title: '最 全 面',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    imgUrl: 'img/bg_home.png',
    description: (
      <>
        关于计算机知识相关的知识与文档，这里有！
        <br />
        （好看的番，这里有！）😘
      </>
    ),
    subtitle: '计算机网络'
  },
  {
    title: '最 细 节',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    imgUrl: 'img/bg_home_2.jpg',
    description: (
      <>
        关于前端框架相关的知识与文档，这里也有！！
        <br />
        （好听的曲儿，这里也有！！）🥰
      </>
    ),
    subtitle: '学习框架'
  },
  {
    title: '最 新 鲜',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    imgUrl: 'img/bg_home_3.jpg',
    description: (
      <>
        关于最新的技术相关的新闻与新鲜事，这里必须得有！！！
        <br />
        （好玩的游戏，这里必须得有！！！）🤩
      </>
    ),
    subtitle: '心得'
  }
]
