import {
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  READ_ALLCONTACT,
} from '../_actions/types';
const initialContacts = {
  contact: '',
};

export default function contactReducer(state = initialContacts, action) {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contact: [action.payload, ...state.contact],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contact: state.contact.filter(
          contactData => contactData.id != action.payload
        ),
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contact: state.contact.map(contactData => {
          if (contactData.data.id == action.payload.id) {
            return action.payload;
          }
          return contactData;
        }),
      };
    case READ_ALLCONTACT:
      return {
        ...state,
        contact: [action.payload, ...state.contact],
      };
    default:
      return state;
  }
}

export const getUserData = (state = {}) => {
  return {
    ...state.user.loginSucess,
  };
};
