export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const GET_USER_PROFILE = "GET_USER_PROFILE";

export const setUserProfile = (payload) => {
  return { type: SET_USER_PROFILE, payload: payload };
};
export const getUserProfile = (payload) => {
  return { type: GET_USER_PROFILE, payload: payload };
};
