import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../estilos/navBar.css';
import Acceder from '../pages/Acceder.jsx';
import Crear from '../pages/Crear.jsx';

export default function NavBar() {
    return (
        <Router>
            <nav className='body-div'>
                <div className="navBar" >
                    <div className='div-nombre-nav'>
                        <p className='p-nav'>
                            BIBLIOTECA "EL CHACHO"
                        </p>
                    </div>
                    <div className='div-nav'>
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
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/Acceder" element={<Acceder />} />
                <Route path="/Crear" element={<Crear />} />
            </Routes>
        </Router>
    )
};
