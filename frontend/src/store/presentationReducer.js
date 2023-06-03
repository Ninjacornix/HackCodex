// action - state management
import * as actionTypes from './actions';

export const initialState = {
  tableOfContents: {
    data: undefined,
    isLoading: undefined
  }
  // add presentation stuff here
};

const presentationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOC:
      return {
        ...state,
        tableOfContents: {
          ...state.tableOfContents,
          ...action.tableOfContents
        }
      };
    default:
      return state;
  }
};

export default presentationReducer;
