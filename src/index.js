import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    redirect
} from 'react-router-dom';
import './index.css';
import App from './containers/App';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import FaceDetection from './pages/FaceDetection/FaceDetection';
import reportWebVitals from './reportWebVitals';
import EmailVerification from './pages/EmailVerification/EmailVerification';
import Error from './pages/EmailVerification/Error/Error';
import InvalidToken from './pages/EmailVerification/Error/InvalidToken/InvalidToken';
import Success from './pages/EmailVerification/Success/Success';

const registerUser = async ({ request }) => {
    const loader = document.querySelector('.register__form .loader');
    const submitButton = document.querySelector('.register__form button[type="submit"]');
    const messageContainer = document.querySelector('.register__form .server-response');
    loader.setAttribute('data-show', '');
    submitButton.disabled = true;
    messageContainer.textContent = '';
    messageContainer.removeAttribute('data-danger');
    try {
        const formData = JSON.stringify(Object.fromEntries(await request.formData()));
        const response = await fetch("http://localhost:3001/register", {
            method: request.method,
            body: formData,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        loader.removeAttribute('data-show');
        if(!data) return null;
        if (data.status === 'success') {
            console.log('success');
            return redirect("/email-verification");
        } else if (data.status === 'fail'){
            messageContainer.textContent = data.errors.registerMessage;
            messageContainer.setAttribute('data-danger', '');
            submitButton.disabled = false;
        } else if (data.status === 'user-errors') {
            Object.entries(data.errors).forEach(keyValueArray => {
                const key = keyValueArray[0];
                const value = keyValueArray[1];
                const input = document.querySelector(`.register__form input[name='${key}']`);
                if (key === 'user-email' || key === 'user-password' || key === 'user-confirm-password') {
                    input.value = '';
                }
                input.setAttribute('placeholder', value);
                input.classList.add('invalid');
            })
        }
    } catch (err) {
        loader.removeAttribute('data-show');
        console.error(`Fetch error: ${err}`);
        messageContainer.textContent = 'We were not able to process the request. Please try again in a few moments.';
        messageContainer.setAttribute('data-danger', '');
        submitButton.disabled = false;
    };

    return null;
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index element={<LogIn />} />
            <Route path='register' 
                element={<Register />} 
                action={registerUser} 
                loader= {async () => {
                    // Fetch user ID when authenticated
                    console.log('Loader');
                    return null;
                }} 
            />
            <Route path='email-verification'>
                <Route index element={<EmailVerification />} />
                <Route path='error'>
                    <Route index element={<Error />} />
                    <Route path='invalid-token' element={<InvalidToken />} />
                </Route>
                <Route path='activation-success' element={<Success />} />
            </Route>
            <Route path='face-detection' element={<FaceDetection />} />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();