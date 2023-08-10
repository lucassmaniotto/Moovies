import * as types from '../types';

function login() {
  return {
    type: types.LOGIN,
  };
}

function logout() {
  return {
    type: types.LOGOUT,
  };
}

export { login, logout };
