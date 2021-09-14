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


            const db= getFirestore()
            const productos = db.collection('productos')
            productos.get().then((response) => {
                const data = response.docs.map((documento) => ({...documento.data(), id: documento.id}))
                console.log(data)

                setData(data)
            })

            setLoading(true)
            funcionObtenerDatos()
                .then(res => {
                    if (cat) {
                        const arrayParaFiltrarCategory = res.filter(prod => prod.category === cat)
                    setData(arrayParaFiltrarCategory)
                    } else {
                        setData(res)
                    }
                })
                .catch(err => console.log(err))
                .finally (() => {
                    setLoading(false)
                })
        }, [cat])


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