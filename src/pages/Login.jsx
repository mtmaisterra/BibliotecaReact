import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

function Login() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <form className="form">
                    <h3 className="title">Inicia sesión en tu cuenta</h3>
                    <div className="container">
                        <input placeholder="Ingrese correo" type="email" />
                    </div>
                    <div className="container">
                        <input placeholder="Ingrese contraseña" type="password" />
                    </div>
                    <button className="submit" type="submit">
                        Iniciar sesión
                    </button>
                    <p className="sign">
                        ¿No tienes cuenta?
                        <a className='sign' href="./pages/Register">Regístrate</a>
                    </p>
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
};
export default Login;