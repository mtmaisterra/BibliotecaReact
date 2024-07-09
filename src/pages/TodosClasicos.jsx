import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import '../css/todosclasicos.css';
import pdf1 from '../books/AliciaEnElPaisDeLasMaravillas.pdf';
import pdf2 from '../books/AnnaKarenina.pdf';
import pdf3 from '../books/AnneDeAvonlea.pdf';
import pdf4 from '../books/AnneDeLosTejadosVerdes.pdf';
import pdf5 from '../books/AntologiaPoetica.pdf';
import pdf6 from '../books/OrgulloYPrejuicio.pdf';
import pdf7 from '../books/LaDivinaComedia.pdf';
import pdf8 from '../books/ElPrincipito.pdf';
import pdf9 from '../books/1984.pdf';
import pdf10 from '../books/CienAñosDeSoledad.pdf';
import pdf11 from '../books/OrgulloYPrejuicio.pdf';
import pdf12 from '../books/LaDivinaComedia.pdf';
import pdf13 from '../books/ElPrincipito.pdf';
import pdf14 from '../books/1984.pdf';
import pdf15 from '../books/CienAñosDeSoledad.pdf';
import pdf16 from '../books/OrgulloYPrejuicio.pdf';
import pdf17 from '../books/LaDivinaComedia.pdf';
import pdf18 from '../books/ElPrincipito.pdf';
import pdf19 from '../books/1984.pdf';
import pdf20 from '../books/CienAñosDeSoledad.pdf';

const bdClasicos1 = [
    {
        id: 1,
        title: 'ALICIA EN EL PAIS DE LAS MARAVILLAS',
        image: './aliciaEnElPaisDeLasMaravillas.jpg',
        author: 'Lewis Carroll',
        pdf:pdf1
    },
    {
        id: 2,
        title: 'ANNA KARENINA',
        image: './annaKarenina.jpg',
        author: 'León Tolstói',
        pdf: pdf2
    },
    {
        id: 3,
        title: 'ANNE DE AVONLEA',
        image: './anneDeLosTejadosVerdes.jpg',
        author: 'Lucy Maud Montgomery',
        pdf: pdf3
    },
    {
        id: 4,
        title: 'ANNE DE LOS TEJADOS VERDES',
        image: './anneDeAvonlea.jpg',
        author: 'Lucy Maud Montgomery',
        pdf:pdf4
    },
    {
        id: 5,
        title: 'ANTOLOGIA POETICA',
        image: './antologiaPoetica.jpg',
        author: 'Mario Benedetti',
        pdf: pdf5
    }
]
const bdClasicos2 =[
    {
        id: 6,
        title: 'BESTIARIO',
        image: './bestiario.jpg',
        author: 'Julio Cortazar',
        pdf:pdf6
    },
    {
        id: 7,
        title: 'EL CONDE DE MONTECRISTO',
        image: './CondeDeMontecristo.jpg',
        author: 'Alejandro Dumas',
        pdf: pdf7
    },
    {
        id: 8,
        title: 'CRIMEN Y CASTIGO',
        image: './crimenYCastigo.jpg',
        author: 'Fedor Dostoiewski',
        pdf: pdf8
    },
    {
        id: 9,
        title: 'CRÓNICA DE UNA MUERTE ANUNCIADA',
        image: './cronicaDeUnaMuerteAnunciada.jpg',
        author: 'Gabriel García Marquez',
        pdf: pdf9
    },
    {
        id: 10,
        title: 'DE AMOR Y DE SOMBRA',
        image: './deAmorYDeSombra.jpg',
        author: 'Isabel Allende',
        pdf: pdf10
    }
    ]
    const bdClasicos3 = [
    {
        id: 11,
        title: 'DRACULA',
        image: './dracula.jpg',
        author: 'Bram Stoker',
        pdf: pdf11
    },
    {
        id: 12,
        title: 'EL ALEPH',
        image: './elAleph.jpg',
        author: 'Jorge Luis Borges',
        pdf: pdf12
    },
    {
        id: 13,
        title: 'EL ALQUIMISTA',
        image: './elAlquimista.jpg',
        author: 'Paulo Coelho',
        pdf: pdf13
    },
    {
        id: 14,
        title: 'EL AMOR EN TIEMPOS DE COLERA',
        image: './elAmorEnTiemposDeColera.jpg',
        author: 'Gabriel García Marquez',
        pdf: pdf14
    },
    {
        id: 15,
        title: 'EL GATO CON BOTAS',
        image: './elGatoConBotas.jpg',
        author: 'Charles Perrault ',
        pdf: pdf15
    }
    ]
    const bdClasicos4 =[
        {
            id: 16,
            title: 'ORGULLO Y PREJUICIO',
            author: 'Jane Austen',
            image: './orgulloyPrejuicio.jpg',
            pdf: pdf16
        },
        {
            id: 17,
            title: 'LA DIVINA COMEDIA',
            author: 'Dante Alighieri',
            image: './laDivinaComedia.jpg',
            pdf: pdf17
        },
        {
            id: 18,
            title: 'EL PRINCIPITO',
            author: 'Antoine de Saint-Exupéry',
            image: './elPrincipito.jpg',
            pdf: pdf18
        },
        {
            id: 19,
            title: '1984',
            author: 'George Orwell',
            image: './1984.jpg',
            pdf: pdf19
        },
        {
            id: 20,
            title: 'CIEN AÑOS DE SOLEDAD',
            author: 'Gabriel García Márquez',
            image: './cienAñosDeSoledad.jpg',
            pdf: pdf20
        }
    ]



const TodosClasicos = () => {
    return (
        <>
            <div className='body'>
                <div className="containerTitle">
                    <h2 className='titleClasicos'>
                        CLÁSICOS
                    </h2>
                </div>
                <div className='card-gral'>
                    {bdClasicos1.map((libros, id) => (
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
                    {bdClasicos2.map((libros, id) => (
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
                    {bdClasicos3.map((libros, id) => (
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
                    {bdClasicos4.map((libros, id) => (
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
export default TodosClasicos;