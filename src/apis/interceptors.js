import {
  AUTH_SESSION_TIMEOUT_STATUSES,
  FORBIDDEN_STATUS_CODE,
  INSUFFICIENT_PERMISSION,
  SESSION_EXPIRED,
} from '../constants';

export const requestInterceptor = async config => {
  const {idToken = IDTOKEN_DEFAULT_VALUE, accessToken = ''} =
    getSavedUserSession() || {};
  config.headers.common.Authorization = idToken;
  config.headers.common.AccessToken = accessToken;
  config = await refreshTokenIfExpired(config, idToken, accessToken);
  return config;
};

export const responseInterceptor = function (response) {
  return response.data;
};
export const errorInterceptor = async error => {
  if (error && error.response) {
    if (AUTH_SESSION_TIMEOUT_STATUSES.includes(error.response.status)) {
      // if (sessionTimeoutDispatcher) {
      //   sessionTimeoutDispatcher();
      // }
      return Promise.reject({message: SESSION_EXPIRED});
    }
    if (error.response.status === FORBIDDEN_STATUS_CODE) {
      // if (forbiddenErrorDispatcher) {
      //   forbiddenErrorDispatcher();
      // }
      return Promise.reject({message: INSUFFICIENT_PERMISSION});
    }
  }

  return Promise.reject(error);
};
