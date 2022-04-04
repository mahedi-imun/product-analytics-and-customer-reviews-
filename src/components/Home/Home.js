import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Banner from '../../images/banner.png'
import Review from '../Review/Review';
const Home = () => {
    const [reviews] = useReviews();
    const threeReviews = reviews.slice(0, 3)
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex flex-col md:flex-row mt-12 '>
                <div className=' md:flex-1'>
                    <div className='flex flex-col justify-center h-full md:ml-20 p-5'>
                        <h3 className=' text-lg font-bold mb-2'>RACE-BRED PERFORMANCE</h3>
                        <h1 className=' text-6xl font-extrabold mb-2'> KTM RC 390</h1>
                        <p className=' text-xl'>The 2022 KTM RC 390 is a high-performance Supersports machine with its roots firmly planted on the race track. Featuring an impressive technology package, as well as race-derived styling, handling characteristics, and addictive power delivery, the KTM RC 390 is a real-world racer with undoubted pedigree. </p>
                        <div className=' flex-none mt-6'>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    see more
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='md:flex-1 p-5 w-full'>
                    <img className='' src={Banner} alt="" />
                </div>
            </div>
            <div>
                <h2 className=' text-center text-4xl'>Customer Reviews({reviews.length})</h2>
                <div className='md:flex'>
                    {
                        threeReviews.map(review => <Review
                            key={review._id}
                            review={review}
                        >
                        </Review>)
                    }
                </div>
            </div>
            <div className=' text-center mt-5'>
                <button onClick={() => navigate('/reviews')} type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">see all reviews</button>
            </div>
        </div>

    );
};

export default Home;