import React from 'react';
import NavBar from '../components/navBar';
import Clasicos from '../components/Clasicos';
import Novedades from '../components/Novedades';
import Footer from '../components/footer';

export default function Home() {
    return (
        <>
            <NavBar />
            <Clasicos />
            <Novedades />
            <Footer />
        </>
    )
};