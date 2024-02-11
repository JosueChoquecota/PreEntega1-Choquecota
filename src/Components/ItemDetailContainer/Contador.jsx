import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const sumar = () => {
            setContador(contador + 1);
           
    };
    const restar = () => {
        if (contador > 0) { 
            setContador(contador - 1);
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
export default Contador