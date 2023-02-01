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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index element={<LogIn />} />
            <Route path='register' element={<Register />} />
            <Route path='face-detection' element={<FaceDetection />} />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();