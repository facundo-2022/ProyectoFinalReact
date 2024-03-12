import React, { useState } from "react";
import { useCarritoContext } from "../context/CartContext";
import { ItemCount } from "./ItemDetails";
import "./Item.css";

export const Item = ({ product }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const { addItem } = useCarritoContext();

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="bg-yellow-300 p-5 rounded-md">
            <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={flipCard}>
                <div className="thumb">
                    <img src={`${product.img}`} alt={`Imagen de ${product.title}`} />
                </div>
                <div className="infos">
                    <h2 className="title">
                        {product.title}<span className="flag"></span>
                        <img src="https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/logo-removebg-preview.png?alt=media&token=330077c0-5a10-497b-bc5c-cc75a450f543" alt="Logo" className="logo" /> 
                    </h2>
                    <br />
                    <p className="txt">
                        Descripción: {product.description}
                    </p>
                    <br />
                    <h3 className="date">Precio (2 personas): ${product.priceNormal}</h3>
                    <h3 className="date">Precio (1 persona): ${product.pricemedium}</h3>
                    
                    <hr />
                    <ItemCount item={product} />
                </div>
            </div>
        </div>
    );
};
