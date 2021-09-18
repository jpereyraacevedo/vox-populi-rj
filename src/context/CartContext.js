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


// Funcion para vaciar carrito, por eso va el array vacio
    const vaciarCarrito = () => {
        setCart([])
    }


// Funcion para no duplicar elementos del carrito
    const isInCart = (id) => {

        return cart.some(el => el.id == id)
    }


// Funcion para calcular el precio total
    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }


    return (
        <CartContext.Provider value= {{cart, agregarAlCarrito, eliminarElementoDelCarrito, cantidadElementosDelCarrito, vaciarCarrito, isInCart, precioTotal}}>
            {children}
        </CartContext.Provider>
    )
}