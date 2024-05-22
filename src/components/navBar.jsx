import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../estilos/navBar.css';
/* import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx'; */

function NavBar() {
    return (
        /*  <Router> */
        <nav className='body-div'>
            <div className="navBar" >
                <div className='div-nombre-nav'>
                    <p className='p-nav'>
                        BIBLIOTECA "EL CHACHO"
                    </p>
                </div>
                <div className='div-nav'>
                    <p>
                        <a href='../pages/Login' className='enlace-nav'>
                            ACCEDER
                        </a>
                    </p>
                    <p>
                        <a href='../pages/Register' className='enlace-nav'>
                            REGISTRAR
                        </a>
                    </p>
                </div>
            </div>
        </nav>
    )
};
export default NavBar;
