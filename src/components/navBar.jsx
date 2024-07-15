import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css';

export default function NavBar() {
    return (
        <nav className='body-div'>
            <div className="navBar">
                <div className='image-nav'>
                    <img className='img-nav' src='/logoBiblioteca.jpg'></img>
                </div>
                <div className='div-nombre-nav'>
                    <p className='p-nav'>
                        BIBLIOTECA VIRTUAL "EL CHACHO"
                    </p>
                </div>
                <div className='div-nav'>
                    <Link to='/inicio' className='enlace-nav'>
                        INICIO
                    </Link>
                    <Link to='/about' className='enlace-nav'>
                        ACERCA
                    </Link>
                    <Link to='/TodosClasicos' className='enlace-nav'>
                        CLASICOS
                    </Link>
                    <Link to='/TodosNovedades' className='enlace-nav'>
                        NOVEDADES
                    </Link>
                </div>
            </div>
        </nav>
    )
};

