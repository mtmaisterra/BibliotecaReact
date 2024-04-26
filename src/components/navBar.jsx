import React from 'react';
import { useHistory } from 'react-router-dom';

function NavBar() {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/Ingresar');
    }
    return (
        <div className='h-10 justify-around  bg-morado'>

            <div className='w-full justify-center items-center mx-5'>
                {/* ="./registrar" className='w-1/2 text-current no-underline h-4 p-10 mx-4 text-white bg-morado text-center border-2 rounded-xl text-xl'>
                        registrar */}
            </div>
            <button onClick={handleButtonClick} className='mx-10 p-5 '>
                <p className='w-1/2 h-4 p-2 mx-4 text-white text-center text-xl bg-morado'>
                    Ingresar
                </p>
            </button>

        </div>
    )
}
export default NavBar;