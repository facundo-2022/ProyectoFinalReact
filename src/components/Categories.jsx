import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPizzaSlice, faMobileScreen } from "@fortawesome/free-solid-svg-icons"

export const Categories = () => {
    return (
        <>
            <li className="text-white">
                <button className=" bg-yellow-300 ease-in duration-300 text-white px-4 py-2 rounded flex items-center  ">
                    <FontAwesomeIcon icon={faPizzaSlice} className="mr-2" />
                   
                </button>
            </li>
            
            <li className="text-white">
                <button className="bg-yellow-300 text-white px-4 py-2 rounded flex items-center">
                    <FontAwesomeIcon icon={faMobileScreen} className="mr-2" />
                   
                </button>
            </li>
    
        </>
    )
}