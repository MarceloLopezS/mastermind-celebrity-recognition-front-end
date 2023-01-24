import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/smartbrain-logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__brand'>
                <img src={logo} alt='Mastermind logo' ></img>
                <h1>Mastermind</h1>
            </div>
            <nav className='navbar__nav'>
                <button className='navbar__button'>Log In</button>
                <button className='navbar__button'>Sign Up</button>
            </nav>
        </div>
    )
}

export default Navbar;