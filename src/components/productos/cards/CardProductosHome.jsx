import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { carrito } from '../../../actions/actionProduct'

import './stylesProductos.css'

export default function CardProductosHome({ product }) {
    const dispatch = useDispatch()

    const handleCarrito = (data) => {
      
        dispatch(carrito(data)) 
    }
   
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Link to={`/details_product/${product.id}`}>
                        <Card.Img variant="top h-75" src={product.foto1} />
                    </Link>
                    <Card.Title className='text-center mt-2'>{product.name}</Card.Title>
                    <div>
                        <p className='mt-3 text-center fs-4'>Precio:<b > US$ {product.price}</b></p>
                    </div>
                    <div className='d-grid'>
                        <Button variant="primary" onClick={() => { handleCarrito(product) }}>Agregar al carrito</Button>
                    </div>
                </Card.Body>
            </Card>

        </div>
    )
}
