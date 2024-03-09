import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import './CarWidget.css';
import { CartContext } from '../Context/carContext';

const CarWidget = () => {
    const { cart } = useContext(CartContext)
    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0)
    return (
        <> 
            <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" className='carrito-compra' />
            <span className="carrito-contador">{totalQuantity}</span>
        </>
    );
}

export default CarWidget;