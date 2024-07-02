import React from 'react';
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Acerca from './pages/Acerca';
import Home from './pages/Home';
import TodosClasicos from './pages/TodosClasicos';
import TodosNovedades from './pages/TodosNovedades';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/Acerca' element={<Acerca />} />
          <Route path='/*' element={<Home />} />
          <Route path='/TodosClasicos' element={<TodosClasicos />} />
          <Route path='/TodosNovedades' element={<TodosNovedades />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;
