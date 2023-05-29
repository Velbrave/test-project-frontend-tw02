import { combineReducers } from '@reduxjs/toolkit';
import authReduser from './auth/authSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tweetsReducer } from './tweets/tweetSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReduser);

export const rootReducer = combineReducers({
  auth: persistedReducer,
  tweets: tweetsReducer,
  filter: filterReducer,
});
