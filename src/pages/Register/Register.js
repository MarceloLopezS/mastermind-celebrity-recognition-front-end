import React, { useRef } from 'react';
import { Link, useFetcher } from 'react-router-dom';
import './Register.css';

const validateAndGetRegisterData = (name, email, password, confirmPassword, messageContainer) => {
    const inputs = [name, email, password, confirmPassword];
    let validForm = true;

    messageContainer.removeAttribute('data-danger');
    messageContainer.textContent = '';
    email.setAttribute('placeholder', 'Please enter your email');
    inputs.forEach(input => {
        input.classList.remove('invalid');
    });

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
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);
    const messageContainer = useRef(null);

    return (
        <section className='form-section register container'>
            <form className='form-section__form register__form' onSubmit={(e) => {
                const registerData = validateAndGetRegisterData(name.current, email.current, password.current, confirmPassword.current, messageContainer.current);
                e.preventDefault();
                if (registerData) {
                    const options = {
                        method: "post",
                        action: "/register"
                    }
                    fetcher.submit(registerData, options);
                }
            }}>
                <h2 className='justify-self-center'>Enter your information to register</h2>
                <div className='form-group'>
                    <label htmlFor='user-name'>Name:</label>
                    <input ref={name} type='text' id='user-name' name='user-name' maxLength='60'  placeholder='Please enter your name'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='user-email'>Email:</label>
                    <input ref={email} type='email' id='user-email' name='user-email' maxLength='100' placeholder='Please enter your email'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='user-password'>Password:</label>
                    <input ref={password} type='password' id='user-password' name='user-password' placeholder='Please enter a password'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='user-confirm-password'>Confirm password:</label>
                    <input ref={confirmPassword} type='password' id='user-confirm-password' name='user-confirm-password' placeholder='Please confirm your password'></input>
                </div>
                <div className='register__action'>
                    <button className='justify-self-center' type='submit'>
                        Register
                    </button>
                    <div className='response'>
                        <span className='loader'></span>
                        <div ref={messageContainer} className='server-response secondary-text'>
                            
                        </div>
                    </div>
                </div>
                <span className='secondary-text justify-self-center'>Already have an account?</span>
                <Link className='form-switch | secondary-text justify-self-center text-underline' to='/'>Log In</Link>
            </form>
        </section>
    )
}

export default Register