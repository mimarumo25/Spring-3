import React from 'react';
import Carrusel from './carrucel/Carrusel';
import {Narbar} from './nav/Narbar'
import Productos from './productos/Productos';


const Home = () => {

    return (
        <div>
           <Narbar/>
           <Carrusel/>
           <Productos/>
        </div>
    );
}

export default Home;
