import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import NavBar from './components/navBar.jsx';
import Ingresar from './ingresar.jsx';
import './estilos/App.css';
import Footer from './components/footer.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='container'>
    <NavBar />
    <App />
    <Footer />
    </div>
  </React.StrictMode>,
)
