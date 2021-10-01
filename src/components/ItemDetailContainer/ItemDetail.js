import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { QuantityCounter } from '../QuantityCounter/QuantityCounter.js'
import { CartContext } from '../../context/CartContext'
import './ItemDetail.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


export const ItemDetail = ({category, descripcion, id, img, nombre, precio, stock}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)
// Datos del contexto

    const [cantidad, setCantidad] = useState (1)

    const agregarCarrito = () => {
        agregarAlCarrito ({
            category, descripcion, id, nombre, precio, cantidad, img
        })
    }
// Funcion que maneja el agregado de productos que comunica con el QuantityCounter
    return (
        <>
        
            <Container  className="prueba">
                <Row>
                    <Col>
                        <div className="contenedor">
                            <Image src={img} alt={nombre} fluid />
                        </div>
                    </Col>
                    </Row>
                    <Col>
                        <div className="my-5 mx-5">
                            <h2>
                                {nombre}
                            </h2>  
                            <hr></hr>                              
                            <h4>
                                {descripcion}
                            </h4>
                            <span>
                            Stock: {stock} unidades
                            </span>
                            <span>
                                Precio: ${precio}
                            </span>
                        </div>
                        <QuantityCounter stock= {stock} cantidad= {cantidad} setCantidad= {setCantidad} agregarCarrito= {agregarCarrito} agregadoCarrito= {isInCart(id)} />
                    </Col>
            </Container>

        </>
    )
}
