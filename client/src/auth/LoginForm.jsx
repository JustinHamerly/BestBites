import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import LoginModal from './LoginModal';

const LoginForm = (props) => {
  const [showLoginModal, handleShowLoginModal] = useState(false);
  const [showRegisterModal, handleShowRegisterModal] = useState(false);
  const displayLogin = () => handleShowLoginModal(!showLoginModal);
  const displayRegister = () => handleShowRegisterModal(!showRegisterModal);
  return (
    // <Form className="loginForm" onSubmit={props.handleSubmit}>
    //   <Form.Control
    //     onChange={props.handleChange}
    //     size="md"
    //     name="username"
    //     type="text"
    //     value={props.user.username}
    //     autoComplete="email"
    //     placeholder="email">
    //   </Form.Control>
    //   <Form.Control
    //     onChange={props.handleChange}
    //     value={props.user.password}
    //     size="md"
    //     name="password"
    //     type="password"
    //     autoComplete="current-password"
    //     placeholder="password">
    //   </Form.Control>
    <div id='login-and-register'>
      <Button size="md" onClick={() => displayLogin(true)}>Login</Button>
      <Button size="md" onClick={() => props.setShowRegister(true)}>Sign Up</Button>
      <LoginModal
        showModal={showLoginModal}
        handleShowModal={displayLogin}
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
        user={props.user}
      />
    </div>
    // </Form>
  )
}

export default LoginForm