import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../styles/modules/home.module.scss"

const HomePage = () => {
  return (
    <Layout title="Home">
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>欢迎来到我们的工作室</h1>
          <p>在这里，创意与技术相遇，激发无限可能</p>
        </section>
        
        <section className={styles.features}>
          {/* 可以添加一些特色内容 */}
        </section>
      </main>
    </Layout>
  )
}

export default HomePage

export const Head: HeadFC = () => <title>Home</title>
