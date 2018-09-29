import { lOGIN, LOGOUT } from "../constants/actionTypes";

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case lOGIN:
      return { uid: action.uid };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
