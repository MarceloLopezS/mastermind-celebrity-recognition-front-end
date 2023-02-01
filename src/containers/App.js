import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import ParticlesBg from '../components/ParticlesBg/ParticlesBg';
import FaceDetection from '../pages/FaceDetection/FaceDetection';
import LogIn from '../pages/LogIn/LogIn';

function App() {
    return (
        <React.StrictMode>
            {/* <ParticlesBg /> */}
            <Navbar />
            <LogIn />
            {/* <FaceDetection /> */}
            <Footer />
        </React.StrictMode>
    );
}

export default App;