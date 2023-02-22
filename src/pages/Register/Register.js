import React from 'react';
import { Link, useFetcher } from 'react-router-dom';
import './Register.css';

const getDataFromSubmit = (e) => {
    e.preventDefault();
    const name = e.target.querySelector('input[name="user-name"]');
    const email = e.target.querySelector('input[name="user-email"]');
    const password = e.target.querySelector('input[name="user-password"]');
    const confirmPassword = e.target.querySelector('input[name="user-confirm-password"]');
    const inputs = [name, email, password, confirmPassword];
    const messageContainer = e.target.querySelector('.server-response')
    let validForm = true;

    messageContainer.removeAttribute('data-danger');

    inputs.forEach(input => {
        if (!input.value) {
            validForm = false;
            input.classList.add('invalid');
        }
    });
    if (email.value) {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.value.match(regex)) {
            validForm = false;
            email.classList.add('invalid');
            email.setAttribute('placeholder', 'Please enter a valid email');
            email.value = '';
        }
    }
    if ((password.value && confirmPassword.value) && (password.value !== confirmPassword.value)) {
        validForm = false;
        password.classList.add('invalid');
        confirmPassword.classList.add('invalid');
        password.setAttribute('placeholder', "Passwords don't match");
        confirmPassword.setAttribute('placeholder', "Passwords don't match");
        password.value = '';
        confirmPassword.value = '';
    }

    if (validForm) {
        const formData = {
            name: name.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
        };

        return formData;
    }

    return null;
}

const Register = () => {
    const fetcher = useFetcher();

    return (
        <section className='form-section register container'>
            <form className='form-section__form register__form' onSubmit={(e) => {
                const formData = getDataFromSubmit(e);
                if (formData) {
                    const options = {
                        method: "post",
                        action: "http://localhost:3001/register"
                    }
                    fetcher.submit(formData, options);
                }
            }}>
                <h2 className='justify-self-center'>Enter your information to register</h2>
                <div className='form-group'>
                    <label htmlFor='user-name'>Name:</label>
                    <input type='text' id='user-name' name='user-name' maxLength='60'  placeholder='Please enter your name'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='user-email'>Email:</label>
                    <input type='email' id='user-email' name='user-email' maxLength='100' placeholder='Please enter your email'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='user-password'>Password:</label>
                    <input type='password' id='user-password' name='user-password' placeholder='Please enter a password'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='user-confirm-password'>Confirm password:</label>
                    <input type='password' id='user-confirm-password' name='user-confirm-password' placeholder='Please confirm your password'></input>
                </div>
                <div className='register-action'>
                    <button className='justify-self-center' type='submit'>
                        Register
                    </button>
                    <div className='response'>
                        <span className='loader'></span>
                        <div className='server-response secondary-text'>
                            
                        </div>
                    </div>
                </div>
                <span className='secondary-text justify-self-center'>Already have an account?</span>
                <button className='form-switch | secondary-text justify-self-center text-underline'>
                    <Link to='/'>Log In</Link>
                </button>
            </form>
        </section>
    )
}

export default Register