import {GET_USER_SESSION, SET_USER_SESSION} from './action';

const initialState = {
  userSession: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_SESSION:
      return {
        ...state,
        userSession: action.payload,
        isAuthenticated: !!action.payload,
      };
    case GET_USER_SESSION:
      return state;
    default:
      return state;
  }
};

export default authReducer;
