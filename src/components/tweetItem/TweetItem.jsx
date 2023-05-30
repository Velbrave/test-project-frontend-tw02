import React from 'react';
import { getFilter, getTweets } from '../../redux/selectors';
import css from './TweetItem.module.css';
import { useSelector } from 'react-redux';

function TweetItem() {
  const tweets = useSelector(getTweets);
  const filter = useSelector(getFilter);

  const filteredTweets = tweets.filter(tweet =>
    tweet.hashtag.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {filteredTweets.map(
          ({ _id: ObjectId, name, hashtag, content, createdAt }) => {
            return (
              <li className={css.todo} key={ObjectId}>
                <div className={css.createdName}>
                  <p className={css.name}>{name}</p>
                  <p className={css.created}>{createdAt.slice(11, 19)}</p>
                </div>
                <div className={css.item}>
                  <p className={css.content}>{content}</p>
                </div>
                <div className={css.hashtag}>
                  <p>{hashtag}</p>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default TweetItem;
