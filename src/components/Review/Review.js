import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import Product from '../../images/banner.png'
const Review = ({ review }) => {
    const { rating, picture, name, description } = review;
    return (
       <>
        <div className=' border-2 md:w-2/6 m-5 p-1'>
            <div className='flex justify-between'>
                <div className=' w-1/5 mt-1'>
                    <img className=' h-20 w-24 border rounded ' src={Product} alt="" />
                </div>
                <div className='w-4/5 ml-3 flex flex-col justify-center items-start'>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating>
                    <img className=' w-14 h-14 rounded-full' src={picture} alt="" />
                    <h4 className=' font-medium'> {name}</h4>
                    <p className=' capitalize font-extralight'>{description}</p>
                </div>
            </div>
        </div>
       </>
    );
};

export default Review;