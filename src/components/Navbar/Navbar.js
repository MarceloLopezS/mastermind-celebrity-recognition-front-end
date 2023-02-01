import React from 'react';
import { Link } from 'react-router-dom';
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
                <button className='navbar__button'>
                    <Link to='/'>Log In</Link>
                </button>
                <button className='navbar__button'>
                    <Link to='/register'>Sign Up</Link>
                </button>
            </nav>
        </div>
    )
}

export default Navbar;