import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'


export const Footer = () => {

    return (
        <footer className="container">
            <Link to={ "/" }>Ir al inicio</Link>
            <Link to={ "/category/nosotros" }>Sobre nosotros</Link>
            <Link to={ "/category/tyc" }>Terminos y condiciones</Link>
        </footer>
    )
}