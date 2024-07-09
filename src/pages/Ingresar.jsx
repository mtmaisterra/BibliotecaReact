import React from 'react';
import '../css/ingresar.css';
import { Link } from 'react-router-dom';

const Ingresar = () => {
  return (
    <>
      <div className='body-login'>
        <div className='form'>
          <h1 className='title-form'>Ingresar a la cuenta</h1>
          <div className='container-form'>
            <label className='label-form'>Usuario</label>
            <input className='input-form' type='text' placeholder='Ingrese el nombre de usuario'></input>
          </div>
          <div className='container-form'>
            <label className='label-form'>Contraseña</label>
            <input className='input-form' type='password' placeholder='Ingrese la contraseña'></input>
          </div>
          <button  className='sign-form'>
            <Link to='/Home'className='link-form'>
              Ingresar
            </Link>
          </button>
          <p>¿No tiene cuenta
            <button className='submit-form'>
              <Link to='/Registrar' className='link-form'>
                Registrarse
              </Link>
            </button>
          </p>
        </div>
      </div>
    </>
  )
}

export default Ingresar;
