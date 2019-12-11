import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import './project-post.css'
import { graphql } from 'gatsby'
import { FaGithubSquare } from 'react-icons/fa'

function ProjectPost(props) {
  const post = props.data.markdownRemark
  const { title, github } = post.frontmatter
  return (
    <Layout>
      <div className="main">
        <div className="post-container">
          <h1 className="blog-post-title">
            {title}
            <span className="github-icon">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithubSquare size={40} />
              </a>
            </span>
          </h1>
          <div className="hero-image">
            <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        github
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
