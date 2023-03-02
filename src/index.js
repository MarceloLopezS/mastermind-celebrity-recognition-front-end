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
import { registerUser, loginUser, logOutUser, sendImage } from './controllers/ReactRouterActions/actions';
import { getUserData } from './controllers/ReactRouterLoaders/loaders';
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' 
            id='root' 
            element={<App />} 
            action={logOutUser}
            loader={async () => {
                const userData = await getUserData();
                if (userData) {
                    return userData;
                } else {
                    return null;
                }
            }} 
        >
            <Route index 
                element={<LogIn />} 
                action={loginUser}
                loader={async () => {
                    const userData = await getUserData();
                    if (userData) {
                        return redirect('face-detection');
                    } else {
                        return null;
                    }
                }} 
            />

            <Route path='register' 
                element={<Register />} 
                action={registerUser} 
                loader={async () => {
                    const userData = await getUserData();
                    if (userData) {
                        return redirect('face-detection');
                    } else {
                        return null;
                    }
                }} 
            />

            <Route path='email-verification'>
                <Route index 
                    element={<EmailVerification />} 
                    loader={async () => {
                        const userData = await getUserData();
                        if (userData) {
                            return redirect('face-detection');
                        } else {
                            return null;
                        }
                    }}
                />
                <Route path='error'>
                    <Route index 
                        element={<Error />} 
                        loader={async () => {
                            const userData = await getUserData();
                            if (userData) {
                                return redirect('face-detection');
                            } else {
                                return null;
                            }
                        }}
                    />
                    <Route path='invalid-token' 
                        element={<InvalidToken />} 
                        loader={async () => {
                            const userData = await getUserData();
                            if (userData) {
                                return redirect('face-detection');
                            } else {
                                return null;
                            }
                        }}
                    />
                </Route>
                <Route path='activation-success' 
                    element={<Success />} 
                    loader={async () => {
                        const userData = await getUserData();
                        if (userData) {
                            return redirect('face-detection');
                        } else {
                            return null;
                        }
                    }}
                />
            </Route>

            <Route path='face-detection' 
                element={<FaceDetection />} 
                loader={async () => {
                    const userData = await getUserData();
                    if (userData) {
                        return userData;
                    } else {
                        return redirect('/')
                    }
                }} 
                action={sendImage}
            />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

reportWebVitals();