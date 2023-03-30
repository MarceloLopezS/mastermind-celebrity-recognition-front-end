import React from 'react';
import { Link } from 'react-router-dom';

const ResetSuccess = () => {
    return (
        <section className='container reset-success-section'>
            <div>
                <h1>Password successfully reset</h1>
                <p>You can now <span className='text-highlight'><Link to='/'>log in to your account</Link></span> with your new password. Have fun!</p>
            </div>
        </section>
    )
}

export default ResetSuccess