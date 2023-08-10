import { legacy_createStore } from 'redux';

const initialState = {
  logged: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const newState = { ...state };
      newState.logged = !newState.logged;
      return newState;
    }

    case 'LOGOUT': {
      const newState = { ...state };
      newState.logged = false;
      return newState;
    }

    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export default store;
