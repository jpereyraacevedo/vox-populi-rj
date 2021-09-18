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

    return (
        <>  
                {(cantidadElementosDelCarrito() !== 0)
                ? <div> <Link to="/cart">
                <p><FiShoppingCart className="test"/></p>
                <span>{cantidadElementosDelCarrito()}</span>
                </Link></div>
                :
                <p><FiShoppingCart className="test" display="none"/></p>
            }   
        </>
    )

}


// return (
//     <>  
//             {(cantidadElementosDelCarrito() !== 0)
//             ? <p><FiShoppingCart className="test" display="none"/></p>
//             :
//             <div> <Link to="/cart">
//             <p><FiShoppingCart className="test"/></p>
//             <span>{cantidadElementosDelCarrito()}</span>
//             </Link></div>
//         }   
//     </>
// )