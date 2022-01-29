import axios from 'axios';
import {API_BASE_URL} from '../config';

const imageRequest = axios.create({
  headers: {'Content-Type': 'text/plain'},
});

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
});

const API = {
  get: function (url) {
    return apiInstance.get(url);
  },
  post: function (url, data = null) {
    return apiInstance.post(url, data);
  },
  put: function (url, data = null) {
    return apiInstance.put(url, data);
  },
  delete: function (url) {
    return apiInstance.delete(url);
  },
  patch: function (url, data = null) {
    return apiInstance.patch(url, data);
  },
  uploadImage: function (data = null) {
    return imageRequest.put(data.url, data.file);
  },
};
export default API;
