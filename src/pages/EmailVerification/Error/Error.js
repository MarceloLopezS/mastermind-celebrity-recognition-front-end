import React from 'react';

const Error = () => {
    return (
        <section className='container email-verification-section'>
            <div>
                <h1>An error occured</h1>
                <p><span className='text-highlight'>Something went wrong</span> during the activation process. Please verify that your link has not expired, or try again later.</p>
            </div>
        </section>
    )
}

export default Error;