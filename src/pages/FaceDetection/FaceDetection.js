import React, { useState } from 'react';
import { useFetcher, useLoaderData } from 'react-router-dom';
import SERVER_DOMAIN from '../../config/backEnd.js';
import './FaceDetection.css';

const onFileChange = (e) => {
    const image = document.querySelector('.face-detection__image-container img');
    const imageContainer = image.parentElement;
    try {
        image.src = URL.createObjectURL(e.target.files[0]);
    }catch (err) {
        return
    }
    imageContainer.setAttribute('data-show', '');
}

const onFormSubmit = async (e) => {
    e.preventDefault();
    const imageInput = e.target.querySelector('input[name="image-input"]');
    if (imageInput.files.length === 0) return;

    const formData = new FormData();
    formData.append('image-input', imageInput.files[0]);
    try {
        const fetchOptions = {
            method: 'POST',
            credentials: 'include',
            body: formData
        }
        const response = await fetch(`${SERVER_DOMAIN}/face-detection`, fetchOptions)
        const data = await response.json();
        
        return data;
    } catch (err) {
        console.error(`Fetch error: ${err}`);
        return null;
    }
}

const FaceDetection = () => {
    const { name, entries } = useLoaderData();
    const fetcher = useFetcher();
    const [detectionData, setDetectionData] = useState();

    return (
        <section className='face-detection container'>
            <p className='face-detection__user-welcome'>Welcome, {name}. Your current detection count is:</p>
            <p className='face-detection__count'>{entries}</p>
            <p>You can upload an image to recognize celebrities using an AI model.</p>
            <p className='secondary-text'><span className='text-highlight'>Tip?</span> Take a scene screenshot of that movie or show you want to know who that incredible actor/actress is. Save it and upload it here 😎</p>
            <form className='face-detection__form' encType='multipart/form-data' onSubmit={async (e) => {
                setDetectionData([]);
                const loader = e.target.parentElement.querySelector(".face-detection__image-container .loader");
                loader.setAttribute("data-show", "");
                
                const data = await onFormSubmit(e);
                if (!data || data.status === 'unauthorized' || data.status === 'fail') {
                    loader.removeAttribute("data-show");
                    return;
                }
                if (data.status === 'success') {
                    // console.log(data);
                    loader.removeAttribute("data-show");
                    setDetectionData(data.detectionData);

                    const requestData = {
                        request: 'increment-entry'
                    }
                    const options = {
                        method: 'put',
                        action: '/face-detection'
                    }
                    fetcher.submit(requestData, options);
                }
            }}>
                <label className='custom-file-input'>
                    <input type='file' name='image-input' accept='image/jpg, image/jpeg, image/png' onChange={onFileChange}></input>
                    <svg className='upload-icon' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                    </svg>
                    First upload an image
                </label>
                <button type='submit'>Detect</button>
            </form>
            <div className='face-detection__image-container'>
                <img src='#' alt='Input to detect'></img>
                <span className='loader'></span>
                {
                    detectionData
                    ? detectionData.map((detection, i) => {
                        const { top_row, right_col, bottom_row, left_col } = detection.boundingBox;
                        const { name, probability } = detection.faceDetection;
                        const capitalizeName = (name) => {
                            const nameSegments = name.split(" ");
                            const capitalizedName = nameSegments.map(segment => {
                                return segment.split("").map((letter, i) => {
                                    if (i === 0) {
                                        return letter.toUpperCase();
                                    } else {
                                        return letter;
                                    }
                                }).join("");
                            }).join(" ");

                            return capitalizedName;
                        }
                        return <div key={i} className='boundingBox' style={{
                            top:`${top_row * 100}%`, 
                            right:`${100 - (right_col * 100)}%`, 
                            bottom:`${100 - (bottom_row * 100)}%`, 
                            left:`${left_col * 100}%`,
                        }}>
                            <span className='detection-name'>{capitalizeName(name)} | {Math.floor(probability * 100)}%</span>
                        </div>
                    })
                    : []
                }
            </div>
        </section>
    )
}

export default FaceDetection;