import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

function Register() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <form className="form">
                    <h3 className="title">Regístrate </h3>
                    <div className="flex">
                        <label>
                            <input className="input" type="text" placeholder="Nombres" required="" />
                            <span>Nombres</span>
                        </label>
                        <label>
                            <input className="input" type="text" placeholder="Apellido" required="" />
                            <span>Apellido</span>
                        </label>
                    </div>
                    <label>
                        <input className="input" type="email" placeholder="Email" required="" />
                        <span>Email</span>
                    </label>
                    <label>
                        <input className="input" type="password" placeholder="Contraseña" required="" />
                        <span>Contraseña</span>
                    </label>
                    <label>
                        <input className="input" type="password" placeholder="Confirme Contraseña" required="" />
                        <span>Confirme contraseña</span>
                    </label>
                    <button className="submit">Registrar</button>
                    <p className="signin">¿Ya tiene cuenta? <a href="../pages/Ingresar.jsx">Signin</a> </p>
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
};
export default Register;
