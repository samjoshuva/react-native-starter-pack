import {  call, put, takeLatest } from "redux-saga/effects";
import { SET_USER_PROFILE, GET_USER_PROFILE, setUserProfile } from "./action";
import { saveUserProfile } from "../../localStorage";
import { getProfile } from "../../../apis/user";

export function* userSaga() {
//   yield takeLatest(SET_USER_PROFILE, handleSetUserProfile);
  yield takeLatest(GET_USER_PROFILE, handleGetUserProfile);
}

// function* handleSetUserProfile(action) {
//   yield call(saveUserProfile, action.payload);
// }

function* handleGetUserProfile(action) {
  try {
    const response = yield call(getProfile, action.payload);
    // yield put(setUserProfile(response.data.data));
  } catch {}
}
