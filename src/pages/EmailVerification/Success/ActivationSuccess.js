import React from 'react';
import { Link } from 'react-router-dom';

const ActivationSuccess = () => {
    return (
        <section className='container email-verification-section'>
            <div>
                <h1>Account verification successful</h1>
                <p>You can now <span className='text-highlight'><Link to='/'>log in to your account</Link></span> and use face detection. Have fun!</p>
            </div>
        </section>
    )
}

export default ActivationSuccess