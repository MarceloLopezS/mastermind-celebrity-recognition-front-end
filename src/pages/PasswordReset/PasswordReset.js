import React from 'react';
import { useFetcher, useParams } from 'react-router-dom';
import './PasswordReset.css';

const validateAndGetPassword = (e) => {
    e.preventDefault();
    const password = e.target.querySelector('input[name="user-password"]');
    const confirmPassword = e.target.querySelector('input[name="user-confirm-password"]');
    const inputs = [password, confirmPassword];
    const messageContainer = e.target.querySelector('.server-response');
    let validForm = true;

    messageContainer.removeAttribute('data-danger');
    messageContainer.textContent = '';
    inputs.forEach(input => {
        input.classList.remove('invalid');
    });

    inputs.forEach(input => {
        if (!input.value) {
            validForm = false;
            input.classList.add('invalid');
        }
    });
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
            password: password.value,
            confirmPassword: confirmPassword.value,
        };

        return formData;
    }

    return null;
}

const PasswordReset = () => {
    const fetcher = useFetcher();
    const { resetToken } = useParams();

    return (
        <section className='form-section password-reset container'>
            <form className='form-section__form password-reset__form' onSubmit={(e) => {
                const passwordResetData = validateAndGetPassword(e);
                if (passwordResetData) {
                    const options = {
                        method: "post",
                        action: "/password-reset/:resetToken"
                    }
                    fetcher.submit({ ...passwordResetData, resetToken }, options);
                }
            }}>
                <h2 className='justify-self-center'>Enter and confirm your new password</h2>
                <div className='form-group'>
                    <label htmlFor='user-password'>Password:</label>
                    <input type='password' id='user-password' name='user-password' placeholder='Please enter a password'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='user-confirm-password'>Confirm password:</label>
                    <input type='password' id='user-confirm-password' name='user-confirm-password' placeholder='Please confirm your password'></input>
                </div>
                <div className='password-reset__action'>
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

export default PasswordReset