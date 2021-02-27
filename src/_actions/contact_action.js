import axios from 'axios';
import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  READ_ALLCONTACT,
} from './types';
import { CONTACTS_SERVER } from '../components/config.js';

export async function createContact(dataToSubmit) {
  const request = await fetch(`${CONTACTS_SERVER}/create`, {
    method: 'POST',
    body: dataToSubmit,
  });
  return {
    type: CREATE_CONTACT,
    payload: request.json(),
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
  const request = await fetch('https://v1.stormapi.com/contacts/read-all', {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjYW5hZGFzdGFydHVwY28iLCJzdWIiOiIxMzQiLCJleHAiOjE2MTQ0NDcwMzV9.RN4Ern87Ekaj4tIop5E2TLYd4DdH3u3c78-CY0nac3k',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': 'https://localhost:3000',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Methods': 'POST, GET, ',
    },
  })
    .then(response => response.data)
    .catch(err => {
      console.log(err);
    });
  return {
    type: READ_ALLCONTACT,
    payloady: request,
  };
}
