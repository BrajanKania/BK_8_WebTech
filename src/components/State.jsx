import { useState } from "react";

function State(){
    const [active, setActive] = useState(false);

    return (
        <section className="state">
            <h3>Aktywny: {active ? "Tak" : "Nie"}</h3>
            <button onClick={() => setActive(!active)}>Zmien</button>
        </section>
    )
}

export default State;