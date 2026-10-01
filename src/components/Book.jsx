function Book({title, author}){
    return (
        <section className="book">
            <p>Tytuł: {title}</p>
            <p>Autor: {author}</p>
        </section>
    );
}

export default Book;