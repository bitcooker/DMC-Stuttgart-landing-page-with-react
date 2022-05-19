import React from 'react';
import './ClientContainer.css';

const ClientContainer = ({img, name}) => {
  return (
    <div className='clientContainer'>
        <img src={img} alt={`${name} logo`} />
    </div>
  )
}

export default ClientContainer