import {GET_USER_PROFILE, SET_USER_PROFILE} from './action';

const initialState = {userProfile: null};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {...state, userProfile: action.payload};
    case GET_USER_PROFILE:
      return {...state, userProfile: action.payload};
    default:
      return state;
  }
};

export default userReducer;
