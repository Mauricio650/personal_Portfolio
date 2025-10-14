import { CardProject } from '../components/projects/CardProject'

export function Projects () {
  return (
    <section className='m-auto border-b-[3px] border-r-4 border-r-black border-b-black  border-l-4 border-t-2 border-l-[#F6BFA8]  border-t-[#F6BFA8] texture relative overflow-hidden py-2 gap-5  rounded-sm flex  flex-col items-center w-[90%] h-[90%]'>

      <h2 class='marioFont text-4xl sm:text-6xl text-center lg:text-4xl 2xl:text-8xl'>
        <span className='text-[#FFD200] text-shadow-md text-shadow-black'>P</span>
        <span className='text-[#FFD200] text-shadow-md text-shadow-black'>r</span>
        <span className='text-[#FFD200] text-shadow-md text-shadow-black'>o</span>
        <span className='text-[#FFD200] text-shadow-md text-shadow-black'>y</span>
        <span className='text-[#FFD200] text-shadow-md text-shadow-black'>e</span>
        <span className='text-[#FFD200] text-shadow-md text-shadow-black'>c</span>
        <span className='text-[#FFD200] text-shadow-md text-shadow-black'>t</span>
        <span className='text-[#FFD200] text-shadow-md text-shadow-black'>o</span>
        <span className='text-[#FFD200] text-shadow-md text-shadow-black'>s</span>
      </h2>

      <CardProject
        id={1} title='Invoice navigator'
        pathImg='/projects/392_1x_shots_so.png'
        urlG='https://github.com/Mauricio650/InvoNavigator'
        urlW='https://invo-navigator.vercel.app/login'
        description='it is a project created to improve invoices management in companies, providing full control over invoices status and tracking across departments.'
      />

    </section>
  )
}
