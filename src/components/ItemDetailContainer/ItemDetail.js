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
            category, descripcion, id, nombre, precio, cantidad
        })
    }
// Funcion que maneja el agregado de productos que comunica con el QuantityCounter
    return (
        <>
        
            <Container>
                <Row>
                    <Col className='prueba'>
                        <div>
                            <Image src={img} alt={nombre} fluid />
                        </div>
                    </Col>
                    <Col className='prueba'>
                        <div>
                            <h2>
                                {nombre}
                            </h2>                                
                            <h4>
                                {descripcion}
                            </h4>
                            <p>
                                Precio: ${precio}
                            </p>
                            {/* <div  className='ancho'>
                                <Form.Select aria-label="Default select example">
                                    <option>Selecciona tu talle:</option>
                                    <option value="1">S</option>
                                    <option value="2">M</option>
                                    <option value="4">L</option>
                                    <option value="5">XL</option>
                                </Form.Select>
                            </div> */}
                        </div>
                    </Col>
                </Row>
                <QuantityCounter stock= {stock} cantidad= {cantidad} setCantidad= {setCantidad} agregarCarrito= {agregarCarrito} agregadoCarrito= {isInCart(id)} />
            </Container>

        </>
    )
}
