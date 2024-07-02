import React from 'react';
import Clasicos from '../components/Clasicos';
import Novedades from '../components/Novedades';

const Home = () => {
  return (
    <div>
      <div>
        <Clasicos />
      </div>
      <div>
        <Novedades />
      </div>

    </div>
  )
}
export default Home;
