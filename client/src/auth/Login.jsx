import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { LoginContext } from './LoginProvider';

const Login = () => {

  const context = useContext(LoginContext);

  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e && e.preventDefault();
    handleLogin(user);
  }

  const handleChange = (e) => {
    e.persist();
    setUser(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleLogin = (userObj) => {
    context.login(userObj.username, userObj.password);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control 
        onChange={handleChange} 
        size="md"
        name="username"
        type="text"
        placeholder="username">
      </Form.Control>
      <Form.Control 
        onChange={handleChange} 
        size="md"
        name="password"
        type="text"
        placeholder="password">
      </Form.Control>
      <Button type="submit" size="md">Login</Button>
    </Form>
  )
}

export default Login