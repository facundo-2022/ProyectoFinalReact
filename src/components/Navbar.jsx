import { CartWidget } from "./CartWidget"
import { Categories } from "./Categories"

export const Navbar = () => {
    return (
        <nav className=" p-4  mb-6" style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/cabezal.jpg?alt=media&token=bf2db2c0-49af-4708-a10a-cec25ec6cfd6')`, backgroundRepeat: 'no-repeat', backgroundSize:' cover' }}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between ">
                  
                    <img src="https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/logo-removebg-preview.png?alt=media&token=330077c0-5a10-497b-bc5c-cc75a450f543" alt="Logo" className="h-12 w-auto ease-in duration-300" />
                    <ul className="flex space-x-4 ">
                        <Categories />
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}
