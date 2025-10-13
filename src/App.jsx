import './App.css'
import { AboutMe } from './layouts/AboutMe'
import { Presentation } from './layouts/Presentations'

function App () {
  return (
    <>
      <section className='flex justify-center w-full h-screen'>
        <Presentation />
      </section>
      <section className='flex justify-center w-full h-screen'>
        <AboutMe />
      </section>

    </>
  )
}

export default App
