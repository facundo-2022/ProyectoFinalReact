import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt, FaClock, FaMotorcycle } from 'react-icons/fa';

export const Contacto = () => {
  // Establece el color de fondo del cuerpo de la página
  document.body.style.backgroundColor = "#FFFFFF";

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="bg-yellow-100 rounded-xl shadow-md p-8 md:p-12">
        <div className="flex items-center justify-center mb-8">
          <svg className="h-12 w-12 text-yellow-600 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2 0a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2H2zm16 18H2V2h16v16zM7 5a1 1 0 00-1 1v1H4v2h2v6h2V9h2V7H7V5zm6 8h-2v-2h2v2zm0-4h-2V7h2v2z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Pizzeria Mazzanta</h2>
          <p className="mt-2 text-lg text-gray-600"><FaPhone className="inline-block mr-2" />Teléfono: 3400499164</p>
          <p className="mt-2 text-lg text-gray-600"><FaMapMarkerAlt className="inline-block mr-2" />Ubicación: Dorrego e Irigoyen, Villa Constitución</p>
          <p className="mt-2 text-lg text-gray-600"><FaClock className="inline-block mr-2" />Día y Horario de Atención: Miércoles a Domingo, 20:00 a 23:00Hs</p>
          <p className="mt-2 text-lg text-gray-600"><FaMotorcycle className="inline-block mr-2" />Pedidos desde las 19Hs - Costo del envío: $800</p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
