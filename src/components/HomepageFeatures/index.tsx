import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Stage, Sprite } from '@pixi/react'
import { gsap } from 'gsap'
import { getDeviceModel } from '@site/src/utils/func/getDevice'
import Painting from './c-cpn/Painting'
import { FeatureList, FeatureItem } from './data'
import Link from '@docusaurus/Link'

function Feature({ title, Svg, description, imgUrl, subtitle }: FeatureItem) {
  const [isBlur, setIsBlur] = useState(false)
  const spanRef = useRef<HTMLDivElement>(null)
  function applyFiltersWithAnimation() {
    if (getDeviceModel() !== 'pc') return
    setIsBlur(true)
  }

  function removeFiltersWithAnimation() {
    if (getDeviceModel() !== 'pc') return
    setIsBlur(false)
  }

  useEffect(() => {
    if (spanRef.current) {
      // spanRef.current.style.backgroundColor = '#f00000'

      gsap.to(spanRef.current, {
        duration: 0.3,
        x: -80,
        ease: 'power1.in'
      })
    }

    return () => {
      if (spanRef.current) {
        gsap.to(spanRef.current, {
          duration: 0.3,
          x: 0,
          ease: 'power1.out'
        })
      }
    }
  }, [isBlur])

  return (
    <div className={clsx('col col--4', 'not-selectable')} style={{}}>
      <Link to={`/docs/category/${subtitle}`}>
        <div className={clsx('text--center', styles.mainCard, 'content')} onMouseEnter={applyFiltersWithAnimation} onMouseLeave={removeFiltersWithAnimation}>
          {/* <Svg className={styles.featureSvg} role="img" /> */}
          {/* {imgUrl ? <img src={imgUrl} loading="lazy" className="not-selectable" /> : <Svg className={styles.featureSvg} role="img" />} */}
          {isBlur && (
            <div ref={spanRef} className={clsx(styles.drawerBtn)}>
              {subtitle.split('').map((item, index) => (
                <span key={index} className={styles.char}>
                  {item}
                  <br />
                </span>
              ))}
            </div>
          )}
          <Suspense fallback={<div>Loading...</div>}>
            <Stage style={{ maxWidth: '100%', maxHeight: '300px' }}>
              <Painting imgUrl={imgUrl} isBlur={isBlur} />
            </Stage>
          </Suspense>
        </div>
      </Link>
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
    try {
      if (!staticx) {
        startSakura()
      }
      if (isRemove) {
        clickEffect()
      }
    } catch (error) {
      // 跳转到404
      location.href = '/'
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
      <div className="container" style={{ marginTop: '2em' }}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
