import React from 'react'
import { Link, graphql } from 'gatsby'
import './blog-page.css'
import Layout from '../components/layout'

const BlogPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <div>
      <Layout>
        <div className="main">
          <div className="blog-page-header">Kevin's Thoughts ...</div>
          {postList.edges.map(({ node }, i) => (
            <Link to={node.fields.slug} className="link">
              <div className="post">
                <p className="post-title">{node.frontmatter.title}</p>
                <span className="post-date">{node.frontmatter.date}</span>
                <p className="post-text">{node.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    </div>
  )
}
export default BlogPage
export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            title
          }
        }
      }
    }
  }
`
