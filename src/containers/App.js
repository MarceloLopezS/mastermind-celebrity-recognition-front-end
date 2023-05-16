import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import ParticlesBg from '../components/ParticlesBg/ParticlesBg';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function App() {
    const userData = useLoaderData();

    return (
        <React.StrictMode>
            <ParticlesBg />
            <Navbar isLoggedIn={userData ? true : false} />
            <Outlet />
            <Footer />
        </React.StrictMode>
    );
}

export default App