import React from 'react';
import './Details.css';

import image from '../../assets/karosseriebau.png'

import {IoIosArrowForward} from 'react-icons/io';

const Details = () => {
  return (
    <section className='detailsSection'>
        <div className='detailsCover'>
            <div className='container detailsContainer'>
                <div className='detailsList'>
                    <h2 className='heading'>Leistungen im Detail</h2>
                    <ul>
                        <li>Offline-Programmierung</li>
                        <li>Online-Programmierung</li>
                        <li>Fügetechnik</li>
                        <li>Handling</li>
                        <li>Kleben</li>
                        <li>Löten / Schweißen</li>
                        <li>Taktzeitoptimierung</li>
                    </ul>
                    <button type='button' className='pointer'><IoIosArrowForward /><span>MEHR INFO</span></button>
                </div>

                <div className='detailsImage'>
                    <img src={image} alt='build process' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Details