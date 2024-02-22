import { CartWidget } from "./CartWidget"
import { Categories } from "./Categories"

export const Navbar = () => {
    return (
        <nav className=" p-4  mb-6" style={{ backgroundImage: `url('../img/cabezal.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize:' cover' }}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between ">
                  
                    <img src="./img/logo.jpg" alt="Logo" className="h-12 w-auto ease-in duration-300" />
                    <ul className="flex space-x-4 ">
                        <Categories />
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}
