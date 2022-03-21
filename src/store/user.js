import constants from './constants';

const initialState = {
  user: {
    id: '',
    username: '',
  },
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_TOKEN: {
      return Object.assign({}, state, { token: action.token });
    }
    case constants.SET_USER: {
      const newState = { ...state };
      const { data } = action;
      newState.token = data.token;
      newState.user.username = data.user.username;
      newState.user.id = data.user._id;
      return newState;
    }
    case constants.LOGOUT: {
      return { ...state, ...initialState };
    }
    default:
      return state;
  }
};

export default reducer;
