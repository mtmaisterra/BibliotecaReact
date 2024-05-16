import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../estilos/navBar.css';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';

function NavBar() {
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
                            <Link to="/Login" className='enlace-nav'>
                                ACCEDER
                            </Link>
                        </p>
                        <p>
                            <Link to="/Register" className='enlace-nav'>
                                REGISTRAR
                            </Link>
                        </p>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </Router>
    )
};
export default NavBar;
