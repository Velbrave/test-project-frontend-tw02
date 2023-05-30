import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../http/https';
import {
  register,
  login,
  logout,
  getUserData,
} from '../../service/usersService';

export const RegisterThunk = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const data = await register(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const LoginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await login(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const LogoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logout();
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserDataThunk = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const saveToken = getState().auth.token;

      if (saveToken) {
        token.set(saveToken);
      } else {
        return rejectWithValue();
      }
      const data = await getUserData();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
