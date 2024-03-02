import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(prods => {
                setProducts(prods)
            })
            .catch((error) => console.log(error))
    }, [])
    return (
       <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('../img/fondo.jpg')` , backgroundRepeat: 'no-repeat' }}> 
       <div className=" flex flex-wrap gap-4"> 
            <ItemList products={products} />
        </div>
        </div>
    )
}