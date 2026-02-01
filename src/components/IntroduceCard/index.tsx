import { FC, memo, useEffect, useState } from 'react'
import { StyledWrapper } from './style'
import Profile from '../Profile'

const IntoduceCard: FC = () => {
  const [isShowResume, setIsShowResume] = useState(false)
  const handleResume = () => {
    setIsShowResume(!isShowResume)
  }

  function transformElement(x: number, y: number) {
    const card = document.getElementById('card')
    // const card = document.getElementById('card')
    const box = card.getBoundingClientRect()
    const degX = -(x - box.x - box.width / 2) / 20
    const degY = (y - box.y - box.height / 2) / 20
    card.style.transform = `rotateX(${degY}deg) rotateY(${degX}deg)`
  }

  const moveHandler = e => {
    window.requestAnimationFrame(function () {
      transformElement(e.clientX, e.clientY)
    })
  }

  return (
    <StyledWrapper>
      <div className="threed-box" id="threed-box" onMouseMove={moveHandler}>
        <div className="card" id="card">
          <div className="img">
            <img src="svg/pikachu.svg" alt="" />
          </div>
          <span>关于站主</span>
          <p className="info">
            本站是我实践各种前端新技术的实验田，同时也会总结我的一些个人心得
            <br />
            本人卑微本科生一枚，热爱开发，喜欢钻研一些小东西，对于技术具有浓厚的探索欲望，目前正在寻找工作中，希望能够得到哪位大老板的赏识，哈哈哈~，简历可见下方
          </p>

          <button onClick={handleResume}>个人简历</button>
        </div>
        <Profile visible={isShowResume} callback={handleResume} />
      </div>
    </StyledWrapper>
  )
}

export default memo(IntoduceCard)
