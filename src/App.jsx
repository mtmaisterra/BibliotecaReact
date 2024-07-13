import React from 'react';
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Acerca from './pages/Acerca';
import Home from './pages/Home';
import TodoClasicos from './pages/TodosClasicos';
import TodoNovedades from './pages/TodosNovedades';

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;
