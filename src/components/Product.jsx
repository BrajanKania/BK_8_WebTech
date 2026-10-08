function Product({name, price, onSelect}){
    return (<section className="product">
        <h3>{name}</h3>
        <p>Cena: {price}</p>

        <button onClick={() => onSelect(name)}>
            Pokaż produkt
        </button>

    </section>);
}

export default Product;