import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site(siteMetadata: {}) {
        siteMetadata {
          title
          author
          data
          description
        }
      }
    }
  `)
  return (
    <div>
      <h2>{data && data.site.siteMetadata.title}</h2>
      <ul>
        {data &&
          data.site.siteMetadata.data.map((d, i) => {
            return <li key={i}>{d}</li>
          })}
      </ul>
    </div>
  )
}

export default ComponentName
