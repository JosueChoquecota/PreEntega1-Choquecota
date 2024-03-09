import React, { useEffect, useState } from 'react';
import ItemList from './Itemlist';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";




const ItemListContainer = () => {
  const [productosState, setProductosState] = useState([]); 
  const { categoryId } = useParams();

 
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "1");

        
        if(categoryId) {
          const queryFilter = query(queryCollection, where("categoria", "==", categoryId));
          getDocs(queryFilter).then(res => setProductosState(res.docs.map(product => ({id: product.id, ...product.data()}))))
        } 
        else {
          getDocs(queryCollection).then(res => setProductosState(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }

    }, [categoryId]) 


  return (
    <main>
      <section className='item-list-container'>
      <ItemList products={productosState}/> 
      </section>
    </main>
  );
}

export default ItemListContainer;