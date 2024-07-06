import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import '../css/todosclasicos.css';
import todosClasicos1 from '../data/bdClasicos';
import todosClasicos2 from '../data/bdClasicos';
import todosClasicos3 from '../data/bdClasicos';
import todosClasicos4 from '../data/bdClasicos';



const TodosClasicos = () => {
    return (
        <>
            <div className='body'>
                <div className="containerTitle">
                    <h2 className='titleClasicos'>
                        COLECCIÓN CLÁSICOS
                    </h2>
                    <Link to='/TodosClasicos'>
                        <button className="buttonTodosClasicos">Todos</button>
                    </Link>
                </div>
                <div className='card-gral'>
                    {todosClasicos1.map((libros, id) => (
                        <div className='card' key={libros.id}>
                            <img className='card-img' src={libros.image} />
                            <h2 className='card-title'>{libros.title}</h2>
                            <h2 className="card-author">{libros.author}</h2>
                            <h3 className='card-description'>{libros.description} </h3>
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
                    {todosClasicos2.map((libros, id) => (
                        <div className='card' key={libros.id}>
                            <img className='card-img' src={libros.image} />
                            <h2 className='card-title'>{libros.title}</h2>
                            <h2 className="card-author">{libros.author}</h2>
                            <h3 className='card-description'>{libros.description} </h3>
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
                    {todosClasicos3.map((libros, id) => (
                        <div className='card' key={libros.id}>
                            <img className='card-img' src={libros.image} />
                            <h2 className='card-title'>{libros.title}</h2>
                            <h2 className="card-author">{libros.author}</h2>
                            <h3 className='card-description'>{libros.description} </h3>
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
                    {todosClasicos4.map((libros, id) => (
                        <div className='card' key={libros.id}>
                            <img className='card-img' src={libros.image} />
                            <h2 className='card-title'>{libros.title}</h2>
                            <h2 className="card-author">{libros.author}</h2>
                            <h3 className='card-description'>{libros.description} </h3>
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