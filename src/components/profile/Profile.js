import React from 'react';
import './Profile.css';
import ProfileContainer from './ProfileContainer';

import {IoIosArrowForward} from 'react-icons/io';

const titles = ['Inbetriebnahme von Anlagen', 'Programmierung', 'Prozesskonzeptionierung', 'Produktionsbetreuung', 'Technologische Bandbreite', 'Unterstützung']

const Profile = () => {
  return (
    <section id='profile' className='container profileSection'>
        <br />
       <h2 className='heading text-center'>Leistungsprofil</h2>
       <div className='profileCardsDiv'>
         {titles.map(title => <ProfileContainer text={title} />)}
       </div>
       <button type='button' className='pointer'><IoIosArrowForward /><span>MEHR INFO</span></button>
    </section>
  )
}

export default Profile;