import { SELECTNAV, CLICKNAV } from "../constants/actionTypes";

export default function navReducer(
  state = {
    selectedNav: null,
    clickedNav: null
  }, action) {
  switch (action.type) {
    case SELECTNAV:
      return { ...state, selectedNav: action.id };
    case CLICKNAV:
      return { ...state, selectedNav: action.id, clickedNav: action.id };
    default:
      return state;
  }
}
