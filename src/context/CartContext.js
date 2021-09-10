import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'


export const CartContext = createContext()



export const CartProvider = ({children}) => {

    const [cart, setCart] = useState ([])

    const agregarAlCarrito = (producto) => {
        setCart ([
        ...cart,
        producto
        ])
    }

    const eliminarElementoDelCarrito = (id) => {
        setCart(cart.filter(producto => producto.id !== id) )
    }

    const cantidadElementosDelCarrito = () => {
        return cart.reduce((suma, producto) => suma + producto.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }
// Funcion para vaciar carrito, por eso va el array vacio

    const isInCart = (id) => {

        return cart.some(el => el.id == id)
    }
// Funcion para no duplicar elementos del carrito

    return (
        <CartContext.Provider value= {{cart, agregarAlCarrito, eliminarElementoDelCarrito, cantidadElementosDelCarrito, vaciarCarrito, isInCart}} >
            {children}
        </CartContext.Provider>
    )
}