import React, { useState } from 'react';

const Contador = ({ valorInicial, cambioDeValor, stock }) => {
    const [contador, setContador] = useState(valorInicial);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador => Math.min(contador + 1, stock));
            cambioDeValor(contador => Math.min(contador + 1, stock));
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador => Math.max(contador - 1, 1));
            cambioDeValor(contador => Math.max(contador - 1, 1));
        }
    };

    return (
        <div>
            <p className="mt-3">El contador está en: {contador}</p>
            <button className="bg-white rounded px-4 py-2 shadow-sm" onClick={sumar}>+</button>
            <button className="bg-white rounded px-4 py-2 shadow-sm" onClick={restar}>-</button>
        </div>
    );
};

export default Contador;
