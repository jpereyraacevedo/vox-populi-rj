import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { funcionObtenerDatos } from '../../utilities/funcionObtenerDatos'


export const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const [item, setItem] = useState (null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading (true)

        funcionObtenerDatos()
            .then (res => {
                setItem( res.find (prod => prod.id === parseInt(itemId)))
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [itemId])

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