function StudentCard({name, className, specialization, age, active}){
    return (
        <section className="studentCard">
            <h4>{name}</h4>
            <p>Klasa: {className}</p>
            <p>Kierunek: {specialization}</p>
            <p>Wiek: {age}</p>
            <p>Status: {active ? "Online" : "Offline"}</p>
        </section>
    );
}

export default StudentCard;