import React from 'react';
import './Header.css';

import Navbar from '../navbar/Navbar';

import {BsLinkedin, BsTelephoneFill} from 'react-icons/bs';
import {MdMail} from 'react-icons/md';
import {IoIosArrowForward} from 'react-icons/io';

import logo from '../../../src/assets/logo.png';
import altLogo from '../../../src/assets/horse.png';

const Header = () => {
  return (
    <header id='header'>
        <section className='headerContainer'>
            <div className='logoDiv'>
                <img className='logo' src={logo} alt='logo' />
                <img className='altLogo' src={altLogo} alt='alt logo' />
            </div>
            <div className='headerContactContainer'>
                <div className='iconsDiv'>
                    <div className='linkedInDiv'>
                        <BsLinkedin className='linkedIn pointer' />
                    </div>
                    
                    <div className='headerContactDiv'>
                        <p className='pointer'><MdMail /><span>info@dmc-stuttgart.de</span></p>
                        <p className='pointer'><BsTelephoneFill /><span>+4917649272200</span></p>
                    </div>
                </div>
            </div>
        </section>

        <section className='headerContent'>
            <Navbar />
            <div className='container headerContentDiv'>
                <p className=''>DMC Automation</p>
                <h1><span>Technische Dienstleistungen</span> in der Automatisierung</h1>
                <div>
                    <button type='button' className='pointer mehrInfo'><IoIosArrowForward /> MEHR INFO</button>
                    <button type='button' className='pointer kontakt2'>Kontakt</button>
                </div>
            </div>
        </section>
        
    </header>
  );
}

export default Header