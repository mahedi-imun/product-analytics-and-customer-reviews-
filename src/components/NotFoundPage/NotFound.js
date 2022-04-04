import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className=''>
            <div className='not-found-bg rounded-2xl text-center  '>
                <button onClick={() => navigate('/home')} type="button" class="text-white bg-gradient-to-r  from-transparent via-bg-transparent hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  mt-72 border ">go home</button>
            </div>
        </div>
    );
};

export default NotFound; 