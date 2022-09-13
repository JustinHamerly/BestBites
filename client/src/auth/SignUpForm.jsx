import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

import axios from "axios";

const server = import.meta.env.VITE_SERVER;

const SignUpForm = (props) => {
  const [form, setForm] = useState({username: '', password: '', passwordV: ''})

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.password === form.passwordV && form.username && form.password){
      handleRegister(form.username, form.password)
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
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        onChange={(e) => setForm({...form, username: e.target.value})}
        size="md"
        name="username"
        type="text"
        value={form.username}
        autoComplete="email"
        placeholder="email">
      </Form.Control>
      <Form.Control
        onChange={(e) => setForm({...form, password: e.target.value})}
        size="md"
        name="password"
        type="password"
        value={form.password}
        autoComplete="new-password"
        placeholder="Password">
      </Form.Control>
      <Form.Control
        onChange={(e) => setForm({...form, passwordV: e.target.value})}
        size="md"
        name="passwordVerify"
        type="password"
        value={form.passwordV}
        autoComplete="new-password"
        placeholder="Verify Password">
      </Form.Control>
      <Button type="submit">Sign Up</Button>
    </Form>
  )
}

export default SignUpForm