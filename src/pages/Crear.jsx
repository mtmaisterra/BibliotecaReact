import React from 'react';
import Registrar from '../components/Registrar';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

function Crear() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <Registrar />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
};
export default Crear;
