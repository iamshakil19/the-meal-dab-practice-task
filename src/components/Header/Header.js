import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <p className='logo'>Logo</p>
                <div className='menu'>
                    <a href="">Home</a>
                    <a href="">Menu</a>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;