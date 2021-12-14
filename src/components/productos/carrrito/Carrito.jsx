import React from 'react'
import { useSelector } from 'react-redux';
import { Narbar } from '../../nav/Narbar'

export default function Carrito() {
    const { carrito } = useSelector((store) => store.carrito);
    return (
        <div>
            <Narbar />
            <div className="container">
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            carrito.map((car,i) => (
                                <tr key={i}>
                                    <th scope="row" className='nombreCarrirto text-break'>{car.name}</th>
                                    <td>
                                        <img src={car.foto1} alt={car.name} className='imagenCarrito'/>
                                    </td>
                                    <td>{car.price}</td>
                                    <td><button type="button" class="btn btn-warning">Eliminar</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
