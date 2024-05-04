import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Requiere CSS

const LibrosClasicos = () => {
    const Clasicos = [
        {
            id: 1,
            image: '/public/orgulloyPrejuicio.jpg',
            title: 'Orgullo y Prejuicio',
            author: 'Jane Austen',
            description: 'Esta novela clásica sigue la historia de Elizabeth Bennet y su complicada relación con el orgulloso Sr. Darcy.'
        },
        {
            id: 2,
            image: '/public/laDivinaComedia.jpg',
            title: 'La divina comedia',
            author: 'Dante Alighieri',
            description: 'Un épico poema que narra el viaje del protagonista a través del Infierno, el Purgatorio y el Paraíso.'

        },
        {
            id: 3,
            image: '/public/elPrincipito.jpg',
            title: 'El principito',
            author: 'Antoine de Saint-Exupéry',
            description: 'Una fábula encantadora sobre un pequeño príncipe que viaja por diferentes planetas y aprende valiosas lecciones sobre la vida y el amor.'

        },
        {
            id: 4,
            image: '/public/1984.jpg',
            title: '1984',
            author: 'George Orwell',
            description: 'Una distopía clásica que presenta un mundo totalitario donde la privacidad y la libertad están amenazadas.'

        },
        {
            id: 5,
            image: '/public/cienAñosDeSoledad.jpg',
            title: 'Cien años de soledad',
            author: 'Gabriel García Márquez',
            description: 'Una saga familiar que abarca varias generaciones en el pueblo ficticio de Macondo.'

        }
    ]

    const Nuevos = [
        {
            id: 1,
            image: '/public/elUltimoDeseo.jpg',
            title: 'El último deseo',
            author: 'Andrzej Sapkowski',
            description: 'Este es el primer libro de la famosa saga de fantasía “The Witcher”. Sigue las aventuras del cazador de monstruos Geralt de Rivia mientras lucha contra criaturas míticas y se enfrenta a dilemas morales.'

        },
        {
            id: 2,
            image: '/public/laCiudadDeLosFantasmas.jpg',
            title: 'La ciudad de los fantasmas',
            author: 'Victoria Schwab',
            description: 'En esta novela paranormal, Cassidy Blake tiene la habilidad de ver fantasmas.'

        },
        {
            id: 3,
            image: '/public/elHombreDelCastillo.jpg',
            title: 'El hombre del castillo',
            author: 'Philip K. Dick',
            description: 'En un mundo alternativo donde las Potencias del Eje ganaron la Segunda Guerra Mundial, los Estados Unidos están divididos entre Japón y Alemania.'

        },
        {
            id: 4,
            image: '/public/laChicaDelTren.jpg',
            title: 'La chica del tren',
            author: 'Paula Hawkins',
            description: 'Rachel Watson viaja en el mismo tren todos los días y observa a una pareja desde la ventana. Cuando la mujer desaparece misteriosamente, Rachel se involucra en la investigación. Un thriller psicológico lleno de giros inesperados y secretos oscuros.'

        },
        {
            id: 5,
            image: 'laVidaInvisible.jpg',
            title: 'La vida invisible de Addie LaRue',
            author: 'V.E. Schwab',
            description: 'Addie LaRue hace un pacto con un dios oscuro para vivir para siempre, pero a cambio, nadie puede recordarla. A lo largo de los siglos, lucha por dejar su huella en el mundo y encontrar el amor verdadero.'

        }
    ]
    return (
        <>
            <div className='div-carousel'>
                <Carousel autoPlay interval={5000} infiniteLoop useKeyboardArrows dynamicHeight>
                    <div className='div-card'>
                        {LibrosClasicos.map((clasicos) => (
                            <div className="div-classic">
                                <div className='div-img'>
                                    <img
                                        className="img-classic"
                                        src={clasicos.image}
                                        alt={`${clasicos.id + 1} ${clasicos.image}`}
                                        fill
                                    />
                                </div>
                                <div className='div-title'>
                                    <h3 className='title-classic'>
                                        {clasicos.title}
                                    </h3>
                                </div>
                                <div className='div-author'>
                                    <p className='author-classic'>
                                        {clasicos.author}
                                    </p>
                                </div>
                                <div className='div-description'>
                                    <p className='description-classic'>
                                        {clasicos.description}
                                    </p>
                                </div>
                            </div>
                        ))
                        }

                    </div>

                </Carousel>
            </div>
        </>
    );
};

export default LibrosClasicos;
