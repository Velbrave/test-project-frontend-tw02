import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import LastHour from '../lastHour/LastHour';
import TestEvent from '../test/TestEvent';
import css from './WorkSpace.module.css';

function WorkSpace() {
  return (
    <div className={css.workSpace}>
      <LastHour />
      <SearchBox />
      <TestEvent />
    </div>
  );
}

export default WorkSpace;
