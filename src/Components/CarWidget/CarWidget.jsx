import React from 'react';
import './CarWidget.css'; 

const CarWidget = () => {
    return (
        <> 
            <button>
                <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" className='carrito-compra' />
                <span className="carrito-contador">0</span>
            </button>    
        </>
    );
}

export default CarWidget;
