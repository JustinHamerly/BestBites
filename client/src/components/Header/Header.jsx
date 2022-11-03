import React from 'react'
import Login from '../../auth/Login';
import Auth from '../../auth/Auth';
import Navigation from './Navigation';
import HeaderLogo from './HeaderLogo';

const Header = () => {
  return (
    <header>
      <HeaderLogo />
      <Auth>
        <Navigation />
      </Auth>
      <Login />
    </header>
  )
}

export default Header