import * as types from '../constants/actionTypes'

export const login = () => ({
  type: types.lOGIN,
  uid: 'testuser'
})

export const logout = () => ({
  type: types.LOGOUT
})