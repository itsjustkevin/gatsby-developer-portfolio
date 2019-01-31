import './index.css'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <div className="nav-bar">
    <nav className="site-nav">
      <ul>
        <li className="nav-left-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-right-item">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
