import React from 'react';
import './Clients.css';
import ClientContainer from './ClientContainer';

import merc from '../../assets/mercedes.svg';
import porsche from '../../assets/porsche.svg';
import vw from '../../assets/vw.svg';
import audi from '../../assets/audi.svg';
import volvo from '../../assets/volvo.svg';
import bmw from '../../assets/bmw.svg';
import ford from '../../assets/ford.svg';
import tesla from '../../assets/tesla.svg';


const Clients = () => {
  return (
    <section id='clients' className='container clientsSection'>
        <h2 className='heading text-center'>Unsere Kunden</h2>
        <div className='clientsContainer'>
            <ClientContainer img={merc} name='Mercedes-Benz' />
            <ClientContainer img={porsche} name='Porsche' />
            <ClientContainer img={vw} name='Volkswagen' />
            <ClientContainer img={audi} name='Audi' />
            <ClientContainer img={volvo} name='Volvo' />
            <ClientContainer img={bmw} name='Bmw' />
            <ClientContainer img={ford} name='Ford' />
            <ClientContainer img={tesla} name='Tesla' />
        </div>
    </section>
  )
}

export default Clients