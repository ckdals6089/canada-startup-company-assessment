import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  READ_ALLCONTACT,
} from './types';
import { CONTACTS_SERVER } from '../../components/config.js';

export async function createContact(dataToSubmit) {
  console.log(dataToSubmit);
  const token = sessionStorage.getItem('ACCESS_TOKEN');
  const accessToken = 'Bearer ' + token.replace(/"/g, '');
  const request = await fetch(`/contacts/create`, {
    method: 'POST',
    headers: {
      Authorization: accessToken,
    },
    body: dataToSubmit,
  });
  return {
    type: CREATE_CONTACT,
    payload: request,
  };
}

export async function updateContact(dataToSubmit) {
  const request = await fetch(`${CONTACTS_SERVER}/update`, {
    method: 'POST',
    body: dataToSubmit,
  });

  return {
    type: UPDATE_CONTACT,
    payload: request.json(),
  };
}

export async function deleteContact(id, token) {
  const request = await fetch(`${CONTACTS_SERVER}/delete/${id}`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST, GET, ',
      'Access-Control-Allow-Headers':
        'append,delete,entries,foreach,get,has,keys,set,values,Authorization',
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    type: DELETE_CONTACT,
    payload: request.json(),
  };
}

export async function readAllContact(token) {
  const accessToken = 'Bearer ' + token.replace(/"/g, '');
  const request = await fetch(`/contacts/read-all`, {
    method: 'GET',
    headers: {
      Authorization: accessToken,
      // 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYW5zdGFydGNvIiwic3ViIjoiMTI0IiwiZXhwIjoxNjE0NDU3NzkzfQ.GliZ4ovM7h1MC7cM_d8nvFdFjgWTwKIUWmjVI3CwVK0',
    },
  });
  return {
    type: READ_ALLCONTACT,
    payload: request.json(),
  };
}
