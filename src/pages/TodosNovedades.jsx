import React from 'react';
import '../css/todonovedades.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import pdf1 from '../books/ElUltimoDeseo.pdf';
import pdf2 from '../books/LaCiudadDeLosFantasmas.pdf';
import pdf3 from '../books/ElHombreDelCastillo.pdf';
import pdf4 from '../books/LaChicaDelTren.pdf';
import pdf5 from '../books/LaVidaInvisibleDeAddieLarue.pdf';
import pdf6 from '../books/CumbresBorrascosas.pdf';
import pdf7 from '../books/DonQuijoteDeLaMancha.pdf';
import pdf8 from '../books/ElDrJekyllYMrHyde.pdf';
import pdf9 from '../books/ElGranGatsby.pdf';
import pdf10 from '../books/ElHeroeDiscreto.pdf';
import pdf11 from '../books/ElLibroDeArena.pdf';
import pdf12 from '../books/ElResplandor.pdf';
import pdf13 from '../books/ElViejoYElMar.pdf';
import pdf14 from '../books/Frankenstein.pdf';
import pdf15 from '../books/LaCasaDeLosEspiritus.pdf';
import pdf16 from '../books/RomeoYJulieta.pdf';
import pdf17 from '../books/LaDamaDeLasCamelias.pdf';
import pdf18 from '../books/LaEspia.pdf';
import pdf19 from '../books/LaTregua.pdf';
import pdf20 from '../books/LaMetamorfosis.pdf';


const bdNovedades1 = [
    {
        id: 1,
        title: 'EL ULTIMO DESEO',
        image: './elUltimoDeseo.jpg',
        author: 'Andrzej Sapkowski',
        pdf: pdf1
    },
    {
        id: 2,
        title: 'LA CIUDAD DE LOS FANTASMAS',
        image: './laCiudadDeLosFantasmas.jpg',
        author: 'Cassidy Blake',
        pdf: pdf2
    },
    {
        id: 3,
        title: 'EL HOMBRE DEL CASTILLO',
        image: './elHombreDelCastillo.jpg',
        author: 'Philip K. Dick',
        pdf: pdf3
    },
    {
        id: 4,
        title: 'LA CHICA DEL TREN',
        image: './laChicaDelTren.jpg',
        author: 'Paula Hawkins',
        pdf: pdf4
    },
    {
        id: 5,
        title: 'LA VIDA INVISIBLE DE ADDIE LARUE',
        image: './laVidaInvisible.jpg',
        author: 'V. E. Schwab',
        pdf: pdf5
    }
]
const bdNovedades2 = [
    {
        id: 6,
        title: 'CUMBRES BORRASCOSAS',
        image: './CumbresBorrascosas.jpg',
        author: 'Emily Brontë',
        pdf: pdf6
    },
    {
        id: 7,
        title: 'EL QUIJOTE DE LA MANCHA',
        image: './Quijote.jpg',
        author: 'Miguel de Cervantes',
        pdf: pdf7
    },
    {
        id: 8,
        title: 'EL DR. JEKILL Y MR. HYDE',
        image: './DrJekillYMrHyde.jpg',
        author: 'R. L. Stevenson',
        pdf: pdf8
    },
    {
        id: 9,
        title: 'EL GRAN GATSBY',
        image: './elGranGatsby.jpg',
        author: 'F. Scott Fitzgerald',
        pdf: pdf9
    },
    {
        id: 10,
        title: 'EL HEROE DISCRETO',
        image: './elHeroeDiscreto.jpg',
        author: 'Mario Vargas Llosa',
        pdf: pdf10
    }
]
const bdNovedades3 = [
    {
        id: 11,
        title: 'EL LIBRO DE ARENA',
        image: './elLibroDeArena.jpg',
        author: 'Jorge Luis Borges',
        pdf: pdf11
    },
    {
        id: 12,
        title: 'EL RESPLANDOR',
        image: './elResplandor.jpg',
        author: 'Stephen King',
        pdf: pdf12
    },
    {
        id: 13,
        title: 'EL VIEJO Y EL MAR',
        image: './elViejoYElMar.jpg',
        author: 'Ernest Hemingway',
        pdf: pdf13
    },
    {
        id: 14,
        title: 'FRANKENSTEIN',
        image: './frankenstein.jpg',
        author: 'Mary Shelley',
        pdf: pdf14
    },
    {
        id: 15,
        title: 'LA CASA DE LOS ESPIRITUS',
        image: './laCasaDeLosEspiritus.jpg',
        author: 'Isabel Allende',
        pdf: pdf15
    }
]
const bdNovedades4 = [
    {
        id: 16,
        title: 'ROMEO Y JULIETA',
        author: 'William Shakespeare',
        image: './RomeoYJulieta.jpg',
        pdf: pdf16
    },
    {
        id: 17,
        title: 'LA DAMA DE LAS CAMELIAS',
        author: 'Alejandro Dumas',
        image: './laDamaDeLasCamelias.jpg',
        pdf: pdf17
    },
    {
        id: 18,
        title: 'LA ESPIA',
        author: 'Paulo Coelho',
        image: './laEspia.jpg',
        pdf: pdf18
    },
    {
        id: 19,
        title: 'LA TREGUA',
        author: 'Mario Benedetti',
        image: './laTregua.jpg',
        pdf: pdf19
    },
    {
        id: 20,
        title: 'LA METAMORFOSIS',
        author: 'Franz Kafka',
        image: './Metamorfosis.jpg',
        pdf: pdf20
    }
]


