import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { generadorOrdenes } from '../../firebase/generadorOrdenes'
import { Link } from 'react-router-dom'
import './Checkout.scss'



export const Checkout = () => {

    // Informacion utilizada del cart del contexto
    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        correo: '',
        direccion: '',
        ciudad: '',
        postal: '',
        telefono: '',
    })

    // Funcionar para tomar datos del input
    const tomarDatosDelInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    // Funcion para enviar datos del submit, incluyendo el condicional en el caso que haya un error en la carga de datos
    // then y catch provenientes de la promise de generadorOrdenes para evitar problemas de asincronia
    const enviarSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length > 3 && values.correo.length > 3 && values.telefono.length >8 && values.direccion.length > 3 && values.ciudad.length > 3 && values.postal.length > 3){
            generadorOrdenes(values, cart, precioTotal())
            .then (res => {
                Swal.fire({
                    background: "#00001a",
                    icon: 'success',
                    iconColor: '#2823bc',
                    title: '¡Felicidades!',
                    text: `Su compra fue procesada con exito, su ID de seguimiento es: ${ res }`,
                  })
                vaciarCarrito()
            })
            .catch (error => alert(error))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha surgido un error inesperado, por favor intente nuevamente',
              })
        }
    }

    return (
        <>
            <div className="container">
                <h2 className="checkout">Checkout</h2>     
                <hr/>
                {!cart.length
                ?   <div>
                        <h5 className="checkout">No hay elementos en el carrito para generar la compra</h5>
                        <Link to={ "/" }>Ir al inicio</Link>
                        <hr/>
                    </div>
                : <div>
                    <div className="alinearFormulario">
                        <h6> Formulario de contacto</h6>
                        <form  className="formulario" onSubmit={ enviarSubmit }>
                            <input
                            type='text'
                            value={ values.nombre }
                            onChange= {tomarDatosDelInput}
                            name='nombre'
                            placeholder="Ingrese su nombre completo"
                            required
                            />
                            <input
                            type='email'
                            value={ values.correo }
                            onChange= {tomarDatosDelInput}
                            name='correo'
                            placeholder="Ingrese su correo"
                            required
                            />
                            <input
                            type='text'
                            value={ values.direccion }
                            onChange= {tomarDatosDelInput}
                            name='direccion'
                            placeholder="Direccion"
                            required
                            />
                            <input
                            type='text'
                            value={ values.ciudad }
                            onChange= {tomarDatosDelInput}
                            name='ciudad'
                            placeholder="Ciudad"
                            required
                            />
                            <input
                            type='text'
                            value={ values.postal }
                            onChange= {tomarDatosDelInput}
                            name='postal'
                            placeholder="Codigo postal"
                            required
                            />
                            <input
                            type='tel'
                            value={ values.telefono }
                            onChange= {tomarDatosDelInput}
                            name='telefono'
                            placeholder="Numero de telefono"
                            required
                            />
                            <button className='btn mx-1 enviar'>Enviar</button>
                        </form>
                    </div>
                    <hr/>
                </div>
                }    
            </div>
        </>
    )
}