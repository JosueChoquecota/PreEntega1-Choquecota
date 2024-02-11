import { useEffect, useState } from "react";
import productoJSON from '../productos.json'
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';
import Contador from "./Contador";


export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        const obtenerProducto = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    const encontrarProducto = productoJSON.find(producto => producto.id === parseInt(id));
                    resolve(encontrarProducto);
                }, 1000);
            });
        };

        obtenerProducto().then(producto => {
            setProducto(producto);
        });
    }, [id]);

    return (
        <div className="mt-4">
            {producto ? (
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
                <button className="bg-white rounded px-4 py-2 shadow-sm">
                    Agregar al carrito
                </button>
                <Contador/>
              </Col>
            </Row>
          </Container >
            ) : (
            <p>Cargando...</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;