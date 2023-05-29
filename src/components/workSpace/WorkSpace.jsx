import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import LastHour from '../lastHour/LastHour';
import TweetItem from '../tweetItem/TweetItem';
import css from './WorkSpace.module.css';

function WorkSpace() {
  return (
    <div className={css.workSpace}>
      <LastHour />
      <SearchBox />
      <TweetItem />
    </div>
  );
}

export default WorkSpace;
