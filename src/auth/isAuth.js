function isAuth() {
  const getToken = () => {
    const userToken = sessionStorage.getItem('ACCESS_TOKEN');
    return userToken;
  };

  const accessToken = getToken();

  const saveToken = userToken => {
    sessionStorage.setItem('ACCESS_TOKEN', JSON.stringify(userToken));
  };

  return {
    setAccessToken: saveToken,
    accessToken,
  };
}
export default isAuth;
