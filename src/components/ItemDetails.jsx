import { useCounter } from "../hooks/useCounter";
import { FaShoppingCart, FaArrowUp, FaArrowDown } from 'react-icons/fa';

export const ItemCount = () => {
    const { count, increment, decrement } = useCounter(1, 10, 1);

    const handleAddToCart = () => {
        console.log("Producto agregado al carrito");
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="flex items-center justify-center">
                
                
                <button className="bg-yellow-300 text-white px-2 py-1 rounded-md ml-4 hover:bg-yellow-500 focus:outline-none flex items-center" onClick={handleAddToCart}>
                    <FaShoppingCart className="mr-2" />
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};