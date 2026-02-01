import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import HomepageHeader from '../components/HomepageHeader'
import artplayerPluginDanmuku from 'artplayer-plugin-danmuku'
import danmuInfo from '@site/static/data/dammu.json'
import artplayerPluginChapter from 'artplayer-plugin-chapter'
import IntroduceCard from '../components/IntroduceCard'

import Wave from '../components/Wave'
import Profile from '../components/Profile'
import ArtPlayer from '../components/ArtPlayer'

import { getDeviceModel } from '../utils/func/getDevice'
import { useEffect, useRef, useState } from 'react'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  const [isPc, setIsPc] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const a = 'das'

  useEffect(() => {
    setIsPc(getDeviceModel() === 'pc')
  }, [])

  //当组件销毁时，移除动画

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="这里有你想知道的，有你感兴趣的一切！">
      {/* <Globalnotice /> */}
      {/* 音频组件 */}
      <HomepageHeader />
      <main>
        <Wave />
        {/* {isPc && (
          <div className="artplayer">
            <ArtPlayer
              option={{
                url: 'https://artplayer.org/assets/sample/video.mp4',
                container: '.artplayer',
                autoSize: true,
                autoMini: true,
                playbackRate: true,
                // fullscreen: true,
                fullscreenWeb: true,
                autoOrientation: true,
                miniProgressBar: true,
                pip: true,
                playsInline: true,
                theme: '#00a1d6',
                plugins: [
                  artplayerPluginDanmuku({
                    danmuku: danmuInfo,

                    // 以下为非必填
                    speed: 5, // 弹幕持续时间，范围在[1 ~ 10]
                    margin: [10, '25%'], // 弹幕上下边距，支持像素数字和百分比
                    opacity: 1, // 弹幕透明度，范围在[0 ~ 1]
                    color: '#FFFFFF', // 默认弹幕颜色，可以被单独弹幕项覆盖
                    mode: 0, // 默认弹幕模式: 0: 滚动，1: 顶部，2: 底部
                    modes: [0, 1, 2], // 弹幕可见的模式
                    fontSize: 25, // 弹幕字体大小，支持像素数字和百分比
                    antiOverlap: true, // 弹幕是否防重叠
                    synchronousPlayback: false, // 是否同步播放速度
                    mount: undefined, // 弹幕发射器挂载点, 默认为播放器控制栏中部
                    heatmap: true, // 是否开启热力图
                    width: 512, // 当播放器宽度小于此值时，弹幕发射器置于播放器底部
                    points: [], // 热力图数据
                    filter: danmu => danmu.text.length <= 100, // 弹幕载入前的过滤器
                    beforeVisible: () => true, // 弹幕显示前的过滤器，返回 true 则可以发送
                    visible: true, // 弹幕层是否可见
                    emitter: true, // 是否开启弹幕发射器
                    maxLength: 200, // 弹幕输入框最大长度, 范围在[1 ~ 1000]
                    lockTime: 5, // 输入框锁定时间，范围在[1 ~ 60]
                    theme: 'dark', // 弹幕主题，支持 dark 和 light，只在自定义挂载时生效

                    // 手动发送弹幕前的过滤器，返回 true 则可以发送，可以做存库处理
                    beforeEmit(danmu) {
                      return new Promise(resolve => {
                        setTimeout(() => {
                          resolve(true)
                        }, 1000)
                      })
                    }
                  }),
                  artplayerPluginChapter({
                    chapters: [
                      { start: 0, end: 18, title: 'One more chance' },
                      { start: 18, end: 36, title: '谁でもいいはずなのに' },
                      { start: 36, end: 54, title: '夏の想い出がまわる' },
                      { start: 54, end: 72, title: 'こんなとこにあるはずもないのに' },
                      { start: 72, end: Infinity, title: '终わり' }
                    ]
                  })
                ]
              }}
              style={{
                margin: '60px auto 0'
              }}
              getInstance={art => console.info(art)}
            />
          </div>
        )} */}
        {/* <Profile /> */}

        <HomepageFeatures />
      </main>
    </Layout>
  )
}
