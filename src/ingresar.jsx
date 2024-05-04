import React from 'react';
import './estilos/ingresar.css';

function ingresar() {
    return (
        <>
            <div className='div-login'>
                <p className='title-login'>INGRESAR</p>
                <form className='form-login'>
                    <div class="group-login">
                        <label className='label-login' for="nombreUsuario">Nombre de usuario</label>
                        <input className='input-login' type="text" name="nombreUsuario" id="nombreUsuario">
                        </input>
                    </div>
                    <div class="group-login">
                        <label className='label-login' for="password">Contraseña</label>
                        <input className='input-login' type="password" name="password" id="password"></input>
                        <div class="recuperar">
                            <a href="recuperarContraseña">Olvidaste tu contraseña?</a>
                        </div>
                    </div>
                    <button class="sign">Registrar</button>
                </form>
            </div>
        </>
    )
}
export default ingresar;
