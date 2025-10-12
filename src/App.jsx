import './App.css'
import { SuperMarioModel } from './components/presentation/SuperMarioModel'

function App () {
  return (
    <>
      <section className='flex justify-center w-full h-screen'>
        <section className='m-auto flex gap-15 flex-col items-center justify-center w-[90%] h-[90%]'>
          <section className='flex gap-5 w-full flex-col justify-center items-center'>
            <h1 class='marioFont text-3xl sm:text-6xl text-center xl:text-8xl'>
              <span className='text-[#029ED9] text-shadow-md text-shadow-black'>M</span>
              <span className='text-[#FFD200] text-shadow-md text-shadow-black'>a</span>
              <span className='text-[#E62B11] text-shadow-md text-shadow-black'>u</span>
              <span className='text-[#45AE36] text-shadow-md text-shadow-black'>r</span>
              <span className='text-[#FFD200] text-shadow-md text-shadow-black'>i</span>
              <span className='text-[#029ED9] text-shadow-md text-shadow-black'>c</span>
              <span className='text-[#E62B11] text-shadow-md text-shadow-black'>i</span>
              <span className='text-[#45AE36] text-shadow-md text-shadow-black'>o</span>
              <span> </span>
              <span className='text-[#FFD200] text-shadow-md text-shadow-black'>B</span>
              <span className='text-[#029ED9] text-shadow-md text-shadow-black'>e</span>
              <span className='text-[#E62B11] text-shadow-md text-shadow-black'>r</span>
              <span className='text-[#45AE36] text-shadow-md text-shadow-black'>m</span>
              <span className='text-[#FFD200] text-shadow-md text-shadow-black'>u</span>
              <span className='text-[#029ED9] text-shadow-md text-shadow-black'>d</span>
              <span className='text-[#E62B11] text-shadow-md text-shadow-black'>e</span>
              <span className='text-[#45AE36] text-shadow-md text-shadow-black'>z</span>
            </h1>
            <h1 className='marioFont text-2xl  sm:text-3xl  text-center xl:text-6xl'>
              <span className='text-[#FFD200] text-shadow-md text-shadow-black'>F</span>
              <span className='text-[#029ED9] text-shadow-md text-shadow-black'>r</span>
              <span className='text-[#E62B11] text-shadow-md text-shadow-black'>o</span>
              <span className='text-[#45AE36] text-shadow-md text-shadow-black'>n</span>
              <span className='text-[#FFD200] text-shadow-md text-shadow-black'>t</span>
              <span className='text-[#029ED9] text-shadow-md text-shadow-black'>e</span>
              <span className='text-[#E62B11] text-shadow-md text-shadow-black'>n</span>
              <span className='text-[#45AE36] text-shadow-md text-shadow-black'>d</span>
              <span> </span>
              <span className='text-[#FFD200] text-shadow-md text-shadow-black'>d</span>
              <span className='text-[#029ED9] text-shadow-md text-shadow-black'>e</span>
              <span className='text-[#E62B11] text-shadow-md text-shadow-black'>v</span>
              <span className='text-[#45AE36] text-shadow-md text-shadow-black'>e</span>
              <span className='text-[#FFD200] text-shadow-md text-shadow-black'>l</span>
              <span className='text-[#029ED9] text-shadow-md text-shadow-black'>o</span>
              <span className='text-[#E62B11] text-shadow-md text-shadow-black'>p</span>
              <span className='text-[#45AE36] text-shadow-md text-shadow-black'>e</span>
              <span className='text-[#FFD200] text-shadow-md text-shadow-black'>r</span>
            </h1>
          </section>
          <section className='flex gap-5 flex-col w-full items-center'>
            <p className='press-start-2p-regular text-xs text-center md:text-xl text-shadow-xs text-shadow-black'>“Building digital worlds, one pixel at a time.”</p>
            <SuperMarioModel></SuperMarioModel>
            <p className='press-start-2p-regular text-xs md:text-xl text-white onOff text-shadow-md text-shadow-black'>PRESS START</p>
          </section>

            <section className='w-full h-[100px] world bg-black rounded'>
              
            </section>
         
        </section>
      </section>
    </>
  )
}

export default App
