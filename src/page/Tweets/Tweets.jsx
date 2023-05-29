import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import WorkSpace from '../../components/workSpace/WorkSpace';
import css from './Tweets.module.css';

const Tweets = () => {
  return (
    <div className={css.container}>
      <Header />
      <WorkSpace />
      <Footer />
    </div>
  );
};

export default Tweets;
