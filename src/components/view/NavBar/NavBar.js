import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/_actions/user_actions';

const NavBar = () => {
  const accessToken = sessionStorage.getItem('ACCESS_TOKEN');
  const [logintoggle, setLoginToggle] = useState(true);
  useEffect(() => {
    if (accessToken === null) {
      setLoginToggle(false);
    } else {
      setLoginToggle(true);
    }
  }, []);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser(accessToken))
      .then(response => {
        if (response.status === 200) {
          alert('Log Out Success');
        } else {
          alert('Log Out Failed');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Navbar bg="dark" variant="dark" className="nav-width">
      <Navbar.Brand href="#home">CanStartCo</Navbar.Brand>
      <Nav className="mr-auto">
        {logintoggle ? (
          <>
            <Nav.Link onClick={logoutHandler}>Log Out</Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link>Sign in</Nav.Link>
            <Nav.Link>Sign up</Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
