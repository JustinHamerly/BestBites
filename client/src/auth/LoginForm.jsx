import React from 'react'
import { Button, Form } from 'react-bootstrap';

const LoginForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Control
        onChange={props.handleChange}
        size="md"
        name="username"
        type="text"
        value={props.user.username}
        autoComplete="email"
        placeholder="email">
      </Form.Control>
      <Form.Control
        onChange={props.handleChange}
        value={props.user.password}
        size="md"
        name="password"
        type="text"
        autoComplete="current-password"
        placeholder="password">
      </Form.Control>
      <Button type="submit" size="md">Login</Button>
    </Form>
  )
}

export default LoginForm