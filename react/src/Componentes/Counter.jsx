import React, { useState } from 'react';

const counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h1>Contador</h1>
            <p className='mensaje'>El valor es: {count} </p>
            <button onClick={handleIncrement}>Incrementar</button>
            <button onClick={handleDecrement}>Decrementar</button>
        </div>
    );
};

export default counter;
