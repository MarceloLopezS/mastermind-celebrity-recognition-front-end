import React from 'react';
import { Link, useFetcher } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/smartbrain-logo.png';

const Navbar = ({ isLoggedIn }) => {
    const fetcher = useFetcher();

    return (
        <div className='navbar'>
            <div className='navbar__brand'>
                <img src={logo} alt='Mastermind logo' ></img>
                <h1>Mastermind</h1>
            </div>
            <nav className='navbar__nav'>
                {
                    isLoggedIn
                    ? (
                        <>
                        <span className='loader'></span>
                        <button className='navbar__button' onClick={(e) => {
                            const loader = e.target.parentElement.querySelector(".loader");
                            loader.setAttribute("data-show", "");
                            const data = {
                                requestAction: "logout"
                            }
                            const options = {
                                method: "post",
                                action: "/"
                            }
                            fetcher.submit(data, options);
                        }}>Log Out</button>
                        </>
                    )
                    : (
                        <>
                            <Link to='/'>Log In</Link>
                            <Link to='/register'>Sign Up</Link>
                        </>
                    )
                }
            </nav>
        </div>
    )
}

export default Navbar;