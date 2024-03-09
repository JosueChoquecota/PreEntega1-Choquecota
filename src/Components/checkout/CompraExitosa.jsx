import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const CompraExitosa = () => {
    const { id } = useParams();
    const [loadDate, setLoadDate] = useState(new Date());

    useEffect(() => {
        setLoadDate(new Date());
    }, []);

    return (
        <Container className="bg-light p-4 rounded mt-3">
            <Row>
                <Col xs={12} className="text-center">
                    <h2>SU COMPRA HA SIDO EXITOSA!</h2>
                    <p>Tu ID de compra es: {id}</p>
                    <p>Fecha de carga de la página: {loadDate.toLocaleString()}</p>
                    <h2>GRACIAS POR TU COMPRA</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default CompraExitosa;
