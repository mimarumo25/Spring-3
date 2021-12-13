import React, { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { Narbar } from '../../nav/Narbar'

const ProductDetails = () => {

    const { product } = useSelector((store) => store.product);
    const { id } = useParams();

    const data = product.find((p) => p.id === id)

    const [imagen, setImagen] = useState(data.foto1);

    const handleImagen = (foto) => {
        setImagen(foto)
    }


    console.log(data);
    return (
        <div>
            <Narbar />
            <div className="containerDetalles mt-3">
                <dir className="d-flex justify-content-between">
                    <div className="row">
                        <div className="col-1">
                            <div className="card m-3 img-active">
                                <img src={data.foto1}
                                    className="w-100"
                                    alt="imagen 1"
                                    name="foto1"
                                    onClick={() => handleImagen(data.foto1)} />
                            </div>
                            <div className="card m-3 img-active">
                                <img src={data.foto2}
                                    className="w-100"
                                    alt="imagen 1"
                                    name="foto2"
                                    onClick={() => handleImagen(data.foto2)} />
                            </div>
                            <div className="card m-3 img-active">
                                <img src={data.foto3}
                                    className="w-100"
                                    alt="imagen 1"
                                    name="foto3"
                                    onClick={() => handleImagen(data.foto3)} />
                            </div>
                            <div className="card m-3 img-active">
                                <img src={data.foto4}
                                    className="w-100 "
                                    alt="imagen 1"
                                    name="foto4"
                                    onClick={() => handleImagen(data.foto4)} />
                            </div>
                            <div className="card m-3 img-active">
                                <img src={data.foto5}
                                    className="w-100 "
                                    alt="imagen 1"
                                    name="foto5"
                                    onClick={() => handleImagen(data.foto5)} />
                            </div>
                        </div>

                        <div className="col-5">
                       <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: imagen,
                        },
                        largeImage: {
                            src: imagen,
                            width: 1200,
                            height: 1800
                        }
                    }} /> 

                           


                        </div>
                        <div className="col-3 mx-3 px-3">
                            <h3><b>Nombre:</b> {data.name}</h3>
                            <p><b>Descripción:</b> <br />{data.description}</p>

                        </div>
                        <div className="col-2">
                            <div className="border border-secondary mb-3">
                                <div className="card-body text-dark">
                                    <h5 className="card-title colorp">US$ {data.price}</h5>
                                    <p className="card-text">Envio Gratis <Link to="#"><small>Detalle</small></Link><br />
                                    </p>
                                    <p>Llega de: <b>15 a 20 días</b></p>
                                    <p className='colorp'>Puede que lo recibas después de Navidad.</p>
                                    <div class="d-grid gap-2">
                                        <button class="btn botoInicioS" type="button">Agregar al Carrito</button>
                                       
                                    </div>
                                    <p className='mt-3'>Transacción segura</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </dir>
            </div>
        </div>
    )
}

export default ProductDetails
