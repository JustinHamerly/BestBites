import React, { createContext, useState, useEffect } from "react";
import cookie from 'react-cookies';
import jwt_decode from "jwt-decode";
import axios from "axios";

const server = import.meta.env.VITE_SERVER;

export const LoginContext = createContext();

const LoginProvider = (props) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const loadToken = cookie.load('auth');
    console.log(loadToken);
    const retreivedToken = params.get('token') || loadToken || null;

    validate(retreivedToken);
  }, [])

  //future role based access control
  // const canProceed = (capability) => {
  //   return user?.capabilities?.includes(capability)
  // };

  const login = (username, password) => {
    axios.post(`${server}/login`, {}, {auth: {username, password}})
      .then(res => validate(res?.data?.token))
      .catch(console.error)
  }

  const logout = () => {
    handleLogin(false, {}, null);
  }

  const handleLogin = (l, u, t) => {
    cookie.save('auth', token);
    setLoggedIn(l);
    setUser(u);
    setToken(t);
  }

  const validate = (token) => {
    try {
      const userObj = jwt_decode(token);
      console.log(userObj);
      handleLogin(true, userObj, token);
    } catch (error) {
      logout();
      console.log('Unable to validate token', error.message)
    }
  }

  return (
    <LoginContext.Provider value={{loggedIn, user, token, login, logout}}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginProvider