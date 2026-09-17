function CourseCard({name, teacher, hours, completed}){
    return (
        <section className="courseCard">
            <h2>{name}</h2>
            <p>Nauczyciel: {teacher}</p>
            <p>liczba minut: {hours * 60}</p>
            <p>Status: {completed ? "Ukończony" : "W trakcie"}</p>
        </section>
    );
}

export default CourseCard;