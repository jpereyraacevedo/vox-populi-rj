import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { funcionObtenerDatos } from '../../utilities/funcionObtenerDatos'
import { getFirestore } from '../../firebase/firebase'

export const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const [item, setItem] = useState (null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true);
  
  
  
        const db = getFirestore();
  
        let producto = db.collection("productos").doc(itemId); // es basicamente igual al de ItemListContainer pero le agregamos el .doc( id del documento ) para traer un documento en particular
  
  
  
        producto
  
           .get()
  
           .then((response) => {
  
              setItem({...response.data(),    // aca en vez de hacer el map le pasamos directamente el objeto que trajimos
  
                 id: response.id,          // podrias tener logica para que si ingresan un id por url de algo que no existe en firebase muestrea algun error o redirijas a la home
  
              });
  
           })
  
           .catch((err) => console.log(err))
  
           .finally(() => {
  
              setLoading(false);
  
           });
  
           
  
     }, [itemId]);


    // Funcion previa correccion Gabriel
    // useEffect(() => {

    //     setLoading (true)

    //     const db = getFirestore()
    //     const productos = db.collection('productos')
    //     const items = productos.doc(itemId)
    //     items.get().then((documento) => {
    //         setItem({...documento.data(), id: documento.id})
    //     }).finally(()=> {
    //         setLoading(false)})


    //     // funcionObtenerDatos()
    //     //     .then (res => {
    //     //         setItem( res.find (prod => prod.id === parseInt(itemId)))
    //     //     })
    //         // .finally(()=> {
    //         //     setLoading(false)
    //         // })
    // }, [itemId])

    return(
        <>
            {loading 
            ? <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div> 
            : <ItemDetail {...item} />}
        </>
    )
}