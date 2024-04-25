
function NavBar() {
    return (
        <div className='flex w-full h-10 justify-around  bg-grisClaro'>
            <img src='./assets/MaisterraDigitalDesings.jpeg' className="w-5 h-5" />
            <div className='w-full justify-center items-center mx-5'>
                <button href="./registrar.jsx" className="bg-morado w-20 h-10">                    
                       <a className='w-1/2 h-4 p-10 mx-4 text-white bg-morado text-center text-xl'>Registrar</a>                     
                </button>
                <button href='/Ingresar' className='mx-10 p-5 '>
                    <p className='w-1/2 h-4 p-2 mx-4 text-white text-center text-xl bg-morado'>
                        Ingresar
                    </p>
                </button>
            </div>
        </div>
    )
}
export default NavBar;