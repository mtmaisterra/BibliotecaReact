import React from 'react';
import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import About from './pages/About';
import Home from './pages/Home';
import TodoClasicos from './pages/TodosClasicos';
import TodoNovedades from './pages/TodosNovedades';
import Clasicos from './components/Clasicos';
import Novedades from './components/Novedades';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<Home />} />
          <Route path='/Inicio' element={<Home />} />
          <Route path='/TodosClasicos' element={<TodoClasicos />} />
          <Route path='/TodosNovedades' element={<TodoNovedades />} />
          <Route path='/clasicos' element={<Clasicos/>}/>
          <Route path='/novedades' element={<Novedades/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;
