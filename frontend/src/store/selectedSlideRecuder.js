import * as actionTypes from './actions';

export const initialSelected = {
  selectedSlide: -1,
  allSlides: [],
  pageIds: []
};

const selectedSlideReducer = (state = initialSelected, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_SLIDE:
      return {
        ...state,
        selectedSlide: action.selectedSlide
      }
    case actionTypes.SET_ALL_SLIDES:
      return {
        ...state,
        allSlides: action.allSlides
      }
    case actionTypes.SET_PAGES_INDEX:
      return {
        ...state,
        pageIds: action.pageIds
      }
    default:
      return state;
  }
};

export default selectedSlideReducer;
