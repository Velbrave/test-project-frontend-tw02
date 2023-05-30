import { createSlice } from '@reduxjs/toolkit';
import {
  LoginThunk,
  LogoutThunk,
  RegisterThunk,
  getUserDataThunk,
} from './authThunk';
import { STATUS } from '../status';

const initialState = {
  token: null,
  status: STATUS.Idle,
  data: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(RegisterThunk.pending, state => {
        state.status = STATUS.Loading;
      })
      .addCase(RegisterThunk.fulfilled, (state, action) => {
        state.status = STATUS.Resolved;
        state.data = action.payload.user;
      })
      .addCase(RegisterThunk.rejected, (state, action) => {
        state.status = STATUS.Rejected;
      })
      .addCase(LoginThunk.pending, state => {
        state.status = STATUS.Loading;
      })
      .addCase(LoginThunk.fulfilled, (state, action) => {
        state.status = STATUS.Resolved;
        state.token = action.payload.token;
        state.data = action.payload.user;
      })
      .addCase(LoginThunk.rejected, (state, action) => {
        state.status = STATUS.Rejected;
      })
      .addCase(LogoutThunk.pending, state => {
        state.status = STATUS.Loading;
      })
      .addCase(LogoutThunk.fulfilled, (state, action) => {
        state.status = STATUS.Resolved;
        state.token = null;
        state.data = null;
      })
      .addCase(LogoutThunk.rejected, (state, action) => {
        state.status = STATUS.Rejected;
      })
      .addCase(getUserDataThunk.pending, state => {
        state.status = STATUS.Loading;
      })
      .addCase(getUserDataThunk.fulfilled, (state, action) => {
        state.status = STATUS.Resolved;
        state.data = action.payload;
      })
      .addCase(getUserDataThunk.rejected, (state, action) => {
        state.status = STATUS.Rejected;
      });
  },
});

export const authReducer = authSlice.reducer;
export default authSlice.reducer;
