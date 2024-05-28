import React from 'react';
import { NavLink as Router } from 'react-router-dom';
import '../estilos/navBar.css';

export default function NavBar() {
    return (
        <nav className='body-div'>
            <div className="navBar">
                <div className='div-nombre-nav'>
                    <p className='p-nav'>
                        BIBLIOTECA "EL CHACHO"
                    </p>
                </div>
                <div className='div-nav'>
                    <NavLink to='/acerca' className='enlace-nav'>
                        ACERCA
                    </NavLink>
                    <NavLink to='/login' className='enlace-nav'>
                        ACCEDER
                    </NavLink>
                    <NavLink to='/register' className='enlace-nav'>
                        REGISTRAR
                    </NavLink>
                </div>
            </div>
        </nav>
    )
};

