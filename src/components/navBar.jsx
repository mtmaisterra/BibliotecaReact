import React from 'react';
import '../estilos/navBar.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Acceder from '../pages/Acceder.jsx';
import Crear from '../pages/Crear.jsx'

export default function NavBar() {
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
                    <Router>
                            <Routes>
                                <Route path="/Acceder" element={<Acceder />} />
                                <Route path="/Crear" element={<Crear />} />
                            </Routes>
                            <p>
                                <Link to="/Acceder" className='enlace-nav'>
                                    ACCEDER
                                </Link>
                            </p>
                            <p>
                                <Link to="/Crear" className='enlace-nav'>
                                    REGISTRAR
                                </Link>
                            </p>
                        </Router>
                    </div>
                </div>
            </nav>
        </>
    )
};
