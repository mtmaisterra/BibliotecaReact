import React from 'react';

function Ingresar() {
    return (
        <>
            <form className="form">
                <p className="form-title">Inicia sesión en tu cuenta</p>
                <div className="input-container">
                    <input placeholder="Ingrese correo" type="email" />
                </div>
                <div className="input-container">
                    <input placeholder="Ingrese contraseña" type="password" />
                </div>
                <button className="button-submit" type="submit">
                    Iniciar sesión
                </button>
                <p className="signup-link">
                    ¿No tienes cuenta?
                    <a href="./pages/Registrar">Regístrate</a>
                </p>
            </form>
        </>
    )
};
export default Ingresar;
