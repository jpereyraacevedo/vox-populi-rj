import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'


export const Footer = () => {

    return (
        <footer className="container">
            <div className="items">
                <Link to={ "/" }>Ir al inicio</Link>
                <Link to={ "/category/nosotros" }>Sobre nosotros</Link>
                <Link to={ "/category/tyc" }>Terminos y condiciones</Link>
                <Link to={ "https://www.facebook.com/remerasvp" }>Nuestro Facebook</Link>
            </div>
            <p className="firma">Developed by J. Pereyra Acevedo ©</p>
        </footer>
    )
}