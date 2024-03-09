import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import Carga from './Carga';
import {getFirestore, getDoc, doc} from "firebase/firestore";
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb,"1", id);

        getDoc(queryDoc)
        .then(res => setProducto({id: res.id, ...res.data() }))
    }, [id])
        

    return (
        <div className="mt-4">
            {producto ? (
                <ItemDetail producto={producto} />
            ) : (
                <Carga />
            )}
        </div>
    );
}

export default ItemDetailContainer;