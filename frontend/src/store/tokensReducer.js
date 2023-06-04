// action - state management
import * as actionTypes from './actions';

export const initialState = {
  tokens: undefined
};

const tokensReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKENS:
      return {
        tokens: action.tokens
      };
    case actionTypes.RESET_ALL:
      return initialState;
    default:
      return state;
  }
};

export default tokensReducer;
