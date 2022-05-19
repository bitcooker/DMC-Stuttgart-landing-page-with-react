import React from 'react';
import './Contact.css';

import {MdLocationOn} from 'react-icons/md';

const Contact = () => {
  return (
    <section id='contact' className='contactSection'>
        <div className='contactMap'>
          <MdLocationOn className='contactPin' />
          <div className='contactContent'>
            <h3>Kontakt</h3>
            <div className='contactAddress'>
              <h4>DMC Stuttgart GmbH</h4>
              <address>Tübingerstrasse 6</address>
              <address>70178 Stuttgart</address>
            </div>
            <div className='contactContact'>
                <div>
                  <p className='contactBold'>Hr. Lemajic</p>
                  <p className='contactBold'>Büro</p>
                  <p className='contactBold'>E-Mail</p>
                </div>
                <div>
                  <p>0176 49272200</p>
                  <p>0711 22 00 71 83</p>
                  <p className='contactEmail'>info@dmc-stuttgart.de</p>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact