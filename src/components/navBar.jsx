import React from 'react';
import '../estilos/navBar.css';

function NavBar() {
    return (
        <>
            <nav className='body-div'>
                <div class="navBar" >
                    <div className='div-nombre-nav'>
                        <p className='p-nav'>
                            BIBLIOTECA "EL CHACHO"
                        </p>
                    </div>
                    <div className='div-nav'>
                        <div className='misLibros'>
                            <a href="/misLibros.jsx" className='enlace-nav'>
                                MIS LIBROS
                            </a>
                        </div>
                        <div className='explorar'>
                            <a href="/explorar.jsx" className='enlace-nav'>
                                EXPLORAR
                            </a>
                        </div>
                        <div className='nav-Search'>
                            <div className='barra-Search'>
                                <label className='label-nav'>
                                    {/*  <span aria-hidden="true" className=''>
                                    </span> */}
                                    <select aria-label="select-nav" className='enlace-nav'>
                                        <option value='all'>TODO</option>
                                        <option value='title'>TÍTULO</option>
                                        <option value='author'>AUTOR</option>
                                        <option value='subject'>TEMA</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <a href="./ingresar/ingresar.jsx" className='enlace-nav'>
                            ACCEDER
                        </a>
                        <a href="./registro/registrar.jsx" className='enlace-nav'>
                            REGISTRARSE
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar;