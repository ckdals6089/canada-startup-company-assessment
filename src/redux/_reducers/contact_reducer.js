import {
  CREATE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  READ_ALLCONTACT,
} from '../_actions/types';
const initialContacts = {
  contacts: [],
};

export default function contactReducer(state = initialContacts, action) {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contactData => contactData.id != action.payload.id
        ),
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contactData => {
          if (contactData.id === action.payload.id) {
            return action.payload;
          }
          return contactData;
        }),
      };
    case READ_ALLCONTACT:
      const newContacts = action.payload.data;
      return {
        ...state,
        contacts: [...newContacts, ...state.contacts],
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
