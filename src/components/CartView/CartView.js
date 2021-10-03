import React from 'react'
import { useContext } from 'react'
import { FaTrash} from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CartView.scss'


export const CartView = () => {
    
    const {cart, eliminarElementoDelCarrito, vaciarCarrito, cantidadElementosDelCarrito, precioTotal} = useContext(CartContext)

    return (
        <>  
            <div className="container">
                <h2 className="carritoTitulo">Carrito de compras</h2>
            </div>
                {(cantidadElementosDelCarrito() !== 0)
                ?   <div className="container">       
                        {cart.map(producto => (
                            <div className="cartView" key={producto.id}>
                                <Image className="miniatura" src={producto.img} alt={producto.nombre} fluid />
                                <h3> {producto.nombre} </h3>
                                <h4> Unidades: {producto.cantidad}</h4>
                                <h5> Precio ${producto.precio * producto.cantidad}</h5>
                                <button className="btn borrar">
                                    <FaTrash className="my-2 trash" onClick= {() => eliminarElementoDelCarrito(producto.id)}/>
                                </button>
                            </div>
                        ))}
                        <div>
                            <span className="total"> Precio total: ${ precioTotal() } </span>
                            <div className="botonesCart">
                                <button className="btn eliminar" onClick= {vaciarCarrito}>Vaciar carrito</button>
                                <Link className="my-5 mx-5" to={ '/checkout' }><button className="btn finalizar">Finalizar la compra</button></Link>
                            </div>
                        </div>
                    </div>
                :<div className="container"> 
                    <hr/>
                    <p className="carritoVacio"> No tenes elementos en tu carrito </p> 
                    <Link to={ '/' }> Volver a home </Link>
                    <hr/>
                </div>
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


