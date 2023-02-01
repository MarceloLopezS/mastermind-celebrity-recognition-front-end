import React from 'react';
import './LogIn.css';

const LogIn = () => {
    return (
        <section className='log-in container'>
            <form className='log-in__form'>
                <h2 className='justify-self-center'>Enter your account credentials</h2>
                <div className='form-group'>
                    <label htmlFor='user-email'>Email:</label>
                    <input type='email' id='user-email' name='user-email'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='user-password'>Password:</label>
                    <input type='password' id='user-password' name='user-password'></input>
                </div>
                <button className='justify-self-center' type='submit'>Log In</button>
                <span className='secondary-text justify-self-center'>Don't have an account yet?</span>
                <button className='form-switch | secondary-text justify-self-center text-underline'>Register</button>
            </form>
        </section>
    )
}

export default LogIn