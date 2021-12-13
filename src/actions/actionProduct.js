import  {types} from '../types/types';
import {db} from '../firebase/firebase'
import { collection, getDocs, query } from 'firebase/firestore';
import { orderBy } from 'firebase/firestore/lite';


//SEARCH

export const searchAsyn = (product) => {

    return async(dispatch) => {
       
        const productCollections = collection(db,"");
        const q = query(productCollections,orderBy("precio"),orderBy("precio", "desc"))
        const datos = await getDocs(q);
        console.log(datos)
        const producto = [];
        datos.forEach((docu) => {
            producto.push(docu.data())
        }) 
        console.log(producto)
        //dispatch(searchSync(producto))
    }
}


export const searchSync = (product) => {
    console.log(product);
    return{
        
        type: types.search,
        payload: product
    }
}

//READ

export const listProductAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "productosrelacionados"));
        const product = [];
        querySnapshot.forEach((doc) => {
            product.push({
                ...doc.data()
            })
        });
        dispatch(listSync(product));
    }
}

export const listSync = (product) => {
    return {
        type: types.list,
        payload: product
    }
}
export const carrito = (product) => {
    return {
        type: types.carrito,
        payload: product
    }
}


