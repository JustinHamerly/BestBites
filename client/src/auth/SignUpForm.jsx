import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

import axios from "axios";

const server = import.meta.env.VITE_SERVER;

const SignUpForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [passwordV, setPasswordV] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password === passwordV && username && password){
      handleRegister(username, password)
    }
  }

  const handleRegister = async (username, password) => {
    try {
      const config = {
        baseURL: `${server}/signup`,
        method: 'post',
        data: {
          username: username,
          password: password
        }
      }
      const res = await axios(config);
      console.log(res.data)
      props.login({username: username, password: password});
      props.close();
    } catch (error) {
      console.error(error.message);
      setRegisterError(true);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        onChange={(e) => setUsername(e.target.value)}
        size="md"
        name="username"
        type="text"
        autoComplete="email"
        placeholder="email">
      </Form.Control>
      <Form.Control
        onChange={(e) => setPassword(e.target.value)}
        size="md"
        name="password"
        type="password"
        autoComplete="new-password"
        placeholder="Password">
      </Form.Control>
      <Form.Control
        onChange={(e) => setPasswordV(e.target.value)}
        size="md"
        name="passwordVerify"
        type="password"
        autoComplete="new-password"
        placeholder="Verify Password">
      </Form.Control>
      <Button type="submit">Sign Up</Button>
    </Form>
  )
}

export default SignUpForm