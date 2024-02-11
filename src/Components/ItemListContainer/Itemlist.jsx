import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div className='row justify-content-center'>
      {products.map((product) => (
        <div className="col-md-3 mb-3" key={product.id}>
          <Item product={product} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;