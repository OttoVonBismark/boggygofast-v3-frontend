import React from 'react'
import NavItem from './NavItem'

const Navigation = () => {
  // TODO: CSS class names are borrowed from Cerberus for now. Rename/refactor when we come back to this.
  return (
    <nav className="cerb-nav">
      <NavItem text="Home" url="/" />
      <NavItem text="About" url="/about" />
      <NavItem text="Sign Up" url="/register" />
    </nav>
  )
}

export default Navigation
