import React from 'react'
import { Container, Row, Col, Image, Form } from 'react-bootstrap'
import './ItemDetail.scss'
import 'bootstrap/dist/css/bootstrap.min.css'




export const ItemDetail = ({category, descripcion, id, img, nombre, precio}) => {


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
                            <div  className='ancho'>
                                <Form.Select aria-label="Default select example">
                                    <option>Selecciona tu talle:</option>
                                    <option value="1">S</option>
                                    <option value="2">M</option>
                                    <option value="4">L</option>
                                    <option value="5">XL</option>
                                </Form.Select>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
