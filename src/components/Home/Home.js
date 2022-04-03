import React from 'react';
import Banner from '../../images/banner.png'

const Home = () => {
    return (
        <div className='flex flex-col md:flex-row mt-12 '>
            <div className=' md:flex-1'>
                <div className='flex flex-col justify-center h-full md:ml-20 p-5'>
                    <h3 className=' text-lg font-bold mb-2'>RACE-BRED PERFORMANCE</h3>
                    <h1 className=' text-6xl font-extrabold mb-2'> KTM RC 390</h1>
                    <p className=' text-xl'>The 2022 KTM RC 390 is a high-performance Supersports machine with its roots firmly planted on the race track. Featuring an impressive technology package, as well as race-derived styling, handling characteristics, and addictive power delivery, the KTM RC 390 is a real-world racer with undoubted pedigree. </p>
                    <div className=' flex-none mt-6'>
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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
    );
};

export default Home;