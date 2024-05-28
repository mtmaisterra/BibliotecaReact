import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import TodoClasicos from '../data/base';
import '../estilos/libros.css';


export default function MasClasicos() {
    return (
        <>
        <div className='title'>
            <h2 className='h2'>CLÁSICOS DE LA LITERATURA</h2>
        </div>
            <table>
                <tr>
                    {TodoClasicos.map((libro, id) => (
                        <th key={id}>
                            <div className='card-gral'>
                                <div className='card'>
                                    <img className='card-img' src={libro.image} />
                                    <p className='card-title'>{libro.title}</p>
                                    <p className='card-author'>{libro.author}</p>
                                    <a href={libro.pdf} target="_blank" rel="noopener noreferrer" className="button-content">
                                        <button className="button">
                                            <span className='button-icon'>
                                                <FontAwesomeIcon icon={faBook} />
                                            </span>
                                            LEER
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </th>
                    ))}
                </tr>
            </table>
        </>
    )
};