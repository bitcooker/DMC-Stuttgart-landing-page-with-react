import React from 'react';
import './Navbar.css';

import {BsHeadset} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';

const Navbar = () => {
  return (
    <nav id='navbar' className='navbar container'>
        <a className='activeLink' href='#'>Startseite</a>
        <a href='#'>Über uns</a>
        <a href='#'>Leistungsprofil</a>
        <a href='#'>Leistungen im Detail</a>
        <div className='navbarButtonContainer'>
            <button className='pointer kontakt' type='button'><BsHeadset /><span>Kontakt</span></button>
            <button className='pointer eng' type='button'><span>ENG</span><IoIosArrowDown /></button>
        </div>
    </nav>
  )
}

export default Navbar