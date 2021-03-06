import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='my-2 pl-2'>
      <Link to="/" className='font-bold text-5xl header-text'>BoggyGoFast</Link>
    </header>
  )
}

export default Header
