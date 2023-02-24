import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FaceDetection.css';

const FaceDetection = () => {
    const { name, entries } = useLoaderData();

    return (
        <section className='face-detection container'>
            <p className='face-detection__user-welcome'>Welcome, {name}. Your current detection count is:</p>
            <p className='face-detection__count'>{entries}</p>
            <p>You can detect faces in an image by entering it's URL bellow.</p>
            <p className='secondary-text'><span className='text-highlight'>Hint:</span> Right click any image on the internet, then click on "Copy image link".</p>
            <form className='face-detection__form'>
                <input type='url' name='image-url' placeholder='e.g. https://www.domain.com/image.jpg'></input>
                <button type='submit'>Detect</button>
            </form>
            <div className='face-detection__image-container'>
                <img src='https://www.mondosonoro.com/wp-content/uploads/2015/03/Arctic-Monkeys.jpg' alt='Input to detect'></img>
            </div>
        </section>
    )
}

export default FaceDetection;