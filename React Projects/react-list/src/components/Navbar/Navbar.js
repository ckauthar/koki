import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return(
    <div className='header__nav'>
        <div className='nav__content'></div>
        <h2 className='logo'>Kauthar Carelse</h2>
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'><NavLink to='' className='nav__link'>Home</NavLink></li>
                <li className='nav__item'><NavLink to='' className='nav__link'>Courses</NavLink></li>
                <li className='nav__item'><NavLink to='' className='nav__link'>About</NavLink></li>
                <li className='nav__item'><NavLink to='' className='nav__link'>Jobs</NavLink></li>
                <li className='nav__item'><NavLink to='' className='nav__link'>Blog</NavLink></li>
            </ul>
        </nav>
        <div className='header__buttons'></div>
        <Link to='/login' className='btn btn-login'>Login</Link>
        <Link to='/signup' className='btn btn-signup'>Signup</Link>
    </div>
    );
};

export default Navbar;