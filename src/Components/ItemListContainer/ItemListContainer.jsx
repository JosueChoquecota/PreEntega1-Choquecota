import React, { useEffect, useState } from 'react';
import ItemList from './Itemlist';
import productosJSON from '../productos.json';
import { Link, useParams } from 'react-router-dom';

function asyncMock(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(categoryId === undefined) {
        resolve(productosJSON); 
      } else {
        const productosFiltrados = productosJSON.filter((item) => {
          return item.categoria === categoryId;
        });
        resolve(productosFiltrados);
      }  
    }, 1000);
  });
}

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productosState, setProductosState] = useState([]); 

  useEffect(() => {
    asyncMock(categoryId).then((res) => setProductosState(res)); 
  }, [categoryId]);

  return (
    <main>
      <section className='item-list-container'>
      <ItemList products={productosState}/>
      </section>
    </main>
  );
}

export default ItemListContainer;