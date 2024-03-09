import React, { useContext, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Contador from './Contador';
import { CartContext } from '../Context/carContext';

const ItemDetail = ({ producto }) => {
    const { addToCart } = useContext(CartContext);
    const [contador, setContador] = useState(1);

    const handleAddToCart = () => {
        addToCart({ ...producto, quantity: contador });
        console.log(`Se agregaron ${contador} ${producto.name} al carrito`);
    }

    return (
        <Container className="bg-light p-4 rounded">
            <Row>
                <Col xs={6}>
                    <Image src={producto.img} thumbnail />
                </Col>
                <Col xs={6}>
                    <h1>{producto.name}</h1>
                    <p>{producto.description}</p>
                    <h2>Precio: S/ {producto.precio}</h2>
                    <p>Stock: {producto.stock}</p>
                    <p>Categoria: {producto.categoria}</p>
                    <button className='bg-white rounded px-4 py-2 shadow-sm' onClick={handleAddToCart}>AGREGAR AL CARRITO</button>
                    <Contador valorInicial={1} cambioDeValor={setContador} stock={producto.stock} />

                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;
