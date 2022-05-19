import React from 'react';
import './Footer.css';

import logo from '../../assets/logo-bottom.png';

const Footer = () => {
  return (
    <footer id='footer' className='footer'>
        <div className='container footerNav'>
            <div className='footerImage'>
                <img src={logo} alt='logo' />
            </div>
            <div className='footerNavLinks'>
                <a href='#'>Startseite</a>
                <a href='#'>Über uns</a>
                <a href='#'>Leistungsprofil</a>
                <a href='#'>Leistungen im Detail</a>
                <a href='#'>Kontakt</a>
            </div>
        </div>
        <div className='container footerImpressum'>
            <a href='#'>Impressum</a>
            <a href='#'>Datenschutz</a>
        </div>
        <hr className='container' />
        <div className='container footerCopyright'>
            <p>Copyright © DMC Stuttgart - 2022. All Rights Reserved.</p>
            <p>Created by <span>nova media.</span></p>
        </div>
    </footer>
  )
}

export default Footer