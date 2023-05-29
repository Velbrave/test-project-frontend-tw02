import React from 'react';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.header}>
      <h2 className={css.title}>
        Welcome <span>parkovaja60@gmail.com</span>
      </h2>
      <button className={css.button}>Logout</button>
    </div>
  );
};

export default Header;
