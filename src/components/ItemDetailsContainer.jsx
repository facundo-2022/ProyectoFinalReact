import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../firebase/firebase.js"
import { Item } from "./Item"

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const { pid } = useParams()

    useEffect(() => {
        getProduct(pid)
            .then(prod => setItem(prod))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="fixed  top-0 left-0 w-full h-full flex justify-center items-center bg-white  bg-opacity-50">
            <ItemDetail item={item} />
        </div>
    )
}