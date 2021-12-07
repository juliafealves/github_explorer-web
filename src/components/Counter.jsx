import { useState } from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={increment}>Add +1</button>
        </>
    );
}

