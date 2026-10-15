import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return (
        <section className="counter">
            <h3>Licznik: {count}</h3>

            <div>
                <button onClick={() => setCount(count + 1)}>+1</button>
                <button onClick={() => setCount(count - 1)}>-1</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count + 5)}>+5</button>
                <button onClick={() => setCount(count - 5)}>-5</button>
                <button onClick={() => setCount(100)}>Ustaw 100</button>
            </div>
        </section>
    )
}

export default Counter;