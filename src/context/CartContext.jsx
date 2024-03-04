import React, { useState, createContext, useContext } from "react";

const CarritoContext = createContext(); // Creando el contexto (por el momento vacío)

export const useCarritoContext = () => useContext(CarritoContext); // Función para consultar mi contexto en otros componentes

export const CarritoProvider = ({ children }) => { // Forma de proveer el contexto, puede recibir props

    const [carrito, setCarrito] = useState([]);

    // Buscar Producto
    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id); // V o F, si existe o no el producto en el carrito
    };

    // Agregar producto
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const indice = carrito.findIndex(prod => prod.id === item.id);
            const aux = [...carrito];
            aux[indice].quantity += cantidad;
            setCarrito(aux);
        } else {
            const newItem = {
                ...item,
                quantity: cantidad
            };

            setCarrito([...carrito, newItem]); // Guardo en el carrito el nuevo producto
        }
    };

    // Eliminar producto
    const removeItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id));
    };

    // Vaciar carrito
    const emptyCart = () => {
        setCarrito([]);
    };

    // Obtener cantidad de productos
    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0);
    };

    // Obtener precio total del carrito
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.price), 0);
    };

    console.log(carrito);
    
    return (
        <CarritoContext.Provider value={{ carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice }}>
            {children}
        </CarritoContext.Provider>
    );
};
