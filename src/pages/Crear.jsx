import React from 'react';
import Registrar from '../components/Registrar';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

function Crear() {
    return (
        <>
            <NavBar />
            <div>
                <Registrar />
            </div>
            <Footer />
        </>
    )
};
export default Crear;
