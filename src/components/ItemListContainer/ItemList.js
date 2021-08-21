import React from 'react'

export const ItemList = ( { productos } ) => {

    return (
        <section>
            <div>
                { productos.map(( prod ) => (
                    <div key={ prod.id }>
                        <img src={ prod.img } alt={ prod.nombre }/>
                        <h2> { prod.nombre } </h2>
                        <p> { prod.descripcion } </p>
                        <p> Precio: ${ prod.precio } </p>
                    </div>
                )) }
            </div>
        </section>     
    )

}