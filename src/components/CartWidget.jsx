import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export const CartWidget = () => {
    return (
        <li className="text-white">
            <button className="bg-yellow-300 text-white px-4 py-2 rounded flex items-center">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                <span>0</span>
            </button>
        </li>
    )
}