import { FC, memo, ReactNode, useMemo } from 'react'
import { Sprite, Stage, Text, Container } from '@pixi/react'
import { BlurFilter } from 'pixi.js'

interface IProps {
  children?: ReactNode
}

const TextEffect: FC<IProps> = () => {
  const blurFilter = useMemo(() => new BlurFilter(4), [])

  return (
    <Stage options={{ background: 0xffffff }}>
      {/* <Sprite image="https://pixijs.io/pixi-react/img/bunny.png" x={400} y={270} anchor={{ x: 0.5, y: 0.5 }} /> */}

      <Container x={400} y={330}>
        <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} filters={[blurFilter]} />
      </Container>
    </Stage>
  )
}

export default memo(TextEffect)
