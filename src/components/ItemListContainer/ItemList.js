import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export const ItemList = ( { productos } ) => {

    return (
        <section className="container my-1">
            <div>
                { productos.map(( prod ) => (
                    <div key={ prod.id }>
                        <Card className="my-1" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ prod.img } alt={ prod.nombre } />
                            <Card.Body>
                                <Card.Title> { prod.nombre } </Card.Title>
                                <Card.Text>
                                    { prod.descripcion }
                                    <p> Precio: ${ prod.precio } </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )) }
            </div>
        </section>     
    )

}

{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title> { prod.nombre } </Card.Title>
    <Card.Text>
    { prod.descripcion }
    <p> Precio: ${ prod.precio } </p>
    </Card.Text>
  </Card.Body>
</Card> */}


                    // <div key={ prod.id }>
                    //     <img src={ prod.img } alt={ prod.nombre }/>
                    //     <h2> { prod.nombre } </h2>
                    //     <p> { prod.descripcion } </p>
                    //     <p> Precio: ${ prod.precio } </p>
                    // </div>