/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

const Rating = ({ initRating = 0, maxRating = 10, onRatingChange = (i: number) => console.log(i) }) => {
	const [rating, setRating] = useState(initRating);

	const defaultStyle = {
		width: '40px',
		height: '40px',
		borderRadius: '20px',
		backgroundColor: '#888888',
	};
	const updateRating = (i: number) => setRating(i);
	const resetRating = () => setRating(initRating);
	const showRatings = () => {
		const ratings = [];
		for (let i = 1; i <= maxRating; i++) {
			ratings.push(
				<button
					key={i}
					style={
						i <= rating
							? { ...defaultStyle, backgroundColor: 'orange' }
							: defaultStyle
					}
					onMouseEnter={() => updateRating(i)}
					onMouseLeave={() => resetRating()}
					onClick={() => onRatingChange(i)}
				></button>
			);
		}
		return ratings;
	};

	return <div>{showRatings()}</div>;
};

export default Rating;
