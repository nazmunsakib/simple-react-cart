import React from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.svg';

const Header = () => {
    return (
        <header className='site-header'>
            <div className="header-inner">
                <div className="logo-area">
                    <img src={logo} />
                </div>
                <div className="nav-area">
                    <ul id='site-nav'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;