import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        author
        data
        description
      }
    }
  }
`

export const Content = () => {
  const data = useStaticQuery(getData)

  return (
    <div>
      <h2>{data && data.site.info.title}</h2>
      <ul>
        {data &&
          data.site.info.data.map((d, i) => {
            return <li key={i}>{d}</li>
          })}
      </ul>
    </div>
  )
}
