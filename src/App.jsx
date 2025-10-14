import './App.css'
import { AboutMe } from './layouts/AboutMe'
import { Presentation } from './layouts/Presentations'
import { Projects } from './layouts/Projects'

function App () {
  return (
    <>
      <section className='flex justify-center w-full h-screen'>
        <Presentation />
      </section>
      <section className='flex justify-center w-full h-screen'>
        <AboutMe />
      </section>
      <section className='flex justify-center w-full h-screen'>
        <Projects />
      </section>

    </>
  )
}

export default App
