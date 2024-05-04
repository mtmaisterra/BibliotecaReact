import React from 'react';
import '../estilos/libros.css';

const Clasicos = () => {
    return (
        <>
            <div>
                <div className='title'>
                    <h2 className='title-h2'>COLECCIÓN CLÁSICOS</h2>
                </div>
                <div className='card-gral'>
                    <div className='card'>
                        <img className='card-img' src='./orgulloyPrejuicio.jpg' />
                        <p className='card-title'>ORGULLO Y PREJUICIO</p>
                        <p className='card-author'>Jane Austen</p>
                        <p className='card-description'>
                            Esta novela clásica sigue la historia de Elizabeth Bennet y su complicada relación con el orgulloso Sr. Darcy.</p>
                        <button class="button">
                            <span class="button-content">Descargar </span>
                        </button>

                    </div>
                    <div className='card'>
                        <img className='card-img' src='./laDivinaComedia.jpg' />
                        <p className='card-title'>LA DIVINA COMEDIA</p>
                        <p className='card-author'>Dante Alighieri</p>
                        <p className='card-description'>
                            Un épico poema que narra el viaje del protagonista a través del Infierno, el Purgatorio y el Paraíso.
                        </p>
                        <button class="button">
                            <span class="button-content">Descargar </span>
                        </button>

                    </div>
                    <div className='card'>
                        <img className='card-img' src='./elPrincipito.jpg' />
                        <p className='card-title'>EL PRINCIPITO</p>
                        <p className='card-author'>Antoine de Saint-Exupéry</p>
                        <p className='card-description'>
                            Un pequeño príncipe que viaja por diferentes planetas y aprende valiosas lecciones sobre la vida y el amor.
                        </p>
                        <button class="button">
                            <span class="button-content">Descargar </span>
                        </button>

                    </div>
                    <div className='card'>
                        <img className='card-img' src='./1984.jpg' />
                        <p className='card-title'>1984</p>
                        <p className='card-author'>George Orwell</p>
                        <p className='card-description'>
                            Una distopía clásica que presenta un mundo totalitario donde la privacidad y la libertad están amenazadas.
                        </p>
                        <button class="button">
                            <span class="button-content">Descargar </span>
                        </button>

                    </div>
                    <div className='card'>
                        <img className='card-img' src='./cienAñosDeSoledad.jpg' />
                        <p className='card-title'>CIEN AÑOS DE SOLEDAD</p>
                        <p className='card-author'>Gabriel García Márquez</p>
                        <p className='card-description'>
                            Una saga familiar que abarca varias generaciones en el pueblo ficticio de Macondo.
                        </p>
                        <button class="button">
                            <span class="button-content">Descargar </span>
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};
export default Clasicos;
