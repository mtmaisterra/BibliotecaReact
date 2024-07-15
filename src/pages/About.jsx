import React from 'react';
import '../css/about.css';

const Acerca = () => {
  return (
    <div className='body-about'>
      <h1 className='title-about'>Biblioteca El CHACHO</h1>
      <div className='container-about'>
      <div className='image-about'>
        <img className='img-about' src='/elChacho.jpg'/>
      </div>
        <div className='description-about'>
          <h2 className='text-description-about'>
          La Biblioteca Virtual “El Chacho” rinde homenaje al caudillo Federal Riojano, General Ángel Vicente Peñaloza y su objetivo principal es proporcionar descargas gratuitas en formato PDF de obras de literatura universal. Los usuarios pueden acceder a una amplia variedad de libros y disfrutar de su contenido sin costo alguno.
          </h2>
        </div>
      </div>
    </div>
  )
}
export default Acerca;

