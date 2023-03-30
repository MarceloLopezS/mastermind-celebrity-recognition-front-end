import React from 'react';
import { useFetcher } from 'react-router-dom';
import './ForgotPassword.css';

const validateAndGetEmail = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[name="user-email"]');
    const messageContainer = e.target.querySelector('.server-response');
    let validForm = true;

    messageContainer.removeAttribute('data-danger');
    messageContainer.textContent = '';
    email.setAttribute('placeholder', 'Please enter your email');
    email.classList.remove('invalid');

    
    if (!email.value) {
        validForm = false;
        email.classList.add('invalid');
    }
    if (email.value) {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.value.match(regex)) {
            validForm = false;
            email.classList.add('invalid');
            email.setAttribute('placeholder', 'Please enter a valid email');
            email.value = '';
        }
    }

    if (validForm) {
        const formData = {
            email: email.value,
        };

        return formData;
    }

    return null;
}

const ForgotPassword = () => {
    const fetcher = useFetcher();

    return (
        <section className='form-section forgot-password container'>
            <form className='form-section__form forgot-password__form' onSubmit={(e) => {
                const forgotPasswordData = validateAndGetEmail(e);
                if (forgotPasswordData) {
                    const options = {
                        method: "post",
                        action: "/forgot-password"
                    }
                    fetcher.submit(forgotPasswordData, options);
                }
            }}>
                <h2 className='justify-self-center'>Enter your email to send a password reset link</h2>
                <div className='form-group'>
                    <label htmlFor='user-email'>Email:</label>
                    <input type='email' id='user-email' name='user-email' placeholder='Please enter your email'></input>
                </div>
                <div className='forgot-password__action'>
                    <button className='justify-self-center' type='submit'>
                        Submit
                    </button>
                    <div className='response'>
                        <span className='loader'></span>
                        <div className='server-response secondary-text'>
                            
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ForgotPassword