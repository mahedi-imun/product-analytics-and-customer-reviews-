import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    const navigate = useNavigate()
    return (
        <nav className='  bg-black border-gray-200 py-6 text-white'>
            <div className='container flex content-center items-center  md:justify-between'>
                <button onClick={() => navigate('/home')} className='hidden md:block text-2xl ml-12'>Alfa bike</button>
                <div className='mr-12 nav-items'>
                    <NavLink className={({ isActive }) => (isActive ? "text-orange-400" : "text-white")} to="/home">Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "text-orange-400" : "text-white")} to="/reviews"> Reviews</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "text-orange-400" : "text-white")} to="/dashboard"> Dash board</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "text-orange-400" : "text-white")} to="/blogs"> Blogs</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "text-orange-400" : "text-white")} to="/about">About</NavLink>
                </div>

            </div>

        </nav>
    );
};

export default Nav;