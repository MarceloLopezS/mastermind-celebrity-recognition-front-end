import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import UserValidation from '../pages/UserValidation';

function App() {
  return (
    <React.StrictMode>
        <Navbar />
        <UserValidation />
        <Footer />
    </React.StrictMode>
  );
}

export default App;