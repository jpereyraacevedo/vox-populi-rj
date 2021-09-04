import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Item.scss'

export const Item = ( {img, nombre, descripcion, precio, id} ) => {

    return (
        <div>
            <Card className="my-1" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ img } alt={ nombre } />
                <Card.Body>
                    <Card.Title> { nombre } </Card.Title>
                    <Card.Text>
                        { descripcion }
                        <h5> Precio: ${ precio } </h5>
                        <Link className='btn' to={`/detail/${id}`}> Ver detalles del producto </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}