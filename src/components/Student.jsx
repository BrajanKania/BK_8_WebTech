function Student({name, className, age, specialization}){
    return (
        <section className="student">
            <p>Imię: {name}</p>
            <p>Klasa: {className}</p>
            <p>Wiek: {age}</p>
            <p>Specializacja: {specialization}</p>
        </section>
    )
}

export default Student;