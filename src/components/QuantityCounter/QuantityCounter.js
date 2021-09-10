import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


export const QuantityCounter = ({ stock, cantidad, setCantidad, agregarCarrito, agregadoCarrito }) => {

    console.log(agregadoCarrito)

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
                ? <Link to="/cart"> Finalizar la compra </Link>
                :
                <div>   
                    <h2> {cantidad} </h2>    
                    <Button variant="outline-secondary" onClick= {agregarUnidad} >Agregar unidades</Button>{' '}
                    <Button variant="outline-secondary" onClick= {quitarUnidad} >Quitar unidades</Button>{' '}
                    <Button variant="outline-success" onClick={agregarCarrito} >Add to cart</Button>{' '}
                </div>
            }
        </div>
        </>
    )
}