import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FiShoppingCart } from 'react-icons/fi'
import './CartWidget.scss'


export const CartWidget = () => {

    const {cantidadElementosDelCarrito} = useContext(CartContext)


    // return (
    //     <>
    //         <Link to="/cart">
    //             <p><FiShoppingCart className="test"/></p>
    //             <span>{cantidadElementosDelCarrito()}</span>
    //         </Link>
    //     </>
    // )


    // Si no hay elementos en el carrito entonces, el CartWidget no se mostrara
    return (
        <>  
                {(cantidadElementosDelCarrito() !== 0)
                ? <div> <Link to="/cart">
                <p><FiShoppingCart className="test"/></p>
                <span>{cantidadElementosDelCarrito()}</span>
                </Link></div>
                :
                <p><FiShoppingCart className="test"/></p>
            }   
        </>
    )

}
