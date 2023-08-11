import * as types from '../types';

function loginSuccess() {
  return {
    type: types.LOGIN_SUCCESS,
  };
}

function loginFailure() {
  return {
    type: types.LOGIN_FAILURE,
  };
}

function loginRequest() {
  return {
    type: types.LOGIN_REQUEST,
  };
}

function logout() {
  return {
    type: types.LOGOUT,
  };
}

export { loginSuccess, loginFailure, loginRequest, logout };
