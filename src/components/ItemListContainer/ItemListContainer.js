import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { funcionObtenerDatos } from '../../utilities/funcionObtenerDatos'
import { ItemList } from './ItemList'
import './ItemListContainer.scss'
import { getFirestore } from '../../firebase/firebase'


export const ItemListContainer = () => {

    const { cat } = useParams ()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {

        setLoading(true)



        const db= getFirestore()

        let productos = db.collection('productos')   //hacemos que sea una variable



        if (cat) {         // si viene la categoria le agregamos el filtro

            productos = productos.where("category", "==", cat)

        }



        productos.get().then((response) => {  // esto es tal cual lo tenias. le pase el catch y finally solamente

            const data = response.docs.map((documento) => ({...documento.data(), id: documento.id}))

            setData(data)

        })

        .catch(err => console.log(err))

        .finally (() => {

            setLoading(false)

        })

    }, [cat])

        // useEffect(() => {

        // // FUNCION ANTERIOR CORRECION GABRIEL

        //     setLoading(true)

        //     const db= getFirestore()
        //     let productos = db.collection('productos')   // pasar const a let

        //     if (cat) {
        //        // const filtro = productos.where('category', '==', cat) ----> filtro anterior
        //         productos = productos.where("category", "==", cat)

        //         filtro.get()
        //         .then((response) => {
        //             const data = response.docs.map((documento) => ({...documento.data(), id: documento.id}))
        //             console.log(data)
        //             setData(data)
        //         })
        //         .finally (() => {
        //             setLoading(false)
        //         })
        //     } else {
        //         productos.get()
        //         .then((response) => {
        //             const data = response.docs.map((documento) => ({...documento.data(), id: documento.id}))
        //             console.log(data)
        //             setData(data)
        //         })
        //         .finally (() => {
        //             setLoading(false)
        //         })
        //     }

            // productos.get().then((response) => {
            //     const data = response.docs.map((documento) => ({...documento.data(), id: documento.id}))
            //     console.log(data)
            //     if (cat) {
            //         setData(data.filter(elementos => elementos.category === cat))
            //     }


            //     setData(data)
            // }).finally (() => {
            //     setLoading(false)
            // })

            // setLoading(true)

            // //FUNCION PARA LOS DATOS
            // funcionObtenerDatos()
            //     .then(res => {
            //         if (cat) {
            //             const arrayParaFiltrarCategory = res.filter(prod => prod.category === cat)
            //         setData(arrayParaFiltrarCategory)
            //         } else {
            //             setData(res)
            //         }
            //     })
            //     .catch(err => console.log(err))
            //     .finally (() => {
            //         setLoading(false)
            //     })

                // Cuidado con este .finally
       // }, [cat, setLoading])


    return (
       <>
        {loading 
        ? <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Cargando listado de productos</span>
            </Spinner>
          </div> 
        : <ItemList productos={data}/>}
       </>
    )

}