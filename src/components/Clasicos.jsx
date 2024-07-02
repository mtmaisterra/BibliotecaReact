import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import '../css/libros.css';
import { Link } from "react-router-dom";
import pdf1 from '../books/OrgulloYPrejuicio.pdf';
import pdf2 from '../books/LaDivinaComedia.pdf';
import pdf3 from '../books/ElPrincipito.pdf';
import pdf4 from '../books/1984.pdf';
import pdf5 from '../books/CienAñosDeSoledad.pdf';

const LibrosClasicos = [

    {
        id: 1,
        title: 'ORGULLO Y PREJUICIO',
        author: 'Jane Austen',
        image: './orgulloyPrejuicio.jpg',
        description: 'Esta novela clásica sigue la historia de Elizabeth Bennet y su complicada relación con el orgulloso Sr. Darcy.',
        pdf: pdf1
    },
    {
        id: 2,
        title: 'LA DIVINA COMEDIA',
        author: 'Dante Alighieri',
        image: './laDivinaComedia.jpg',
        description: 'Un épico poema que narra el viaje del protagonista a través del Infierno, el Purgatorio y el Paraíso.',
        pdf: pdf2
    },
    {
        id: 3,
        title: 'EL PRINCIPITO',
        author: 'Antoine de Saint-Exupéry',
        image: './elPrincipito.jpg',
        description: 'Un pequeño príncipe que viaja por diferentes planetas y aprende valiosas lecciones sobre la vida y el amor.',
        pdf: pdf3
    },
    {
        id: 4,
        title: '1984',
        author: 'George Orwell',
        image: './1984.jpg',
        description: 'Una distopía clásica que presenta un mundo totalitario donde la privacidad y la libertad están amenazadas.',
        pdf: pdf4
    },
    {
        id: 5,
        title: 'CIEN AÑOS DE SOLEDAD',
        author: 'Gabriel García Márquez',
        image: './cienAñosDeSoledad.jpg',
        description: 'Una saga familiar que abarca varias generaciones en el pueblo ficticio de Macondo.',
        pdf: pdf5
    }
]

const Clasicos = () => {
    return (
        <>
            <div className='body'>
                <h2 className='title'>
                    COLECCIÓN CLÁSICOS
                </h2>
                <div className="div-enlace">
                    <Link to='/TodosClasicos'>
                        <button className="button-enlace">Todos</button>
                    </Link>
                </div>
                <div className='card-gral'>
                    {LibrosClasicos.map((clasicos, id) => (
                        <div className='card' key={clasicos.id}>
                            <img className='card-img' src={clasicos.image} />
                            <h2 className='card-title'>{clasicos.title}</h2>
                            <h2 className="card-author">{clasicos.author}</h2>
                            <h3 className='card-description'>{clasicos.description} </h3>
                            <a href={clasicos.pdf} target="_blank" className="button-content">
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
    );
};
export default Clasicos;

