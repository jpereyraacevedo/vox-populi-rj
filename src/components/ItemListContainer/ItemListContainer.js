import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
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

        
    return (
       <>
        {loading 
        ? <div>
            <Spinner animation="border spinner container" role="status">
            </Spinner>
          </div> 
        :
        <ItemList productos={data}/>
        }
       </>
    )

}