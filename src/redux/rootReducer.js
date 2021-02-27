import { combineReducers } from 'redux';
import userReducer from './_reducers/user_reducer';
import contactReducer from './_reducers/contact_reducer';
const rootReducer = combineReducers({
  userReducer,
  contactReducer,
});

export default rootReducer;
