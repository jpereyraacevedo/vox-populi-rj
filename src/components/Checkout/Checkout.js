import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { getFirestore } from '../../firebase/firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'




export const Checkout = () => {

    // Informacion utilizada del cart del contexto
    const { cart, precioTotal } = useContext(CartContext)


    // Informacion traida del firebase
    const db = getFirestore()
    const ordenes = db.collection('ordenes')


    // Usuarios compradores

    const comprador = {
        nombre: 'Jonatan Pereyra',
        telefono: 3424281330,
        correo: 'jpereyraacevedo@gmail.com'
    }

    // Crear nuevas ordenes

    const nuevaOrden = {
        comprador: comprador,
        items: cart,
        total: precioTotal(),
        fecha: firebase.firestore.Timestamp.fromDate(new Date())
    }

    ordenes.add(nuevaOrden)
    .then((res) => console.log(res))


    return (
        <>
            <div className="container">
                <h2>Vista del checkout</h2>
                <hr/>
            </div>
        </>
    )
}