import { LOGIN_USER, LOGOUT_USER } from './types';

export async function loginUser(dataToSubmit) {
  const request = await fetch(`users/login`, {
    method: 'POST',
    body: dataToSubmit,
  });
  return {
    type: LOGIN_USER,
    payload: request.json(),
  };
}

export async function logoutUser() {
  const token = sessionStorage.getItem('ACCESS_TOKEN');
  const accessToken = 'Bearer ' + token.replace(/"/g, '');
  const request = await fetch(`users/logout`, {
    method: 'POST',
    headers: {
      Authorization: accessToken,
    },
  });

  return {
    type: LOGOUT_USER,
    payload: request.json(),
  };
}
