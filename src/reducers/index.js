import { combineReducers } from 'redux';
import placeholderReducer from "./placeholderReducer";

const rootReducer = combineReducers({
  placeholderReducer: placeholderReducer
});

export default rootReducer;