import React from 'react'
import Login from '../auth/Login';

const Header = () => {
  return (
    <header>
      <div id='logo'>
        <img src="./images/icons/meal-logo-96.png" alt="best bites logo" id="header-logo"></img>
        <h1>BEST BITES</h1>
      </div>
      <Login />
    </header>
  )
}

export default Header