import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);
    console.log();
    return(
        <div>
            <h2>El contador está en: {contador}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            
        </div>

    )
}
export default Contador