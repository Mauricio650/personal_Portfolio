import { useState } from 'react'

export function CardProject ({ id, title, pathImg, urlG, urlW, type, description }) {
  const [showDescription, setShowDescription] = useState(false)
  return (
    <article className='bg-yellow-400 flex flex-col gap-5 items-center  shadow-2xl/40 border-b-[4.7px] border-r-[7px] border-b-black/50 border-r-black/50 border-[5px] border-white/80 p-2 rounded relative w-[300px] h-[380px]'>

      {showDescription
        ? <>
          <div>
            <p className='marioFont text-3xl text-[#E62B11]'>{id}</p>
          </div>

          <p className='vt323-regular text-shadow-xs text-shadow-black text-2xl text-center'>
            {description}
          </p>

          <img className='absolute opacity-[0.2] hover:opacity-[1] left-18 top-20 m-auto w-[180px]' src='/projects/question.png' alt='carnivorous plant image of mario bros' />
          <div className='flex items-end justify-center h-full gap-2'>
            <button onClick={() => setShowDescription(p => !p)} className='hover:text-yellow-400 hover:bg-red-900 cursor-pointer border-[6px] shadow-2xl/80  border-red-950/70 border-b-[4px] border-t-[4px] border-b-black/60 border-t-black/60 rounded z-2 vt323-regular text-shadow-2xs text-shadow-black text-2xl text-white bg-red-700 px-2 py-1'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-arrow-left-icon lucide-arrow-left'><path d='m12 19-7-7 7-7' /><path d='M19 12H5' /></svg>
            </button>
            {
                type.map((t, i) => {
                  return (
                    <div key={i} className=' border-[6px] shadow-2xl/80  border-red-950/70 border-b-[4px] border-t-[4px] border-b-black/60 border-t-black/60 rounded z-2 vt323-regular text-shadow-2xs text-shadow-black text-2xl text-red-800 bg-white px-2 py-1'>
                      {t}
                    </div>
                  )
                })
            }
          </div>
        </>
        : <>
          <div>
            <p className='marioFont text-3xl text-[#E62B11]'>{id}</p>
          </div>
          <p className='press-start-2p-regular text-shadow-2xs text-shadow-black text-red-700 text-center'>
            {title}
          </p>
          <div className='w-full p-2 flex bg-[#BD3908] justify-center rounded items-center border-b-[3px] border-r-4 border-r-black border-b-black  border-l-4 border-t-2 border-l-[#F6BFA8]  border-t-[#F6BFA8]'>
            <img className='w-[250px] filter drop-shadow-2xl drop-shadow-black/20' src={`${pathImg}`} alt={`image of ${title} project`} />
          </div>
          <img className='absolute hover:opacity-[1] opacity-[0.5] bottom-[-12px] right-14  m-auto w-[180px]' src='/projects/plant.webp' alt='carnivorous plant image of mario bros' />

          <div className='flex z-2 items-end justify-center h-full gap-2'>
            <button onClick={() => setShowDescription(p => !p)} className='cursor-pointer hover:text-yellow-400 hover:bg-red-900 border-[6px] shadow-2xl/80  border-red-950/70 border-b-[4px] border-t-[4px] border-b-black/60 border-t-black/60 rounded z-2 vt323-regular text-shadow-2xs text-shadow-black text-2xl text-white bg-red-700 px-5'>
              Ver mas
            </button>
            <a href={urlG} target='_blank' rel='noreferrer'>
              <button className='cursor-pointer hover:text-yellow-400 hover:bg-red-900 border-[6px] shadow-2xl/80  border-red-950/70 border-b-[4px] border-t-[4px] border-b-black/60 border-t-black/60 rounded z-2 vt323-regular text-shadow-2xs text-shadow-black text-2xl text-white bg-red-700 px-2 py-1'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-github-icon lucide-github'><path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' /><path d='M9 18c-4.51 2-5-2-7-2' /></svg>
              </button>
            </a>

            <a href={urlW} target='_blank' rel='noreferrer'>
              <button className='cursor-pointer hover:text-yellow-400 hover:bg-red-900 border-[6px] shadow-2xl/80  border-red-950/70 border-b-[4px] border-t-[4px] border-b-black/60 border-t-black/60 rounded z-2 vt323-regular text-shadow-2xs text-shadow-black text-2xl text-white bg-red-700 px-2 py-1'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-globe-icon lucide-globe'><circle cx='12' cy='12' r='10' /><path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' /><path d='M2 12h20' /></svg>
              </button>
            </a>

          </div>
        </>}

    </article>
  )
}
