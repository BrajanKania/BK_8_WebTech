import {useState} from "react"

function Technology({name, category, hours, image}) {

  const getImageUrl = (fileName) => {
    return new URL(`../assets/${fileName}`, import.meta.url).href;
  };

  const [likes, setLikes] = useState(0);
  const [isLearning, setIsLearning] = useState(false);

  return (
    <section className="technology">
      <h3>{name}</h3>
      <img src={getImageUrl(image)} alt=""/>
      <p>Kategoria: <span className="categoryLabel">{category}</span></p>
      <p>Liczba godzin: {hours}</p>

      <button onClick={() => {
        console.log(`Technologia: ${name}\nKategoria: ${category}\nLiczba godzin: ${hours}`);
      }}>
        Pokaż informacje
      </button>

      <p>Polubienia: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Lubię</button>
      <button onClick={() => setLikes(0)}>Resetuj polubienia</button>

      <p>Status nauki: {isLearning ? "Uczę się" : "Jeszcze nie uczę się"}</p>
      <button onClick={() => setIsLearning(!isLearning)}>Zmień status nauki</button>
    </section>
  );
}

export default Technology;