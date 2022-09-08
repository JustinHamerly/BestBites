import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';

import { LoginContext } from './LoginProvider';

import LoginForm from './LoginForm';

const Login = () => {

  const context = useContext(LoginContext);

  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  }

  const handleChange = (e) => {
    e.persist();
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleLogin = (userObj) => {
    context.login(userObj.username, userObj.password);
  }

  return (
    <>
      {
        context.loggedIn ?
          <Button onClick={() => context.logout()}>Logout</Button>
        :
          <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} />
      }
    </>
  )
}

export default Login