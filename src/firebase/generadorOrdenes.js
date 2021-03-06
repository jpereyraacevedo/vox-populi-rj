import { getFirestore } from './firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'




export const generadorOrdenes = (comprador, cart, precioTotal) => {

    return new Promise ((resolve, reject) => {

    // Informacion traida del firebase
    const db = getFirestore()
    const ordenes = db.collection('ordenes')


    // Crear nuevas ordenes

    const nuevaOrden = {
        comprador: comprador,
        items: cart,
        total: precioTotal,
        fecha: firebase.firestore.Timestamp.fromDate(new Date())
    }

    // Try catch para que el error no rompa la aplicacion y nos muestre por consola si es que existe un error
    try {
        ordenes.add(nuevaOrden)
    .then((res) => resolve(res.id))
    } catch (error) {
        reject(error)
    }

    })

}