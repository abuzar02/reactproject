import React, { useState } from 'react';
import myImage from './images/logo.png.webp';
import '../header/styles/header.css';
import { NavLink } from 'react-router-dom';

function Header() {

const [toggle, setToggle]= useState(false)

const handleToggle = ()=>{
    setToggle(!toggle)
}

    return (
        <>
            <div className="nav">

                <div className='right'>
                    <div className="logo">
                        <img src={myImage} alt="not support" />
                    </div>
                    <ul className={toggle ? 'active' : ''}>
                        <li><NavLink to="/herosection">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">CaseStudy</a></li>
                        <li><a href="#" className='dropDown'>Blog</a></li>
                        <li><a href="#">Contect</a></li>

                           
                <div className="left left2">
                    <button>Let's Talk</button>
                </div>
                    </ul>
                    
                </div>
                
                <div className="left">
                    <p>Call Us: +10 (78) 378 3784</p>
                    <button>Let's Talk</button>
                </div>
                <div className="bar" onClick={handleToggle }>
                <i class="fa-solid fa-bars"></i>
                </div>
            </div>

        </>

    );
}

export default Header;  