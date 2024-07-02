import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link } from "react-router-dom";
import pdf3 from '../books/ElHombreDelCastillo.pdf';
import pdf1 from '../books/ElUltimoDeseo.pdf';
import pdf4 from '../books/LaChicaDelTren.pdf';
import pdf2 from '../books/LaCiudadDeLosFantasmas.pdf';
import pdf5 from '../books/LaVidaInvisibleDeAddieLarue.pdf';
import '../css/libros.css';

const todasNovedades = [
    {
        id: 1,
        title: 'EL ÚLTIMO DESEO',
        author: 'Andrzej Sapkowski',
        image: './elUltimoDeseo.jpg',
        description: 'Este es el primer libro de la famosa saga de fantasía “The Witcher”. Sigue las aventuras del cazador de monstruos Geralt de Rivia mientras lucha contra criaturas míticas y se enfrenta a dilemas morales.',
        pdf: pdf1
    },
    {
        id: 2,
        title: 'LA CIUDAD DE LOS FANTASMAS',
        author: 'Victoria Schwa',
        image: './laCiudadDeLosFantasmas.jpg',
        description: 'En esta novela paranormal, Cassidy Blake tiene la habilidad de ver fantasmas.',
        pdf: pdf2
    },
    {
        id: 3,
        title: 'EL HOMBRE DEL CASTILLO',
        author: 'Philip K. Dick',
        image: './elHombreDelCastillo.jpg',
        description: 'En un mundo alternativo donde las Potencias del Eje ganaron la Segunda Guerra Mundial, los Estados Unidos están divididos entre Japón y Alemania.',
        pdf: pdf3
    },
    {
        id: 4,
        title: 'LA CHICA DEL TREN',
        author: 'Paula Hawkins',
        image: './laChicaDelTren.jpg',
        description: '  Rachel Watson viaja en el mismo tren todos los días y observa a una pareja desde la ventana. Cuando la mujer desaparece misteriosamente, Rachel se involucra en la investigación.',
        pdf: pdf4
    },
    {
        id: 5,
        title: 'LA VIDA INVISIBLE DE ADDIE LARUED',
        author: 'V.E. Schwab',
        image: './laVidaInvisible.jpg',
        description: 'Addie LaRue hace un pacto con un dios oscuro para vivir para siempre, pero nadie puede recordarla. A lo largo de los siglos, lucha por encontrar el amor.',
        pdf: pdf5
    }
]


const Novedades = () => {
    return (
        <div>
            <div className='title'>
                <h2 className='h2'>
                    RECIÉN SUBIDOS
                </h2>
                <Link to='/TodosNovedades' className='enlace'>
                    <button className="button-enlace">TODOS</button>
                </Link>
            </div>
            <div className='card-gral'>
                {todasNovedades.map((novedades, id) => (
                    <div className='card' key={novedades.id}>
                        <img className='card-img' src={novedades.image} />
                        <h2 className='card-title'>{novedades.title}</h2>
                        <h2 className="card-author">{novedades.author}</h2>
                        <h3 className='card-description'>{novedades.description} </h3>
                        <Link to={novedades.pdf} target="_blank" className="button-content">
                            <button className="button">
                                <span className='button-icon'>
                                    <FontAwesomeIcon icon={faBook} />
                                </span>
                                LEER </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Novedades;
