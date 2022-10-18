import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const LoginModal = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.handleShowModal}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="loginForm" onSubmit={props.handleSubmit}>
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
              type="password"
              autoComplete="current-password"
              placeholder="password">
            </Form.Control>
            <Button type="submit" size="md">Login</Button>  
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleShowModal}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  )
}

export default LoginModal