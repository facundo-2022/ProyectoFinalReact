import { useState } from "react";
import { ItemCount } from "./ItemDetails";
import "./Item.css"; // Importar el archivo CSS

export const Item = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleAddToCart = () => {
        // Aquí puedes manejar la lógica para agregar el producto al carrito
        console.log(`Agregado al carrito: ${quantity} ${product.title}`);
    };

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={flipCard}>
            <div className="thumb">
                <img src={`../img/${product.img}`} alt={`Imagen de ${product.title}`} />
            </div>
            <div className="infos">
                <h2 className="title">
                    {product.title}<span className="flag"></span>
                    <img src="../img/logo.jpg" alt="Logo" className="logo" /> 
                </h2>
                <br />
                <p className="txt">
                    Descripción: {product.description}
                </p>
                <br />
                <h3 className="date">Precio (2 personas): ${product.priceNormal}</h3>
                <h3 className="date">Precio (1 persona): ${product.pricemedium}</h3>
                
                <hr />
                <br />
                <button className="addToCartBtn" onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    );
};
