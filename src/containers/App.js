import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import ParticlesBg from '../components/ParticlesBg/ParticlesBg';
import FaceDetection from '../pages/FaceDetection/FaceDetection';
import LogIn from '../pages/LogIn/LogIn';
import Register from '../pages/Register/Register';

function App() {
    return (
        <React.StrictMode>
            {/* <ParticlesBg /> */}
            <Navbar />
            <Register />
            {/* <LogIn /> */}
            {/* <FaceDetection /> */}
            <Footer />
        </React.StrictMode>
    );
}

export default App;