import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is a blog</h1>
        <p className={styles.text}>this is a body</p>
      </div>
    </Layout>
  )
}

export default blog
