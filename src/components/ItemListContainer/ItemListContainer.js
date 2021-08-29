import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { funcionObtenerDatos } from '../../utilities/funcionObtenerDatos'
import { ItemList } from './ItemList'
import './ItemListContainer.scss'


export const ItemListContainer = () => {

    const { cat } = useParams ()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

        useEffect(() => {
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
        {loading ? <h3> Cargando listado..</h3> : <ItemList productos={data}/>}
       </>
    )

}