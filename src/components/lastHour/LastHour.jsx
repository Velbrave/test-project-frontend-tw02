import React from 'react';
import css from './LastHour.module.css';
import { useSelector } from 'react-redux';
import { getTweets } from '../../redux/selectors';

function LastHour() {
  const todo = useSelector(getTweets);
  return (
    <div className={css.hour}>
      <p className={css.text}>Tweets (last hour)</p>
      <p className={css.number}>{todo.length}</p>
    </div>
  );
}

export default LastHour;
