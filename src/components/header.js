import './layout.css'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <div className="nav-bar">
    <nav className="site-nav">
      <ul>
        <li className="nav-left-item">
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li className="nav-right-item">
          <Link to="/projects" activeClassName="active">
            Projects
          </Link>
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
