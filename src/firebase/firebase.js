//es la conexion con mi aplicacion de firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc,updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBvjy71UIpXcrDQw-IPu3qLcbUUynR1AQA",
  authDomain: "pizzeria-mazzanta.firebaseapp.com",
  projectId: "pizzeria-mazzanta",
  storageBucket: "pizzeria-mazzanta.appspot.com",
  messagingSenderId: "941579099247",
  appId: "1:941579099247:web:84326817f94154167f019a"
};


const app = initializeApp(firebaseConfig);

//consultar a mi basededatos

const bdd = getFirestore()


/*
CRUD DE BASE DE DATOS
READ - UPDATE- DELETE - CREATE
*/

//CREAR PRODUCTOS
const prods = [
    {
        
        "title": "Marinara",
        "priceNormal": 7800 ,
        "pricemedium": 4500,
        "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/p1.jpg?alt=media&token=f5e4ff78-c9bf-4579-895b-d71409452efd",
        "description": "Salsa de tomate italiano,láminas de ajo,hojas de albahaca,eceite de oliva virgen extra y oregano."
        },
       {
      
        "title": "Calzone",
        "priceNormal": 6800,
        "pricemedium": 4500,
         "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/p2.jpg?alt=media&token=dbd7c470-8ae6-478a-aceb-8e7c2f8247a3",
         "description": "Salsa de tomate, mozzarella,ricota, salame tipo crespón, albhaca y pimienta negra."

        },
       {
      
        "title": "Fugazza",
        "priceNormal": 6000 ,
         "pricemedium": 4500,
        "img":"https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/p3.jpg?alt=media&token=6ad81247-a8cb-4814-bcb1-0d6562f0047d",
        "description": "Cebolla, mozzarella y oregano."
         
        },
       {
        
        "title": "Mozzarella",
        "priceNormal": 6000 ,
         "pricemedium": 4500 ,
        "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/p4.jpg?alt=media&token=05703e02-8913-4a25-b2d5-641c4b47667d",
        "description": "Salsa de tomate, mozzarella, aceitunas verdes y orégano."
     },
  {
        
        "title": "4Quesos",
        "priceNormal": 6400 ,
         "pricemedium": 4600 ,
        "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/p5.jpg?alt=media&token=56cfe0e3-07c1-474c-b321-6afae66be4cc",
        "description": "Salsa de tomate, mozzarella, roquefort, tybo y parmesano. " 
     },
       {
       
        "title": "Papa", 
        "priceNormal": 6400 ,
         "pricemedium": 4600 ,
        "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/p6.jpg?alt=media&token=53e768f9-5fa2-40cc-aa9b-70e165e754de",
        "description": "Salsa de tomate, papas fritas, mozzarella y romero."
        },
       {
        
        "title": "Rucula", 
        "priceNormal": 7000 ,
        "pricemedium": 5200 ,
       "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/p7.jpg?alt=media&token=c63ff133-6916-4818-bd36-ab34d1da8ec8",
       "description": "Salsa de tomate, mozzarella, rucula, jámon crudo y aceite de oliva virgen extra."
        },
       {
      
        "title": "Caprese",
        "priceNormal": 7400 ,
         "pricemedium": 5600 ,
        "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/p8.jpg?alt=media&token=05327a5a-f0c9-4f28-99d4-fe6af4b007c6",
        "description": "Salsa de tomate, mozzarella, tomates cherry, joas de albahaca, aceitunas negras y aceite de ajo." 
        },
       {
        
        "title": "Margherita",
        "priceNormal": 7400 ,
         "pricemedium": 5600 ,
        "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/p10.jpg?alt=media&token=cb9dd752-8e6c-43f9-af52-b26431f20eab",
        "description": "Salsa de tomate italinano, mozzarella flor di latte, parmesano, hojas de albahaca y aceite de oliva virgen extra."
        },
       {
        
        "title": "Jamon & Morrón",
        "priceNormal": 7400 ,
         "pricemedium": 5600 ,
        "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/qw.jpg?alt=media&token=3da76c7d-fd98-4efd-ad8a-984f13627855",
        "description": "Salsa de tomate, mozzarella, morron rojo, jamóncocido, aceitunas verdes y orégano." 
        },
       {
        
        "title": "Caprichosa",
        "priceNormal": 7400 ,
         "pricemedium": 5600 ,
        "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/p11.jpg?alt=media&token=0b1b8f11-aac5-4081-a741-f8a5a1eea8e8",
        "description": "Salsa de tomate, mozzarella, jamón cocido, champignones y pesto de perejil." 
        },
       {
       
        "title": "Diavola",
        "priceNormal": 7800 ,
         "pricemedium": 6000 ,
        "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/p13.jpg?alt=media&token=8ae0a544-8f0f-4d0d-954b-f4bd885e4657",
        "description": "Salsa de tomate, mozzarella, chorizo cantimpalo, cebolla, aceite de pimentón suave y orégano." 
        },
       {
       
        "title": "Anchoas",
        "priceNormal": 7800 ,
         "pricemedium": 6000 ,
        "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/sdadsad.jpg?alt=media&token=07d32b1c-5fde-41c6-a01b-2bf4f130ee41",
        "description": "Salsa detomate, mozzarella, anchoas, aceitunas negras y pimentón dulce." 
        },
       {
         
         "title": "Pepperoni", 
         "priceNormal": 7800 ,
         "pricemedium": 6000 ,
         "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/sdadsad.jpg?alt=media&token=07d32b1c-5fde-41c6-a01b-2bf4f130ee41",
         "description": "Salsa arrabbiata, mozzarella, pepperoni."
        },
        {
           
           "title": "Mazzanta", 
           "priceNormal": 7800 ,
           "pricemedium": 6000 ,
           "img": "https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/sdadsad.jpg?alt=media&token=07d32b1c-5fde-41c6-a01b-2bf4f130ee41",
           "description": "Salsa arrabbiata, mozzarella, pepperoni."
          }
]


export const createProducts = async () => {
    prods.forEach(async(prod)=> {
      const rta = await addDoc(collection(bdd,"productos"),  {
        title: prod.title, 
        priceNormal: prod.priceNormal,
        pricemedium: prod.pricemedium,
        img: prod.img,
        description: prod.description 
      })
    })
  }
  
  export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items =  productos.docs.map(prod=>{ return{...prod.data(), id: prod.id}})
    console.log(items)
  }
  
  export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item =  { ...producto.data(), id: producto.id}
  }


// Actualizar Producto

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}
/* updateProduct('lfvXGkuRZALnSJcYkads',{"pricemedium": 5600,
    "priceNormal": 7400,
    "title": 'Margherita',
    "img": 'https://firebasestorage.googleapis.com/v0/b/pizzeria-mazzanta.appspot.com/o/p10.jpg?alt=media&token=cb9dd752-8e6c-43f9-af52-b26431f20eab',
    "description": 'Salsa de tomate italinano, mozzarella flor di latte, parmesano, hojas de albahaca y aceite de oliva virgen extra.'
}).then(rta=> console.log(rta)) */

// Eliminar producto

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}


