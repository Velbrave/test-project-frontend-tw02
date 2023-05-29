import { userPrivateAPI } from '../http/https';

export const getTweets = async () => {
  const { data } = await userPrivateAPI.get('tweets');
  return data;
};

export const createTweet = async tweet => {
  const { data } = await userPrivateAPI.post('tweets', tweet);
  return data;
};

export const deleteTweetId = async tweetId => {
  const { data } = await userPrivateAPI.delete(`tweets/${tweetId}`);
  return data;
};
