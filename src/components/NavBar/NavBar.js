import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.scss'



export const NavBar = () => {
    return (
    <header className="container">
        <p> LOGO </p>
        <nav>
            <ul>
                <li>
                    <a href="#">Enlace 1</a>
                </li>
                <li>
                    <a href="#">Enlace 2</a>
                </li>
                <li>
                    <a href="#">Enlace 3</a>
                </li>
                <li>
                    <a href="#">Enlace 4</a>
                </li>
                <li>
                    <a href="#">Enlace 5</a>
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
    );
}

