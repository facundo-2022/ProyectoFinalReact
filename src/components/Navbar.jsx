import { useState } from 'react';
import { CartWidget } from './CartWidget';
import { Categories } from './Categories';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="p-6 mb-6" style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/cabezal.jpg?alt=media&token=bf2db2c0-49af-4708-a10a-cec25ec6cfd6')`, backgroundRepeat: 'no-repeat', backgroundSize:' cover' }}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <img src="https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/logo-removebg-preview.png?alt=media&token=330077c0-5a10-497b-bc5c-cc75a450f543" alt="Logo" className="h-16 w-auto ease-in duration-300" />
                    <h1 className="text-white text-2xl font-bold italic flex-grow text-center"> Pizzeria Mazzanta</h1>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <ul className={`flex space-x-4 lg:flex lg:space-x-4 ${menuOpen ? 'block' : 'hidden'}`}>
                        <Categories />
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    );
};
