import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

const server = process.env.REACT_APP_SERVER;

export const LoginContext = createContext();

const LoginProvider = (props) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);


  //future role based access control
  // const canProceed = (capability) => {
  //   return user?.capabilities?.includes(capability)
  // };

  const login = async (username, password) => {
    try {
      let res = await axios.post(`${server}/login`, {}, { auth: { username, password } });
      validate(res?.data?.token);
    } catch (error) {
      console.warn('bad login');
      alert(`bad login, try again`)
    }
    // .then(res => validate(res?.data?.token))
    // .catch(console.error)
  }

  const handleLogin = (l, u, t) => {
    localStorage.setItem('bb-auth', t)
    setLoggedIn(l);
    setUser(u);
    setToken(t);
  }

  const logout = () => {
    handleLogin(false, {}, null);
    localStorage.removeItem('bb-auth')
  }


  const validate = (token) => {
    try {
      const userObj = jwt_decode(token);
      if (userObj) {
        handleLogin(true, userObj, token);
      } else {
        logout();
      }
    } catch (error) {
      logout();
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const loadToken = localStorage.getItem('bb-auth');
    const retreivedToken = params.get('token') || loadToken || null;

    validate(retreivedToken);
  }, [])

  return (
    <LoginContext.Provider value={{ loggedIn, user, token, login, logout }}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
