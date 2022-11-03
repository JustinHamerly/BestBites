import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import LoginModal from './LoginModal';

const LoginForm = (props) => {
  const [showLoginModal, handleShowLoginModal] = useState(false);
  const displayLogin = () => handleShowLoginModal(!showLoginModal);
  return (
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