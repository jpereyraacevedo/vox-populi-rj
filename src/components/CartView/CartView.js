import React from 'react'
import { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


export const CartView = () => {
    
    const {cart, eliminarElementoDelCarrito, vaciarCarrito, cantidadElementosDelCarrito} = useContext(CartContext)

    return (
        <>  
                {(cantidadElementosDelCarrito() !== 0)
                ? <div>       
                        {cart.map(producto => (
                            <div key={producto.id}>
                                <h3> {producto.nombre} </h3>
                                <h4> Unidades: {producto.cantidad}</h4>
                                <h5> Precio ${producto.precio * producto.cantidad}</h5>
                                <FaTrashAlt onClick= {() => eliminarElementoDelCarrito(producto.id)}/>
                            </div>
                        ))}
                        <hr/>
                        <button className="btn btn-danger" onClick= {vaciarCarrito}>VACIAR</button>
                    </div>
                :
                <div> <p> No tenes items </p> <Link to={ '/' }> Volver a home </Link></div>
            }   
        </>
    )
}


// return (
//     <>
//       { cantidadElementosDelCarrito() !== 0 ?
//         {cart.map(producto => (
//             <div key={producto.id}>
//                 <h3> {producto.nombre} </h3>
//                 <h4> Unidades: {producto.cantidad} </h4>
//                 <h5> Precio ${producto.precio * producto.cantidad} </h5>
//                 <FaTrashAlt onClick= {() => eliminarElementoDelCarrito(producto.id)} />
//             </div>
//         ))}
//         <hr/>
//         <button className="btn btn-danger" onClick= {vaciarCarrito} >VACIAR</button>
// ?
//     <div> <p> No tenes items </p> <Link to={ '/' }> Volver a home </Link></div>
//     }   
//     </>
// )


