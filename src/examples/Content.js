import React from "react"
import { StaticQuery, graphql } from "gatsby"

export const Content = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
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
    }}
  />
)
