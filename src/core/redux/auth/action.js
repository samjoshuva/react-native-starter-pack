export const SET_USER_SESSION = 'SET_USER_SESSION';
export const GET_USER_SESSION = 'GET_USER_SESSION';

export const setUserSession = payload => {
  return {type: SET_USER_SESSION, payload: payload};
};

export const getUserSession = () => {
  return {type: GET_USER_SESSION};
};
