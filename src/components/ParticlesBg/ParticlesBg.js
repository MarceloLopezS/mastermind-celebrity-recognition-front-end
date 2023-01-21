import React, { useEffect } from 'react';
import 'particles.js-strict/particles';
import particlesConfig from '../../assets/particlesjs-config.json';
import './ParticlesBg.css';

const ParticlesBg = () => {
    useEffect(() => {
        window.particlesJS("particles-js", particlesConfig);
    }, [])

    return <div id='particles-js'></div>
}

export default ParticlesBg;