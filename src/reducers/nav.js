import { SELECTNAVITEM, CLICKNAVITEM, CLOSENAVITEM } from "../constants/actionTypes";

export default function navReducer(
  state = {
    selectedNavItem: null,
    clickedNavItem: null
  }, action) {
  switch (action.type) {
    case SELECTNAVITEM:
      return { ...state, selectedNavItem: action.id };
    case CLICKNAVITEM:
      return { ...state, selectedNavItem: action.id, clickedNavItem: action.id };
    case CLOSENAVITEM:
      return { ...state, clickedNavItem: null }
    default:
      return state;
  }
}
