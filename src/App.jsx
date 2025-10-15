import './App.css'
import { AboutMe } from './layouts/AboutMe'
import { ContactMe } from './layouts/ContactMe'
import { Presentation } from './layouts/Presentations'
import { Projects } from './layouts/Projects'
import { TechStack } from './layouts/TechStack'

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

      <section className='flex justify-center w-full'>
        <TechStack />
      </section>

       <section className='flex justify-center w-full mb-5 mt-10'>
        <ContactMe></ContactMe>
      </section>

    </>
  )
}

export default App
