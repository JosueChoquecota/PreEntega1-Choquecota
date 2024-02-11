import React from 'react';
import { Link } from 'react-router-dom'; 
import './CarWidget.css';

const CarWidget = () => {
    return (
        <> 
            <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" className='carrito-compra' />
            <span className="carrito-contador">0</span>
        </>
    );
}

export default CarWidget;