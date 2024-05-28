import React from 'react';
import NavBar from '../components/navBar';
import Clasicos from '../components/Clasicos';
import Novedades from '../components/Novedades';
import Footer from '../components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acerca from '../pages/Acerca';
import Login from '../pages/Login';
import Register from '../pages/Register';


export default function Home() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
            <Clasicos />
            <Novedades />
            <Footer />

            <Routes>
                <Route path='/acerca' element={Acerca}></Route>
                <Route path='/login' element={Login}></Route>
                <Route path='/registrar' element={Register}></Route>
            </Routes>
        </>
    )
};