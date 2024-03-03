import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { useCounter } from "../hooks/useCounter";
import { useCarritoContext } from "../context/CartContext";

export const ItemCount = ({ item }) => {
    const { count, increment, decrement } = useCounter(1, 10, 1);
    const { addItem } = useCarritoContext();

    const handleAddToCart = () => {
        addItem(item, count);
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="flex items-center justify-center">
                <button className="bg-green-300 text-white px-2 py-1 rounded-md ml-4 hover:bg-green-500 focus:outline-none flex items-center" onClick={decrement}>-</button>
                <span>{count}</span>
                <button className="bg-green-300 text-white px-2 py-1 rounded-md ml-4 hover:bg-green-500 focus:outline-none flex items-center"onClick={increment}>+</button>
                <button className="bg-green-300 text-white px-2 py-1 rounded-md ml-4 hover:bg-green-500 focus:outline-none flex items-center" onClick={handleAddToCart}>
                    <FaShoppingCart className="mr-2" />
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};
