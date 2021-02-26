import React, { useState } from 'react';

function isAuth() {
  const getToken = () => {
    const userToken = sessionStorage.getItem('ACCESS_TOKEN');
    return userToken;
  };

  const [accessToken, setAccessToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('ACCESS_TOKEN', JSON.stringify(userToken));
    setAccessToken(userToken);
  };

  return {
    setAccessToken: saveToken,
    accessToken,
  };
}
export default isAuth;
