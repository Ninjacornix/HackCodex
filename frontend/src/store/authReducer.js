// action - state management
import * as actionTypes from './actions';

export const initialState = {
  access_token: null,
  email: null,
  family_name: null,
  given_name: null,
  id: null,
  locale: null,
  name: null,
  picture: null,
  verified_email: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return action.user;
    case actionTypes.LOGOUT:
    case actionTypes.RESET_ALL:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
