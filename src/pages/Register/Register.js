import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <section className='form-section register container'>
            <form className='form-section__form register__form'>
                <h2 className='justify-self-center'>Enter your information to register</h2>
                <div className='form-group'>
                    <label htmlFor='user-name'>Name:</label>
                    <input type='text' id='user-name' name='user-name'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='user-email'>Email:</label>
                    <input type='email' id='user-email' name='user-email'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='user-password'>Password:</label>
                    <input type='password' id='user-password' name='user-password'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='user-confirm-password'>Confirm password:</label>
                    <input type='password' id='user-confirm-password' name='user-confirm-password'></input>
                </div>
                <button className='justify-self-center' type='submit'>Register</button>
                <span className='secondary-text justify-self-center'>Already have an account?</span>
                <button className='form-switch | secondary-text justify-self-center text-underline'>
                    <Link to='/'>Log In</Link>
                </button>
            </form>
        </section>
    )
}

export default Register