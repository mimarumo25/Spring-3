import React from 'react';
import { useSelector } from 'react-redux';
import CardProductosHome from './cards/CardProductosHome';

const Productos = () => {
    const { product } = useSelector((store) => store.product);
    
    return (
        <div>
            <div className=" container-fluid px-5 containerCards" >
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-between alto">
                    {
                        product.map((p, i) => (
                            <div key={i}>
                                <CardProductosHome product={p} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Productos;
