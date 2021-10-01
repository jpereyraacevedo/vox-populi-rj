import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FiShoppingCart } from 'react-icons/fi'
import './CartWidget.scss'


export const CartWidget = () => {

    const {cantidadElementosDelCarrito} = useContext(CartContext)

    // Si no hay elementos en el carrito entonces, el CartWidget no se mostrara
    return (
        <>  
                {(cantidadElementosDelCarrito() !== 0)
                ? <div> <Link className="bc-color" id="nolink" to="/cart">
                <p><FiShoppingCart className="test"/></p>
                <span className="bc-color2">{cantidadElementosDelCarrito()}</span>
                </Link></div>
                :
                <p><FiShoppingCart className="test"/></p>
            }   
        </>
    )

}
