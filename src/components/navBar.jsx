import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css';

export default function NavBar() {
    return (
        <nav className='body-div'>
            <div className="navBar">
                <div className='div-nombre-nav'>
                    <p className='p-nav'>
                        BIBLIOTECA "El Chacho"
                    </p>
                </div>
                <div className='div-nav'>
                    <Link to='/acerca' className='enlace-nav'>
                        ACERCA
                    </Link>
                    <Link to='/TodosClasicos' className='enlace-nav'>
                        CLÁSICOS
                    </Link>
                    <Link to='/TodosNovedades' className='enlace-nav'>
                        NOVEDADES
                    </Link>
                </div>
            </div>
        </nav>
    )
};

