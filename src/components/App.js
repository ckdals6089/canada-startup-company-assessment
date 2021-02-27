import React, { useState } from 'react';
import './App.css';

import isAuth from '../auth/isAuth';
import Login from './view/LoginPage/Login';
import Landing from './view/LandingPage/ContactList';
import NavBar from './view/NavBar/NavBar';
function App() {
  const { accessToken, setAccessToken } = isAuth();
  if (!accessToken) {
    return (
      <div>
        <NavBar />
        <Login setAccessToken={setAccessToken} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <NavBar />
        <Landing accessToken={accessToken} />
      </div>
    );
  }
}

export default App;
