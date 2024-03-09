import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/carContext';
import { addDoc, getFirestore, collection, Timestamp } from 'firebase/firestore';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

const Checkout = () => {
    const { cart, clearItem } = useContext(CartContext); 
    const totalCost = cart.reduce((total, item) => total + (item.quantity * item.precio), 0);

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: ''
    });

    const navigate = useNavigate(); 
    const [orderId, setOrderId] = useState(null); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { nombre, apellido, telefono, email } = formData;
    
        if (!nombre || !apellido || !telefono || !email || cart.length === 0) {
            console.error('Error: campos incompletos o carrito vacío');
            return;
        }
    
        const db = getFirestore();
        const orders = collection(db, 'orders');
    
        const newOrder = {
            buyer: {
                nombre,
                apellido,
                telefono,
                email
            },
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                precio: item.precio
            })),
            total: totalCost,
            date: Timestamp.fromDate(new Date())
        };
    
        try {
            const docRef = await addDoc(orders, newOrder);
            console.log('Gracias por su compra. ID de la compra:', docRef.id);
            setOrderId(docRef.id);
            clearItem();
            navigate(`/CompraExitosa/${docRef.id}`);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }
    
    return (
        <>
            <Container className="bg-light p-4 rounded">
                <Row>
                    <Col xs={6}>
                        <h2>Resumen de compra</h2>
                        <h6>Productos:</h6>
                        <ul>
                            {cart.map(producto => (
                                <li key={producto.id} className="text-secondary my-3">
                                    <span>{producto.name} | S/ {producto.precio}</span> - c/u x {producto.quantity} und
                                </li>
                            ))}
                        </ul>
                        <hr className="text-secondary" />
                        <h4 className="text-secondary">Total Costos: S/ {totalCost}</h4>
                    </Col>
                    <Col xs={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicNombre">
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu nombre" name="nombre" onChange={handleInputChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicApellido">
                                <Form.Label>Apellido:</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu Apellido" name="apellido" onChange={handleInputChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicTelefono">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="tel" placeholder="Ingresa tu teléfono" name="telefono" onChange={handleInputChange} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address:</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInputChange} required />
                            </Form.Group>
                            <Button className="d-flex justify-content-center" type="submit">Comprar </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Checkout;
