import React, { useState, useEffect } from 'react';
import heroMobileImg from '../assets/hero-mobile.jpg';
import heroDesktopImg from '../assets/hero-desktop.jpg';

const Hero = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
        return () => window.removeEventListener('resize');
    }, []);

    return (
        <section className='hero-section'>
            {width >= 768 ? (
                <img src={heroDesktopImg} alt='Hero' />
            ) : (
                <img src={heroMobileImg} alt='Hero' />
            )}
        </section>
    );
};

export default Hero;
