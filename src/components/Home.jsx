import React from 'react';
import Carrusel from './carrucel/Carrusel';
import {Narbar} from './nav/Narbar'
import CardProductosHome from './productos/cards/CardProductosHome';

const Home = () => {

    return (
        <div>
           <Narbar/>
           <Carrusel/>
           <CardProductosHome/>

        </div>
    );
}

export default Home;
