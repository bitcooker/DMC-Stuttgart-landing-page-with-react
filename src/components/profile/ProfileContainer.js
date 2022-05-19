import React from 'react';
import './ProfileContainer.css';

const ProfileContainer = ({text}) => {
  return (
    <div className='profileContainer'>
       <span>{text}</span>
    </div>
  )
}

export default ProfileContainer