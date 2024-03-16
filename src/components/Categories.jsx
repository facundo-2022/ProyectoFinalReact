import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Categories = () => {
    return (
        <>
            <li className="text-white">
                <Link to={'/'}>
                    <button className="bg-yellow-300 ease-in duration-300 text-white px-4 py-2 rounded flex items-center">
                        <FontAwesomeIcon icon={faPizzaSlice} className="mr-2" size="lg" />
                        <span>Pizza</span>
                    </button>
                </Link>
            </li>
            
            <li className="text-white">
                <Link to={'/Contacto'}>
                    <button className="bg-yellow-300 text-white px-4 py-2 rounded flex items-center">
                        <FontAwesomeIcon icon={faMobileAlt} className="mr-2" size="lg" />
                        <span>Contacto</span>
                    </button>
                </Link>
            </li>
        </>
    )
}