const TodoNovedades = () => {
    return (
        <>
            <div className='body'>
                <div className="containerTitle">
                    <h2 className='titleNovedades'>
                        NOVEDADES
                    </h2>
                </div>
                <div className='card-gral'>
                    {bdNovedades1.map((libros, id) => (
                        <div className='card' key={libros.id}>
                            <img className='card-img' src={libros.image} />
                            <h2 className='card-title'>{libros.title}</h2>
                            <h2 className="card-author">{libros.author}</h2>
                            <a href={libros.pdf} target="_blank" className="button-content">
                                <button className="button">
                                    <span className='button-icon'>
                                        <FontAwesomeIcon icon={faBook} />
                                    </span>
                                    LEER </button>
                            </a>
                        </div>
                    ))}
                </div>
                <div className='card-gral'>
                    {bdNovedades2.map((libros, id) => (
                        <div className='card' key={libros.id}>
                            <img className='card-img' src={libros.image} />
                            <h2 className='card-title'>{libros.title}</h2>
                            <h2 className="card-author">{libros.author}</h2>
                            <a href={libros.pdf} target="_blank" className="button-content">
                                <button className="button">
                                    <span className='button-icon'>
                                        <FontAwesomeIcon icon={faBook} />
                                    </span>
                                    LEER </button>
                            </a>
                        </div>
                    ))}
                </div>
                <div className='card-gral'>
                    {bdNovedades3.map((libros, id) => (
                        <div className='card' key={libros.id}>
                            <img className='card-img' src={libros.image} />
                            <h2 className='card-title'>{libros.title}</h2>
                            <h2 className="card-author">{libros.author}</h2>
                            <a href={libros.pdf} target="_blank" className="button-content">
                                <button className="button">
                                    <span className='button-icon'>
                                        <FontAwesomeIcon icon={faBook} />
                                    </span>
                                    LEER </button>
                            </a>
                        </div>
                    ))}
                </div>
                <div className='card-gral'>
                    {bdNovedades4.map((libros, id) => (
                        <div className='card' key={libros.id}>
                            <img className='card-img' src={libros.image} />
                            <h2 className='card-title'>{libros.title}</h2>
                            <h2 className="card-author">{libros.author}</h2>
                            <a href={libros.pdf} target="_blank" className="button-content">
                                <button className="button">
                                    <span className='button-icon'>
                                        <FontAwesomeIcon icon={faBook} />
                                    </span>
                                    LEER </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default TodoNovedades;
