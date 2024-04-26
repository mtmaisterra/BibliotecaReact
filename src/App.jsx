/* import Footer from './components/footer' */
import NavBar from './components/navBar'

function App() {
  return (
    <>
      <div className="bg-grisOscuro flex w-full flex items-center h-10">
        <div className="bg-morado w-4/5 h-20 rounded-xl">
          <h1 className= "w-full justify-center text-2xl px-5 text-white">
            No le entiendo nada
          </h1>
        </div>
      </div>
      <div className='flex flex-col'>
        <NavBar />
      </div>
    </>
  )
}

export default App
