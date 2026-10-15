function Technology({name, category, hours, image}) {
  
  const getImageUrl = (fileName) => {
    return new URL(`../assets/${fileName}`, import.meta.url).href;
  };

  return (
    <section className="technology">
      <h3>{name}</h3>
      <img src={getImageUrl(image)} alt=""/>
      <p>Kategoria: <p className="categoryLabel">{category}</p></p>
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