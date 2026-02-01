import React, { FC, useEffect, useRef, Suspense, useState } from 'react'
import { memo } from 'react'
import { ProfileWrapper } from './style'
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist'
import { Modal, Spin } from '@arco-design/web-react'

interface Iprops {
  visible: boolean
  callback?: () => void
}

const Profile: FC<Iprops> = ({ visible, callback }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setLoading] = useState(true)

  GlobalWorkerOptions.workerSrc = `data/pdf.worker.mjs`

  useEffect(() => {
    if (canvasRef.current && isLoading) {
      const loadingTask = getDocument('pdfs/profile.pdf')
      loadingTask.promise.then(pdf => {
        pdf.getPage(1).then(page => {
          const viewport = page.getViewport({ scale: 1.0 })
          const canvas = canvasRef.current
          const context = canvas.getContext('2d')
          canvas.height = viewport.height
          canvas.width = viewport.width

          const renderContext = {
            canvasContext: context,
            viewport: viewport
          }
          page.render(renderContext)
          setLoading(false)
        })
      })
    }
  })

  return (
    <Modal
      visible={visible}
      onCancel={callback}
      mountOnEnter={false}
      style={{ width: '40%' }}
      okText="下载"
      cancelText="取消"
      onConfirm={() => {
        const a = document.createElement('a')
        a.href = 'pdfs/profile.pdf'
        a.download = '秦建泽-前端开发工程师.pdf'
        a.click()
      }}
    >
      <ProfileWrapper>
        <Spin loading={isLoading}>
          <canvas id="dfs-canvas" ref={canvasRef} style={{ display: isLoading ? 'none' : 'block' }}></canvas>
        </Spin>
      </ProfileWrapper>
    </Modal>
  )
}

export default memo(Profile)
