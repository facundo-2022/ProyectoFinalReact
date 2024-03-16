import React from 'react';
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { ItemList } from "./ItemList";

export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext();

    return (
        <div className="bg-gray-200 p-4">
            {
                carrito.length === 0 ?
                    <>
                        <h1 className="text-2xl mb-4">Carrito Vacío</h1>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none">
                            <Link to={'/'}>
                                Volver al inicio
                            </Link>
                        </button>
                    </>
                    :
                    <div className="flex flex-col">
                        <ItemList products={carrito} plantilla="ItemCart" />
                        <div className="flex justify-between items-center mt-4">
                            <div>
                                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none" onClick={emptyCart}>
                                    Vaciar Carrito
                                </button>
                                <Link to={'/'} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none ml-4">
                                    Continuar Comprando
                                </Link>
                                <Link to={'/checkout'} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none ml-4">
                                    Iniciar pago
                                </Link>
                            </div>
                            <p className="text-lg">Resumen de la compra: $ {totalPrice()}</p>
                        </div>
                    </div>
            }
        </div>
    );
};
