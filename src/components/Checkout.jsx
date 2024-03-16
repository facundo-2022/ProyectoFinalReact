import { useRef, useState } from "react";
import { useCarritoContext } from "../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrdenCompra } from "../firebase/firebase.js";
import Swal from "sweetalert2"; // Importar SweetAlert2

export const Checkout = () => {
    const formRef = useRef(null);
    const navigate = useNavigate();
    const { carrito, totalPrice, emptyCart } = useCarritoContext();
    const [loading, setLoading] = useState(false);

    const generarNumeroOrden = () => {
        return Math.floor(Math.random() * 1000000) + 1; // Número aleatorio entre 1 y 1000000
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(formRef.current);
        const cliente = Object.fromEntries(formData);
        const numeroOrden = generarNumeroOrden(); // Generar número de orden aleatorio

        try {
            const orderData = carrito.map((prod) => ({
                id: prod.id,
                quantity: prod.quantity,
                price: prod.priceNormal
            }));

            const order = await createOrdenCompra(cliente, totalPrice(), orderData, new Date().toLocaleDateString('es-AR'), numeroOrden); // Pasar el número de orden generado

            Swal.fire({
                icon: 'success',
                title: '¡Compra realizada!',
                text: `¡Gracias por tu compra! Tu número de orden es: ${numeroOrden}. Te contactaremos para el envío.`,
                confirmButtonText: 'Aceptar'
            }).then(() => {
                emptyCart();
                formRef.current.reset();
                navigate('/');
            });
        } catch (error) {
            toast.error(`Error al generar la orden de compra: ${error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {carrito.length === 0 ? (
                <>
                    <h2>Para finalizar la compra, agrega productos al carrito.</h2>
                    <Link to={"/"}>
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded">Volver al inicio</button>
                    </Link>
                </>
            ) : (
                <div className="max-w-md mx-auto p-6 mt-2 bg-gray-200 rounded-md shadow-md">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <label className="block mb-1 text-gray-700">Nombre:</label>
                        <input type="text" className="w-full p-2 mb-3 border rounded-md" name="nombre" required />

                        <label className="block mb-1 text-gray-700">Apellido:</label>
                        <input type="text" className="w-full p-2 mb-3 border rounded-md" name="apellido" required />

                        <label className="block mb-1 text-gray-700">Dirección:</label>
                        <input type="text" className="w-full p-2 mb-3 border rounded-md" name="direccion" required />

                        <label className="block mb-1 text-gray-700">DNI:</label>
                        <input type="number" className="w-full p-2 mb-3 border rounded-md" name="dni" required />

                        <label className="block mb-1 text-gray-700">Email:</label>
                        <input type="email" className="w-full p-2 mb-3 border rounded-md" name="email" required />

                        <label className="block mb-1 text-gray-700">Teléfono:</label>
                        <input type="tel" className="w-full p-2 mb-3 border rounded-md" name="telefono" required />

                        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md" disabled={loading}>
                            {loading ? "Procesando..." : "Finalizar"}
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};
