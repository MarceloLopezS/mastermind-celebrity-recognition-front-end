import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index element={<LogIn />} />
            <Route path='register' element={<Register />} />
            <Route path='email-verification'>
                <Route index element={<EmailVerification />} />
                <Route path='error'>
                    <Route index element={<Error />} />
                    <Route path='invalid-token' element={<InvalidToken />} />
                </Route>
                <Route path='success' element={<Success />} />
            </Route>
            <Route path='face-detection' element={<FaceDetection />} />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();