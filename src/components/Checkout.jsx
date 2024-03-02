import { useRef } from "react";

export const Checkout = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current); // Paso un formulario HTML a un objeto iterador
        const data = Object.fromEntries(formData); // Paso un objeto iterador a un objeto simple
        console.log(data);
        e.target.reset();
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="max-w-md mx-auto bg-gray-200 shadow-md rounded-md overflow-hidden">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="px-6 py-4">
                        <label className="block text-gray-700 mb-2">Nombre:</label>
                        <input type="text" className="w-full border rounded-md px-3 py-2" name="nombre" />
                    </div>
                    <div className="px-6 py-4">
                        <label className="block text-gray-700 mb-2">Apellido:</label>
                        <input type="text" className="w-full border rounded-md px-3 py-2" name="apellido" />
                    </div>
                    <div className="px-6 py-4">
                        <label className="block text-gray-700 mb-2">Dirección:</label>
                        <input type="text" className="w-full border rounded-md px-3 py-2" name="direccion" />
                    </div>
                    <div className="px-6 py-4">
                        <label className="block text-gray-700 mb-2">DNI:</label>
                        <input type="number" className="w-full border rounded-md px-3 py-2" name="dni" />
                    </div>
                    <div className="px-6 py-4">
                        <label className="block text-gray-700 mb-2">Email:</label>
                        <input type="email" className="w-full border rounded-md px-3 py-2" name="email" />
                    </div>
                    <div className="px-6 py-4">
                        <label className="block text-gray-700 mb-2">Teléfono:</label>
                        <input type="number" className="w-full border rounded-md px-3 py-2" name="telefono" />
                    </div>
                    <div className="px-6 py-4">
                        <button type="submit" className="w-full bg-brown-500 hover:bg-brown-600 text-white py-2 rounded-md transition duration-300">Finalizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
