import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import HomepageHeader from '../components/HomepageHeader'

import Wave from '../components/Wave'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  //当组件销毁时，移除动画

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Wave />
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
