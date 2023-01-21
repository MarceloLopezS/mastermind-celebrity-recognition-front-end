import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import ParticlesBg from '../components/ParticlesBg/ParticlesBg';
import UserValidation from '../pages/UserValidation';

function App() {
    return (
        <React.StrictMode>
            {/* <ParticlesBg /> */}
            <Navbar />
            <UserValidation />
            <Footer />
        </React.StrictMode>
    );
}

export default App;