import React from "react"
import Layout from "../components/Layout"
import { ExButton } from "../components/button"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)
  const {
    site: {
      info: { author },
    },
    files: { nodes },
    fluidSample: {
      childImageSharp: { fluid },
    },
  } = data
  console.log(nodes)
  return (
    <Layout>
      <div>this is home</div>
      <div>
        <h5>{author}</h5>
        <div>{<Img fluid={fluid} />}</div>
        <div>
          <ul>
            {nodes.map((i, index) => {
              console.log(i)
              const { childImageSharp, relativePath, sourceInstanceName } = i
              return (
                <li key={index}>
                  <Img fixed={childImageSharp.fixed} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <ExButton>press here!!</ExButton>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        title
        author
        data
        description
      }
    }
    files: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      totalCount
      nodes {
        sourceInstanceName
        relativePath
        childImageSharp {
          id
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    fluidSample: file(relativePath: { eq: "desert2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
