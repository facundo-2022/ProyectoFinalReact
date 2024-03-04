import React from 'react';
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { ItemList } from "./ItemList";

export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext();

    return (
        <div style={{background: '#f2f2f2', padding: '20px'}}>
            {
                carrito.length === 0 ?
                    <>
                        <h1>Carrito Vacío</h1>
                        <button className="bg-green-300 text-white px-2 py-1 rounded-md ml-4 hover:bg-green-500 focus:outline-none flex items-center">
                            <Link to={'/'}>
                                Volver al inicio
                            </Link>
                        </button>
                    </>
                    :
                    <div>
                        {<ItemList products={carrito} plantilla="ItemCart" />}
                        <div>
                            <p>Resumen de la compra: $ {totalPrice()}</p>
                            <button className="bg-green-300 text-white px-2 py-1 rounded-md ml-4 hover:bg-green-500 focus:outline-none flex items-center" onClick={emptyCart}>
                                Vaciar Carrito
                            </button>
                            <button className="bg-green-300 text-white px-2 py-1 rounded-md ml-4 hover:bg-green-500 focus:outline-none flex items-center" >
                                <Link to={'/'}>
                                    Continuar Comprando
                                </Link>
                            </button>
                            <button className="bg-green-300 text-white px-2 py-1 rounded-md ml-4 hover:bg-green-500 focus:outline-none flex items-center" >
                                <Link to={'/checkout'}>
                                    Iniciar pago
                                </Link>
                            </button>
                        </div>
                    </div>
            }
        </div>
    );
};
