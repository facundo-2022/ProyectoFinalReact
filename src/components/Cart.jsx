import React from 'react';
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { ItemList } from "./ItemList";

export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext();

    return (
        <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            {
                carrito.length === 0 ?
                    <>
                        <h1 className="text-2xl mb-4">Carrito Vacío</h1>
                        <Link to={'/'}>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none">
                                Volver al inicio
                            </button>
                        </Link>
                    </>
                    :
                    <div className="container mx-auto">
                        <ItemList products={carrito} plantilla="ItemCart" />
                        <div className="flex justify-between items-center space-x-4 mt-4">
                            <div>
                                <button className="bg-green-300 text-white px-2 py-1 rounded-md ml-4 hover:bg-green-500 focus:outline-none focus:bg-transparent" onClick={emptyCart}>
                                    Vaciar Carrito
                                </button>
                                <Link to={'/'}>
                                    <button className="bg-green-300 text-white px-2 py-1 rounded-md ml-4 hover:bg-green-500 focus:outline-none focus:bg-transparent">
                                        Continuar Comprando
                                    </button>
                                </Link>
                                <Link to={'/checkout'} className="text-green-500 hover:text-green-600">
                                    <button className="bg-green-300 text-white px-2 py-1 rounded-md ml-4 hover:bg-green-500 focus:outline-none focus:bg-transparent">
                                        Finalizar Compra
                                    </button>
                                </Link>
                            </div>
                            <p className="text-lg">Resumen de la compra: $ {totalPrice()}</p>
                        </div>
                    </div>
            }
        </div>
    );
};
