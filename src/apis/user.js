import API from './apiInstance';

export const getProfile = () => {
  return API.get('/api/core/user/get-user');
};
