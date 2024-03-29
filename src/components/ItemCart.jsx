import React, { useState, useEffect } from 'react';
import { useCarritoContext } from "../context/CartContext";
import { useCounter } from '../hooks/useCounter';

export const ItemCart = ({ product }) => {
    const { removeItem, updateItem } = useCarritoContext();
    const { count, setCount } = useCounter(product.quantity, 1, 1); // Inicializa el contador con la cantidad del producto

    // Estado local para almacenar el subtotal
    const [subtotal, setSubtotal] = useState(product.priceNormal * product.quantity);

    // Efecto para actualizar el subtotal cuando cambia la cantidad
    useEffect(() => {
        const newSubtotal = product.priceNormal * count;
        setSubtotal(newSubtotal);
    }, [count, product.priceNormal]);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        updateItem(product.id, newCount); // Actualiza la cantidad del producto en el carrito
    };
    
    const handleDecrement = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            updateItem(product.id, newCount); // Actualiza la cantidad del producto en el carrito
        }
    };

    return (
        <div className="flex items-center p-4 border-gray-300">
            <div className="mr-4">
                <img src={`${product.img}`} alt={`Imagen de ${product.title}`} className="w-24 h-24 object-cover" />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{product.title}</h3>
            </div>
            <div className="flex items-center">
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleDecrement}>
                    -
                </button>
                <span className="text-xl font-bold">{count}</span>
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleIncrement}>
                    +
                </button>
            </div>
            <div className="ml-4">
                <p className="text-lg font-semibold">Subtotal: ${subtotal}</p>
            </div>
            <div className="ml-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => removeItem(product.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
};
