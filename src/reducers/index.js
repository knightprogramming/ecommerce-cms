import { combineReducers } from "redux";
import authReducer from "./auth";
import navReducer from "./nav";

const rootReducer = combineReducers({
  auth: authReducer,
  nav: navReducer
});

export default rootReducer;
