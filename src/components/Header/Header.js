import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1 className='centered'>PinkFlag</h1>
    <div className='centered'>
      <IndexLink to='/' activeClassName='route--active'>
        Home
      </IndexLink>
      {' • '}
      <Link to='/about' activeClassName='route--active'>
        About
      </Link>
    </div>
  </div>
)

export default Header
