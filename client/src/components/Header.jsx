import React from 'react'
import Login from '../auth/Login';
import { Link } from 'react-router-dom';
import Auth from '../auth/Auth';

const Header = () => {
  return (
    <header>
      <div id='logo'>
        <img src="./images/icons/meal-logo-96.png" alt="best bites logo" id="header-logo"></img>
        <h1>BEST BITES</h1>
      </div>
      <Auth>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/search'>Search</Link>
          <Link to='/profile'>Profile</Link>
        </nav>
      </Auth>
      <Login />
    </header>
  )
}

export default Header