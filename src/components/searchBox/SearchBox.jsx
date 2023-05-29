import React from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from '../../redux/filterSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const changeFilter = event => {
    dispatch(filterAction(event.target.value));
  };

  return (
    <label className={css.label} htmlFor="">
      <input
        className={css.input}
        type="text"
        placeholder="#hashtag"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

export default SearchBox;
