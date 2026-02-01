import React from 'react'
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common'
import Giscus, { GiscusProps } from '@giscus/react'
import { useLocation } from '@docusaurus/router'
import { ThemeConfig } from '@docusaurus/preset-classic'
import BrowserOnly from '@docusaurus/BrowserOnly'

const defaultConfig: Partial<GiscusProps> = {
  id: 'comments',
  mapping: 'specific',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  strict: '1', // 用根据路径标题自动生成的 sha1 值，精确匹配 github discussion，避免路径重叠（比如父和子路径）时评论加载串了
  lang: 'zh-CN'
}

interface CustomThemeConfig extends ThemeConfig {
  giscus: GiscusProps & { darkTheme: string }
}

export default function Comment(): JSX.Element {
  const themeConfig = useThemeConfig() as CustomThemeConfig

  // merge default config
  const giscus = { ...defaultConfig, ...themeConfig.giscus }

  if (!giscus.repo || !giscus.repoId || !giscus.categoryId) {
    throw new Error('You must provide `repo`, `repoId`, and `categoryId` to `themeConfig.giscus`.')
  }

  const path = useLocation().pathname.replace(/^\/|\/$/g, '')
  const firstSlashIndex = path.indexOf('/')
  var subPath: string = ''
  if (firstSlashIndex !== -1) {
    subPath = path.substring(firstSlashIndex + 1)
  } else {
    subPath = 'index'
  }

  giscus.term = subPath
  giscus.theme = useColorMode().colorMode === 'dark' ? 'transparent_dark' : 'light'

  return (
    <BrowserOnly fallback={<div>Loading Comments...</div>}>
      {() => (
        <div style={{ margin: '20px auto' }}>
          <Giscus {...giscus} />
        </div>
      )}
    </BrowserOnly>
  )
}
