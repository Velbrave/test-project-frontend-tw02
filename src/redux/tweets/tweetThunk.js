import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createTweet,
  deleteTweetId,
  getTweets,
} from '../../service/tweetsService';

axios.defaults.baseURL = 'http://localhost:3000/api/';

export const fetchTweets = createAsyncThunk(
  'tweets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getTweets();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTweet = createAsyncThunk(
  'tweets/addTweet',
  async (body, { rejectWithValue }) => {
    try {
      const data = await createTweet(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTweet = createAsyncThunk(
  'tweets/deleteTweet',
  async (tweetId, { rejectWithValue }) => {
    try {
      const data = await deleteTweetId(tweetId);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
