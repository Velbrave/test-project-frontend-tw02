import React from 'react';
import css from './LastHour.module.css';

function LastHour() {
  return (
    <div className={css.hour}>
      <p className={css.text}>Tweets (last hour)</p>
    </div>
  );
}

export default LastHour;
