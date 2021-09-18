import React from 'react'
import { CartContext } from '../../context/CartContext'
import { getFirestore } from '../../firebase/firebase'



export const Checkout = () => {

    // Informacion utilizada del cart del contexto
    const { cart } = useContext(CartContext)


    // Informacion traida del firebase
    const db = getFirestore()
    const ordenes = db.collection('ordenes')


    // Usuarios compradores

    const comprador = {
        nombre: 'Jonatan Pereyra',
        telefono: 3424281330,
        correo: 'jpereyraacevedo@gmail.com'
    }

    return (
        <>
            <div className="container">
                <h2>Vista del checkout</h2>
                <hr/>
            </div>
        </>
    )
}