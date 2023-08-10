const initialState = {
  logged: false,
};

export default function reducer(state = initialState, action) {
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
}
