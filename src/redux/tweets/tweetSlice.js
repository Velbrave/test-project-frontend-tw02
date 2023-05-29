import { createSlice } from '@reduxjs/toolkit';
import { addTweet, deleteTweet, fetchTweets } from './tweetThunk';

const initialState = {
  tweets: [],
  isLoading: false,
  error: null,
  filter: '',
};

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tweets = action.payload;
      })

      .addCase(fetchTweets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTweet.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTweet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tweets = state.tweets.filter(
          tweet => tweet.id !== action.payload
        );
      })
      .addCase(deleteTweet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTweet.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTweet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tweets.push(action.payload);
      })

      .addCase(addTweet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const tweetsReducer = tweetsSlice.reducer;
export default tweetsSlice.reducer;
