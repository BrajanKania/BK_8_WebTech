function Technology({id, name, category, hours}) {
  return (
    <section className="technology">
      <h2>{name}</h2>
      <p>Id: {id}</p>
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}</p>
    </section>
  );
}

export default Technology;