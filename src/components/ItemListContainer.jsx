import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "./ItemList"
import { getProducts } from "../firebase/firebase.js"
export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        //fetch('../data/productos.json')
        //    .then(response => response.json())
        getProducts()
            .then(prods => {
                if (cid) {
                    const productosFiltrados = prods.filter(prod => prod.category == cid)
                    setProducts(productosFiltrados)
                } else {
                    setProducts(prods)
                }

            })
            .catch((error) => console.log(error))
    }, [cid])


    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('../img/fondo.jpg')` , backgroundRepeat: 'no-repeat' }}> 
        <div className=" flex flex-wrap gap-4"> 
             <ItemList products={products} plantilla= "Item"/>
         </div>
         </div>
     )
 }
    