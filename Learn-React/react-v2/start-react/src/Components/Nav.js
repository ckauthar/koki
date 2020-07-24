import React from 'react';
import './Nav.css';

function Nav() {

    return (
        <nav className="nav">
               <h1 className='logo'>Kauthar Carelse</h1>

               <ul className="nav__list">
                   <li className="nav__item"><a className="nav__link" href=''>Home</a></li>
                   <li className="nav__item"><a className="nav__link" href=''>About</a></li>
                   <li className="nav__item"><a className="nav__link" href=''>Blog</a></li>
                   <li className="nav__item"><a className="nav__link" href=''>Shop</a></li>
                   <li className="nav__item"><a className="nav__link" href=''>Contact</a></li>
               </ul>
        </nav>
    )
}

export default Nav 