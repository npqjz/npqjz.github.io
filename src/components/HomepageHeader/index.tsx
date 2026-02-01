import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { FC, memo, ReactNode, useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import clsx from 'clsx'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'
import { homeSlogan } from './localData'
import { splitEmoji } from '@site/src/utils/func/splitEmoji'
import { IconArrowDown, IconEye, IconEyeInvisible, IconExpand, IconShrink, IconMusic, IconIdcard } from '@arco-design/web-react/icon'
import { addTextEffect } from '@site/src/utils/animation/textEffect'
import TextEffect from './c-cpn/textEffect'
import { Message, Tooltip, Popover } from '@arco-design/web-react'
import IntroduceCard from '../IntroduceCard'
import { getDeviceModel } from '@site/src/utils/func/getDevice'

interface IProps {
  children?: ReactNode
}

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext()
  const [isProspective, setIsProspective] = useState(false)
  const [isShow, setIsShow] = useState(true)
  const headerRef = useRef<HTMLDivElement>(null)
  const [url, setUrl] = useState('')
  const audioRef = useRef<HTMLAudioElement>(null)
  const musicRef = useRef<HTMLLIElement>(null)
  const [visible, setVisible] = useState(false)
  const isPC = getDeviceModel() === 'pc'

  useEffect(() => {
    addTextEffect()

    // setUrl(import('@site/static/music/bgMusic.mp3'))

    // console.log(audioRef.current!.currentSrc)
    // 获取音频时长
    // audioRef.current!.duration
    // 监听 audioRef 的 duration 属性

    // 获取音频文件
    // const audioFile = new Blob([url], { type: 'audio/mp3' })

    if (audioRef.current) {
      const audioElement = audioRef.current

      const handleLoadedMetadata = () => {
        // audioRef.current.play()
        // musicRef.current.classList.add('spinIcon')
        if (audioRef.current.played) {
          // musicRef.current.classList.add('spinIcon')
          setVisible(true)

          setTimeout(() => {
            setVisible(false)
          }, 10 * 1000)

          // 如果是第一次加载，显示提示
          // message.close()
        }
      }
      // 添加事件监听器
      audioElement.addEventListener('loadedmetadata', handleLoadedMetadata)

      // 清除事件监听器
      return () => {
        audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata)
      }
    }
  }, [isShow, audioRef])

  // if (audioRef.current!.duration > 0) {
  //   musicRef.current.classList.add('spin-music')
  // }

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

  function playHandler() {
    if (audioRef.current && audioRef.current.duration > 0) {
      if (audioRef.current.paused) {
        audioRef.current.play()
        musicRef.current.classList.add('spinIcon')
        if (visible) {
          setVisible(false)
        }
      } else {
        audioRef.current.pause()
        musicRef.current.classList.remove('spinIcon')
      }
    } else {
      Message.loading({
        // id: 'need_update',
        content: '小曲儿正在加载中 ...',
        duration: 2000
      })
    }
  }

  const showProfile = () => {}

  return (
    <header ref={headerRef} className={clsx('hero hero--primary', styles.heroBanner, styles.container)}>
      <audio src="music/bgMusic.mp3" ref={audioRef} loop preload="metadata"></audio>
      <div className={clsx('container', 'not-selectable')}>
        <div className={styles.toolTip} style={{ visibility: isPC ? 'initial' : 'hidden' }}>
          <ul className={styles.toolList}>
            <li className={styles.toolItem} onClick={toggleSpectHandler}>
              {isProspective ? <IconExpand className={styles.toolIcon} /> : <IconShrink className={styles.toolIcon} />}
            </li>
            {isProspective && (
              <li className={styles.toolItem} onClick={toggleShowHandler}>
                {isShow ? <IconEye className={styles.toolIcon} /> : <IconEyeInvisible className={styles.toolIcon} />}
              </li>
            )}
            <li ref={musicRef} className={clsx(styles.toolItemMusic)}>
              <Tooltip position="lb" popupVisible={visible} content="客官，您的小曲儿为您准备好了~~" style={{ visibility: isPC ? 'initial' : 'hidden' }}>
                <IconMusic className={styles.toolIcon} onClick={playHandler}></IconMusic>
              </Tooltip>
            </li>
            <li className={clsx(styles.toolItemCard)}>
              <Popover position="br" color="transparent" style={{ borderColor: 'transparent', visibility: isPC ? 'initial' : 'hidden' }} content={<IntroduceCard />} defaultPopupVisible={true}>
                <IconIdcard className={styles.toolIcon} onClick={showProfile} />
              </Popover>
            </li>
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
            <Link className=" font-feizhai " to="/docs/category/学习框架">
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
