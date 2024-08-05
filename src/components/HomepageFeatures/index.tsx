import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'
import { useEffect, useRef } from 'react'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '最 全 面',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        关于计算机知识相关的知识与文档，这里有！
        <br />
        （好看的番，这里有！）😘
      </>
    )
  },
  {
    title: '最 细 节',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        关于前端框架相关的知识与文档，这里也有！！
        <br />
        （好听的曲儿，这里也有！！）🥰
      </>
    )
  },
  {
    title: '最 新 鲜',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        关于最新的技术相关的新闻与新鲜事，这里必须得有！！！
        <br />
        （好玩的游戏，这里必须得有！！！）🤩
      </>
    )
  }
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className="font-loong font-size-h2">
          {title}
        </Heading>
        <p className="font-loong font-size-h3">{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true
    if (!staticx) {
      startSakura()
    }
    if (isRemove) {
      clickEffect()
    }
  })

  useEffect(() => {
    return () => {
      if (isMounted.current) {
        isMounted.current = false
        stopp()
        removeClickEffect()
      }
    }
  }, [])

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
