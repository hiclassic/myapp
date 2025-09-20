import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul>
                <li Link to="/home">Home</li>
                <li Link to="/about">About</li>
                <li Link to="/services">Services</li>
            </ul>
            
        </div>
    );
};

export default Nav;