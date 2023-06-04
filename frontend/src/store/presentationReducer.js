// action - state management
import * as actionTypes from './actions';

export const initialState = {
  title: undefined,
  theme: undefined,
  text: undefined,
  urls: undefined,
  tableOfContents: {
    data: undefined,
    isLoading: undefined
  },
  summary: {
    data: undefined,
    isLoading: undefined
  }
  // add presentation stuff here
};

const presentationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROMPT_DATA:
      return {
        ...state,
        title: action.title,
        theme: action.theme,
        text: action.text,
        urls: action.urls
      };
    case actionTypes.SET_TOC:
      return {
        ...state,
        tableOfContents: {
          ...state.tableOfContents,
          ...action.tableOfContents
        }
      };
    case actionTypes.SET_SUMMARY:
      return {
        ...state,
        summary: {
          ...state.summary,
          ...action.summary
        }
      };
    case actionTypes.RESET_ALL:
      return initialState;
    default:
      return state;
  }
};

export default presentationReducer;
