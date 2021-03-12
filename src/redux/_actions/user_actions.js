import { LOGIN_USER, LOGOUT_USER } from './types';

export async function loginUser(dataToSubmit) {
  const response = await fetch(`users/login`, {
    method: 'POST',
    body: dataToSubmit,
  });
  return {
    type: LOGIN_USER,
    payload: response.json(),
  };
}

export async function logoutUser(token) {
  const accessToken = 'Bearer ' + token.replace(/"/g, '');
  const response = await fetch(`users/logout`, {
    method: 'POST',
    headers: {
      Authorization: accessToken,
    },
  });
  return {
    type: LOGOUT_USER,
    payload: response.json(),
  };
}
