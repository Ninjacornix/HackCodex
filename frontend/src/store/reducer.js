import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import authReducer from './authReducer';
import presentationReducer from './presentationReducer';
import tokensReducer from './tokensReducer';
import selectedSlideRecuder from './selectedSlideRecuder';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  auth: authReducer,
  presentation: presentationReducer,
  tokens: tokensReducer,
  slides: selectedSlideRecuder
});

export default reducer;
