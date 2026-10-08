function Technology({name, category, hours}) {


  return (
    <section className="technology">
      <h2>{name}</h2>
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}</p>

      <button onClick={() => {
        console.log(`Technologia: ${name}\nKategoria: ${category}\nLiczba godzin: ${hours}`);
      }}>
        Pokaż informacje
      </button>
    </section>
  );
}

export default Technology;