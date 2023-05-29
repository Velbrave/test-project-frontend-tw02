import { userPrivateAPI, userPublicAPI } from '../http/https';

export const register = async body => {
  const { data } = await userPublicAPI.post('auth/register', body);
  return data;
};

export const login = async body => {
  const { data } = await userPublicAPI.post('auth/login', body);
  return data;
};

export const logout = async () => {
  const { data } = await userPrivateAPI.post('auth/logout');
  return data;
};

export const getUserData = async () => {
  const { data } = await userPrivateAPI.get('auth/current');
  return data;
};
