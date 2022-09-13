import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { LoginContext } from './LoginProvider';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Login = () => {

  const context = useContext(LoginContext);

  const [user, setUser] = useState({username: '', password: ''});
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
    setUser({username: '', password: ''});
  }

  const handleChange = (e) => {
    e.persist();
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleLogin = (userObj) => {
    context.login(userObj.username, userObj.password);
  }

  const handleCloseRegister = () => setShowRegister(false);

  return (
    <>
      {
        context.loggedIn ?
          <Button onClick={() => context.logout()}>LOGOUT</Button>
          :
          <LoginForm user={user} handleChange={handleChange} handleSubmit={handleSubmit} setShowRegister={setShowRegister} />
      }
      <Modal id="signUpModal" show={showRegister} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Create an Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm close={handleCloseRegister} login={handleLogin} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Login