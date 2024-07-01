import '../css/cuenta.css';
import React from 'react';

const Register = () => {
    return (
        <div>
            <form className="form">
                <h3 className="title">Regístrate </h3>
                <div className="container">
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
                <p className="sign">¿Ya tiene cuenta? <a href="../pages/Login.jsx">Accede</a> </p>
            </form>
        </div>
    )
}
export default Register;
