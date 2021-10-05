import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    
    return (
        <div className="footer-part">
            <div>
                <h1>Music Learning</h1>
                <div id="learning">
                    <p>Musically</p>
                    <p>Api</p>
                </div>
            </div>
            <div>
                <h1>Overview</h1>
                <div>
                    <Link to="/home" style={{ textDecoration: 'none', color: 'whiteSmoke' }}>
                <p>Home</p>
                </Link>
                <Link to="/services" style={{ textDecoration: 'none', color: 'whiteSmoke' }}>
                <p>Services</p>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'whiteSmoke' }}>
                <p>About</p>
                </Link>
                </div>
                
            </div>
            <div>
                <h1>Help</h1>
                <div id="help">
                    <p>Contact us</p>
                    <p>Email:hello@gmail.com</p>
                    <p>www.dynamite.music.school.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;