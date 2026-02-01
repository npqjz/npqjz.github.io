import { FC, memo, ReactNode, useEffect, useRef, useState } from 'react'
import { GlobalnoticeWrapper } from './style'
import { formatDatatime } from '@site/src/utils/func/format/formatDta'

interface IProps {
  children?: ReactNode
}

const Globalnotice: FC<IProps> = () => {
  const [datatime, setDatatime] = useState('')

  const NoticeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const countdown = formatDatatime(new Date().getTime())
    setDatatime(countdown)

    // 根据天数，改变Notice样式，实现进度条背景颜色渐变
    NoticeRef.current.style.setProperty('background', `linear-gradient(to left, #3491fa ${Number(countdown)}%, #ff1361 0%)`)
  })

  const removeNotice = () => {
    document.getElementById('arco-global-notice')?.remove()
  }

  return (
    <GlobalnoticeWrapper id="arco-global-notice" className="ac-navbar-global-notice" ref={NoticeRef}>
      <a href="https://yz.chsi.com.cn/yzwb/" rel="Arco Global Notice noreferrer" target="_blank" className="ac-navbar-global-notice-container">
        <b>距离研究生考试时间还有</b>
        <span className="ac-navbar-global-notice-desc"></span>
        <b>
          {datatime} 天
          <svg fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 48 48" aria-hidden="true" focusable="false" className="arco-icon arco-icon-right">
            <path d="m16 39.513 15.556-15.557L16 8.4"></path>
          </svg>
        </b>
      </a>
      <div className="ac-navbar-global-notice-close-icon" onClick={removeNotice}>
        <svg fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 48 48" aria-hidden="true" focusable="false" className="arco-icon arco-icon-close">
          <path d="M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"></path>
        </svg>
      </div>
    </GlobalnoticeWrapper>
  )
}

export default memo(Globalnotice)
