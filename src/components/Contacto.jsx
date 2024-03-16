import React from 'react';
import { Link } from "react-router-dom";

export const Contacto = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <svg className="h-12 w-12 text-yellow-600 mt-6 ml-6 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2 0a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2H2zm16 18H2V2h16v16zM7 5a1 1 0 00-1 1v1H4v2h2v6h2V9h2V7H7V5zm6 8h-2v-2h2v2zm0-4h-2V7h2v2z" clipRule="evenodd" />
          </svg>
          
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-yellow-600 font-semibold">Pizzeria Mazzanta</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">Teléfono: 3400499164</p>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">Ubicación: Dorrego e Irigoyen, Villa Constitución</p>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">Día y Horario de Atención: Miercoles a Domingo, 20:00 a 23:00Hs</p>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">Pedidos desde las 19Hs - Costo del envíos $800</p>
        </div>
      </div>
    </div>
  );
}
