import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemList.scss'


export const ItemList = ( { productos } ) => {

    return (
        <section className="container my-1">
            <div>
                { productos.map(( prod ) => (
                    <div key={ prod.id }>
                        <Card className="my-1" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ prod.img } alt={ prod.nombre } />
                            <Card.Body>
                                <Card.Title> { prod.nombre } </Card.Title>
                                <Card.Text>
                                    { prod.descripcion }
                                    <p> Precio: ${ prod.precio } </p>
                                    <Link className='btn' to={`/detail/${prod.id}`}> Ver detalles del producto </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )) }
            </div>
        </section>     
    )

}

