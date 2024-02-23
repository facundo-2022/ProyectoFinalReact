import { useState } from "react";
import { ItemCount } from "./ItemDetails";

export const Item = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleAddToCart = (count) => {
        // Aquí puedes manejar la lógica para agregar el producto al carrito
        console.log(`Agregado al carrito: ${count} ${product.title}`);
    };

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('../img/fondo.jpg')` , backgroundRepeat: 'no-repeat' }}>
            <div className={`max-w-xs mx-auto bg-gray-200 p-3 rounded-md shadow-md mb-4 ${isFlipped ? 'rotate' : ''}`} onClick={flipCard}>
                <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
                    <div className="front">
                        <img src={`../img/${product.img}`} alt={`Imagen de ${product.title}`} />
                        <h2 className="text-lg font-semibold font-bold mb-2 flex justify-between items-center">
                            <span>{product.title}</span>
                            <span>${product.price}</span>
                        </h2>
                        <div className="back">
                            <p>Otra información relevante sobre el producto</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <ItemCount onAdd={handleAddToCart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
