import React from 'react';
import '../css/register.css';
import { Link } from 'react-router-dom';

const Registrar = () => {
  return (
    <>

      <form className="form">
        <p className="title-form">Registrar </p>
        <p className="message-form">Registrate para tener acceso a nuestra biblioteca. </p>
        <div className="flex-form">
          <label>
            <input placeholder="" type="text" className="input-form" />
            <span>Nombres</span>
          </label>

          <label>
            <input placeholder="" type="text" className="input-form" />
            <span>Apellido</span>
          </label>
        </div>

        <label>
          <input placeholder="" type="email" className="input-form" />
          <span>Email</span>
        </label>

        <label>
          <input placeholder="" type="password" className="input-form" />
          <span>Contraseña</span>
        </label>
        <label>
          <input placeholder="" type="password" className="input-form" />
          <span>Confirme Contraseña</span>
        </label>
        <button className="registrar-form"><Link to='/Inicio'>Registrar</Link></button>
        <p className="ingresar-form">Ya tienes cuenta ? <Link to="/Ingresar">Ingresar</Link> </p>
      </form>
    </>

  )
}

export default Registrar;
