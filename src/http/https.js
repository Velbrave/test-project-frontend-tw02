import axios from 'axios';

export const userPublicAPI = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export const userPrivateAPI = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export const token = {
  set: token => {
    userPrivateAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    userPrivateAPI.defaults.headers.common.Authorization = '';
  },
};
