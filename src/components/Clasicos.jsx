import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import pdfFile1 from '../books/OrgulloYPrejuicio.pdf';
import pdfFile2 from '../books/LaDivinaComedia.pdf';
import pdfFile3 from '../books/ElPrincipito.pdf';
import pdfFile4 from '../books/1984.pdf';
import pdfFile5 from '../books/CienAñosDeSoledad.pdf';
import '../estilos/libros.css';

export default function Clasicos() {
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
                        <a href={pdfFile1} target="_blank" rel="noopener noreferrer" className="button-content">
                            <button className="button">
                                <span className='button-icon'>
                                    <FontAwesomeIcon icon={faBook} />
                                </span>
                                Leer </button>
                        </a>
                    </div>
                    <div className='card'>
                        <img className='card-img' src='./laDivinaComedia.jpg' />
                        <p className='card-title'>LA DIVINA COMEDIA</p>
                        <p className='card-author'>Dante Alighieri</p>
                        <p className='card-description'>
                            Un épico poema que narra el viaje del protagonista a través del Infierno, el Purgatorio y el Paraíso.
                        </p>
                        <a href={pdfFile2} target="_blank" rel="noopener noreferrer" className="button-content">
                            <button className="button">
                                <span className='button-icon'>
                                    <FontAwesomeIcon icon={faBook} />
                                </span>
                                Leer </button>
                        </a>
                    </div>
                    <div className='card'>
                        <img className='card-img' src='./elPrincipito.jpg' />
                        <p className='card-title'>EL PRINCIPITO</p>
                        <p className='card-author'>Antoine de Saint-Exupéry</p>
                        <p className='card-description'>
                            Un pequeño príncipe que viaja por diferentes planetas y aprende valiosas lecciones sobre la vida y el amor.
                        </p>
                        <a href={pdfFile3} target="_blank" rel="noopener noreferrer" className="button-content">
                            <button className="button">
                                <span className='button-icon'>
                                    <FontAwesomeIcon icon={faBook} />
                                </span>
                                Leer
                            </button>
                        </a>
                    </div>
                    <div className='card'>
                        <img className='card-img' src='./1984.jpg' />
                        <p className='card-title'>1984</p>
                        <p className='card-author'>George Orwell</p>
                        <p className='card-description'>
                            Una distopía clásica que presenta un mundo totalitario donde la privacidad y la libertad están amenazadas.
                        </p>
                        <a href={pdfFile4} target="_blank" rel="noopener noreferrer" className="button-content">
                            <button className="button">
                                <span className='button-icon'>
                                    <FontAwesomeIcon icon={faBook} />
                                </span>
                                Leer
                            </button>
                        </a>
                    </div>
                    <div className='card'>
                        <img className='card-img' src='./cienAñosDeSoledad.jpg' />
                        <p className='card-title'>CIEN AÑOS DE SOLEDAD</p>
                        <p className='card-author'>Gabriel García Márquez</p>
                        <p className='card-description'>
                            Una saga familiar que abarca varias generaciones en el pueblo ficticio de Macondo.
                        </p>
                        <a href={pdfFile5} target="_blank" rel="noopener noreferrer" className="button-content">
                            <button className="button">
                                <span className='button-icon'>
                                    <FontAwesomeIcon icon={faBook} />
                                </span>
                                Leer
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

