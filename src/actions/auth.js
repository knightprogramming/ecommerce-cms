import { lOGIN, LOGOUT } from '../constants/actionTypes'

export const login = () => ({ type: lOGIN, uid: "testuser" });

export const logout = () => ({ type: LOGOUT });