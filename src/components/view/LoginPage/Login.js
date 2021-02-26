import React, { useState, useRef } from 'react';
// import { Form, Button, Typography } from 'antd';
import { Form, Button, Jumbotron, Alert } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_actions';

const Login = ({ setAccessToken }) => {
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(true);

  const handleSubmit = async e => {
    e.preventDefault();
    let loginUserData = new FormData();
    loginUserData.append('app_name', 'canstartco');
    loginUserData.append('username', usernameRef.current.value);
    loginUserData.append('password', passwordRef.current.value);
    dispatch(loginUser(loginUserData))
      .then(response => {
        console.log(response.payload);
        if (response.payload.data.access_token) {
          console.log('successfully login');
          console.log(response.payload.data.access_token);
          setAccessToken(response.payload.data.access_token);
        } else {
          setFormErrorMessage('Check out your Account or Password again');
          setShowAlert(false);
        }
      })
      .catch(error => {
        console.log(error);
        setFormErrorMessage('Check out your Account or Password again');
        setShowAlert(false);
        setTimeout(() => {
          setShowAlert(true);
          setFormErrorMessage('');
        }, 3000);
      });
  };

  return (
    <>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
      <div className="login-container">
        <div>
          <Form
            className="d-flex flex-column align-items-center"
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="Username"
                placeholder="Username"
                ref={usernameRef}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <div className="login-error">
              <Alert variant="danger" hidden={showAlert}>
                {formErrorMessage}
              </Alert>
            </div>
            <Button
              variant="primary outline-primary"
              type="submit"
              value="Log In"
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
