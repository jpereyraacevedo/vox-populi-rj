import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './QuantityCounter.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


export const QuantityCounter = ({ stock, cantidad, setCantidad, agregarCarrito, agregadoCarrito }) => {

    const agregarUnidad = () => {
        if (cantidad < stock) { 
            setCantidad (cantidad + 1)
        }
    }

    const quitarUnidad = () => {
        if (cantidad > 1) {
            setCantidad (cantidad - 1)
        }
    }

    return (
        <>
        <div className="d-flex">

            {
                agregadoCarrito
                ? <Link to="/cart" className="btn agregadoCarrito mx-5"> Ir al carrito para finalizar la compra</Link>
                :
                <div>      
                    <div className="botones mx-5 my-2">
                        <h2>Unidades: {cantidad}</h2> 
                        <Button className="unidades mx-1 my-1" onClick= {quitarUnidad} >-</Button>{' '}
                        <Button className="unidades mx-1 my-1" onClick= {agregarUnidad} >+</Button>{' '}
                    </div>
                    <Button className="agregar mx-5" onClick={agregarCarrito} >Agregar al carrito</Button>{' '}
                </div>
            }
        </div>
        </>
    )
}
