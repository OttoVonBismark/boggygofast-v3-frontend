import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ text, url }) => {
  // TODO: Rename CSS classes when we get back to working on this.
  return (
    <Link className="cerb-nav-item" to={url}>{text}</Link>
  )
}

export default NavItem
