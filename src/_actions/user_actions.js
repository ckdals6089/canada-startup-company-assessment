import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER, IS_LOGIN } from './types';
import { USER_SERVER } from '../components/config.js';

export async function loginUser(dataToSubmit) {
  const request = await fetch(`${USER_SERVER}/login`, {
    method: 'POST',
    body: dataToSubmit,
  });
  return {
    type: LOGIN_USER,
    payload: request.json(),
  };
}

export async function logoutUser(token) {
  const request = await fetch(`${USER_SERVER}/logout`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    type: LOGOUT_USER,
    payload: request.json(),
  };
}
