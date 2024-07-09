import React from 'react';
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Acerca from './pages/Acerca';
import Home from './pages/Home';
import TodoClasicos from './pages/TodosClasicos';
import TodoNovedades from './pages/TodosNovedades';
import Ingresar from './pages/Ingresar';
import Registrar from './pages/Registrar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/Acerca' element={<Acerca />} />
          <Route path='/*' element={<Home />} />
          <Route path='/Inicio' element={<Home />} />
          <Route path='/TodosClasicos' element={<TodoClasicos />} />
          <Route path='/TodosNovedades' element={<TodoNovedades />} />
          <Route path='/Ingresar' element={<Ingresar />} />
          <Route path='/Registrar' element={<Registrar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;
