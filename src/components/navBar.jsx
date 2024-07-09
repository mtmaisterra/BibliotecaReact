import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css';

export default function NavBar() {
    return (
        <nav className='body-div'>
            <div className="navBar">
                <div className='div-nombre-nav'>
                    <p className='p-nav'>
                        BIBLIOTECA VIRTUAL "EL CHACHO"
                    </p>
                </div>
                <div className='div-nav'>
                    <Link to='/inicio' className='enlace-nav'>
                        INICIO
                    </Link>
                    <Link to='/acerca' className='enlace-nav'>
                        ACERCA
                    </Link>
                    <Link to='/ingresar' className='enlace-nav'>
                        INGRESAR
                    </Link>
                    <Link to='/registrar' className='enlace-nav'>
                        REGISTRAR
                    </Link>
                </div>
            </div>
        </nav>
    )
};

