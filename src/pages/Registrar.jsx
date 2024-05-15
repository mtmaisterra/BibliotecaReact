import React from 'react';

function Registrar() {
    return (
        <>
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
        </>
    )
};
export default Registrar;