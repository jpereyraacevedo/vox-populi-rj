import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
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