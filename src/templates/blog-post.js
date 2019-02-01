import React from 'react'
import Layout from '../components/layout'
import './blog-post.css'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter
  return (
    <Layout>
      <div className="main">
        <div class="post-container">
          <h1 className="blog-post-title">{title}</h1>
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

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
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
