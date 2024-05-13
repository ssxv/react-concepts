import { useState } from 'react';

const Rating = () => {
  const [stars, setStars] = useState(-1);

  const showRatings = () => {
    const rating = [];
    for (let i = 0; i < 5; i++) {
      const styles = { color: 'white', fontSize: '28px' };
      if (i <= stars) {
        styles.color = 'yellow';
      }
      const el = (
        <span style={styles} key={i} onClick={() => setStars(i)}>
          O
        </span>
      );
      rating.push(el);
    }
    return rating;
  };

  return <div>{showRatings()}</div>;
};

export default Rating;
