import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='w-10/12 mx-auto'>
            <div className='md:flex flex-wrap justify-around '>
                {
                    reviews.map(review => <Review
                        key={review._key}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;