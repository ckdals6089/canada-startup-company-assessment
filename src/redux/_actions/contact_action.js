import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  READ_ALLCONTACT,
} from './types';

export async function createContact(dataToSubmit) {
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
  console.log(dataToSubmit);
  const token = sessionStorage.getItem('ACCESS_TOKEN');
  const accessToken = 'Bearer ' + token.replace(/"/g, '');
  const request = await fetch(`/contacts/update`, {
    method: 'POST',
    headers: {
      Authorization: accessToken,
    },
    body: dataToSubmit,
  });
  return {
    type: UPDATE_CONTACT,
    payload: dataToSubmit,
  };
}

export async function deleteContact(id) {
  const token = sessionStorage.getItem('ACCESS_TOKEN');
  const accessToken = 'Bearer ' + token.replace(/"/g, '');
  const request = await fetch(`/contacts/delete/${id}`, {
    method: 'POST',
    headers: {
      Authorization: accessToken,
    },
  });
  return {
    type: DELETE_CONTACT,
    payload: request,
  };
}

export async function readAllContact(token) {
  const accessToken = 'Bearer ' + token.replace(/"/g, '');
  const request = await fetch(`/contacts/read-all`, {
    method: 'GET',
    headers: {
      Authorization: accessToken,
    },
  });
  return {
    type: READ_ALLCONTACT,
    payload: request.json(),
  };
}
