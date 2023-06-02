import React, { useEffect, useState } from 'react';
import css from './TestEvent.module.css';
import { getFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const TestEvent = () => {
  const [tweets, setTweets] = useState([]);
  const [listening, setListening] = useState(false);
  const filter = useSelector(getFilter);

  useEffect(() => {
    if (!listening) {
      const events = new EventSource('http://localhost:3000/events');

      events.onmessage = event => {
        const parsedData = JSON.parse(event.data);
        const uniqueTweets = parsedData.filter(
          (tweet, index, array) => array.indexOf(tweet) === index
        );
        setTweets(uniqueTweets);
      };

      setListening(true);
    }
  }, [listening, tweets]);

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
};

export default TestEvent;
