import React from 'react'
import { Item } from './Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemList.scss'


export const ItemList = ( { productos } ) => {

    return (
        <section className="container my-1">
            <hr className="my-4"/>
            <div>
                { productos.map(( prod ) => <Item key={ prod.id } {...prod }/>)}
            </div>
            <hr className="my-4"/>
        </section>     
    )

}

