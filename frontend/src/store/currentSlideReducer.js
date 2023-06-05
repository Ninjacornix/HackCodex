import * as actionTypes from './actions';

export const initialState = {
    currentSlideContent: undefined,
}

const currentSlideReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_SLIDE_CONTENT:
            return {
                ...state,
                currentSlideContent: action.currentSlideContent
            };
        default:
            return state;
    }
}

export default currentSlideReducer;