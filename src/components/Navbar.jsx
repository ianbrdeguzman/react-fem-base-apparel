import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
    return (
        <nav>
            <a href='/'>
                <img src={logo} alt='Logo' />
            </a>
        </nav>
    );
};

export default Navbar;
