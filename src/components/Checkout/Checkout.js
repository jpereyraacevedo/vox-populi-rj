import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { generadorOrdenes } from '../../firebase/generadorOrdenes'



export const Checkout = () => {

    // Informacion utilizada del cart del contexto
    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext)

    // const comprador = {
    //     nombre: 'Jonatan Pereyra',
    //     telefono: 3424281330,
    //     correo: 'jpereyraacevedo@gmail.com'
    // }

    const [values, setValues] = useState({
        nombre: '',
        correo: '',
        telefono: 0,
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

        if (values.nombre.length > 3 && values.correo.length > 3 && values.telefono.length >8){
            generadorOrdenes(values, cart, precioTotal())
            .then (res => {
                alert(res)
                vaciarCarrito()
            })
            .catch (error => alert(error))
        } else {
            alert ('Informacion incompleta, por favor, complemente correctamente los campos')
        }
    }

    return (
        <>
            <div className="container">
                <h2>Vista del checkout</h2>
                    <p>Aca va el boton dsp</p>      
                <hr/>
                {!cart.length
                ?   <h2>No hay elementos en el carrito para generar la compra</h2>
                : 
                    <div>
                        <form onSubmit={ enviarSubmit }>
                            <input
                            type='text'
                            value={ values.nombre }
                            onChange= {tomarDatosDelInput}
                            name='nombre'
                            required
                            />
                            <input
                            type='email'
                            value={ values.correo }
                            onChange= {tomarDatosDelInput}
                            name='correo'
                            required
                            />
                            <input
                            type='tel'
                            value={ values.telefono }
                            onChange= {tomarDatosDelInput}
                            name='telefono'
                            required
                            />
                            <button className='btn btn-success mx-2'>Enviar informacion de contacto</button>
                        </form>
                    </div>
                }    
            </div>
        </>
    )
}


// <button onClick={()=> generadorOrdenes (comprador, cart, precioTotal()) }>Generar orden de compra</button>

{/* <div>
    <form>
        <input
        type='text'
        value={ values.nombre }
        onChange= {tomarDatosDelInput}
        name='nombre'
        />
        <input
        type='email'
        value={ values.correo }
        onChange= {tomarDatosDelInput}
        name='correo'
        />
        <input
        type='tel'
        value={ values.telefono }
        onChange= {tomarDatosDelInput}
        name='telefono'
        />
        <button className='btn btn-success'>Enviar informacion de contacto</button>
    </form>
</div> */}