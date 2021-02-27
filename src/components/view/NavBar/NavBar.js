import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/_actions/user_actions';

const NavBar = () => {
  const IsLoggedin = sessionStorage.getItem('ACCESS_TOKEN');
  const [logintoggle, setLoginToggle] = useState(true);
  console.log(IsLoggedin);
  useEffect(() => {
    if (IsLoggedin === null) {
      setLoginToggle(false);
    } else {
      setLoginToggle(true);
    }
  }, []);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser(IsLoggedin))
      .then(response => {
        console.log(response);
      })
      // fetch(`${USER_SERVER}/logout`, {
      //   method: 'POST',
      //   mode: 'cors',
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
      //     'Access-Control-Allow-Headers':
      //       'append,delete,entries,foreach,get,has,keys,set,values,Authorization',
      //     Authorization: `Bearer ${IsLoggedin}`,
      //   },
      // })
      .then(response => {
        console.log(response);
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
