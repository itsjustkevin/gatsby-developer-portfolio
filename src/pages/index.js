import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `kevinchisholm`,
        `kevin chisholm`,
        `kevin jamaul chisholm`,
        `portfolio`,
        `web developer`,
        `web development`,
        `designer`,
      ]}
    />

    <h1>Hi people</h1>
    <p>Index page</p>
  </Layout>
)

export default IndexPage
