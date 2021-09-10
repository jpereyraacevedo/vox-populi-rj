import React from 'react'
import { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'



export const CartView = () => {
    const {cart, eliminarElementoDelCarrito, vaciarCarrito} = useContext(CartContext)

    return (
        <>
            {cart.map(producto => (
                <div key={producto.id}>
                    <h3> {producto.nombre} </h3>
                    <h4> Unidades: {producto.cantidad} </h4>
                    <h5> Precio ${producto.precio * producto.cantidad} </h5>
                    <FaTrashAlt onClick= {() => eliminarElementoDelCarrito(producto.id)} />
                </div>
            ))}
            <hr/>
            <button className="btn btn-danger" onClick= {vaciarCarrito} >VACIAR</button>
        </>
    )
}