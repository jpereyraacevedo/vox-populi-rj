import React, { useEffect, useState } from 'react'
import { funcionObtenerDatos } from '../../utilities/funcionObtenerDatos'
import { ItemList } from './ItemList'
import './ItemListContainer.scss'


export const ItemListContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

        useEffect(() => {
            setLoading(true)
            funcionObtenerDatos()
                .then(res => setData(res))
                .catch(err => console.log(err))
                .finally (() => {
                    setLoading(false)
                })
        }, [])


    return (
       <>
        {loading ? <h3> Cargando listado..</h3> : <ItemList productos={data}/>}
       </>
    )

}