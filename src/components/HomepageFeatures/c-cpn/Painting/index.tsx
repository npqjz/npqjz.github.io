import { FC, memo, ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { withPixiApp } from '@pixi/react'
import { Application, BlurFilter, DisplacementFilter, Filter, ICanvas, Matrix, Point, Rectangle, SpriteMaskFilter, Texture } from 'pixi.js'
import { Sprite, Container } from '@pixi/react'
import { imgResize } from '@site/src/utils/func/imgResize'
import { FeatureList } from '../../data'
import { AdvancedBloomFilter, OutlineFilter, ReflectionFilter } from 'pixi-filters'

interface IProps {
  children?: ReactNode
  app: Application<ICanvas>
  imgUrl: string
  isBlur: boolean
}

const Painting = withPixiApp<IProps>(({ app, imgUrl, isBlur }) => {
  const bloomFilter = new AdvancedBloomFilter({ threshold: 0.8, blur: 4, quality: 4 })
  const displamentFilter = new DisplacementFilter(
    {
      _texture: Texture.from('/img/filter.png'),
      worldAlpha: 0.3, // 透明度
      anchor: new Point(0, 0),
      renderable: true,
      render: () => {
        console.log(1)
      },
      filterArea: new Rectangle(0, 0, 400, 300),
      getBounds: () => new Rectangle(0, 0, 0, 0),
      worldTransform: new Matrix()
    },
    0.1
  )
  const outlineFilter = new OutlineFilter(1, 0x333333, 0.5) // 轮廓,描边
  const reflectionFilter = new ReflectionFilter({
    waveLength: [0.2],
    amplitude: [0.1],
    alpha: [0.1],
    boundary: 1,
    time: 0,
    mirror: true
  })

  const imgFilters: Filter[] = [bloomFilter, displamentFilter, outlineFilter, reflectionFilter]
  const blurFilter = new BlurFilter(8)
  const [imgWidth, setImgWidth] = useState(0)
  const [imgHeight, setImgHeight] = useState(0)

  useEffect(() => {
    const canvas = document.querySelector('.text--center canvas') as HTMLCanvasElement

    // console.log(canvas.width, canvas.height)
    imgResize(imgUrl, canvas).then(({ scaleX, scaleY }) => {
      setImgHeight(scaleX)
      setImgWidth(scaleY)
    })
  })

  useEffect(() => {
    if (isBlur) {
      // setImgFilters(imgFilters.concat(blurFilter))
      imgFilters.push(blurFilter)
      // app.ticker.add(tick)
    } else {
      // setImgFilters(imgFilters.slice(0, -1))
      imgFilters.pop()
      // app.ticker.remove(tick)
    }
  }, [isBlur])

  return (
    <Container>
      <Sprite image={imgUrl} scale={[imgWidth, imgHeight]} filters={imgFilters}></Sprite>
    </Container>
  )
})

export default memo(Painting)
