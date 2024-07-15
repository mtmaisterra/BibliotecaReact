import React from 'react';
import '../css/footer.css';

 function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
    <footer className='footer-gral'>
      <p className='footer-text'><img src='/MaisterraLogo.jpg' className='footer-img'/> &copy; TODOS LOS DERECHOS RESERVADOS - {year} - MAISTERRA DIGITAL DESINGS </p>
          </footer>
    </>
  )
};
export default Footer;