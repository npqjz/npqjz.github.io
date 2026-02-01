import React from 'react'
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents'
import BrowserView from '@site/src/components/BroswerView'
import CaculView from '@site/src/components/BroswerView/caculView'
import CodeBlock from '@theme-original/CodeBlock'
import Tabs from '@theme-original/Tabs'
import TabItem from '@theme-original/TabItem'
import Admonition from '@theme-original/Admonition'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  BrowserView,
  CaculView,
  CodeBlock,
  Tabs,
  TabItem,
  Admonition
}
