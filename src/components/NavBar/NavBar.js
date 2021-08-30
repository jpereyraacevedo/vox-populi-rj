import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.scss'



export const NavBar = () => {
    return (
    <header className="container">
        <Link to= { "/" }><img className='contenedor' src='https://via.placeholder.com/50' alt='logo'/> 
        </Link>
        <nav>
            <Link to={ "/" }>Ir al inicio</Link>
            <Link to={ "/category/anime" }>Anime</Link>
            <Link to={ "/category/peliculas" }>Peliculas</Link>
            <Link to={ "/category/pop" }>Cultura pop</Link>
        </nav>
        <CartWidget/>
    </header>
    );
}

