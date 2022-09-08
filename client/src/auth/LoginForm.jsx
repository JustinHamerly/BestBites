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
        placeholder="username">
      </Form.Control>
      <Form.Control
        onChange={props.handleChange}
        size="md"
        name="password"
        type="text"
        placeholder="password">
      </Form.Control>
      <Button type="submit" size="md">Login</Button>
    </Form>
  )
}

export default LoginForm