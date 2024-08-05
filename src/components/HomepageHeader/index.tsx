import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { FC, memo, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import clsx from 'clsx'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'
import { homeSlogan } from './localData'
import { splitEmoji } from '@site/src/utils/func/splitEmoji'
import { IconArrowDown, IconEye, IconEyeInvisible, IconExpand, IconShrink } from '@arco-design/web-react/icon'
import { addTextEffect } from '@site/src/utils/animation/textEffect'
interface IProps {
  children?: ReactNode
}

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext()
  const [isProspective, setIsProspective] = useState(false)
  const [isShow, setIsShow] = useState(true)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    addTextEffect()
  }, [isShow])

  async function toggleSpectHandler() {
    setIsProspective(!isProspective)

    setTimeout(() => {
      if (!isProspective) {
        headerRef.current?.classList.add('spect')
      } else {
        headerRef.current?.classList.remove('spect')
      }
    })
  }

  async function toggleShowHandler() {
    setIsShow(!isShow)
  }

  return (
    <header ref={headerRef} className={clsx('hero hero--primary', styles.heroBanner, styles.container)}>
      <div className={clsx('container', 'not-selectable')}>
        <div className={styles.toolTip}>
          <ul className={styles.toolList}>
            <li className={styles.toolItem} onClick={toggleSpectHandler}>
              {isProspective ? <IconExpand className={styles.toolIcon} /> : <IconShrink className={styles.toolIcon} />}
            </li>
            {isProspective && (
              <li className={styles.toolItem} onClick={toggleShowHandler}>
                {isShow ? <IconEye className={styles.toolIcon} /> : <IconEyeInvisible className={styles.toolIcon} />}
              </li>
            )}
          </ul>
        </div>
        <div className={'hero__content' + (!isShow ? ' hidden' : '')}>
          <Heading as="h1" className="hero__title font-feizhai content">
            {siteConfig.title.split('').map((item, index) => {
              return (
                <span key={index} style={{ transform: 'translateY(-100px)' }} className="char hero__title font-feizhai">
                  {item}
                </span>
              )
            })}
          </Heading>
          <p className="hero__subtitle font-feizhai">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className=" font-feizhai " to="/docs/intro">
              <div className={styles.button}>
                {splitEmoji(homeSlogan).map((item, index) => {
                  return (
                    <div key={index} className={styles.box}>
                      {item}
                    </div>
                  )
                })}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(HomepageHeader)
