import React from 'react';
import { Outlet } from 'react-router-dom';
import ParticlesBg from '../components/ParticlesBg/ParticlesBg';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function App() {
    return (
        <React.StrictMode>
            {/* <ParticlesBg /> */}
            <Navbar />
            <Outlet />
            <Footer />
        </React.StrictMode>
    );
}

export default App;