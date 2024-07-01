import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import pdfFile3 from '../books/ElHombreDelCastillo.pdf';
import pdfFile1 from '../books/ElUltimoDeseo.pdf';
import pdfFile4 from '../books/LaChicaDelTren.pdf';
import pdfFile2 from '../books/LaCiudadDeLosFantasmas.pdf';
import pdfFile5 from '../books/LaVidaInvisibleDeAddieLarue.pdf';
import '../css/libros.css';

const Novedades = () => {
    return (
        <div>
            <div className='title'>
                <h2 className='h2'>
                    RECIÉN SUBIDOS
                </h2>
                <a href='../pages/TodosNovedades' className='enlace'>
                    TODOS
                </a>
            </div>
            <div className='card-gral'>
                <div className='card'>
                    <img className='card-img' src='./elUltimoDeseo.jpg' />
                    <p className='card-title'>EL ÚLTIMO DESEO</p>
                    <p className='card-author'>Andrzej Sapkowski</p>
                    <p className='card-description'>
                        Este es el primer libro de la famosa saga de fantasía “The Witcher”.
                        Sigue las aventuras del cazador de monstruos Geralt de Rivia mientras lucha
                        contra criaturas míticas y se enfrenta a dilemas morales.
                        <br></br>
                    </p>
                    <a href={pdfFile1} target="_blank" rel="noopener noreferrer" className="button-content">
                        <button className="button">
                            <span className='button-icon'>
                                <FontAwesomeIcon icon={faBook} />
                            </span>
                            LEER </button>
                    </a>
                </div>
                <div className='card'>
                    <img className='card-img' src='./laCiudadDeLosFantasmas.jpg' />
                    <p className='card-title'>LA CIUDAD DE LOS FANTASMAS</p>
                    <p className='card-author'>Victoria Schwab</p>
                    <p className='card-description'>
                        En esta novela paranormal, Cassidy Blake tiene la habilidad de ver fantasmas.
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>
                    <a href={pdfFile2} target="_blank" rel="noopener noreferrer" className="button-content">
                        <button className="button">
                            <span className='button-icon'>
                                <FontAwesomeIcon icon={faBook} />
                            </span>
                            LEER </button>
                    </a>
                </div>
                <div className='card'>
                    <img className='card-img' src='./elHombreDelCastillo.jpg' />
                    <p className='card-title'>EL HOMBRE DEL CASTILLO</p>
                    <p className='card-author'>Philip K. Dick</p>
                    <p className='card-description'>
                        En un mundo alternativo donde las Potencias del Eje ganaron la Segunda Guerra Mundial,
                        los Estados Unidos están divididos entre Japón y Alemania.
                        <br></br>
                        <br></br>
                    </p>
                    <a href={pdfFile3} target="_blank" rel="noopener noreferrer" className="button-content">
                        <button className="button">
                            <span className='button-icon'>
                                <FontAwesomeIcon icon={faBook} />
                            </span>
                            LEER </button>
                    </a>
                </div>
                <div className='card'>
                    <img className='card-img' src='./laChicaDelTren.jpg' />
                    <p className='card-title'>LA CHICA DEL TREN</p>
                    <p className='card-author'>Paula Hawkins</p>
                    <p className='card-description'>
                        Rachel Watson viaja en el mismo tren todos los días y observa a una pareja desde la ventana.
                        Cuando la mujer desaparece misteriosamente, Rachel se involucra en la investigación.
                    </p>
                    <a href={pdfFile4} target="_blank" rel="noopener noreferrer" className="button-content">
                        <button className="button">
                            <span className='button-icon'>
                                <FontAwesomeIcon icon={faBook} />
                            </span>
                            LEER </button>
                    </a>
                </div>
                <div className='card'>
                    <img className='card-img' src='./laVidaInvisible.jpg' />
                    <p className='card-title'>LA VIDA INVISIBLE DE ADDIE LARUE</p>
                    <p className='card-author'>V.E. Schwab</p>
                    <p className='card-description'>
                        Addie LaRue hace un pacto con un dios oscuro para vivir para siempre,
                        pero nadie puede recordarla. A lo largo de los siglos,
                        lucha por encontrar el amor.
                    </p>
                    <a href={pdfFile5} target="_blank" rel="noopener noreferrer" className="button-content">
                        <button className="button">
                            <span className='button-icon'>
                                <FontAwesomeIcon icon={faBook} />
                            </span>
                            LEER </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Novedades;
