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
                    <Link to='/login' className='enlace-nav'>
                        ACCEDER
                    </Link>
                    <Link to='/register' className='enlace-nav'>
                        REGISTRAR
                    </Link>
                </div>
            </div>
        </nav>
    )
};

