import { FC, memo, ReactNode, useEffect, useRef } from 'react'

import { ArtPlayerWrapper } from './style'
import Artplayer from 'artplayer'

interface IProps {
  children?: ReactNode
  option: Artplayer['option']
  getInstance?: (...args: any) => any
  [key: string]: any
}

const ArtPlayer: FC<IProps> = ({ option, getInstance, ...rest }) => {
  const artRef = useRef(null)

  useEffect(() => {
    const art = new Artplayer({
      ...option
    })

    if (getInstance && typeof getInstance === 'function') {
      getInstance(art)
    }

    return () => {
      if (art && art.destroy) {
        art.destroy(false)
      }
    }
  }, [])

  return <ArtPlayerWrapper ref={artRef} {...rest}></ArtPlayerWrapper>
}

export default memo(ArtPlayer)
