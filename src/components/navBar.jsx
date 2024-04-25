
function NavBar() {
    return (
        <div className='flex w-full h-10 justify-around  bg-naranjaClaro'>
            <div className='w-1/8 text-left p-5'>
                <img src='./assets/MaisterraDigitalDesings.jpeg' />
            </div>
            <div className='w-full justify-center items-center mx-5'>
                <button href='/Registrar' className='mx-10 p-5 bg-morado'>
                    <p className='w-1/2 h-4 p-2 mx-4 bg-white text-center text-xl'>
                        Registrar
                    </p>
                </button>
                <button href='/Ingresar' className='mx-10 p-5 bg-morado'>
                    <p className='w-1/2 h-4 p-2 mx-4 bg-white text-center text-xl'>
                        Ingresar
                    </p>
                </button>
            </div>
        </div>
    )
}
export default NavBar;