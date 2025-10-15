import { CardProject } from '../components/projects/CardProject'
import projects from '../mock/projects.json'
export function Projects () {
  console.log(projects)
  return (
    <section className='m-auto shadow-2xl/20 p-1 border-b-[3px] border-r-4 border-r-black border-b-black  border-l-4 border-t-2 border-l-[#F6BFA8]  border-t-[#F6BFA8] texture relative overflow-hidden py-2 gap-5  rounded-sm flex  flex-col items-center w-[90%] h-[90%]'>

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

      <div className='w-full h-full
        grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 p-4 justify-items-center justify-center items-center
         overflow-auto'
      >
        {
                projects.map(p => {
                  return <CardProject key={p.id} {...p} />
                })
            }
      </div>
    </section>
  )
}
