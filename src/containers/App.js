import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import ParticlesBg from '../components/ParticlesBg/ParticlesBg';
import FaceDetection from '../pages/FaceDetection/FaceDetection';
import UserValidation from '../pages/UserValidation/UserValidation';

function App() {
    return (
        <React.StrictMode>
            {/* <ParticlesBg /> */}
            <Navbar />
            {/* <UserValidation /> */}
            <FaceDetection />
            <Footer />
        </React.StrictMode>
    );
}

export default App;