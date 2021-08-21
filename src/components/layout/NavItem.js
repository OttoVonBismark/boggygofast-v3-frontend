import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ text, url }) => {
  return (
    <Link className="bgf-nav-item" to={url}>{text}</Link>
  )
}

export default NavItem
