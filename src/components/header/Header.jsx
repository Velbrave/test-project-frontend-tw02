import React from 'react';
import css from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authDataEmail } from '../../redux/selectors';
import { LogoutThunk } from '../../redux/auth/authThunk';

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authDataEmail);

  const logout = () => {
    dispatch(LogoutThunk());
  };
  return (
    <div className={css.header}>
      <h2 className={css.title}>
        Welcome <span>{userName}</span>
      </h2>
      <button className={css.button} type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
