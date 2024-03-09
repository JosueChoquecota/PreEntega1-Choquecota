import React, { useContext } from 'react';
import { CartContext } from '../Context/carContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart, clearItem } = useContext(CartContext);

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
    }

    const handleClearCart = () => {
        clearItem();
    }

    const totalCost = cart.reduce((total, item) => total + (item.quantity * item.precio), 0);

    return (
        <div className="container text-center">
            <h1 className="mt-3">Tu carrito:</h1>
            <br />

            <div className="d-none d-md-block">
                <div className="row bg-light p-2">
                    <div className="col-md-3">Imagen</div>
                    <div className="col-md-3">Nombre</div>
                    <div className="col-md-2">Cantidad</div>
                    <div className="col-md-2">Precio</div>
                    <div className="col-md-2">Total</div>
                </div>
            </div>

            {cart.map((item, index) => (
                <div key={index} className="row border-bottom py-2">
                    <div className="col-md-3">
                        <img src={item.img} alt={item.name} className="img-fluid" style={{ maxWidth: '100px' }} />
                    </div>
                    <div className="col-md-3 my-auto">{item.name}</div>
                    <div className="col-md-2 my-auto">{item.quantity}</div>
                    <div className="col-md-2 my-auto">S/ {item.precio}</div>
                    <div className="col-md-2 my-auto">S/ {item.quantity * item.precio}</div>
                    <div className="col-md-1 my-auto">
                        <Button onClick={() => handleRemoveFromCart(item.id)} variant="primary">X</Button>{' '}
                    </div>
                </div>
            ))}

            <div className="row border-top py-2">
                <div className="col-md-6"></div>
                <div className="col-md-2">Total:</div>
                <div className="col-md-2">S/ {totalCost}</div>
                <div className="col-md-2"></div>
            </div>

            <Button onClick={handleClearCart} variant="danger">Limpiar carrito</Button>
            {cart.length > 0 && (
                <Link to={`/checkout?totalCost=${totalCost}`}>
                    <Button>Finalizar compra</Button>
                </Link>
            )}
            {cart.length === 0 && (
                <Button disabled>Finalizar compra</Button>
            )}
        </div>
    );
}

export default CartPage;
