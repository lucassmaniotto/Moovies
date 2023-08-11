import * as types from '../types';

const initialState = {
  logged: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.logged = true;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...state };
      newState.logged = false;
      return newState;
    }

    case types.LOGIN_REQUEST: {
      return state;
    }

    case types.LOGOUT: {
      const newState = { ...state };
      newState.logged = false;
      return newState;
    }

    default:
      return state;
  }
}
