import { LOGIN_USER, LOGOUT_USER } from '../_actions/types';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSucess: action.payload };
    case LOGOUT_USER:
      return { ...state, logoutSucess: action.payload };
    default:
      return state;
  }
}

export const getUserData = (state = {}) => {
  return {
    ...state.user.loginSucess,
  };
};
