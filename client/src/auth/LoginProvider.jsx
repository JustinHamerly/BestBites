import React, { createContext, useState, useEffect } from "react";
import cookie from 'react-cookies';
import jwtDecode from "jwt-decode";
import axios from "axios";

const server = import.meta.env.REACT_APP_SERVER;

export const LoginContext = createContext();

const LoginProvider = (props) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const loadToken = cookie.load('auth');
    const retreivedToken = params.get('token') || loadToken || null;

    validate(retreivedToken);
  }, [])

  const canProceed = (capability) => {
    return user?.capabilities?.includes(capability)
  };

  const login = (username, password) => {
    let auth = base64.encode(username+ ':' + password);
    axios.post(`${server}/login`, {authorization: `Basic ${auth}`})
      .then(res => validate(res?.data?.token))
      .catch(console.error)
  }

  const logout = () => {
    handleLogin(false, {}, null);
  }

  const handleLogin = (l, u, t) => {
    setLoggedIn(l);
    setUser(u);
    setToken(t);
  }

  const validate = (token) => {
    try {
      const userObj = jwtDecode(token);
      handleLogin(true, userObj, token);
    } catch (error) {
      logout();
      console.log('Unable to validate token', error.message)
    }
  }

  return (
    <LoginContext.Provider value={{loggedIn, user, token, canProceed, login, logout}}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginProvider