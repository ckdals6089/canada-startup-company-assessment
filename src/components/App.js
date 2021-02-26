import React, { useState } from 'react';
import './App.css';

import isAuth from '../auth/auth';
import Login from './view/LoginPage/Login';
import Landing from './view/LandingPage/ContactList';
import NavBar from './view/NavBar/NavBar';

function App() {
  const { accessToken, setAccessToken } = isAuth();
  const [userData, setUserData] = useState('');
  if (!accessToken) {
    return (
      <div>
        <NavBar />
        <Login setAccessToken={setAccessToken} loginUserData={userData} />
        {console.log(userData)}
      </div>
    );
  } else {
    return (
      <div className="App">
        <NavBar />
        <Landing accessToken={accessToken} />;
      </div>
    );
  }
}

export default App;
