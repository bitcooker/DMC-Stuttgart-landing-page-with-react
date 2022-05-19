import React from 'react';
import image from '../../assets/karosseriebau.png';
import './About.css';

import {IoIosArrowForward} from 'react-icons/io'

const About = () => {
  return (
    <section id='about' className='container aboutSection'>
        <div className='aboutImage'>
            <img src={image} alt='building process' />
        </div>
        <div className='aboutContent'>
            <h2 className='heading'>Über DMC Automation</h2>
            <p>Um ein vollständiges Leistungsspektrum im Bereich Industrierobotik/SPS anbieten zu können, haben wir im Jahr 2006 das Unternehmen um ein weiteres Geschäftsfeld erweitert. </p>
            <p>Unser Ziel ist es, alle von unseren Kunden benötigten Leistungen aus einer Hand anbieten zu können - weltweit.</p>
            <p>Wir sind der Meinung, dass die nachhaltigste Unternehmenspolitik auf der Zufriedenheit unserer Kunden basiert - denn nur ein Haus, das auf einem starken Fundament aufgebaut ist trägt. </p>
            <button type='button' className='pointer'><IoIosArrowForward /><span>ÜBER UNS</span></button>
        </div>
    </section>
  )
}

export default About