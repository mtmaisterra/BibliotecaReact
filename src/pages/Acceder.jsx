import React from 'react';
import Ingresar from '../components/Ingresar';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

function Acceder() {
    return (
        <>

            <NavBar />
            <div>
                <Ingresar />
            </div>
            <Footer />
        </>
    )
};
export default Acceder;