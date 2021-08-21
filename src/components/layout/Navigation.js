import React from 'react'
import NavItem from './NavItem'

const Navigation = () => {
  return (
    <nav className="bgf-nav">
      <NavItem text="Home" url="/" />
      <NavItem text="About" url="/about" />
      <NavItem text="Sign Up" url="/register" />
    </nav>
  )
}

export default Navigation
