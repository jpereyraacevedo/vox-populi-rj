import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { generadorOrdenes } from '../../firebase/generadorOrdenes'



export const Checkout = () => {

    // Informacion utilizada del cart del contexto
    const { cart, precioTotal } = useContext(CartContext)

    const comprador = {
        nombre: 'Jonatan Pereyra',
        telefono: 3424281330,
        correo: 'jpereyraacevedo@gmail.com'
    }

    return (
        <>
            <div className="container">
                <h2>Vista del checkout</h2>
                <button onClick={()=> generadorOrdenes (comprador, cart, precioTotal()) }>Generar orden</button>
                <hr/>
            </div>
        </>
    )
}